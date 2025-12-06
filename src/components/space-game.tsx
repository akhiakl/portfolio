"use client"

import { useEffect, useRef } from "react"

interface Entity {
    x: number
    y: number
    width: number
    height: number
    speed: number
}

interface Invader extends Entity {
    alive: boolean
}

interface Bullet extends Entity {
    active: boolean
}

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    color: string
}

interface GameState {
    isActive: boolean
    isComplete: boolean
    isGameOver: boolean
}

export function SpaceGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        const resize = () => {
            const container = canvas.parentElement
            if (container) {
                canvas.width = container.clientWidth
                canvas.height = container.clientHeight
            }
        }
        resize()
        window.addEventListener("resize", resize)

        const accentColor = "#ef4444"
        const mutedColor = "#737373"
        let animationId: number
        let lastFrameTime = 0
        const targetFPS = 60
        const frameInterval = 1000 / targetFPS

        let pointerX = canvas.width / 2
        const gameState: GameState = {
            isActive: false,
            isComplete: false,
            isGameOver: false,
        }

        const drawIdleState = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw static invaders
            invaders.forEach(drawInvader)

            // Draw player at center
            player.x = canvas.width / 2
            player.y = canvas.height - 30
            drawPlayer()

            // Draw hint text
            ctx.fillStyle = mutedColor
            ctx.font = "11px monospace"
            ctx.textAlign = "center"
            ctx.fillText(isTouchDevice ? "drag to play" : "hover to play", canvas.width / 2, canvas.height - 8)
        }

        const drawCompletionState = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw completion message
            ctx.fillStyle = accentColor
            ctx.font = "16px monospace"
            ctx.textAlign = "center"
            ctx.fillText("Kaboom!", canvas.width / 2, canvas.height / 2 - 40)

            // Draw play again button
            const buttonY = canvas.height / 2 + 10
            const buttonWidth = 100
            const buttonHeight = 30
            const buttonX = canvas.width / 2 - buttonWidth / 2

            ctx.strokeStyle = accentColor
            ctx.lineWidth = 1
            ctx.strokeRect(buttonX, buttonY, buttonWidth, buttonHeight)

            ctx.fillStyle = accentColor
            ctx.font = "11px monospace"
            ctx.fillText("Play Again", canvas.width / 2, buttonY + 20)

            return { x: buttonX, y: buttonY, width: buttonWidth, height: buttonHeight }
        }

        const drawGameOverState = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw game over message
            ctx.fillStyle = accentColor
            ctx.font = "16px monospace"
            ctx.textAlign = "center"
            ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2 - 40)

            // Draw play again button
            const buttonY = canvas.height / 2 + 10
            const buttonWidth = 100
            const buttonHeight = 30
            const buttonX = canvas.width / 2 - buttonWidth / 2

            ctx.strokeStyle = accentColor
            ctx.lineWidth = 1
            ctx.strokeRect(buttonX, buttonY, buttonWidth, buttonHeight)

            ctx.fillStyle = accentColor
            ctx.font = "11px monospace"
            ctx.fillText("Play Again", canvas.width / 2, buttonY + 20)

            return { x: buttonX, y: buttonY, width: buttonWidth, height: buttonHeight }
        }

        const handlePointerMove = (e: PointerEvent) => {
            const rect = canvas.getBoundingClientRect()
            pointerX = e.clientX - rect.left
        }

        const handlePointerClick = (e: PointerEvent) => {
            if (gameState.isComplete || gameState.isGameOver) {
                const rect = canvas.getBoundingClientRect()
                const clickX = e.clientX - rect.left
                const clickY = e.clientY - rect.top

                const buttonY = canvas.height / 2 + 10
                const buttonWidth = 100
                const buttonHeight = 30
                const buttonX = canvas.width / 2 - buttonWidth / 2

                if (clickX >= buttonX && clickX <= buttonX + buttonWidth &&
                    clickY >= buttonY && clickY <= buttonY + buttonHeight) {
                    resetGame()
                }
            }
        }

        const startGame = () => {
            if (!gameState.isComplete && !gameState.isGameOver) {
                gameState.isActive = true
            }
        }

        const stopGame = () => {
            gameState.isActive = false
            bullets.length = 0
            particles.length = 0
        }

        const resetGame = () => {
            gameState.isActive = false
            gameState.isComplete = false
            gameState.isGameOver = false
            bullets.length = 0
            particles.length = 0
            createInvaders()
        }

        canvas.addEventListener("pointerenter", startGame)
        canvas.addEventListener("pointerleave", stopGame)
        canvas.addEventListener("pointermove", handlePointerMove)
        canvas.addEventListener("pointerdown", startGame)
        canvas.addEventListener("pointerup", stopGame)
        canvas.addEventListener("click", handlePointerClick)

        const player: Entity = {
            x: canvas.width / 2,
            y: canvas.height - 30,
            width: 20,
            height: 14,
            speed: 8,
        }

        const invaders: Invader[] = []
        const invaderRows = 3
        const invaderCols = 5
        const invaderSpacing = 36
        let invaderDirection = 1
        const invaderSpeed = 0.4

        const createInvaders = () => {
            invaders.length = 0
            const startX = (canvas.width - invaderCols * invaderSpacing) / 2
            for (let row = 0; row < invaderRows; row++) {
                for (let col = 0; col < invaderCols; col++) {
                    invaders.push({
                        x: startX + col * invaderSpacing,
                        y: 40 + row * 28,
                        width: 16,
                        height: 12,
                        speed: invaderSpeed,
                        alive: true,
                    })
                }
            }
        }
        createInvaders()

        const bullets: Bullet[] = []
        let lastShot = 0
        const shootInterval = 400

        const particles: Particle[] = []

        const createExplosion = (x: number, y: number) => {
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI * 2 * i) / 6
                particles.push({
                    x,
                    y,
                    vx: Math.cos(angle) * (1 + Math.random() * 1.5),
                    vy: Math.sin(angle) * (1 + Math.random() * 1.5),
                    life: 25,
                    color: Math.random() > 0.5 ? accentColor : mutedColor,
                })
            }
        }

        const drawPlayer = () => {
            ctx.fillStyle = accentColor
            ctx.beginPath()
            ctx.moveTo(player.x, player.y - player.height)
            ctx.lineTo(player.x - player.width / 2, player.y)
            ctx.lineTo(player.x + player.width / 2, player.y)
            ctx.closePath()
            ctx.fill()
        }

        const drawInvader = (inv: Invader) => {
            if (!inv.alive) return
            ctx.fillStyle = mutedColor
            ctx.fillRect(inv.x - inv.width / 2, inv.y - inv.height / 2, inv.width, inv.height)
            ctx.fillRect(inv.x - inv.width / 2 - 3, inv.y - 2, 3, 5)
            ctx.fillRect(inv.x + inv.width / 2, inv.y - 2, 3, 5)
        }

        const drawBullet = (bullet: Bullet) => {
            if (!bullet.active) return
            ctx.fillStyle = accentColor
            ctx.fillRect(bullet.x - 1, bullet.y, 2, 6)
        }

        const drawParticles = () => {
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i]
                if (p.life <= 0) {
                    particles.splice(i, 1)
                    continue
                }
                ctx.globalAlpha = p.life / 25
                ctx.fillStyle = p.color
                ctx.fillRect(p.x, p.y, 2, 2)
                p.x += p.vx
                p.y += p.vy
                p.life--
            }
            ctx.globalAlpha = 1
        }

        const update = (timestamp: number) => {
            // Frame rate limiting for mobile optimization
            if (timestamp - lastFrameTime < frameInterval) {
                animationId = requestAnimationFrame(update)
                return
            }
            lastFrameTime = timestamp

            if (!gameState.isActive) {
                if (gameState.isComplete) {
                    drawCompletionState()
                } else if (gameState.isGameOver) {
                    drawGameOverState()
                } else {
                    drawIdleState()
                }
                animationId = requestAnimationFrame(update)
                return
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const targetX = Math.max(20, Math.min(canvas.width - 20, pointerX))
            player.x += (targetX - player.x) * 0.15
            player.y = canvas.height - 30

            if (gameState.isActive && timestamp - lastShot > shootInterval) {
                bullets.push({
                    x: player.x,
                    y: player.y - player.height,
                    width: 2,
                    height: 6,
                    speed: 6,
                    active: true,
                })
                lastShot = timestamp
            }

            // Update bullets
            for (let i = bullets.length - 1; i >= 0; i--) {
                const bullet = bullets[i]
                if (!bullet.active) continue
                bullet.y -= bullet.speed
                if (bullet.y < 0) bullets.splice(i, 1)
            }

            // Update invaders
            let edgeHit = false
            invaders.forEach((inv) => {
                if (!inv.alive) return
                inv.x += invaderSpeed * invaderDirection
                if (inv.x > canvas.width - 20 || inv.x < 20) edgeHit = true
            })

            if (edgeHit) {
                invaderDirection *= -1
                invaders.forEach((inv) => {
                    inv.y += 8
                })
            }

            // Collisions
            bullets.forEach((bullet) => {
                if (!bullet.active) return
                invaders.forEach((inv) => {
                    if (!inv.alive) return
                    if (
                        bullet.x > inv.x - inv.width / 2 &&
                        bullet.x < inv.x + inv.width / 2 &&
                        bullet.y < inv.y + inv.height / 2 &&
                        bullet.y > inv.y - inv.height / 2
                    ) {
                        inv.alive = false
                        bullet.active = false
                        createExplosion(inv.x, inv.y)
                    }
                })
            })

            // Check for player collision or invaders reaching bottom
            const playerCollision = invaders.some((inv) => {
                if (!inv.alive) return false
                // Check if invader reached player level or below
                if (inv.y + inv.height / 2 >= player.y - player.height / 2) {
                    // Check horizontal collision with player
                    return inv.x + inv.width / 2 > player.x - player.width / 2 &&
                        inv.x - inv.width / 2 < player.x + player.width / 2
                }
                return false
            })

            // Check if any invader reached the bottom
            const invadersReachedBottom = invaders.some((inv) =>
                inv.alive && inv.y + inv.height / 2 >= canvas.height - 20
            )

            if (playerCollision || invadersReachedBottom) {
                gameState.isActive = false
                gameState.isGameOver = true
                createExplosion(player.x, player.y)
            }

            // Check for completion when all destroyed
            if (invaders.every((inv) => !inv.alive)) {
                gameState.isActive = false
                gameState.isComplete = true
            }

            drawPlayer()
            invaders.forEach(drawInvader)
            bullets.forEach(drawBullet)
            drawParticles()

            animationId = requestAnimationFrame(update)
        }

        animationId = requestAnimationFrame(update)

        return () => {
            window.removeEventListener("resize", resize)
            canvas.removeEventListener("pointerenter", startGame)
            canvas.removeEventListener("pointerleave", stopGame)
            canvas.removeEventListener("pointermove", handlePointerMove)
            canvas.removeEventListener("pointerdown", startGame)
            canvas.removeEventListener("pointerup", stopGame)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full cursor-crosshair touch-none"
            style={{ imageRendering: "pixelated" }}
        />
    )
}

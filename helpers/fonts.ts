import { Karla, Unica_One } from '@next/font/google'
const karla = Karla({
    weight: ['400', '500', '700', '800'],
    variable: '--font-inter',

})
const unicaOne = Unica_One({
    variable: '--font-unica-one',
    weight: '400'
})

const Fonts = {
    karla,
    unicaOne
}

export default Fonts;
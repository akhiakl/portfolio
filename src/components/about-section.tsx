import { ScrollAnimationSection } from "./scroll-animation-section"
import { aboutContent, personalInfo } from "@/lib/content"

export function AboutSection() {

  return (
    <ScrollAnimationSection as="section" id="about" className="grid grid-cols-1 gap-px bg-outline-variant md:grid-cols-12">
      <div className="col-span-1 flex flex-col justify-between bg-surface p-8 md:col-span-4">
        <div>
          <h2 className="section-title">&gt; ABOUT</h2>
          <div className="section-rule" />
        </div>
        <div className="space-y-4 font-mono text-[13px]">
          <div className="border-grid-b flex justify-between gap-4 pb-2">
            <span className="text-on-surface-variant">LOCATION:</span>
            <span className="text-right text-primary-container">{personalInfo.contact.location}</span>
          </div>
          <div className="border-grid-b flex justify-between gap-4 pb-2">
            <span className="text-on-surface-variant">EXPERIENCE:</span>
            <span className="text-primary-container">8+ YEARS</span>
          </div>
          <div className="border-grid-b flex justify-between gap-4 pb-2">
            <span className="text-on-surface-variant">FOCUS:</span>
            <span className="text-primary-container">ARCHITECTURE</span>
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-surface-container-low p-8 md:col-span-8">
        <h3 className="sr-only">{aboutContent.title}</h3>
        <div className="space-y-4 font-mono text-[15px] leading-relaxed text-on-surface">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.text}
              {paragraph.highlight && <span className="text-primary-container">{paragraph.highlight}</span>}
              {paragraph.continuation}
            </p>
          ))}
        </div>
      </div>
    </ScrollAnimationSection>
  )
}

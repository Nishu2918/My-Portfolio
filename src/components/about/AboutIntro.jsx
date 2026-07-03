import { FadeIn } from '../motion/FadeIn'

export function AboutIntro({ condensed = false }) {
  return (
    <FadeIn>
      <div className={condensed ? 'max-w-2xl' : 'max-w-3xl'}>
        <p className="text-lg md:text-xl text-ink-muted leading-relaxed">
          I'm an AI engineer and full stack developer building intelligent web
          applications. Currently working at <strong className="text-ink">Sash.Ai</strong> in
          Bengaluru, where I combine AI engineering with modern frontend development.
        </p>
        {!condensed && (
          <>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              My journey started with Python web development at Infosys Foundation,
              grew through building CRM systems with Django at Open Course, and
              evolved into full stack development with React at Sash.Ai - where I
              transitioned from intern to full-time AI engineer.
            </p>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              I'm passionate about the intersection of AI and web development -
              building products that are both intelligent and beautiful. When I'm not
              coding, I'm writing about what I learn and contributing to the
              developer community.
            </p>
          </>
        )}
      </div>
    </FadeIn>
  )
}

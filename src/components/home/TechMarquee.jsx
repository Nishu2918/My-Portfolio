import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiPython, SiDjango, SiNodedotjs, SiPostgresql, SiMongodb,
  SiGit, SiDocker, SiVercel, SiFramer, SiRedis, SiFigma,
  SiVite, SiLinux, SiHtml5, SiCss3,
} from 'react-icons/si'

const techs = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, label: 'Next.js', color: null },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiDjango, label: 'Django', color: '#092E20' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiRedis, label: 'Redis', color: '#DC382D' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiVercel, label: 'Vercel', color: null },
  { icon: SiVite, label: 'Vite', color: '#646CFF' },
  { icon: SiFramer, label: 'Framer', color: '#0055FF' },
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: SiLinux, label: 'Linux', color: '#FCC624' },
  { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, label: 'CSS3', color: '#1572B6' },
]

function MarqueeRow({ direction = 'left', speed = 30 }) {
  const animationDuration = `${speed}s`

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-4 py-2 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{ animationDuration }}
      >
        {[...techs, ...techs].map((tech, i) => (
          <TechChip key={i} tech={tech} />
        ))}
      </div>
      <div
        className={`flex shrink-0 gap-4 py-2 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{ animationDuration }}
        aria-hidden
      >
        {[...techs, ...techs].map((tech, i) => (
          <TechChip key={i} tech={tech} />
        ))}
      </div>
    </div>
  )
}

function TechChip({ tech }) {
  const Icon = tech.icon
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-paper border border-border rounded-xl whitespace-nowrap hover:border-accent/30 hover:shadow-soft transition-all duration-300 group cursor-default select-none">
      <Icon
        size={18}
        style={tech.color ? { color: tech.color } : undefined}
        className={tech.color ? '' : 'text-ink'}
      />
      <span className="text-sm font-medium text-ink-muted group-hover:text-ink transition-colors">
        {tech.label}
      </span>
    </div>
  )
}

export function TechMarquee() {
  return (
    <MarqueeRow direction="left" speed={35} />
  )
}

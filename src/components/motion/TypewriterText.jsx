import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function TypewriterText({
  phrases = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
}) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.slice(0, text.length + 1))
          if (text.length + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          setText(currentPhrase.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[1em] bg-accent ml-0.5 align-middle"
      />
    </span>
  )
}

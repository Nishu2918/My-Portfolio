import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Button } from '../ui/Button'
import { Input, Textarea } from '../ui/Input'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { EMAILJS } from '../../lib/constants'

export function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        formRef.current,
        EMAILJS.publicKey,
      )
      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again or email me directly.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label="Name" name="from_name" placeholder="Your name" required />
        <Input label="Email" name="from_email" type="email" placeholder="you@example.com" required />
      </div>
      <Input label="Subject" name="subject" placeholder="What's this about?" />
      <Textarea
        label="Message"
        name="message"
        placeholder="Tell me about your project or idea..."
        rows={4}
        required
      />
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </>
          ) : status === 'sent' ? (
            <>
              <FiCheck size={16} />
              Sent!
            </>
          ) : status === 'error' ? (
            <>
              <FiAlertCircle size={16} />
              Try again
            </>
          ) : (
            <>
              Send message
              <FiSend size={15} />
            </>
          )}
        </Button>
        {status === 'sent' && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-secondary text-sm font-medium"
          >
            Thanks! I'll get back to you soon.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-danger text-sm font-medium"
          >
            {error}
          </motion.p>
        )}
      </div>
    </form>
  )
}

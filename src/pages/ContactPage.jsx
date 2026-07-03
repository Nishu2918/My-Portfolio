import { FiMail, FiMapPin } from 'react-icons/fi'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/contact/ContactForm'
import { SocialLinks } from '../components/contact/SocialLinks'
import { FadeIn } from '../components/motion/FadeIn'

export function ContactPage() {
  return (
    <div className="container-page py-12 md:py-20">
      <SectionHeading
        label="Contact"
        title="Let's connect"
        description="Have a question, a project idea, or just want to say hi? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Form - takes 3 cols */}
        <div className="lg:col-span-3">
          <FadeIn>
            <div className="bg-paper-raised border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-ink mb-6">
                Send me a message
              </h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>

        {/* Sidebar - takes 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          <FadeIn delay={0.1}>
            <div className="bg-paper-raised border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center shrink-0">
                  <FiMail size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-ink text-sm">Email me at</h4>
                  <a href="mailto:nishanthhs8@gmail.com" className="text-accent text-sm hover:underline">
                    nishanthhs8@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-paper-raised border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary-soft flex items-center justify-center shrink-0">
                  <FiMapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-ink text-sm">Based in</h4>
                  <p className="text-ink-muted text-sm">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

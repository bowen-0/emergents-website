import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ScrollableLayout } from './components/layout/ScrollableLayout'

function PrivacyPolicy() {
  const navigate = useNavigate()

  return (
    <ScrollableLayout>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-start gap-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/systemic')}
          className="flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Systemic
        </motion.button>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-3xl glass rounded-2xl border border-white/10 p-8 md:p-12"
        >
          <div className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Privacy Policy for Systemic
            </h1>
            <p className="text-text-secondary mb-8">
              <strong>Last Updated: March 2026</strong>
            </p>

            <p className="text-text-secondary mb-8">
              Systemic ("we", "our", or "the app") is a Miro application that generates AI-powered system maps. This privacy policy explains what information we collect, what we process, and how we handle your data.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Newsletter</h2>
            <p className="text-text-secondary mb-4">
              You may sign up for product updates through our website. We collect:
            </p>
            <ul className="text-text-secondary space-y-2 mb-6">
              <li>• Your email address</li>
              <li>• Communication preferences</li>
            </ul>
            <p className="text-text-secondary mb-8">
              This information is used only for product updates, is not shared with third parties, and can be removed by contacting us at bowen@emergents.io.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What We Process & Store</h2>

            <p className="text-text-secondary mb-6">
              We only store what's necessary to make the app work. We don't collect data for advertising, profiling, or any purpose beyond delivering the service.
            </p>

            <p className="text-text-secondary mb-4">
              When you use Systemic in Miro, we process the following inputs to generate your maps:
            </p>
            <ul className="text-text-secondary space-y-2 mb-6">
              <li>• Text prompts you enter</li>
              <li>• URLs and documents you provide as source material</li>
              <li>• Your Miro board ID (to place content on the correct board)</li>
            </ul>
            <p className="text-text-secondary mb-4">
              <strong className="text-white">Your prompts, URLs, documents, and generated content are never stored.</strong> They are processed in real-time and discarded. Generated maps are created directly on your Miro board.
            </p>

            <p className="text-text-secondary mb-4">
              We do store minimal account data needed to run the service:
            </p>
            <ul className="text-text-secondary space-y-2 mb-6">
              <li>• <strong className="text-white">Authentication tokens:</strong> Stored securely on our servers to keep you signed in and interact with your Miro board on your behalf</li>
              <li>• <strong className="text-white">Subscription status:</strong> Whether you have a Free or Pro account</li>
              <li>• <strong className="text-white">Usage counts:</strong> Monthly request counts for rate limiting, automatically deleted after a short period</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Payments</h2>
            <p className="text-text-secondary mb-8">
              Pro subscriptions are processed by Stripe. We do not store your payment details — these are handled entirely by Stripe. You can review{' '}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-purple hover:text-accent-pink transition-colors underline"
              >
                Stripe's privacy policy
              </a>
              {' '}for details on how they handle payment information.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Third-Party Services</h2>
            <p className="text-text-secondary mb-4">We use the following categories of services:</p>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• <strong className="text-white">AI services:</strong> Process your prompts and source material to generate system maps</li>
              <li>• <strong className="text-white">Payment processing:</strong> Handles Pro subscription billing</li>
              <li>• <strong className="text-white">Hosting infrastructure:</strong> Hosts the application and stores account data</li>
              <li>• <strong className="text-white">Error monitoring:</strong> Helps us identify and fix issues</li>
              <li>• <strong className="text-white">Miro SDK:</strong> Handles board authentication and creates visual elements on your boards</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
            <p className="text-text-secondary mb-4">You have the right to:</p>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• <strong className="text-white">Access or delete your data:</strong> Contact us at bowen@emergents.io to request access to or deletion of your account data</li>
              <li>• <strong className="text-white">Revoke access:</strong> Remove the app's access through your Miro settings at any time</li>
              <li>• <strong className="text-white">Unsubscribe:</strong> Manage your Pro subscription through the app, or contact us for assistance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Children's Privacy</h2>
            <p className="text-text-secondary mb-6">
              Systemic is not intended for children under 13. We don't knowingly collect data from children.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-text-secondary mb-6">
              We may update this privacy policy. Changes will be posted at this URL with an updated date.
            </p>

            <div className="glass-heavy rounded-xl border border-white/20 p-6 mt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-text-secondary mb-4">
                For privacy-related questions or to exercise your data rights, contact:
              </p>
              <p className="text-text-secondary">
                <strong className="text-white">Email:</strong> bowen@emergents.io
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollableLayout>
  )
}

export default PrivacyPolicy
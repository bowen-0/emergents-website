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
              <strong>Last Updated: September 2025</strong>
            </p>

            <p className="text-text-secondary mb-8">
              Systemic ("we", "our", or "the app") is a Miro application that generates AI-powered system maps. This privacy policy explains what information we collect and how we use it.
            </p>

            <p className="text-text-secondary mb-8">
              We collect information in two contexts:
            </p>
            <ul className="text-text-secondary space-y-2 mb-8">
              <li>• When you join our waitlist (before using the app)</li>
              <li>• When you use the Systemic app in Miro</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Waitlist Information Collection</h2>

            <p className="text-text-secondary mb-4">
              Before you use the Systemic app, you may sign up for our waitlist through our website. We collect:
            </p>
            <ul className="text-text-secondary space-y-2 mb-6">
              <li>• Your email address (for launch notifications)</li>
              <li>• Communication preferences (updates consent)</li>
              <li>• Timestamp of signup</li>
            </ul>

            <p className="text-text-secondary mb-6">This waitlist information is:</p>
            <ul className="text-text-secondary space-y-2 mb-8">
              <li>• Stored securely in Google Sheets</li>
              <li>• Used only for launch notifications and product updates</li>
              <li>• Not shared with third parties</li>
              <li>• Can be removed by contacting us at bowen@emergents.io</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">App Usage Information Collection</h2>

            <p className="text-text-secondary mb-6">
              When you use the Systemic app within Miro, we process (but do not store) the following information:
            </p>
            <ul className="text-text-secondary space-y-2 mb-6">
              <li>• Text prompts you enter to generate system maps</li>
              <li>• The Miro board ID where you're working</li>
              <li>• Your Miro user ID (from Miro context, not stored by us)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Authentication</h2>
            <p className="text-text-secondary mb-6">
              Systemic uses Miro's built-in authentication through the Miro SDK. We don't store or manage your Miro credentials or access tokens - authentication is handled entirely by Miro's platform.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• <strong className="text-white">Map Generation:</strong> Your prompts are sent to the AI model to generate system maps</li>
              <li>• <strong className="text-white">App Functionality:</strong> Board IDs are used to place generated content on the correct board</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Storage</h2>
            <p className="text-text-secondary mb-4">
              Systemic is designed to be stateless and privacy-focused:
            </p>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• <strong className="text-white">No Persistent Storage:</strong> We don't store your prompts, user data, or generated content</li>
              <li>• <strong className="text-white">Prompts:</strong> Processed immediately for map generation</li>
              <li>• <strong className="text-white">Generated Content:</strong> Created directly on your Miro board by the Miro SDK</li>
              <li>• <strong className="text-white">User Data:</strong> No user information is retained after processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Third-Party Services</h2>
            <p className="text-text-secondary mb-4">We use the following services to provide functionality:</p>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• <strong className="text-white">AI Model:</strong> Processes your prompts to generate system maps</li>
              <li>• <strong className="text-white">Cloudflare:</strong> Hosts our application infrastructure</li>
              <li>• <strong className="text-white">Miro SDK:</strong> Handles authentication and creates visual elements on your boards</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Security</h2>
            <p className="text-text-secondary mb-4">We implement industry-standard security measures:</p>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• All data transmission occurs over encrypted HTTPS connections</li>
              <li>• We don't store your prompts or generated content after processing</li>
              <li>• No persistent user data means no stored data to secure</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
            <p className="text-text-secondary mb-4">You have the right to:</p>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• <strong className="text-white">Access:</strong> Since we don't store personal data, there's no stored data to access</li>
              <li>• <strong className="text-white">No Data to Delete:</strong> We don't retain your information after processing</li>
              <li>• <strong className="text-white">Revoke Access:</strong> Remove the app's access through your Miro settings</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Retention</h2>
            <ul className="text-text-secondary space-y-3 mb-6">
              <li>• <strong className="text-white">App Usage Data:</strong> No data is retained - all processing is transient</li>
              <li>• <strong className="text-white">Prompts:</strong> Processed immediately and not stored</li>
              <li>• <strong className="text-white">Authentication:</strong> Handled by Miro - we don't store credentials</li>
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
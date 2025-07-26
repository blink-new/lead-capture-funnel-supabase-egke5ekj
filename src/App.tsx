import { useState } from 'react'
import { Menu, X, Check, ChevronDown, Star, ArrowRight, Database, CreditCard, Zap, Shield, Code, Smartphone } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-indigo-600">ShipFast</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Features</a>
                <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Testimonials</a>
                <a href="#pricing" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="#faq" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">FAQ</a>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Get ShipFast
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">FAQ</a>
              <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors mt-4">
                Get ShipFast
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-1" />
                Product Hunt
              </div>
              <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-1" />
                Hacker News
              </div>
              <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-1" />
                Indie Hackers
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ship your startup in{' '}
            <span className="text-indigo-600">days, not weeks</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center">
              Get ShipFast
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <div className="text-sm text-gray-500">
              ✨ 1,200+ makers already shipped
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Trusted by indie makers worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">NextJS</div>
              <div className="text-2xl font-bold">Stripe</div>
              <div className="text-2xl font-bold">MongoDB</div>
              <div className="text-2xl font-bold">Tailwind</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to ship fast
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop wasting time on boilerplate code. ShipFast gives you everything you need to build and launch your SaaS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">NextJS 14</h3>
              <p className="text-gray-600">
                Built with the latest NextJS features including App Router, Server Components, and TypeScript.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Database</h3>
              <p className="text-gray-600">
                MongoDB integration with Mongoose ODM for easy data modeling and management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stripe Payments</h3>
              <p className="text-gray-600">
                Accept payments with Stripe. One-time payments, subscriptions, and webhooks included.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentication</h3>
              <p className="text-gray-600">
                Secure authentication with NextAuth.js. Google, email, and magic links supported.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email & SEO</h3>
              <p className="text-gray-600">
                Send transactional emails with Mailgun and get found on Google with built-in SEO.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Ready</h3>
              <p className="text-gray-600">
                Responsive design that works perfectly on all devices. Mobile-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Makers love ShipFast
            </h2>
            <p className="text-xl text-gray-600">
              Don't take our word for it. Here's what real makers are saying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">@marc_louvion</div>
                  <div className="text-sm text-gray-500">Indie Maker</div>
                </div>
              </div>
              <p className="text-gray-700">
                "ShipFast helped me launch my SaaS in 2 weeks instead of 2 months. The boilerplate is clean and well-documented."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">@sarah_dev</div>
                  <div className="text-sm text-gray-500">Full-stack Developer</div>
                </div>
              </div>
              <p className="text-gray-700">
                "The Stripe integration alone saved me weeks of work. Everything just works out of the box."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">@alex_startup</div>
                  <div className="text-sm text-gray-500">Startup Founder</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Best investment I made for my startup. Shipped 3 products using ShipFast and made $15k+ so far."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">@mike_builds</div>
                  <div className="text-sm text-gray-500">Solo Developer</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Clean code, great documentation, and amazing support. ShipFast is a game-changer for indie hackers."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">@lisa_codes</div>
                  <div className="text-sm text-gray-500">Product Manager</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Launched my side project in record time. The authentication and payment flows are bulletproof."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">@tom_maker</div>
                  <div className="text-sm text-gray-500">Entrepreneur</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Worth every penny. Saved me months of development time and helped me focus on what matters - my users."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              One-time payment. Lifetime access. No subscriptions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">ShipFast</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-gray-900">$199</span>
                <span className="text-gray-500 ml-2">one-time</span>
              </div>
              <p className="text-gray-600">Everything you need to ship your startup fast</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">NextJS 14 boilerplate</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Database integration (MongoDB)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Stripe payments & subscriptions</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Authentication (Google, email, magic links)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Email integration (Mailgun)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">SEO optimization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Responsive design</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Lifetime updates</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Discord community access</span>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
              Get ShipFast Now
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ShipFast
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What exactly do I get?",
                answer: "You get the complete ShipFast boilerplate with NextJS 14, database integration, Stripe payments, authentication, email setup, and more. Plus lifetime updates and Discord community access."
              },
              {
                question: "Do I need to know how to code?",
                answer: "Yes, ShipFast is a boilerplate for developers. You should be comfortable with React, NextJS, and JavaScript/TypeScript to make the most of it."
              },
              {
                question: "Can I use this for client projects?",
                answer: "Absolutely! You can use ShipFast to build unlimited projects for yourself or your clients. There are no restrictions on commercial use."
              },
              {
                question: "What if I'm not satisfied?",
                answer: "We offer a 30-day money-back guarantee. If you're not happy with ShipFast, just email us and we'll refund your purchase."
              },
              {
                question: "Do you provide support?",
                answer: "Yes! You get access to our Discord community where you can ask questions and get help from other makers and the ShipFast team."
              },
              {
                question: "How often do you update the boilerplate?",
                answer: "We regularly update ShipFast with new features, bug fixes, and improvements. All updates are free for lifetime."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white">ShipFast</span>
              </div>
              <p className="text-gray-400 mb-4">
                The NextJS boilerplate that helps you ship your startup in days, not weeks.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Discord</a>
                <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Updates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Email</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ShipFast. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
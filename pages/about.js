import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Data Gravity</title>
        <meta name="description" content="We are not storing bits. We are stewarding meaning." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* 导航栏 */}
        <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Data Gravity
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/projects" className="text-gray-600 hover:text-blue-600">
              Projects
            </Link>
            <Link href="/developers" className="text-gray-600 hover:text-blue-600">
              Developers
            </Link>
            <Link href="/about" className="text-blue-600 font-medium">
              About
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:hello@datagravity.io" className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://github.com/datagravity" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </nav>

        {/* 关于页面标题 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-600">
              We are not storing bits. We are stewarding meaning.
            </p>
          </div>
        </section>

        {/* 我们的使命 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Data should outlive us. We build infrastructure so what matters—memories, records, knowledge—is remembered across time, platforms, and generations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
              <blockquote className="text-2xl italic text-gray-800 text-center">
                "We are not storing bits. We are stewarding meaning."
              </blockquote>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Digital Black Hole</h3>
                <p className="text-gray-600 mb-4">
                  Every day, an enormous amount of digital information disappears into the void:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Platform shutdowns erase years of user content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>File formats become obsolete within decades</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Links rot, making digital references useless</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  Unlike the Library of Alexandria, which was destroyed once, our digital heritage faces constant attrition. 
                  We believe this loss is not inevitable.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A Contrast</h3>
                <p className="text-gray-600 mb-4">
                  The Library of Alexandria represented humanity's first great attempt at universal knowledge preservation. 
                  Though it was destroyed, its legacy endured through copies and references.
                </p>
                <p className="text-gray-600 mb-4">
                  Today's cloud services, by contrast, create single points of failure. When a platform shuts down, 
                  its data often vanishes entirely, taking with it personal memories, research, and cultural artifacts.
                </p>
                <p className="text-gray-600">
                  We're building the digital equivalent of a distributed library—resilient, permanent, and accessible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 我们的原则 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Principles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Permanence</h3>
                <p className="text-gray-600">
                  Once data is stored, it remains accessible for centuries, not years.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Openness</h3>
                <p className="text-gray-600">
                  Open formats and protocols ensure data remains accessible regardless of technology changes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stewardship</h3>
                <p className="text-gray-600">
                  We are custodians, not owners. Our responsibility extends beyond technical storage to cultural preservation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-Profit Spirit</h3>
                <p className="text-gray-600">
                  While we operate as a commercial entity, our primary mission is preservation, not profit maximization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 团队 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Team</h2>
              <p className="text-xl text-gray-600">
                Passionate stewards of digital permanence
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 md:mb-0 md:mr-8"></div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Roki Li</h3>
                  <p className="text-blue-600 font-medium mb-4">Founder</p>
                  <p className="text-gray-600 italic">
                    "I lost my grandmother's photos when Flickr changed its policy. 
                    No one should experience that loss. That's why we exist."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 联系 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-xl text-gray-600 mb-8">
              Interested in partnership or institutional collaboration?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:hello@datagravity.io" className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-medium">
                Email Us
              </a>
              <a href="https://calendly.com/datagravity" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 font-medium">
                Schedule a Call
              </a>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="py-12 px-6 bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold text-white mb-2">Data Gravity</div>
                <p className="text-gray-400">
                  Data should outlive us.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="mailto:hello@datagravity.io" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="https://github.com/datagravity" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/datagravity" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p>&copy; 2025 Data Gravity LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
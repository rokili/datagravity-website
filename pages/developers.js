import Head from 'next/head';
import Link from 'next/link';

export default function Developers() {
  return (
    <>
      <Head>
        <title>Developers - Data Gravity</title>
        <meta name="description" content="Build applications that last with Data Gravity's permanent data storage infrastructure" />
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
            <Link href="/developers" className="text-blue-600 font-medium">
              Developers
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
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

        {/* 开发者页面标题 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Developer Hub</h1>
            <p className="text-xl text-gray-600">
              Build applications that last with Data Gravity's permanent data storage infrastructure.
            </p>
          </div>
        </section>

        {/* 为什么选择我们 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Build with Us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your App's Data Won't Die</h3>
                <p className="text-gray-600">
                  When you integrate with Data Gravity, your application's data gets permanent storage guarantees. 
                  Even if your startup pivots or shuts down, the data remains accessible.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Users Trust You More</h3>
                <p className="text-gray-600">
                  When you offer true data permanence, users trust your application more. 
                  They know their valuable data won't disappear when platforms change or disappear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 快速开始 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Integrate Data Gravity into your application in just a few steps
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Sign up for API key</h3>
                    <p className="mt-2 text-gray-600">
                      Create an account on our developer portal and generate your API keys.
                    </p>
                    <div className="mt-3">
                      <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                        Go to Developer Portal →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Install SDK</h3>
                    <p className="mt-2 text-gray-600">
                      Install our client library in your project:
                    </p>
                    <div className="mt-3 bg-gray-800 text-gray-100 p-4 rounded-md font-mono text-sm">
                      npm install @datagravity/client
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Call archive(data)</h3>
                    <p className="mt-2 text-gray-600">
                      Use our simple API to archive your data permanently:
                    </p>
                    <div className="mt-3 bg-gray-800 text-gray-100 p-4 rounded-md font-mono text-sm">
                      {`import { archive } from '@datagravity/client';

const result = await archive({
  data: myData,
  metadata: { type: 'user_photo' }
});`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 文档 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Comprehensive guides and API references
                </p>
                <a href="https://docs.datagravity.io" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-medium">
                  Full API Docs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 使用案例 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Examples of how developers are building with Data Gravity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Diary App</h3>
                <p className="text-gray-600">
                  Automatically archive entries to TimeArk, ensuring personal memories are preserved for generations.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Platform</h3>
                <p className="text-gray-600">
                  Store research data and findings in AeonVault for long-term institutional knowledge preservation.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain Projects</h3>
                <p className="text-gray-600">
                  Archive off-chain data with permanent storage guarantees, creating tamper-proof records.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grants & Bounties */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Grants & Bounties</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We fund projects that advance digital permanence
            </p>
            <a href="#" className="inline-block px-6 py-3 text-blue-600 bg-white rounded-md hover:bg-gray-100 font-medium">
              View Open Calls
            </a>
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
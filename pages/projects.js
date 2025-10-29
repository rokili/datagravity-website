import Head from 'next/head';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Data Gravity</title>
        <meta name="description" content="Solutions for different data permanence needs" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* 导航栏 */}
        <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Data Gravity
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/projects" className="text-blue-600 font-medium">
              Projects
            </Link>
            <Link href="/developers" className="text-gray-600 hover:text-blue-600">
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

        {/* 项目页面标题 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600">
              Solutions for different data permanence needs
            </p>
          </div>
        </section>

        {/* 项目展示 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* TimeArk 项目卡片 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                    Personal
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">TimeArk</h3>
                  <p className="text-gray-600 mb-4">
                    Preserve personal memories for generations. Never lose your photos again.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-800 font-medium mb-2">Core Capabilities:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 500-year format guarantee</li>
                      <li>• End-to-end encryption</li>
                      <li>• Time capsule functionality</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                      Live
                    </span>
                    <a href="https://timeark.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-800">
                      Visit Project →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* AeonVault 项目卡片 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
                    Institutional
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AeonVault</h3>
                  <p className="text-gray-600 mb-4">
                    Secure archival for organizations. Compliance-ready knowledge preservation.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-800 font-medium mb-2">Core Capabilities:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Regulatory compliance frameworks</li>
                      <li>• Audit trails</li>
                      <li>• Multi-admin controls</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-100 rounded-full">
                      Beta
                    </span>
                    <a href="https://aeonvault.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-800">
                      Visit Project →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* OpenArchive 项目卡片 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
                    Public
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">OpenArchive</h3>
                  <p className="text-gray-600 mb-4">
                    Collaborative preservation for public knowledge and cultural heritage.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-800 font-medium mb-2">Core Capabilities:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Community curation</li>
                      <li>• Public access controls</li>
                      <li>• Metadata enrichment</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                      Coming Soon
                    </span>
                    <div className="text-gray-400 font-medium">
                      Visit Project →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 为什么独立域名 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Independent Domains?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Each project deserves its own identity and user experience
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">TimeArk</h3>
                  <p className="text-gray-600">
                    Needs emotional, personal design that resonates with individuals preserving family memories.
                  </p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">AeonVault</h3>
                  <p className="text-gray-600">
                    Requires institutional trust and compliance-focused interface for organizations.
                  </p>
                </div>
                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Neutrality</h3>
                  <p className="text-gray-600">
                    Keeps the main site focused on infrastructure while projects can evolve independently.
                  </p>
                </div>
              </div>
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
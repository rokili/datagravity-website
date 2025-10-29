import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>页面未找到 - Data Gravity LLC</title>
        <meta name="description" content="抱歉，您访问的页面不存在" />
      </Head>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">页面未找到</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页浏览我们的内容。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <a className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-medium text-center">
                返回首页
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 font-medium text-center">
                联系我们
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
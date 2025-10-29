import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  // 示例博客文章数据
  const posts = [
    {
      id: 1,
      title: "Why JPEG Will Die (And What to Use Instead)",
      excerpt: "Exploring the limitations of current image formats and the need for truly permanent alternatives.",
      date: "2025-10-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Ethics of Digital Inheritance",
      excerpt: "Who should inherit your digital memories when you're gone? A look at digital estate planning.",
      date: "2025-09-22",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "How We Tested Data Durability for 100 Years",
      excerpt: "Our methodology for ensuring data permanence through accelerated aging tests and simulation.",
      date: "2025-08-30",
      readTime: "12 min read"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - Data Gravity</title>
        <meta name="description" content="Thoughts on digital permanence, data preservation, and the future of memory" />
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

        {/* 博客页面标题 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Thoughts on Permanence</h1>
            <p className="text-xl text-gray-600">
              Exploring the philosophy, technology, and ethics of digital preservation
            </p>
          </div>
        </section>

        {/* 博客文章列表 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <time dateTime={post.date}>{post.date}</time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      <a href="#" className="hover:text-blue-600">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {post.excerpt}
                    </p>
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                      Read article →
                    </a>
                  </div>
                </article>
              ))}
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
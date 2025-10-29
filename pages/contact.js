import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // 模拟表单提交
    try {
      // 这里应该替换为实际的API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('提交失败，请稍后再试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>联系我们 - Data Gravity LLC</title>
        <meta name="description" content="联系 Data Gravity LLC 团队，获取更多关于时光匣项目的信息" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* 导航栏 */}
        <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Data Gravity
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              首页
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              关于
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600">
              项目
            </Link>
            <Link href="/contact" className="text-blue-600 font-medium">
              联系
            </Link>
          </div>
          <Link href="/contact" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            联系我们
          </Link>
        </nav>

        {/* 联系标题 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">联系我们</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              我们很乐意听取您的意见、回答您的问题或讨论合作机会。请通过以下方式与我们联系。
            </p>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">电子邮件</h3>
                <p className="text-gray-600 mb-4">
                  随时通过电子邮件与我们联系
                </p>
                <a href="mailto:info@datagravity.io" className="text-blue-600 hover:text-blue-800 font-medium">
                  info@datagravity.io
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">办公地址</h3>
                <p className="text-gray-600 mb-4">
                  远程办公
                </p>
                <p className="text-gray-600">
                  我们采用分布式团队模式，全球协作
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">工作时间</h3>
                <p className="text-gray-600 mb-4">
                  周一至周五
                </p>
                <p className="text-gray-600">
                  9:00 AM - 6:00 PM (GMT+8)
                </p>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h2>
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-6 mb-8">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-lg font-medium text-green-800">消息已发送成功！</h3>
                  </div>
                  <p className="mt-2 text-green-700">
                    感谢您联系我们。我们会尽快回复您的消息。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        电子邮件 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司/组织
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="您的公司或组织名称"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      消息 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="请详细描述您的需求或问题..."
                    ></textarea>
                  </div>
                  {submitError && (
                    <div className="text-red-600 mb-4">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 text-white rounded-md font-medium ${
                      isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? '发送中...' : '发送消息'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">常见问题</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                您可能想了解这些问题的答案
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  时光匣项目什么时候可以使用？
                </h3>
                <p className="text-gray-600">
                  时光匣项目目前处于 Alpha 测试阶段，预计将在 2025 年 12 月发布正式版本。如果您希望参与测试，请通过联系表单与我们联系。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  时光匣支持哪些类型的照片格式？
                </h3>
                <p className="text-gray-600">
                  时光匣支持所有常见的照片格式，包括 JPEG、PNG、GIF、WebP 等。我们还在考虑支持 RAW 格式和其他专业格式。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  数据存储在 Arweave 上是否安全？
                </h3>
                <p className="text-gray-600">
                  是的，所有存储在 Arweave 上的数据都经过端到端加密，只有您拥有解密密钥。我们不会存储您的私钥，确保您的数据完全由您控制。
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  如何定价？
                </h3>
                <p className="text-gray-600">
                  时光匣采用一次性付费模式，价格根据存储容量和时间胶囊功能而定。具体定价将在正式发布前公布。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="py-12 px-6 bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-white mb-4">Data Gravity</div>
                <p className="mb-4">
                  利用 Arweave 技术提供永久数据存储解决方案
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">产品</h3>
                <ul className="space-y-2">
                  <li><a href="/projects" className="hover:text-white">时光匣</a></li>
                  <li><a href="#" className="hover:text-white">企业解决方案</a></li>
                  <li><a href="#" className="hover:text-white">API 文档</a></li>
                  <li><a href="#" className="hover:text-white">定价</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">公司</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="hover:text-white">关于我们</a></li>
                  <li><a href="#" className="hover:text-white">博客</a></li>
                  <li><a href="#" className="hover:text-white">职业机会</a></li>
                  <li><a href="#" className="hover:text-white">联系我们</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">支持</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">帮助中心</a></li>
                  <li><a href="#" className="hover:text-white">社区</a></li>
                  <li><a href="#" className="hover:text-white">合作伙伴</a></li>
                  <li><a href="#" className="hover:text-white">状态页面</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p>&copy; 2025 Data Gravity LLC. 保留所有权利。</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
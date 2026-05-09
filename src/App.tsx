/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Cloud, Zap, Mail, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Vanpower</div>
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-blue-600">首页</a>
            <a href="#solutions" className="hover:text-blue-600">解决方案</a>
            <a href="#about" className="hover:text-blue-600">关于我们</a>
            <a href="#contact" className="hover:text-blue-600">联系我们</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              万跑科技 - 您的AI转型合作伙伴
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              基于Google Gemini和Cloud赋能企业智能升级，提供领先的AI解决方案。
            </p>
            <a href="#solutions" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
              查看解决方案 <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        <section id="solutions" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">核心解决方案</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Bot, title: "企业级AI助手", desc: "利用Gemini模型，定制企业专属智能知识库。" },
                { icon: Cloud, title: "Google Cloud架构", desc: "构建高效、安全、可扩展的云端AI基础架构。" },
                { icon: Zap, title: "业务流程自动化", desc: "智能化处理业务数据，显著提升工作效率。" }
              ].map((s, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <s.icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">关于我们</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  万跑科技（上海）有限公司致力于通过最前沿的AI技术解决复杂的企业问题。团队深耕Google Cloud生态与Gemini大模型应用，帮助企业实现数字化时代的智能化跨越。
                </p>
            </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">联系我们</h2>
            <div className="flex justify-center items-center space-x-3 text-lg">
                <Mail className="w-6 h-6" />
                <span>contact@vanpower.net</span>
            </div>
            <p className="mt-12 text-gray-500">© 2026 万跑科技（上海）有限公司. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}


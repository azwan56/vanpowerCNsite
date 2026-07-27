/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Bot, 
  Cloud, 
  Zap, 
  Mail, 
  ChevronRight, 
  Globe, 
  Shield, 
  Sparkles, 
  Database, 
  Cpu, 
  Server, 
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Presentation,
  X,
  Lock,
  RefreshCw,
  Activity,
  TrendingUp,
  Terminal,
  Layers,
  ShieldCheck,
  Sliders,
  Menu
} from 'lucide-react';

export default function App() {
  const [market, setMarket] = useState<'global' | 'domestic'>('global');
  const [scenario, setScenario] = useState<'knowledge' | 'workflow' | 'service'>('knowledge');
  const [showPresentationModal, setShowPresentationModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 场景预览数据定义
  const scenarioData = {
    knowledge: {
      title: "企业智能知识库 (Knowledge Base)",
      desc: "将企业内部海量文档、规章制度及业务手册转化为高精度检索的智能对话系统。",
      global: {
        model: "Google Gemini 2.5 Flash / Pro",
        modelDesc: "原生多模态，支持超长上下文，全球多语言理解极佳",
        cloud: "GCP Cloud Run & Cloud SQL",
        cloudDesc: "托管型容器服务，配合 Cloud SQL (pgvector) 提供毫秒级检索",
        flow: [
          { name: "用户提问", detail: "全球多语言自然语言输入" },
          { name: "语义检索", detail: "Vertex AI Vector Search 向量检索" },
          { name: "模型推理", detail: "Gemini 2.5 结合上下文生成专业回复" },
          { name: "安全过滤", detail: "Google Cloud DLP 敏感信息防护与全球合规过滤" }
        ]
      },
      domestic: {
        model: "通义千问 Qwen-Max / Qwen-Plus",
        modelDesc: "阿里面向国内的旗舰大模型，中文商用语境及逻辑推理表现优异",
        cloud: "阿里云 函数计算 FC & AnalyticDB",
        cloudDesc: "Serverless 架构，AnalyticDB PostgreSQL 提供本土高效向量数据库服务",
        flow: [
          { name: "用户提问", detail: "国内网络极速响应，支持各类垂直行业术语" },
          { name: "语义检索", detail: "阿里云 ADB 向量数据库快速匹配知识切片" },
          { name: "模型推理", detail: "Qwen 结合行业专属知识库深度优化回答" },
          { name: "安全过滤", detail: "阿里云内容安全服务 + 网信办大模型合规检测" }
        ]
      }
    },
    workflow: {
      title: "业务流程自动化 (Workflow Automation)",
      desc: "利用大模型的多模态识别能力，自动解析票据、合同并进行业务系统的表单自动填充与审核。",
      global: {
        model: "Gemini 2.5 Multi-modal API",
        modelDesc: "支持直接解析 PDF、长视频、图片和复杂图表，免去繁琐的 OCR 步骤",
        cloud: "GCP Cloud Functions & BigQuery",
        cloudDesc: "轻量无服务器函数处理，BigQuery 实现海量结构化数据的数仓存储与分析",
        flow: [
          { name: "数据输入", detail: "合同、发票或非结构化文件上传至 Cloud Storage" },
          { name: "文件解析", detail: "Cloud Functions 触发 Gemini 多模态识别提取关键字段" },
          { name: "数仓入库", detail: "清洗后的结构化数据导入 BigQuery 分析引擎" },
          { name: "流程流转", detail: "触发全球企业 ERP 系统（如 Salesforce/SAP）接口写入" }
        ]
      },
      domestic: {
        model: "Qwen-VL 多模态模型",
        modelDesc: "深度优化中文 OCR 与复杂中文表单、表格的图像文字混合识别",
        cloud: "阿里云 OSS & MaxCompute",
        cloudDesc: "对象存储 OSS 托管，MaxCompute 提供大规模企业级数据仓库服务",
        flow: [
          { name: "数据输入", detail: "各类单据、报表上传至阿里云 OSS 存储" },
          { name: "文件解析", detail: "阿里云函数计算 FC 调用 Qwen-VL 提取结构化数据" },
          { name: "数仓入库", detail: "数据同步至 MaxCompute，进行实时报表分析与归档" },
          { name: "流程流转", detail: "直接对接国内主流 ERP/钉钉/飞书审批流进行自动化流转" }
        ]
      }
    },
    service: {
      title: "智能客服与座席辅助 (Customer Service)",
      desc: "全天候智能外呼与在线接待，同时在人工通话过程中为话务员提供实时话术建议和产品推荐。",
      global: {
        model: "Gemini Pro Speech & Agent API",
        modelDesc: "极低延迟响应，支持全球 40+ 主流语种及口音自然对话",
        cloud: "Google Dialogflow CX & Firebase",
        cloudDesc: "先进的会话代理管理，Firebase 提供实时数据同步与推送",
        flow: [
          { name: "客户接入", detail: "海外用户通过电话或 Web/App 渠道接入" },
          { name: "会话控制", detail: "Dialogflow CX 负责意图识别与多轮对话路由管理" },
          { name: "话术辅助", detail: "Gemini 实时分析通话文本，为人工客服推荐标准应答" },
          { name: "全球分发", detail: "基于 Google Cloud 全球边缘节点保障音频/文本极低抖动" }
        ]
      },
      domestic: {
        model: "通义千问 Qwen-Audio & Agent",
        modelDesc: "融合语音理解，支持粤语、四川话等国内方言及中英混杂识别",
        cloud: "阿里云智能客服（AICCS）& ECS",
        cloudDesc: "整合阿里云云呼叫中心与云服务器，提供高可用电信级通信通道",
        flow: [
          { name: "客户接入", detail: "国内电话呼入或钉钉、微信、官网在线客服接入" },
          { name: "会话控制", detail: "阿里云 AICCS 引擎对接 Qwen 进行智能化意图分发" },
          { name: "话术辅助", detail: "Qwen 实时监控通话内容，生成合规话术及产品知识提示" },
          { name: "国内加速", detail: "依托阿里云 BGP 多线宽带保障国内各省份通话零卡顿" }
        ]
      }
    }
  };

  const activeMarketData = market === 'global' ? 'global' : 'domestic';
  const activeScenarioInfo = scenarioData[scenario];
  const activeDetail = activeScenarioInfo[activeMarketData];

  // 主题色样式常量定义
  const theme = {
    global: {
      primary: "indigo",
      bgGradient: "from-blue-50 via-white to-indigo-50",
      accent: "text-indigo-600 border-indigo-600 bg-indigo-50",
      btn: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200",
      border: "border-indigo-100",
      text: "text-indigo-600",
      badge: "bg-indigo-100/70 text-indigo-700 border-indigo-200/50",
      cardHover: "hover:border-indigo-300 hover:shadow-indigo-50/50"
    },
    domestic: {
      primary: "orange",
      bgGradient: "from-orange-50 via-white to-amber-50",
      accent: "text-orange-600 border-orange-600 bg-orange-50",
      btn: "bg-orange-600 hover:bg-orange-700 shadow-orange-200",
      border: "border-orange-100",
      text: "text-orange-600",
      badge: "bg-orange-100/70 text-orange-700 border-orange-200/50",
      cardHover: "hover:border-orange-300 hover:shadow-orange-50/50"
    }
  }[market];

  return (
    <div className={`min-h-screen bg-gradient-to-tr ${theme.bgGradient} text-gray-900 font-sans transition-all duration-500`}>
      {/* 头部导航栏 */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className={`w-8 h-8 ${theme.text} animate-pulse`} />
            <div className="text-2xl font-bold tracking-wider text-gray-900">VANPOWER</div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-blue-600 transition-colors">首页</a>
            <a href="#solutions" className="hover:text-blue-600 transition-colors">解决方案</a>
            <a href="#architecture" className="hover:text-blue-600 transition-colors">架构演示</a>
            <a href="#tech-stack" className="hover:text-blue-600 transition-colors">技术架构 & SRE</a>
            <a href="/swpost/" className="text-rose-600 hover:text-rose-700 font-bold transition-colors flex items-center">
              <Sparkles className="w-4 h-4 mr-1 animate-pulse" /> 小红书生成器
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">关于我们</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">联系我们</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 py-4 space-y-3 font-medium text-gray-700 animate-in slide-in-from-top duration-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600 transition-colors"
            >
              首页
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600 transition-colors"
            >
              解决方案
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600 transition-colors"
            >
              架构演示
            </a>
            <a
              href="#tech-stack"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600 transition-colors"
            >
              技术架构 & SRE
            </a>
            <a
              href="/swpost/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-rose-600 font-bold transition-colors flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-1 animate-pulse" /> 小红书生成器
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600 transition-colors"
            >
              关于我们
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600 transition-colors"
            >
              联系我们
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero 区域 */}
        <section id="home" className="py-20 md:py-32 relative overflow-hidden">
          {/* 背景装饰光球 */}
          <div className={`absolute top-1/4 left-1/10 w-96 h-96 rounded-full blur-3xl opacity-20 bg-${market === 'global' ? 'blue' : 'orange'}-400 pointer-events-none`}></div>
          <div className={`absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full blur-3xl opacity-20 bg-${market === 'global' ? 'indigo' : 'amber'}-400 pointer-events-none`}></div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white/80 text-sm font-semibold text-gray-600 mb-8 shadow-sm">
              <span className={`flex h-2.5 w-2.5 rounded-full bg-${market === 'global' ? 'indigo' : 'orange'}-600 mr-2`}></span>
              万跑科技 · 全球与本土双轨 AI 转型专家
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              {market === 'global' ? (
                <>
                  万跑科技 · 您的 <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600`}>AI 出海</span> 合作伙伴
                </>
              ) : (
                <>
                  万跑科技 · 您的 <span className={`text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600`}>本土智算</span> 合作伙伴
                </>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {market === 'global' 
                ? "基于 Google Gemini 和 Google Cloud 赋能企业智能升级，提供领先的 AI 出海及全球化商业落地解决方案。"
                : "基于 阿里云 与 通义千问 Qwen 大模型，专为国内企业用户量身定制安全、高效、合规的本土化 AI 解决方案。"
              }
            </p>

            {/* 市场选择器（双引擎切换） */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => setMarket('global')}
                className={`w-72 sm:w-80 p-5 rounded-2xl border text-left transition-all duration-300 ${
                  market === 'global' 
                    ? `border-indigo-500 bg-white shadow-lg ring-2 ring-indigo-500/20` 
                    : 'border-gray-200 bg-white/50 hover:bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-xl ${market === 'global' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">🌍 国际与出海业务</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Google Gemini + Google Cloud</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => setMarket('domestic')}
                className={`w-72 sm:w-80 p-5 rounded-2xl border text-left transition-all duration-300 ${
                  market === 'domestic' 
                    ? `border-orange-500 bg-white shadow-lg ring-2 ring-orange-500/20` 
                    : 'border-gray-200 bg-white/50 hover:bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-xl ${market === 'domestic' ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">🇨🇳 国内企业业务</h3>
                    <p className="text-xs text-gray-500 mt-0.5">通义千问 Qwen + 阿里云</p>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="#solutions" className={`inline-flex items-center px-8 py-4 ${theme.btn} text-white font-semibold rounded-full transition duration-300 shadow-lg`}>
                查看解决方案 <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#architecture" className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border border-gray-200 transition duration-300 shadow-sm">
                演示系统架构
              </a>
            </div>
          </div>
        </section>

        {/* 核心解决方案区域 */}
        <section id="solutions" className="py-24 bg-white border-y border-gray-100 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">核心解决方案</h2>
              <p className="text-gray-500 text-lg">
                针对不同业务场景，提供深度调优的大模型与云计算基础架构组合。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {market === 'global' ? (
                // 国际/出海解决方案
                <>
                  <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Bot className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Gemini 旗舰模型定制</h3>
                    <p className="text-gray-600 leading-relaxed">
                      基于 Google Gemini Pro 和 Flash 模型，为企业量身定制多语言智能客服、多模态内容生产与复杂业务逻辑推理引擎。
                    </p>
                  </div>

                  <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Google Cloud 全球网络</h3>
                    <p className="text-gray-600 leading-relaxed">
                      依托 Google Cloud 的全球骨干网与边缘计算节点，实现海量用户请求的高可用部署、跨国延迟优化与低延迟访问体验。
                    </p>
                  </div>

                  <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">国际多合规标准安全</h3>
                    <p className="text-gray-600 leading-relaxed">
                      严格遵循全球数据隐私规范（如 GDPR、CCPA 等），为出海应用构建全套企业级身份验证、敏感数据隔离及多区域合规治理架构。
                    </p>
                  </div>
                </>
              ) : (
                // 国内本土智算解决方案
                <>
                  <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Bot className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">通义千问 Qwen 深度微调</h3>
                    <p className="text-gray-600 leading-relaxed">
                      采用阿里巴巴 Qwen 系列旗舰大语言模型，深度适应中文商业环境与知识结构，提供本地部署、微调与私有化知识库落地。
                    </p>
                  </div>

                  <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">阿里云高带宽本土算力</h3>
                    <p className="text-gray-600 leading-relaxed">
                      依托阿里云国内领先的云服务器 ECS、GPU 算力集群与函数计算 FC，保障高并发调用下的极速数据链路与极佳的可用性。
                    </p>
                  </div>

                  <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">本土数据合规与算法备案</h3>
                    <p className="text-gray-600 leading-relaxed">
                      提供完全符合国家网信办大模型备案及网络安全法要求的本土化架构，内置内容合规过滤，保障企业敏感数据不出境。
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* 深度白皮书与架构演示横幅 */}
            <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
              <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold mb-4 border border-indigo-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>旗舰落地白皮书 & 架构演示</span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 text-white tracking-tight">
                    企业级 Agentic AI 落地架构与自愈闭环白皮书
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    面向 AI 应用架构师的商业落地指南：包含大模型智能分工路由、Google ADK Harness 编排、六重 SRE 自愈 Loop (MAPE-K) 与三维 AI 安全防线。
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Gemini / Qwen 多级模型智能路由</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Google ADK Harness & Pydantic 契约</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>六重 SRE MAPE-K 状态机自愈闭环</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>零 Key 云原生 IAM 鉴权与日志脱敏</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
                  <button
                    onClick={() => setShowPresentationModal(true)}
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold rounded-2xl transition duration-300 shadow-lg shadow-indigo-500/25 group cursor-pointer"
                  >
                    <Presentation className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
                    <span>在线全屏演示 (Presentation)</span>
                  </button>
                  <a
                    href="/gems_architecture_presentation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 backdrop-blur-md transition duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>在新标签页打开</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 交互式架构演示区域 */}
        <section id="architecture" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">AI 落地架构演示</h2>
            <p className="text-gray-500">
              选择不同业务场景与服务市场，查看我们为您量身定制的 AI 系统架构与数据流。
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid lg:grid-cols-3">
            {/* 左侧控制栏 */}
            <div className="p-8 lg:border-r border-gray-100 bg-gray-50/40">
              <h3 className="text-lg font-bold text-gray-800 mb-6">配置您的落地场景</h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => setScenario('knowledge')}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-start space-x-3 ${
                    scenario === 'knowledge'
                      ? `border-${market === 'global' ? 'indigo' : 'orange'}-500 bg-white shadow-md`
                      : 'border-gray-200 bg-white/50 hover:bg-white'
                  }`}
                >
                  <Database className={`w-5 h-5 mt-0.5 ${scenario === 'knowledge' ? theme.text : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">企业智能知识库</h4>
                    <p className="text-xs text-gray-500 mt-1">文档向量化快速知识问答</p>
                  </div>
                </button>

                <button
                  onClick={() => setScenario('workflow')}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-start space-x-3 ${
                    scenario === 'workflow'
                      ? `border-${market === 'global' ? 'indigo' : 'orange'}-500 bg-white shadow-md`
                      : 'border-gray-200 bg-white/50 hover:bg-white'
                  }`}
                >
                  <Zap className={`w-5 h-5 mt-0.5 ${scenario === 'workflow' ? theme.text : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">业务流程自动化</h4>
                    <p className="text-xs text-gray-500 mt-1">智能单据解析与系统对接</p>
                  </div>
                </button>

                <button
                  onClick={() => setScenario('service')}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-start space-x-3 ${
                    scenario === 'service'
                      ? `border-${market === 'global' ? 'indigo' : 'orange'}-500 bg-white shadow-md`
                      : 'border-gray-200 bg-white/50 hover:bg-white'
                  }`}
                >
                  <Bot className={`w-5 h-5 mt-0.5 ${scenario === 'service' ? theme.text : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">智能客服与座席辅助</h4>
                    <p className="text-xs text-gray-500 mt-1">高并发语音/在线接待服务</p>
                  </div>
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">当前运行引擎</span>
                <div className={`inline-flex items-center px-3.5 py-1.5 rounded-xl border text-xs font-bold ${theme.badge}`}>
                  {market === 'global' ? '🌍 全球出海 (Gemini + GCP)' : '🇨🇳 本土智算 (Qwen + 阿里云)'}
                </div>
              </div>
            </div>

            {/* 右侧展示面板（占据两列） */}
            <div className="p-8 lg:col-span-2 flex flex-col justify-between">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest ${theme.text} block mb-2`}>
                  {activeScenarioInfo.title}
                </span>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {activeScenarioInfo.desc}
                </p>

                {/* 引擎组件卡片 */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className={`p-5 rounded-2xl border ${theme.border} bg-${theme.primary}-50/30`}>
                    <span className="text-xs text-gray-400 font-semibold block mb-1">大模型引擎</span>
                    <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                      <Cpu className={`w-4 h-4 mr-2 ${theme.text}`} />
                      {activeDetail.model}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{activeDetail.modelDesc}</p>
                  </div>

                  <div className={`p-5 rounded-2xl border ${theme.border} bg-${theme.primary}-50/30`}>
                    <span className="text-xs text-gray-400 font-semibold block mb-1">基建云平台</span>
                    <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                      <Cloud className={`w-4 h-4 mr-2 ${theme.text}`} />
                      {activeDetail.cloud}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{activeDetail.cloudDesc}</p>
                  </div>
                </div>

                {/* 数据流向图 */}
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">核心数据流向图</h4>
                <div className="space-y-3">
                  {activeDetail.flow.map((f, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center font-bold text-xs ${theme.text}`}>
                        {idx + 1}
                      </div>
                      <div className="flex-grow bg-gray-50 border border-gray-100 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 shadow-sm">
                        <span className="font-bold text-sm text-gray-800">{f.name}</span>
                        <span className="text-xs text-gray-500">{f.detail}</span>
                      </div>
                      {idx < activeDetail.flow.length - 1 && (
                        <div className="hidden sm:block flex-shrink-0">
                          <ArrowRight className="w-4 h-4 text-gray-300" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>© VANPOWER 动态架构配置器</span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
                  已通过高可用性与合规性验证
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 企业级 Agentic AI 技术基座与 SRE 自愈矩阵 */}
        <section id="tech-stack" className="py-24 bg-slate-900 text-white border-t border-slate-800 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold mb-4 border border-indigo-500/30">
                <Layers className="w-3.5 h-3.5" />
                <span>全栈 Agentic AI 商业落地技术体系</span>
              </div>
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-white">
                企业级 Agentic AI 技术基座与 SRE 自愈矩阵
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                面向高并发、严合规与低延迟商业场景，构建涵盖模型分工路由、ADK Harness 编排、六重 MAPE-K 自愈 Loop 与三维 Zero-Trust 安全防线的基础设施。
              </p>
            </div>

            {/* 四大技术热点关注网格 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* 热点 1: 大语言模型场景化智能分工 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                      1. 大模型智能分工
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">场景驱动的多模型分级路由引擎</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    拒绝“单一模型一刀切”。按业务场景的延迟、精度与开销要求，动态分发至最优大语言模型，整体 Token 运营成本降低 <span className="text-indigo-400 font-bold">70%</span>：
                  </p>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start justify-between">
                      <div>
                        <span className="font-bold text-indigo-400 block mb-0.5">Gemini 2.5 Flash</span>
                        <span className="text-slate-400">零思考延迟、打字极速，专注于多轮客服对话与稳定 Function Calling</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start justify-between">
                      <div>
                        <span className="font-bold text-purple-400 block mb-0.5">Gemini 3.1 Flash-Lite</span>
                        <span className="text-slate-400">超高吞吐与极低成本，专用于高并发批量量化风控演算与预热</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start justify-between">
                      <div>
                        <span className="font-bold text-blue-400 block mb-0.5">Gemini 3.6 Flash / Qwen 深度微调</span>
                        <span className="text-slate-400">长上下文推理与本土知识库，用于 3-12 个月复杂定性研报与数据归因</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 热点 2: Google ADK Agent Harness 编排 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                      2. Agent Harness 编排
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Google ADK 原生 Harness & Pydantic 契约</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    告别脆弱纯 Prompt，打造逻辑与数据源硬连接的企业级 Harness 框架：
                  </p>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-blue-400 block mb-1">✦ 零幻觉数据引擎 (Tool Calling)</span>
                      <p className="text-slate-400">实时硬连接 17 季度真实 TTM 财务引擎，通过 API 精炼硬数据喂回大模型，确保逻辑严密。</p>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-1">✦ 100% 零丢包流式 Candidate Chunk 解析</span>
                      <p className="text-slate-400">克服大模型思考 Token 导致 `chunk.text` 为空的已知缺陷，引入 Candidate 级降级避坑打字解析。</p>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-indigo-400 block mb-1">✦ Pydantic Contract 单点真理 (Single Source of Truth)</span>
                      <p className="text-slate-400">契约结构统一在 `models.py` 定义，提示词指令与 Python 代码数据模型天然同步，绝不漂移。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 热点 3: 六重 SRE 自愈 Loop 闭环 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20">
                      3. 六重 SRE 自愈 Loop
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">MAPE-K 全自主闭环运维矩阵</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    摒弃依赖人工看 Log 的粗放模式，系统具备自我感知、自我诊断与自我修正能力：
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">1. AI 格式 Reflection 自审</span>
                      <span className="text-slate-400">拦截错误自动带 Error 反哺重试</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">2. API 状态机熔断器</span>
                      <span className="text-slate-400">跳闸后自动降级至备用源/缓存</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">3. 缓存缺失自补齐</span>
                      <span className="text-slate-400">Cloud Scheduler 前置 Prewarm 预热</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">4. 策略胜率演化</span>
                      <span className="text-slate-400">回测 T+5 实际结果与盈亏评级</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">5. SRE 异常告警反哺</span>
                      <span className="text-slate-400">Webhook 附带修复代码建议</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">6. Canary 探针回滚</span>
                      <span className="text-slate-400">10% Canary 切流失败自动切回</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 热点 4: 三维 Zero-Trust AI 安全防线 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                      4. 三维 AI 安全防线
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">云原生 Zero-Trust 与敏感数据治理</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    符合金融与企业级极严格安全合规要求，防止密钥泄露与注入攻击：
                  </p>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start space-x-3">
                      <Lock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-purple-300 block">零 Key 云原生 IAM 动态鉴权</span>
                        <span className="text-slate-400">废除硬编码 JSON 密钥文件，通过 GCP ADC (Application Default Credentials) 动态授权。</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start space-x-3">
                      <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-cyan-300 block">SensitiveDataFilter 日志脱敏防护</span>
                        <span className="text-slate-400">注册全局日志拦截器，实时掩码 JWT、API Key 与 Webhook 地址，防止云日志明文泄露。</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start space-x-3">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-300 block">强类型模式防 Prompt Injection</span>
                        <span className="text-slate-400">在输入与输出端执行 Pydantic 双向硬模式匹配，完全阻断恶劣恶意 Prompt 注入。</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benchmark 性能与基准测试结果 */}
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <TrendingUp className="w-6 h-6 text-emerald-400 mr-3" />
                    权威 Benchmark 与 7/7 元测试验证表现
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    系统在生产环境的真实性能基准与可靠性度量数据
                  </p>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/30 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  7/7 单元测试 100% 通过
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="py-3.5 px-4">性能 / 技术指标</th>
                      <th className="py-3.5 px-4">实测数值 / 表现</th>
                      <th className="py-3.5 px-4">底层技术实现原理</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50 text-sm text-slate-300">
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">首字呈现时间 (TTFT)</td>
                      <td className="py-4 px-4 font-bold text-emerald-400">&lt; 450 ms</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">通过 HTTP/2 + FastAPI StreamingResponse 原生流式分块输出</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">Serverless 冷启动 (Cold Start)</td>
                      <td className="py-4 px-4 font-bold text-cyan-400">&lt; 1.8 s</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">基于 Python 3.11-slim 基础镜像与大模型 SDK 延迟按需加载</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">基础固定月租开销</td>
                      <td className="py-4 px-4 font-bold text-purple-400">$0 / 月</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">基于 GCP Cloud Run Scale-to-Zero 机制，无请求时不消耗硬件资源</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">数据去幻觉准确率</td>
                      <td className="py-4 px-4 font-bold text-emerald-400">100% 贴合财报/业务硬数据</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">强制通过 ADK Function Tool 实时计算 17 季度真实 TTM 财务指标</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* AI 场景体验 */}
        <section id="demos" className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">AI 场景体验</h2>
              <p className="text-gray-500 text-lg">
                基于万跑科技自研多模态微调与阿里云/火山引擎底层算力打造的即开即用 AI 应用。
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-300">
              <div className="md:w-1/2 bg-gradient-to-br from-rose-500 to-red-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-xl"></div>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wider mb-6">
                    ⚡ 热门体验
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 leading-tight">小红书智能拼图<br />海报生成器</h3>
                  <p className="text-rose-50/90 text-sm leading-relaxed mb-6">
                    集成了“防拉伸变形物理剪裁”、“AI 一键消除行人/路物”以及“火山引擎豆包 Seedream 5.0 吉卜力动漫化风格迁移”的社交媒体营销海报生产力工具。
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-sm font-bold">
                  <span>立即免费在线体验</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">物理防变形剪裁</h4>
                      <p className="text-xs text-gray-500">基于目标拼图比例的高保真画幅自适应裁剪，照片绝不拉伸扭曲。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">AI 一键消除路人</h4>
                      <p className="text-xs text-gray-500">涂抹即可无痕抹除废片里的杂物或行人，拯救废片。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">吉卜力动漫化 (豆包 5.0)</h4>
                      <p className="text-xs text-gray-500">字节跳动 Seedream 5.0 风格重绘，生成宫崎骏工作室级别手绘大片。</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a 
                    href="/swpost/" 
                    className="block text-center w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl transition duration-300 shadow-md"
                  >
                    🚀 打开生成器
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 关于我们 */}
        <section id="about" className="py-24 bg-gray-50/50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">关于我们</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              万跑科技（上海）有限公司致力于为全球与本土企业提供最前沿的 AI 转型解决方案。我们具备独一无二的
              <strong className={theme.text}> 双轨服务能力</strong>：
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left mt-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Globe className="w-5 h-5 text-indigo-600 mr-2" />
                  国际出海服务
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  深耕 Google Cloud 与 Gemini 大模型生态，助力中国企业安全扬帆出海，满足国际合规与全球化的高并发访问需求。
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Server className="w-5 h-5 text-orange-600 mr-2" />
                  国内智算服务
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  深度合作阿里云与通义千问 Qwen 大模型，为国内企业打造合规、安全、高效的本土化 AI 场景落地，支持私有化部署。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 联络与页脚 */}
      <footer id="contact" className="bg-gray-900 text-white py-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">开始您的 AI 转型旅程</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto [text-wrap:balance]">
            联系万跑技术专家，我们将为您评估最适合您的全球或本土 AI 落地架构。
          </p>
          <div className="inline-flex flex-col sm:flex-row justify-center items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg mb-16">
            <a href="mailto:azwan@vanpower.net" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>azwan@vanpower.net</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2026 万跑科技（上海）有限公司. 保留所有权利.</p>
          <p className="mt-2 text-gray-600 text-xs hover:text-gray-400 transition-colors">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
              沪ICP备2026018807
            </a>
          </p>
        </div>
      </footer>

      {/* 架构白皮书全屏演示 Modal */}
      {showPresentationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-8 animate-in fade-in duration-300">
          <div className="bg-slate-900 w-full max-w-7xl h-[95dvh] sm:h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col border border-slate-700 shadow-2xl relative">
            {/* Modal Header */}
            <div className="px-3.5 sm:px-6 py-3 sm:py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <Presentation className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white truncate">
                  企业级 Agentic AI 落地架构与自愈闭环白皮书
                </h3>
              </div>
              <div className="flex items-center space-x-2 shrink-0">
                <a
                  href="/gems_architecture_presentation.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 flex items-center space-x-1 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">全屏查看原页</span>
                  <span className="sm:hidden">原页</span>
                </a>
                <button
                  onClick={() => setShowPresentationModal(false)}
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Modal Body: iframe */}
            <div className="flex-1 w-full h-full bg-slate-950">
              <iframe
                src="/gems_architecture_presentation.html"
                title="Gems Architecture Presentation Whitepaper"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

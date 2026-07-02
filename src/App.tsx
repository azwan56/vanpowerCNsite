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
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [market, setMarket] = useState<'global' | 'domestic'>('global');
  const [scenario, setScenario] = useState<'knowledge' | 'workflow' | 'service'>('knowledge');

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
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-blue-600 transition-colors">首页</a>
            <a href="#solutions" className="hover:text-blue-600 transition-colors">解决方案</a>
            <a href="#architecture" className="hover:text-blue-600 transition-colors">架构演示</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">关于我们</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">联系我们</a>
          </div>
        </nav>
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
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            联系万跑技术专家，我们将为您评估最适合您的全球或本土 AI 落地架构。
          </p>
          <div className="inline-flex flex-col sm:flex-row justify-center items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg mb-16">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>contact@vanpower.net</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">© 2026 万跑科技（上海）有限公司. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from '../HeroCanvas';
import {
  Bot,
  Cloud,
  Mail,
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
  Menu,
  X,
  TrendingUp,
  Terminal,
  Layers,
  ShieldCheck,
  RefreshCw,
  Waves,
  BarChart3,
  LineChart,
  Trophy,
  Lock,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import WhitePaperModal from '../components/WhitePaperModal';
import HeroConsole from '../components/HeroConsole';

export default function HomePage() {
  const [market, setMarket] = useState<'global' | 'enterprise'>('global');
  const [scenario, setScenario] = useState<'knowledge' | 'workflow' | 'service'>('knowledge');
  const [showPresentationModal, setShowPresentationModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [activeTelemetryIndex, setActiveTelemetryIndex] = useState(0);

  const telemetryStreams = [
    {
      title: "DailyStock 量化投研引擎",
      badge: "WALL STREET 智能投研",
      text: "NumPy 与 Pydantic V2 确定性模型 · 17季度 TTM 严格估值 · 0% 数值幻觉",
      color: "text-indigo-700 bg-indigo-50 border-indigo-200/80",
      dot: "bg-indigo-500",
    },
    {
      title: "CMEMS 海洋生态雷达",
      badge: "COPERNICUS 卫星 4D 切片",
      text: "Cloud Run 自动化 NetCDF 矩阵切片 · 缺氧与赤潮早期预警 · 38ms 遥测响应",
      color: "text-cyan-700 bg-cyan-50 border-cyan-200/80",
      dot: "bg-cyan-500",
    },
    {
      title: "RGM 跑团训练系统",
      badge: "CANOVA AI 教练与阿里云原生",
      text: "Canova 周期化量身定制训练计划 · 训练后深度生物力学点评 · Garmin 双区 IoT",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200/80",
      dot: "bg-emerald-500",
    },
    {
      title: "SRE 核心自愈闭环",
      badge: "MAPE-K 自愈控制闭环",
      text: "多智能体 Graph RAG 生产架构 · 故障零感知自愈修复 · 99.99% 系统高可用",
      color: "text-purple-700 bg-purple-50 border-purple-200/80",
      dot: "bg-purple-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTelemetryIndex((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const scenarioData = {
    knowledge: {
      title: "企业级高精度智能知识库",
      desc: "将海量企业内部文档、标准作业程序（SOP）与合规制度转化为高精度对话式智能体，支持复杂跨文档关联推导。",
      global: {
        model: "Google Gemini 2.5 Flash / Pro",
        modelDesc: "原生多模态理解能力，支持超长上下文（100万+ Token），全球顶尖多语言语义解析与深度推导。",
        cloud: "GCP Cloud Run & Cloud SQL",
        cloudDesc: "全托管 Serverless 容器运行时，无缝挂载 Cloud SQL (pgvector) 提供亚毫秒级向量相似度匹配。",
        flow: [
          { name: "用户提问", detail: "全球分支机构与多语言客户端自然语言实时输入" },
          { name: "语义检索", detail: "Vertex AI Vector Search 与混合嵌入索引精准定位切片" },
          { name: "模型推理", detail: "Gemini 2.5 结合上下文进行精准去幻觉推理与引用溯源" },
          { name: "合规防护", detail: "Google Cloud DLP 敏感数据过滤与全球合规审查" }
        ]
      },
      enterprise: {
        model: "垂直领域微调大模型 / 通义千问 Qwen-Max",
        modelDesc: "针对行业领域深度微调的企业旗舰模型，精通特定业务词汇、合规策略与复杂逻辑。",
        cloud: "专属私有 Kubernetes (ACK) 与向量数据库",
        cloudDesc: "严格隔离的企业级专用 VPC，配合私有化 pgvector / Milvus 数据库，确保核心数据不出境不外泄。",
        flow: [
          { name: "用户提问", detail: "企业内网网关鉴权过滤，安全的内部 API 流量接入" },
          { name: "语义检索", detail: "基于加密存储的高性能向量检索，毫秒级召回关联资料" },
          { name: "模型推理", detail: "微调领域大模型生成具备企业业务准则的专属解决方案" },
          { name: "合规防护", detail: "物理隔离的敏感词过滤与不可篡改的企业级审计日志" }
        ]
      }
    },
    workflow: {
      title: "智能业务流程与审批自动化",
      desc: "利用多模态视觉理解与智能体编排，自动化处理复杂发票、合同文本解析与跨系统数据协同。",
      global: {
        model: "Gemini 2.5 Multimodal API",
        modelDesc: "无需传统脆弱的 OCR 流水线，端到端直接理解 PDF、图纸、表格与多媒体格式。",
        cloud: "GCP Cloud Functions & BigQuery",
        cloudDesc: "事件驱动的 Serverless 算力，将解析结构化数据实时写入 BigQuery 数据湖仓。",
        flow: [
          { name: "数据采集", detail: "合同、发票或非结构化单据自动推送到 Cloud Storage" },
          { name: "文档提取", detail: "Cloud Functions 触发 Gemini Multimodal 提取结构化 Schema" },
          { name: "结构化存储", detail: "清洗后的标准数据自动写入 BigQuery 分析管道" },
          { name: "系统执行", detail: "通过安全 Webhook 回写真实企业 ERP (Salesforce、SAP、NetSuite)" }
        ]
      },
      enterprise: {
        model: "多模态文档与视觉解析引擎",
        modelDesc: "针对国内财务报表、专用格式与复杂版面进行强化的专用文档版面分析模型。",
        cloud: "私有对象存储与分析引擎 (ClickHouse)",
        cloudDesc: "合规的数据加密对象存储与高速企业级数据仓库协同。",
        flow: [
          { name: "数据采集", detail: "内部业务系统上传至高安全等级的企业级加密数据池" },
          { name: "文档提取", detail: "专属微服务集群调用本地视觉模型执行高精度字段解析" },
          { name: "结构化存储", detail: "同步至企业核心数据库与 BI 看板进行自动化对账" },
          { name: "系统执行", detail: "触发企业审批工作流自动化流转，完成 ERP 凭证过账" }
        ]
      }
    },
    service: {
      title: "新一代智能客服与坐席 Copilot",
      desc: "7x24 小时全天候智能交互，实时为坐席提供话术推荐、情绪感知分析与合规风控提示。",
      global: {
        model: "Gemini Pro Live & 实时语音 Agent API",
        modelDesc: "超低延迟流式响应，原生支持全球 40+ 种语言与主流方言口音。",
        cloud: "Google Dialogflow CX & Firebase",
        cloudDesc: "先进的多轮对话状态机流转，支持高并发实时 WebSocket 状态同步。",
        flow: [
          { name: "多渠道接入", detail: "涵盖 Web、App、海外社交渠道与语音 SIP 线路全面打通" },
          { name: "对话管理", detail: "Dialogflow CX 状态机精准路由，快速识别复杂业务意图" },
          { name: "坐席辅助", detail: "Gemini 实时分析通话上下文，动态为坐席推荐合规解答" },
          { name: "全球边缘交付", detail: "Google Cloud 全球 Edge 节点保障低抖动流式语音体验" }
        ]
      },
      enterprise: {
        model: "专属实时语音与坐席智能引擎",
        modelDesc: "深度融入国内行业专属业务词库，具备强抗噪能力与本地合规敏感词拦截。",
        cloud: "高可用电话交换网关与国内专属算力",
        cloudDesc: "无缝对接企业既有呼叫中心 PBX 系统，提供低延迟内网语音专线支持。",
        flow: [
          { name: "多渠道接入", detail: "企业专线 SIP 中继与微信小程序/官网客服端口全覆盖" },
          { name: "对话管理", detail: "定制意图分类引擎快速精准分流客户诉求" },
          { name: "坐席辅助", detail: "全流程合规质检监控，实时提示知识库标准话术" },
          { name: "边缘交付", detail: "高防高带宽内网线路保障客服会话零卡顿流式响应" }
        ]
      }
    }
  };

  const activeMarketData = market === 'global' ? 'global' : 'enterprise';
  const activeScenarioInfo = scenarioData[scenario];
  const activeDetail = activeScenarioInfo[activeMarketData];

  const theme = {
    global: {
      primary: "indigo",
      bgGradient: "from-blue-50 via-white to-indigo-50",
      cardHover: "hover:border-indigo-300 hover:shadow-indigo-50/50"
    },
    enterprise: {
      primary: "emerald",
      bgGradient: "from-emerald-50 via-white to-teal-50",
      cardHover: "hover:border-emerald-300 hover:shadow-emerald-50/50"
    }
  }[market];

  return (
    <div className={`min-h-screen bg-gradient-to-tr ${theme.bgGradient} text-gray-900 font-sans transition-all duration-500`}>
      {/* 顶部全局导航栏 */}
      <header className="sticky top-0 bg-white/85 backdrop-blur-md border-b border-gray-100 z-50 transition-all">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3 group">
            <img 
              src="/vanpower-logo.png" 
              alt="万跑科技 Logo" 
              className="w-9 h-9 rounded-xl object-contain shadow-sm border border-gray-100 bg-white p-0.5 group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-gray-900 leading-none">VANPOWER</span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider">万跑科技（上海）</span>
            </div>
          </a>

          {/* 桌面端导航项 */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-gray-600 font-medium text-xs xl:text-sm ml-4 xl:ml-8">
            <a href="#home" className="hover:text-indigo-600 transition-colors">首页</a>
            
            {/* 项目案例下拉菜单 */}
            <div 
              className="relative"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <a 
                href="#projects" 
                className="hover:text-indigo-600 transition-colors flex items-center space-x-1 py-1 font-semibold text-indigo-700"
              >
                <span>旗舰落地案例</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </a>

              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link
                    to="/projects/dailystock"
                    className="p-2.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 group-hover:scale-105 transition-transform">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs flex items-center space-x-1">
                        <span>DailyStock AI</span>
                        <span className="text-[10px] px-1.5 py-0.2 bg-indigo-100 text-indigo-700 rounded-full font-mono">量化</span>
                      </div>
                      <div className="text-[11px] text-gray-500 line-clamp-1">华尔街机构级美股量化投研终端</div>
                    </div>
                  </Link>

                  <Link
                    to="/projects/cmems"
                    className="p-2.5 rounded-xl hover:bg-cyan-50/80 transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-100 text-cyan-600 group-hover:scale-105 transition-transform">
                      <Waves className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs">CMEMS 海洋生态雷达</div>
                      <div className="text-[11px] text-gray-500 line-clamp-1">欧盟 Copernicus 卫星 4D NetCDF 预警</div>
                    </div>
                  </Link>

                  <Link
                    to="/projects/rgm"
                    className="p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs">RGM 跑团训练系统</div>
                      <div className="text-[11px] text-gray-500 line-clamp-1">Canova 周期化训练与 AI 深度复盘</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <a href="#solutions" className="hover:text-indigo-600 transition-colors">解决方案</a>
            <a href="#architecture" className="hover:text-indigo-600 transition-colors">系统架构</a>
            <a href="#tech-stack" className="hover:text-indigo-600 transition-colors">技术体系</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">关于我们</a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">常见问题</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">联系我们</a>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setShowPresentationModal(true)}
              className="inline-flex items-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition duration-200 shadow-sm cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
              <span>架构技术白皮书</span>
            </button>
          </div>

          {/* 移动端菜单切换按钮 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="打开导航菜单"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* 移动端下拉菜单 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 py-4 space-y-3 font-medium text-gray-700 animate-in slide-in-from-top duration-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-indigo-600 transition-colors"
            >
              首页
            </a>

            <div className="py-2 border-y border-gray-100 space-y-1 bg-gray-50/50 p-2.5 rounded-xl">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                旗舰落地项目专属页面
              </span>
              <Link
                to="/projects/dailystock"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-indigo-600 font-bold transition-colors flex items-center text-xs"
              >
                <LineChart className="w-4 h-4 mr-2" /> DailyStock AI 量化投研终端
              </Link>
              <Link
                to="/projects/cmems"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-cyan-600 font-bold transition-colors flex items-center text-xs"
              >
                <Waves className="w-4 h-4 mr-2" /> CMEMS 海洋生态雷达
              </Link>
              <Link
                to="/projects/rgm"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-emerald-600 font-bold transition-colors flex items-center text-xs"
              >
                <Trophy className="w-4 h-4 mr-2" /> RGM 跑团运营与训练系统
              </Link>
            </div>

            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-indigo-600 transition-colors"
            >
              解决方案
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-indigo-600 transition-colors"
            >
              系统架构
            </a>
            <a
              href="#tech-stack"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-indigo-600 transition-colors"
            >
              技术体系与 SRE
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-indigo-600 transition-colors"
            >
              关于我们
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-indigo-600 transition-colors"
            >
              常见问题
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-indigo-600 transition-colors"
            >
              联系我们
            </a>
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowPresentationModal(true);
                }}
                className="w-full text-center py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl"
              >
                查看企业级架构白皮书
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero 视觉区与交互式背景 */}
        <section id="home" className="pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden bg-slate-50/70 border-b border-gray-100">
          <HeroCanvas />

          {/* 细腻高科技网格纹理与环境光晕 */}
          <div className="absolute inset-0 bg-tech-grid mask-radial-fade opacity-50 pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-indigo-200/40 via-cyan-100/30 to-purple-200/30 blur-3xl rounded-full -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            {/* 顶端实时生产状态胶囊徽章（单行统一设计） */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-indigo-100/80 shadow-sm backdrop-blur-md mb-5 hover:border-indigo-200 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10.5px] font-mono font-bold text-emerald-600 uppercase tracking-wider hidden sm:inline">
                生产双轨集群在线
              </span>
              <span className="h-3 w-px bg-gray-200 hidden sm:inline"></span>
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${telemetryStreams[activeTelemetryIndex].color}`}>
                {telemetryStreams[activeTelemetryIndex].badge}
              </span>
              <span className="text-xs font-semibold text-gray-700 truncate max-w-[220px] sm:max-w-none">
                {telemetryStreams[activeTelemetryIndex].title}
              </span>
              <span className="h-3 w-px bg-gray-200 hidden md:inline"></span>
              <span className="text-[11px] text-gray-400 hidden md:inline font-mono">
                {telemetryStreams[activeTelemetryIndex].text.split('·')[0]}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.14] text-gray-900">
              全栈企业级 Agentic AI <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                专为核心关键业务生产落地打造
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed font-normal">
              万跑科技提供高并发、零幻觉的智能体系统、确定性 RAG 算力流及自愈运维云架构，深度整合 Google Gemini、通义千问 Qwen 与 DeepSeek，保障 7x24 持续可靠运行。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/25 transition duration-300 flex items-center justify-center space-x-2 group cursor-pointer text-sm"
              >
                <span>探索旗舰落地项目</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setShowPresentationModal(true)}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-2xl border border-gray-200/90 shadow-sm hover:shadow transition duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm"
              >
                <Presentation className="w-4 h-4 text-indigo-600" />
                <span>技术架构白皮书</span>
              </button>
            </div>

            {/* ======================================================== */}
            {/* 核心视觉中心：企业级智能体生产控制台中枢 (Hero Centerpiece) */}
            {/* ======================================================== */}
            <HeroConsole
              market={market}
              onMarketChange={setMarket}
              onOpenWhitepaper={() => setShowPresentationModal(true)}
            />

            {/* 快速生产指标看板 - 紧密集成于视觉中心下方 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-6xl mx-auto mt-6 text-left">
              <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono">99.99%</div>
                  <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">SRE 自愈可用性</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-mono">MAPE-K 自动化闭环</div>
              </div>

              <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-600 font-mono">&lt; 450 ms</div>
                  <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">首字响应延迟 (TTFT)</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-mono">HTTP/2 流式流转管道</div>
              </div>

              <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">0%</div>
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">数值逻辑幻觉率</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-mono">Pydantic V2 严格契约</div>
              </div>

              <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">双轨多云</div>
                  <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                    <Globe className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">出海与国内合规 VPC</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-mono">GCP + 阿里云双轨接入</div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 旗舰落地案例精选区域 */}
        {/* ======================================================== */}
        <section id="projects" className="py-24 bg-slate-950 text-white border-y border-slate-800 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold mb-4 border border-indigo-500/30">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>企业级落地应用案例 · 生产级验证</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                生产环境中验证的 Agentic AI 落地系统
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                从华尔街美股量化投研、卫星海洋遥感到专业耐力运动健康穿戴，深入了解万跑科技如何打造零数值幻觉、高可用、高扩展的现代智能体系统。点击任意项目进入完整技术剖析页面。
              </p>
            </div>

            {/* 3 个旗舰项目卡片网格 */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* 项目 1: DailyStock AI */}
              <div className="bg-slate-900/90 rounded-3xl border border-indigo-500/30 hover:border-indigo-400/80 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden group">
                <div>
                  {/* 顶部状态栏 */}
                  <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-indigo-300 block">
                          全球出海 AI · Gemini 3.5
                        </span>
                        <h3 className="text-lg font-bold text-white">DailyStock AI</h3>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      境外 GCP 部署
                    </span>
                  </div>

                  {/* 截图预览 */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src="/dailystock-market-compass.png"
                      alt="DailyStock AI 终端预览"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-indigo-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-indigo-500/30">
                      <span>NVDA $225.07 · 91% 确信度</span>
                      <span className="text-emerald-400">0% 数值幻觉</span>
                    </div>
                  </div>

                  {/* 核心介绍 */}
                  <div className="p-6">
                    <h4 className="font-bold text-white text-base mb-2">
                      华尔街机构级美股量化投研终端
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      基于 Google Gemini 3.5 双层推理引擎的美股每日智能投研系统。全套服务部署于境外 Google Cloud 平台（国内访问可能存在网络延迟或需网络加速），端到端自动化整合盘前催化剂归因、17 季度 TTM 严格估值及开盘战术指南。
                    </p>

                    {/* 指标标签 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-2.5 py-1 bg-amber-950/40 text-amber-300 text-xs rounded-lg font-mono border border-amber-500/30">
                        境外 GCP 部署
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-indigo-300 text-xs rounded-lg font-mono">
                        91% 高确信度推演
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-amber-300 text-xs rounded-lg font-mono">
                        3:1 盈亏比战术
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-cyan-300 text-xs rounded-lg font-mono">
                        17 季度 TTM 严格估值
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-emerald-300 text-xs rounded-lg font-mono">
                        FastAPI 异步微服务
                      </span>
                    </div>
                  </div>
                </div>

                {/* 底部按钮 */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto flex flex-col sm:flex-row gap-2.5">
                  <Link
                    to="/projects/dailystock"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20"
                  >
                    <span>查看完整案例剖析</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://dailystock.vanpower.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <span>体验终端</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* 项目 2: CMEMS Eco Radar */}
              <div className="bg-slate-900/90 rounded-3xl border border-cyan-500/30 hover:border-cyan-400/80 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden group">
                <div>
                  {/* 顶部状态栏 */}
                  <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Waves className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-cyan-300 block">
                          Copernicus 遥感 · 地球空间智能
                        </span>
                        <h3 className="text-lg font-bold text-white">CMEMS 海洋生态雷达</h3>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      境外 GCP 部署
                    </span>
                  </div>

                  {/* 截图预览 */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src="/cmems-radar-dashboard.png"
                      alt="CMEMS 海洋生态雷达预览"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30">
                      <span>长江口水质 · 叶绿素 8.87 mg/m³</span>
                      <span className="text-amber-400">赤潮预警</span>
                    </div>
                  </div>

                  {/* 核心介绍 */}
                  <div className="p-6">
                    <h4 className="font-bold text-white text-base mb-2">
                      近海海洋生态监测与缺氧预警系统
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      深度集成欧盟 Copernicus 卫星中心，服务端与 4D NetCDF 算力全面部署于境外 Google Cloud 平台（国内访问可能存在网络延迟或需网络加速）。全自动切片海洋遥感数据，实时预警近海缺氧与赤潮灾害。
                    </p>

                    {/* 指标标签 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-2.5 py-1 bg-amber-950/40 text-amber-300 text-xs rounded-lg font-mono border border-amber-500/30">
                        境外 GCP 部署
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-cyan-300 text-xs rounded-lg font-mono">
                        NetCDF4 4D 栅格切片
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-teal-300 text-xs rounded-lg font-mono">
                        溶解氧 &lt; 2.0 mg/L 预警
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-blue-300 text-xs rounded-lg font-mono">
                        Leaflet GIS 动态画布
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-indigo-300 text-xs rounded-lg font-mono">
                        零闲置成本 Cloud Run
                      </span>
                    </div>
                  </div>
                </div>

                {/* 底部按钮 */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto flex flex-col sm:flex-row gap-2.5">
                  <Link
                    to="/projects/cmems"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md shadow-cyan-600/20"
                  >
                    <span>查看完整案例剖析</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://cmems.vanpower.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <span>进入雷达</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* 项目 3: RGM RunClub */}
              <div className="bg-slate-900/90 rounded-3xl border border-emerald-500/30 hover:border-emerald-400/80 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden group">
                <div>
                  {/* 顶部状态栏 */}
                  <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-emerald-300 block">
                          阿里云原生 · 微信小程序生态
                        </span>
                        <h3 className="text-lg font-bold text-white">RGM 跑团训练系统</h3>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                      国内阿里云 · 极速流畅
                    </span>
                  </div>

                  {/* 截图预览 */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src="/rgm-canova-plan.png"
                      alt="RGM 跑团平台预览"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-emerald-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/30">
                      <span>Canova 周期化 · 周跑量 77.5 km</span>
                      <span className="text-purple-400">AI 战术点评</span>
                    </div>
                  </div>

                  {/* 核心介绍 */}
                  <div className="p-6">
                    <h4 className="font-bold text-white text-base mb-2">
                      Canova 周期化训练与赛后 AI 战术点评系统
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      基于传奇教练 Renato Canova 周期化哲学的运动科学操作系统。<strong>全部微服务与数据流部署于中国大陆境内的阿里云平台</strong>，直连国内 BGP 网络与微信生态，提供秒级极速响应与丝滑流畅体验。
                    </p>

                    {/* 指标标签 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-2.5 py-1 bg-emerald-950/40 text-emerald-300 text-xs rounded-lg font-mono border border-emerald-500/40 font-bold">
                        国内阿里云 100% 流畅
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-purple-300 text-xs rounded-lg font-mono">
                        Canova 7 周进阶周期化
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-emerald-300 text-xs rounded-lg font-mono">
                        爬升 632m 爬坡复盘
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-cyan-300 text-xs rounded-lg font-mono">
                        Garmin 双区 IoT 管道
                      </span>
                      <span className="px-2.5 py-1 bg-slate-800 text-amber-300 text-xs rounded-lg font-mono">
                        通义千问 Qwen / DeepSeek
                      </span>
                    </div>
                  </div>
                </div>

                {/* 底部按钮 */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto flex flex-col sm:flex-row gap-2.5">
                  <Link
                    to="/projects/rgm"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
                  >
                    <span>查看完整案例剖析</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://rgm.vanpower.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <span>访问云端门户</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 底部白皮书引导栏 */}
            <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs sm:text-sm text-slate-300">
                  需要为企业定制 Agentic AI 系统架构或私有化大模型落地方案？
                </span>
              </div>
              <button
                onClick={() => setShowPresentationModal(true)}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>阅读企业级 Agentic AI 落地架构白皮书</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* 核心企业解决方案区域 */}
        <section id="solutions" className="py-24 bg-white border-y border-gray-100 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">企业级 Agentic AI 解决方案</h2>
              <p className="text-gray-500 text-lg">
                将前沿大语言模型与超大规模云端算力深度融合，专门解决高并发、强合规与任务严苛型的核心业务痛点。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gemini / Qwen 前沿大模型微调</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  针对垂直业务语料深度微调 Google Gemini 与阿里通义千问 Qwen 模型，支撑多模态视觉处理、复杂逻辑链推导与多智能体 Agent 调度。
                </p>
              </div>

              <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">全球出海与本土双轨云架构</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  充分依托 Google Cloud 全球骨干网络与阿里云国内优质算力，搭配 Serverless 弹性缩容与边缘 CDN 节点，保障极低延迟与系统高弹性。
                </p>
              </div>

              <div className={`p-8 bg-gray-50/70 rounded-3xl border border-gray-100 ${theme.cardHover} transition-all duration-300 group`}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">企业级零信任合规安全体系</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  严格符合 GDPR、SOC2、国内数据出境及等保合规要求。提供全链路 Keyless IAM 免秘钥认证、Prompt 注入防御及敏感数据实时脱敏。
                </p>
              </div>
            </div>

            {/* 白皮书特色横幅 */}
            <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
              <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold mb-4 border border-indigo-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>技术架构实战白皮书</span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 text-white tracking-tight">
                    企业级 Agentic AI 生产级系统架构与 SRE 自愈运维技术白皮书
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    面向企业技术总监与架构师的落地实战参考：全套 11 章节深入剖析多模型动态分工路由、Neo4j Graph RAG 产业链拓扑、Google ADK Harness 编排、六重 MAPE-K 自愈 Loop 与零信任安全治理。
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Gemini / Qwen 动态场景多模型路由策略</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Neo4j 2-Hop 产业链图谱关联 Graph RAG</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Google ADK Harness 与确定性真实计算工具绑定</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>六重 SRE MAPE-K 自动化故障监控与自愈闭环</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
                  <button
                    onClick={() => setShowPresentationModal(true)}
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold rounded-2xl transition duration-300 shadow-lg shadow-indigo-500/25 group cursor-pointer"
                  >
                    <Presentation className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" />
                    <span>交互式架构幻灯片</span>
                  </button>
                  <a
                    href="/gems_architecture_presentation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 backdrop-blur-md transition duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>独立全屏查看</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 交互式架构可视化探索区域 */}
        <section id="architecture" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">交互式系统架构可视化展示</h2>
            <p className="text-gray-500">
              选择不同的业务场景与部署环境，探索万跑科技量身定制的数据流转与云原生架构拓扑。
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid lg:grid-cols-3">
            {/* 左侧控制面板 */}
            <div className="p-8 lg:border-r border-gray-100 bg-gray-50/40">
              <h3 className="text-lg font-bold text-gray-800 mb-6">选择 AI 业务工作负载</h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => setScenario('knowledge')}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-start space-x-3 cursor-pointer ${
                    scenario === 'knowledge'
                      ? `border-indigo-500 bg-white shadow-md`
                      : 'border-gray-200 bg-white/50 hover:bg-white'
                  }`}
                >
                  <Database className={`w-5 h-5 mt-0.5 ${scenario === 'knowledge' ? 'text-indigo-600' : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">企业级智能知识库</h4>
                    <p className="text-xs text-gray-500 mt-1">向量检索与抗幻觉 RAG 知识体系</p>
                  </div>
                </button>

                <button
                  onClick={() => setScenario('workflow')}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-start space-x-3 cursor-pointer ${
                    scenario === 'workflow'
                      ? `border-indigo-500 bg-white shadow-md`
                      : 'border-gray-200 bg-white/50 hover:bg-white'
                  }`}
                >
                  <Cpu className={`w-5 h-5 mt-0.5 ${scenario === 'workflow' ? 'text-indigo-600' : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">业务流程自动化</h4>
                    <p className="text-xs text-gray-500 mt-1">多模态单据解析与 ERP 自动对接</p>
                  </div>
                </button>

                <button
                  onClick={() => setScenario('service')}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-start space-x-3 cursor-pointer ${
                    scenario === 'service'
                      ? `border-indigo-500 bg-white shadow-md`
                      : 'border-gray-200 bg-white/50 hover:bg-white'
                  }`}
                >
                  <Bot className={`w-5 h-5 mt-0.5 ${scenario === 'service' ? 'text-indigo-600' : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">智能客服与坐席 Copilot</h4>
                    <p className="text-xs text-gray-500 mt-1">实时语音交互与流式对话支持</p>
                  </div>
                </button>
              </div>

              {/* 基础设施环境状态 */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                  当前生效的目标基础设施
                </span>
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 bg-white p-3 rounded-xl border border-gray-200">
                  <div className={`w-2.5 h-2.5 rounded-full ${market === 'global' ? 'bg-indigo-600' : 'bg-emerald-600'}`}></div>
                  <span>{market === 'global' ? 'Google Cloud Platform (全球出海云)' : '企业专用私有化 VPC (合规智算专网)'}</span>
                </div>
              </div>
            </div>

            {/* 中间与右侧流程可视化 */}
            <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeScenarioInfo.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{activeScenarioInfo.desc}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${market === 'global' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                    {market === 'global' ? '前沿 Gemini 2.5 架构' : '专属领域定制模型'}
                  </span>
                </div>

                {/* 模型与云基石卡片 */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-xs text-gray-400 font-bold block mb-1">基石大语言模型</span>
                    <h5 className="font-bold text-sm text-gray-900">{activeDetail.model}</h5>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{activeDetail.modelDesc}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-xs text-gray-400 font-bold block mb-1">云原生算力底座</span>
                    <h5 className="font-bold text-sm text-gray-900">{activeDetail.cloud}</h5>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{activeDetail.cloudDesc}</p>
                  </div>
                </div>

                {/* 端到端管道流转拓扑 */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    端到端算力流转拓扑步骤
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeDetail.flow.map((step, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-gray-200/80 bg-white shadow-sm flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${market === 'global' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'}`}>
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-gray-900">{step.name}</div>
                          <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">{step.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 状态底部栏 */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% 零信任数据合规加密传输验证通过</span>
                </div>
                <div className="font-mono text-gray-400">
                  目标端到端延迟预算: &lt; 350ms
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技术栈与六重 SRE 自愈运维体系 */}
        <section id="tech-stack" className="py-24 bg-slate-900 text-white border-t border-slate-800 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold mb-4 border border-indigo-500/30">
                <Layers className="w-3.5 h-3.5" />
                <span>全栈 Agentic AI 工程化核心体系</span>
              </div>
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-white">
                企业级 AI 技术栈与六重 SRE 自愈运维闭环
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                专为高并发访问、零数值幻觉及极低延迟的严苛生产落地标准深度设计。
              </p>
            </div>

            {/* 4 大技术支柱 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* 支柱 1 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                      1. 多模型智能分工路由
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">基于场景驱动的分层模型拓扑</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    拒绝单一模型承载所有任务。依据延迟敏感度、推理精度与预算开销动态分流请求，综合降低 Token 成本达 <span className="text-indigo-400 font-bold">70%</span>：
                  </p>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-indigo-400 block mb-0.5">Gemini 2.5 Flash</span>
                      <span className="text-slate-400">零思考延迟与急速流式吐字，专门承接高频多轮对话与函数工具调度。</span>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-purple-400 block mb-0.5">Gemini 3.1 Flash-Lite / Qwen-Turbo</span>
                      <span className="text-slate-400">超高并发吞吐与极致性价比，承接后台批量打分与遥测数据预热过滤。</span>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-blue-400 block mb-0.5">Gemini 3.5 / 3.6 Pro & Qwen-Max</span>
                      <span className="text-slate-400">长文本研报推导演绎、SEC 监管财报深度逻辑解构与多重因果归因。</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 支柱 2 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                      2. Agent 框架编排与工具绑定
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Neo4j 图谱 RAG 与 Google ADK Harness</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    摒弃脆弱的单纯提示词，将拓扑图论与确定性代码工具调用深度绑定：
                  </p>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-cyan-400 block mb-1">🌐 Neo4j Graph RAG (2-Hop 产业链网络)</span>
                      <p className="text-slate-400">自动执行 Cypher 2-Hop 图谱扩展（如 NVDA ➔ 台积电 ➔ ASML），直接将上下游产业链关系网注入智能体推理引擎。</p>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-indigo-400 block mb-1">📊 强制技术面指标客观绑定</span>
                      <p className="text-slate-400">强制计算并返回真实 OHLCV、VWAP、RSI(14) 及均线指标，绝不允许语言模型凭空臆测盘面。</p>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-blue-400 block mb-1">✦ 零数值幻觉工具调用</span>
                      <p className="text-slate-400">硬性对接 Python 确定性财务分析工具，所有 17 季度财务指标皆由代码计算并以严格 Pydantic 规范输出。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 支柱 3 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20">
                      3. 六重 SRE 自愈运维循环
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">MAPE-K 自动化闭环自我修复</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    彻底告别人工守盯日志，系统具备自主感知、分析诊断、决策与修复能力：
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">1. Schema 自省修复</span>
                      <span className="text-slate-400">捕获输出解析异常，自动注入错误栈并触发模型针对性自纠正。</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">2. 熔断与断路保护</span>
                      <span className="text-slate-400">上游 API 故障时自动切入降级缓存，保护系统核心业务不受影响。</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">3. 缓存主动预热</span>
                      <span className="text-slate-400">定时调度器于访问洪峰来临前提前预热高频热点研报与行情。</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">4. 策略胜率回测</span>
                      <span className="text-slate-400">T+5 周期全自动对比预测与实际走势，自动化校准提示词权值。</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">5. SRE 根因自愈告警</span>
                      <span className="text-slate-400">Webhooks 告警直接附带可执行代码修复补丁方案与根因排查报告。</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-700/50">
                      <span className="font-bold text-emerald-400 block mb-0.5">6. 金丝雀自动回滚</span>
                      <span className="text-slate-400">新版本发布一旦超出错误预算阈值，无条件毫秒级回滚到稳定版本。</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 支柱 4 */}
              <div className="bg-slate-800/80 border border-slate-700/70 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                      4. 零信任 AI 安全防线
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">云原生零信任边界与注入防御</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    全面符合金融级数据安全合规要求，彻底杜绝数据泄露与提示词注入风险：
                  </p>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start space-x-3">
                      <Lock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-purple-300 block">Keyless IAM 免密钥认证</span>
                        <span className="text-slate-400">全面淘汰静态私钥文件，采用云原生原生身份凭证（ADC/RAM 角色）动态授权。</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start space-x-3">
                      <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-cyan-300 block">全局敏感数据实时脱敏</span>
                        <span className="text-slate-400">统一的日志与请求拦截层，全自动脱敏识别 JWT、API 密钥与专有客户标识。</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-start space-x-3">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-300 block">强类型结构化 Schema 验证</span>
                        <span className="text-slate-400">使用严格 Pydantic 校验输入输出格式，全链路封堵间接提示词注入攻击向量。</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 真实生产基准指标对照表 */}
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <TrendingUp className="w-6 h-6 text-emerald-400 mr-3" />
                    生产环境性能与可靠性基准实测数据
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    源自万跑科技真实云端线上集群的实测监控指标
                  </p>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/30 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  CI/CD 集成测试套件 100% 通过
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="py-3.5 px-4">核心性能指标</th>
                      <th className="py-3.5 px-4">生产基准测试结果</th>
                      <th className="py-3.5 px-4">底层架构实现机理</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50 text-sm text-slate-300">
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">首字响应时间 (TTFT)</td>
                      <td className="py-4 px-4 font-bold text-emerald-400">&lt; 450 ms</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">HTTP/2 + FastAPI StreamingResponse 分块 SSE 流式管道</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">Serverless 容器冷启动</td>
                      <td className="py-4 px-4 font-bold text-cyan-400">&lt; 1.8 s</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">精简 Python 3.11-slim 基础镜像与延迟懒加载 SDK 导入设计</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">基准闲置成本</td>
                      <td className="py-4 px-4 font-bold text-purple-400">¥0 / 月</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">Cloud Run / Serverless 函数计算缩容至零，无流量时不占用任何计费资源</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-white">数值幻觉消除率</td>
                      <td className="py-4 px-4 font-bold text-emerald-400">100% 确定性真实</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">通过强类型函数工具计算真实财务与盘面指标，杜绝语言模型自行编造数字</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 关于我们与创始人背景 */}
        <section id="about" className="py-24 bg-gradient-to-b from-gray-50/70 via-white to-gray-50/50 border-t border-gray-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold mb-4 border border-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>战略技术领导力与全栈工程落地视野</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                万跑科技背后的架构领导力
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                将前瞻的商业战略构想与严谨的生产级工程实践紧密结合，贯穿企业级 AI、量化金融、地球遥感与耐力运动科技。
              </p>
            </div>

            {/* 创始人核心档案卡片 */}
            <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden mb-16 hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-0">
                {/* 照片展示栏 */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="relative group mb-6">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500"></div>
                      <img 
                        src="/alex-wan.jpg" 
                        alt="Alex Wan - 万跑科技创始人与首席架构师" 
                        className="relative w-64 h-80 sm:w-72 sm:h-96 object-cover object-top rounded-2xl shadow-2xl border-2 border-white/20"
                      />
                      <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/10 text-center">
                        <span className="text-[11px] font-mono font-bold text-cyan-300 flex items-center justify-center space-x-1.5">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>创始人 & 战略 IT 高管 / 首席架构师</span>
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight">Alex Wan</h3>
                    <p className="text-indigo-200 text-xs sm:text-sm font-medium mt-1.5 max-w-xs text-center leading-relaxed">
                      万跑科技所有核心应用与在线平台均由 Alex Wan 独立架构开发
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 w-full pt-5 border-t border-slate-800">
                    <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 text-left flex items-start space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/20">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-amber-300 block mb-0.5">
                          世界马拉松大满贯六星跑者 (6-Star Finisher)
                        </span>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          🏃‍♂️ 全马跑者与超级百公里越野选手。将极致的耐力、严谨自律与充沛体能注入企业级系统架构设计中。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 履历与技术专长栏 */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-100">
                        20+ 年亚太及大中华区 IT 战略管理领导经验
                      </span>
                      <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-100">
                        企业级 AI / 大模型全栈架构师
                      </span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold border border-emerald-100">
                        跨国出海与多云安全治理
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                      深耕数字化转型 20 余年的战略 IT 高管与实战架构师
                    </h4>
                    
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      在亚太和大中华区拥有超过 20 年带领大型企业数字化转型与云计算落地的实战经验。精通将前瞻商业构想转化为生产级现代工程架构：主导企业级 AI/LLM 智能体系统设计，游刃有余地跨越中美两大主流云技术生态（Google Cloud 与阿里云）。多次带领跨国基础架构、云安全合规与软件研发团队，驱动数千万欧元的业务增长与企业敏捷创新。
                    </p>

                    <div className="space-y-3.5 mb-8">
                      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-200 transition-all flex items-start space-x-3.5">
                        <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <LineChart className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-gray-900">量化金融与智能投研系统</h5>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            主导架构 <Link to="/projects/dailystock" className="text-indigo-600 font-semibold hover:underline">DailyStock AI</Link> —— 融合 Gemini 双层推理与 17 季度 TTM 确定性量化数学，彻底解决语言模型幻觉问题。
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-cyan-200 transition-all flex items-start space-x-3.5">
                        <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Waves className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-gray-900">地球空间遥感与近海生态监测</h5>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            设计研发 <Link to="/projects/cmems" className="text-cyan-600 font-semibold hover:underline">CMEMS 海洋生态雷达</Link> —— 基于云原生 Python NetCDF 4D 栅格切片与自动化缺氧、赤潮灾害早期预警算法。
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-200 transition-all flex items-start space-x-3.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Trophy className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-gray-900">耐力运动科学与穿戴 IoT 平台</h5>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            独立架构 <Link to="/projects/rgm" className="text-emerald-600 font-semibold hover:underline">RGM 跑团系统</Link> —— 直连 Garmin/高驰设备数据，结合通义千问/DeepSeek 打造专业 Canova 周期化训练与赛后战术深度点评。
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-200 transition-all flex items-start space-x-3.5">
                        <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-gray-900">跨境多云治理与零信任安全</h5>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            深度精通跨越中美两大区域的混合云合规治理体系，贯彻 Keyless IAM 认证标准与 MAPE-K 自愈运维循环。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 案例入口与行动链接 */}
                  <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    <Link
                      to="/projects/dailystock"
                      className="inline-flex items-center px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition duration-200 shadow-sm group"
                    >
                      <LineChart className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
                      <span>DailyStock 案例剖析</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-white transition-colors" />
                    </Link>

                    <Link
                      to="/projects/cmems"
                      className="inline-flex items-center px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs rounded-xl transition duration-200 shadow-sm group"
                    >
                      <Waves className="w-3.5 h-3.5 mr-1.5 text-cyan-200" />
                      <span>CMEMS 雷达案例剖析</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 text-cyan-200 group-hover:text-white transition-colors" />
                    </Link>

                    <Link
                      to="/projects/rgm"
                      className="inline-flex items-center px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition duration-200 shadow-sm group"
                    >
                      <Trophy className="w-3.5 h-3.5 mr-1.5 text-emerald-200" />
                      <span>RGM 跑团系统案例</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 text-emerald-200 group-hover:text-white transition-colors" />
                    </Link>

                    <a
                      href="#contact"
                      className="inline-flex items-center px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs rounded-xl transition duration-200"
                    >
                      <Mail className="w-3.5 h-3.5 mr-1.5 text-gray-600" />
                      <span>联系技术专家团队</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 公司基石柱石 */}
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
              <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">
                  全球与本土双轨云架构实力
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  不仅精通 Google Cloud Platform 与 Gemini 前沿大模型体系为出海赋能，同时深耕阿里云与通义千问等国内合规云原生环境，保障业务双轨无缝平稳运行。
                </p>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">
                  SRE 自动化自愈与企业高可用保障
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  首创六重 MAPE-K 自愈运维控制闭环、知识图谱 RAG 与零信任安全治理，提供具备真正工业级稳定性的 7x24 不间断智能体系统。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 常见问题解答 (FAQ) */}
        <section id="faq" className="py-24 bg-white border-t border-gray-100 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>知识解答与权威事实查证</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                常见问题解答 (FAQ)
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                关于万跑科技 Agentic AI 生产级落地架构、金融量化模型、卫星遥感与跨国云工程的直接解答。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-indigo-300 transition-all shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                  <span className="text-indigo-600 font-mono text-base font-bold shrink-0 mt-0.5">Q1.</span>
                  <span>万跑科技（上海）有限公司的核心业务是什么？</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  万跑科技专注于为全球及本土企业提供生产级 Agentic AI 落地架构。涵盖美股量化投研终端（DailyStock）、卫星海洋遥感预警（CMEMS）及耐力运动穿戴智能平台（RGM），同时提供大模型微调、跨大多云架构与 SRE 自动化自愈运维方案。
                </p>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-indigo-300 transition-all shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                  <span className="text-indigo-600 font-mono text-base font-bold shrink-0 mt-0.5">Q2.</span>
                  <span>DailyStock 如何在金融模型中彻底消除数值幻觉？</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  DailyStock 严格隔离了数学计算与语言模型推理。所有 17 季度 TTM 财报估值、VWAP、RSI(14) 均由 NumPy 和 Pydantic V2 严格执行确定性真实计算，0% 由语言模型捏造。Gemini 3.5 仅专门用于长文本质性催化剂逻辑归因。
                </p>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-indigo-300 transition-all shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                  <span className="text-indigo-600 font-mono text-base font-bold shrink-0 mt-0.5">Q3.</span>
                  <span>CMEMS 系统如何处理卫星地球遥感数据？</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  CMEMS 采用容器化 Python 3.11 Cloud Run 任务集群，结合 xarray 与 Copernicus Marine SDK 自动化切片海量 4D NetCDF 栅格（经度、纬度、深度、时间），针对海温、叶绿素与溶解氧计算滚动梯度距平，实现近海缺氧与赤潮高灵敏预警。
                </p>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-indigo-300 transition-all shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                  <span className="text-indigo-600 font-mono text-base font-bold shrink-0 mt-0.5">Q4.</span>
                  <span>RGM 系统如何跨区域接入专业运动手表数据？</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  RGM 部署于阿里云高可用容器与函数计算架构上。通过 OAuth2 Webhook 接入 Garmin Health API、高驰及苹果健康接口，实时解析二进制 FIT/TCX 文件，计算冲量负荷 TRIMP 与心率漂移，并由通义千问/DeepSeek 生成赛后专业战术复盘。
                </p>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-indigo-300 transition-all shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                  <span className="text-indigo-600 font-mono text-base font-bold shrink-0 mt-0.5">Q5.</span>
                  <span>谁是 Alex Wan？</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Alex Wan 是万跑科技的创始人与首席架构师，拥有 20 余年亚太及大中华区企业级 IT 战略管理与云架构研发经验。同时他也是世界马拉松大满贯六星跑者（6-Star Finisher）与百公里超级越野选手，DailyStock、CMEMS 及 RGM 均由其独立主导研发。
                </p>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-indigo-300 transition-all shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                  <span className="text-indigo-600 font-mono text-base font-bold shrink-0 mt-0.5">Q6.</span>
                  <span>万跑科技支持哪些云生态与大模型部署方式？</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  我们原生支持全球出海体系（Google Cloud 与 Gemini 前沿模型）与国内本土合规体系（阿里云与通义千问 Qwen、DeepSeek），同时支持为大型企业提供专网 VPC 隔离私有化部署及零信任安全加固。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 联络与页脚 */}
      <footer id="contact" className="bg-gray-900 text-white py-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">开启您的企业级 Agentic AI 转型</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto [text-wrap:balance]">
            联系万跑科技架构专家团队，我们将为您评估最适合您的全球出海或本土私有化 AI 落地架构。
          </p>
          <div className="inline-flex flex-col sm:flex-row justify-center items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg mb-16">
            <a href="mailto:general@vanpower.net" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>general@vanpower.net</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 mb-8">
            <Link to="/projects/dailystock" className="hover:text-white transition-colors">
              DailyStock AI 量化案例
            </Link>
            <span className="text-gray-700">·</span>
            <Link to="/projects/cmems" className="hover:text-white transition-colors">
              CMEMS 海洋生态雷达案例
            </Link>
            <span className="text-gray-700">·</span>
            <Link to="/projects/rgm" className="hover:text-white transition-colors">
              RGM 跑团训练系统案例
            </Link>
            <span className="text-gray-700">·</span>
            <a href="/gems_architecture_presentation.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              架构白皮书
            </a>
            <span className="text-gray-700">·</span>
            <a href="#faq" className="hover:text-white transition-colors">
              常见问题
            </a>
            <span className="text-gray-700">·</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors font-medium">
              llms.txt
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

      {/* 架构白皮书弹窗 */}
      <WhitePaperModal
        isOpen={showPresentationModal}
        onClose={() => setShowPresentationModal(false)}
      />
    </div>
  );
}

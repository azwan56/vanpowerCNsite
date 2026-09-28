import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Presentation,
  Lock,
  Compass,
  Zap,
  TrendingUp,
  Layers,
  Terminal,
  Workflow,
  Cpu,
  Bot,
  Radio,
  Building2,
  Truck,
  Coins,
  ShieldCheck,
  BarChart3,
  Waves,
  Trophy
} from 'lucide-react';
import WhitePaperModal from '../components/WhitePaperModal';

export default function DailyStockPage() {
  const [dailyStockTab, setDailyStockTab] = useState<'compass' | 'playbook' | 'macro' | 'screener'>('compass');
  const [showPresentationModal, setShowPresentationModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* 顶部粘性项目导航栏 */}
      <nav className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* 左侧：返回首页与品牌 */}
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>返回首页</span>
            </Link>
            <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>
            <Link to="/" className="hidden sm:flex items-center space-x-2">
              <img src="/vanpower-logo.png" alt="万跑科技 Logo" className="w-6 h-6 rounded-lg bg-white p-0.5" />
              <span className="text-xs font-bold text-slate-300 tracking-wider">VANPOWER 万跑科技</span>
            </Link>
          </div>

          {/* 中间：快速项目切换器 */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-medium">
            <Link
              to="/projects/dailystock"
              className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40 flex items-center space-x-1.5"
            >
              <BarChart3 className="w-3 h-3 text-indigo-400" />
              <span>DailyStock AI</span>
            </Link>
            <Link
              to="/projects/cmems"
              className="px-3 py-1 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
            >
              <Waves className="w-3 h-3 text-cyan-400" />
              <span>CMEMS 海洋生态雷达</span>
            </Link>
            <Link
              to="/projects/rgm"
              className="px-3 py-1 rounded-lg text-slate-400 hover:text-emerald-300 hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
            >
              <Trophy className="w-3 h-3 text-emerald-400" />
              <span>RGM 跑团训练系统</span>
            </Link>
          </div>

          {/* 右侧：操作按钮 */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => setShowPresentationModal(true)}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5 text-indigo-400" />
              <span>技术白皮书</span>
            </button>
            <a
              href="https://dailystock.vanpower.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-500/20"
            >
              <span>启动投研终端</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* 主体内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* 面包屑导航 */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono mb-6">
          <Link to="/" className="hover:text-indigo-400 transition-colors">首页</Link>
          <span>/</span>
          <span className="text-slate-400">旗舰落地案例</span>
          <span>/</span>
          <span className="text-indigo-400 font-bold">DailyStock AI</span>
        </div>

        {/* 头部横幅 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold mb-4 border border-indigo-500/30">
              <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
              <span>旗舰级 AI 生产级落地应用 · 华尔街智能投研</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              DailyStock AI — 华尔街机构级量化投研终端
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              基于 Google Gemini 3.5 双层推理引擎的美股每日智能投研系统。端到端自动化整合盘前催化剂归因、多因子量化估值及美东 9:30 开盘战术指南，确保 0% 数值逻辑幻觉。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://dailystock.vanpower.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold rounded-2xl transition duration-300 shadow-xl shadow-indigo-500/25 group"
            >
              <span>打开 DailyStock 投研终端</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => setShowPresentationModal(true)}
              className="inline-flex items-center px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-800 transition duration-200 cursor-pointer text-sm"
            >
              <Presentation className="w-4 h-4 mr-2 text-indigo-400" />
              <span>查看系统架构白皮书</span>
            </button>
          </div>
        </div>

        {/* 交互式工作台工作流展示窗口 */}
        <div className="max-w-6xl mx-auto relative rounded-3xl border border-indigo-500/30 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl mb-16">
          {/* 四角科技感边角 */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-400 pointer-events-none z-20"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-indigo-400 pointer-events-none z-20"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-indigo-400 pointer-events-none z-20"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-400 pointer-events-none z-20"></div>

          {/* Mac 风格窗口标题栏 */}
          <div className="px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            {/* 左侧控制圆点 */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                DailyStock AI 机构级美股量化策略工作台
              </span>
            </div>

            {/* 中间视图切换 Tab */}
            <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setDailyStockTab('compass')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  dailyStockTab === 'compass'
                    ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                <span>盘面罗盘与深度研报</span>
              </button>
              <button
                onClick={() => setDailyStockTab('playbook')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  dailyStockTab === 'playbook'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>9:30 开盘战术指南</span>
              </button>
              <button
                onClick={() => setDailyStockTab('macro')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  dailyStockTab === 'macro'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>宏观策略与仓位建议</span>
              </button>
              <button
                onClick={() => setDailyStockTab('screener')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  dailyStockTab === 'screener'
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Alpha 量化选股器</span>
              </button>
            </div>

            {/* 右侧在线链接 */}
            <div className="flex items-center space-x-2">
              <a
                href="https://dailystock.vanpower.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-indigo-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Lock className="w-3 h-3 text-indigo-400" />
                <span>dailystock.vanpower.live</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 截图展示框架 */}
          <div className="relative bg-slate-950 overflow-hidden">
            <img
              src={
                dailyStockTab === 'compass'
                  ? '/dailystock-market-compass.png'
                  : dailyStockTab === 'playbook'
                  ? '/dailystock-opening-playbook.png'
                  : dailyStockTab === 'macro'
                  ? '/dailystock-macro-strategy.png'
                  : '/dailystock-quant-screener.png'
              }
              alt={
                dailyStockTab === 'compass'
                  ? 'DailyStock AI 实时市场罗盘与英伟达深度研报'
                  : dailyStockTab === 'playbook'
                  ? 'DailyStock 9:30 开盘战术指南与异动放量'
                  : dailyStockTab === 'macro'
                  ? 'DailyStock 盘前宏观策略专线与仓位敞口指引'
                  : 'DailyStock 多模型 Alpha 量化选股器'
              }
              className="w-full h-auto object-cover object-top"
              loading="lazy"
              decoding="async"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />

            {/* 悬浮指示标签 */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-indigo-500/40 text-xs font-mono text-indigo-300 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                <span>
                  {dailyStockTab === 'compass'
                    ? 'Google Gemini 3.5 量化 AI · NVDA 91% 确信度 · 实时市场罗盘'
                    : dailyStockTab === 'playbook'
                    ? '9:30 开盘战术 · 3:1 盈亏比关键防守位 · VWAP 战术推演'
                    : dailyStockTab === 'macro'
                    ? '盘前宏观专线 · 推荐仓位 50%-60% · 收益率利差 -0.12%'
                    : 'Alpha 量化选股器 · 多模型共振 · 市盈率 < 15 & 自由现金流收益率 > 5%'}
                </span>
              </div>
            </div>
          </div>

          {/* 底部真实生产遥测指标栏 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-900/80 border-t border-slate-800/90 font-mono text-left">
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span>AI 深度研报与共识</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-indigo-300">NVDA $225.07 [强烈买入 91%]</div>
              <div className="text-[10px] text-slate-400 mt-0.5">目标价 $152 (+21.1%) · 华尔街: 38 买入 / 3 持有</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>9:30 开盘战术指南</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-amber-300">MSFT $500.68 · TSLA $220</div>
              <div className="text-[10px] text-slate-400 mt-0.5">3:1 盈亏比 · VWAP 防守与轧空点位</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>宏观风险与仓位指引</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-cyan-300">推荐股票敞口: 50%-60%</div>
              <div className="text-[10px] text-slate-400 mt-0.5">10Y-2Y 倒挂利差: -0.12% · 市场广度: 62%</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>多因子量化选股矩阵</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-400">超级选股器多因子共振</div>
              <div className="text-[10px] text-slate-400 mt-0.5">深度价值 / 行业巨头 / 创新成长 · 0% 幻觉</div>
            </div>
          </div>
        </div>

        {/* 核心功能卡片网格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-20">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">盘面罗盘与深度研报</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              实时追踪标普 500、纳斯达克、道指及波动率 VIX。Google Gemini 3.5 确定性融合华尔街机构评级与空头持仓比例，生成 91% 高确信度单票深度投研报告。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">9:30 开盘战术指南</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              为保守、稳健与进取三类交易风格量身定制执行方案。精确计算关键防守支撑与第一目标压力位，指导机构级 3:1 盈亏比开盘布局。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">宏观策略与仓位敞口</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              实时解构美债 10Y-2Y 倒挂利差、FRED 美联储流动性指标、62% 市场广度扩散与 WSB 散户逼空动能，动态推荐投资组合股票仓位敞口。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Alpha 量化选股矩阵</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              跨越深度价值（市盈率 &lt; 15，自由现金流收益率 &gt; 5%）、行业巨擘及高成长创新赛道执行多因子共振筛选，严格依托 Pydantic V2 实现 0% 数值幻觉。
            </p>
          </div>
        </div>

        {/* DailyStock 技术架构剖析 */}
        <div className="mt-16 pt-16 border-t border-slate-800/80 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-semibold mb-3 border border-indigo-500/20">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>技术架构深度剖析</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                专为极低延迟、流式传输与零数值幻觉打造
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              DailyStock 通过将确定性 Python 量化计算流水线、双层 Gemini 推理网络与服务端无头画布光栅化相结合，彻底攻克金融大语言模型的落地瓶颈。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">1. 异步行情采集引擎</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  基于 Python 3.11 + FastAPI 构建的高性能非阻塞异步并发管道。全并行聚合分钟级实时行情流、Finviz 空头持仓、FRED 宏观利率与 SEC EDGAR 财报披露。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-indigo-400">
                FastAPI · 异步协程 · 实时轮询
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">2. 确定性量化数学引擎</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  严格采用真实代码计算过去 17 个季度 TTM 财务指标、VWAP 成交量加权平均价、RSI(14) 与均线指标。强约束 Pydantic V2 禁止模型近似猜测数值。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400">
                Pydantic V2 · NumPy · 17 季 TTM
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">3. 双层 Gemini 推理路由</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Gemini Flash 毫秒级执行快讯事实提取与标的映射，Gemini 3.5 旗舰模型专门处理多重催化剂深度因果归因、长文本财报解构与情景推演。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-purple-400">
                Gemini 3.5 · Flash · 工具调用
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">4. 服务端画布与自动分发</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  通过服务端无头 HTML5 Canvas 光栅化生成 1800x2400 超清结构化数据卡片。Cloud Scheduler 自动化驱动晨间 Discord 频道与邮件推送。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
                HTML5 Canvas · Webhook · SRE
              </div>
            </div>
          </div>
        </div>

        {/* DailyStock 可扩展企业应用场景 */}
        <div className="mt-16 pt-16 border-t border-slate-800/80 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-xs font-semibold mb-3 border border-emerald-500/20">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>跨行业场景延展</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              可横向扩展的企业级目标业务场景
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              支撑 DailyStock 的多源异构数据摄取、确定性数值计算与多智能体归因体系，可迅速无缝适配至各行业关键决策场景：
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">企业竞争情报与动态追踪</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  全自动、全天候采集竞对监管披露、专利公开、核心管理层人事变动及业绩电话会转录文本。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-indigo-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">为董事会与战略决策层自动生成具备战略异动感知的周度简报。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">供应链与大宗商品风险感知</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  实时融合海运集装箱运价指数、港口拥堵遥测、上游原材料大宗期货盘面与核心供应商信用健康状况。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-amber-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">提前 30 天预警核心元器件断供瓶颈与企业毛利率承压风险。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Coins className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">数字资 challenge 与量化风控监测</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  高频追踪链上流动性池动态、聪明钱巨鲸地址流向、主流交易所储备金变动与协议治理提案。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-cyan-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">机构级风险遥测，毫秒级预警流动性枯竭与脱锚潜在风险。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">监管政策动态与合规风险研判</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  自动化抓取与归纳央行利率决议、反垄断监管机构通告、跨国贸易关税调整及 ESG 绿色合规审计标准。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-emerald-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">将海量宏观政策影响快速映射至企业内部风控风险矩阵中。</span>
              </div>
            </div>
          </div>
        </div>

        {/* 下一个案例导航栏 */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              下一个旗舰落地案例
            </span>
            <h4 className="text-2xl font-bold text-white mb-1">
              CMEMS 海洋生态雷达 — 近海海洋生态遥感预警系统
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              欧盟 Copernicus 卫星遥感与 4D NetCDF 海洋栅格切片，实现近海缺氧与赤潮灾害的全自动监测预警。
            </p>
          </div>
          <Link
            to="/projects/cmems"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-600/20 shrink-0"
          >
            <span>探索 CMEMS 海洋生态雷达</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* 底部版权栏 */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 text-white font-bold">
              <img src="/vanpower-logo.png" alt="万跑科技 Logo" className="w-6 h-6 rounded-md bg-white p-0.5" />
              <span>万跑科技（上海）有限公司</span>
            </Link>
            <span>· 企业级 Agentic AI 落地系统</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-white transition-colors">首页</Link>
            <Link to="/projects/dailystock" className="text-indigo-400 font-semibold">DailyStock AI</Link>
            <Link to="/projects/cmems" className="hover:text-white transition-colors">CMEMS 海洋生态雷达</Link>
            <Link to="/projects/rgm" className="hover:text-white transition-colors">RGM 跑团训练系统</Link>
          </div>
        </div>
      </footer>

      {/* 架构技术白皮书弹窗 */}
      <WhitePaperModal
        isOpen={showPresentationModal}
        onClose={() => setShowPresentationModal(false)}
      />
    </div>
  );
}

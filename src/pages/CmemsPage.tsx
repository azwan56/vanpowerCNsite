import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Presentation,
  Lock,
  Waves,
  Satellite,
  BarChart3,
  Trophy,
  AlertTriangle,
  Fish,
  LineChart,
  Bot,
  Terminal,
  Cpu,
  Layers,
  Workflow,
  Compass,
  Sprout,
  Flame,
  Factory
} from 'lucide-react';
import WhitePaperModal from '../components/WhitePaperModal';

export default function CmemsPage() {
  const [cmemsViewTab, setCmemsViewTab] = useState<'radar' | 'satellite'>('radar');
  const [showPresentationModal, setShowPresentationModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-white">
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
              className="px-3 py-1 rounded-lg text-slate-400 hover:text-indigo-300 hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
            >
              <BarChart3 className="w-3 h-3 text-indigo-400" />
              <span>DailyStock AI</span>
            </Link>
            <Link
              to="/projects/cmems"
              className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 flex items-center space-x-1.5"
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
              <Presentation className="w-3.5 h-3.5 text-cyan-400" />
              <span>技术白皮书</span>
            </button>
            <a
              href="https://cmems.vanpower.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-cyan-600/20"
            >
              <span>启动生态雷达</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* 主体内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* 面包屑导航 */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono mb-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">首页</Link>
          <span>/</span>
          <span className="text-slate-400">旗舰落地案例</span>
          <span>/</span>
          <span className="text-cyan-400 font-bold">CMEMS 海洋生态雷达</span>
        </div>

        {/* 头部横幅 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold mb-4 border border-cyan-500/30">
              <Waves className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>地球空间遥感与环境 AI · 欧盟 Copernicus 卫星生态</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              CMEMS 海洋生态雷达 — 近海生态遥感预警系统
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              深度集成欧盟 Copernicus 海洋服务局（CMEMS）、Google Gemini 3.5 AI 及 GCP Cloud Run Jobs。全自动切片 4D NetCDF 栅格数据，实时预警近海缺氧与赤潮灾害。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://cmems.vanpower.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-2xl transition duration-300 shadow-xl shadow-cyan-600/25 group"
            >
              <span>打开 CMEMS 生态雷达</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={() => setShowPresentationModal(true)}
              className="inline-flex items-center px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-800 transition duration-200 cursor-pointer text-sm"
            >
              <Presentation className="w-4 h-4 mr-2 text-cyan-400" />
              <span>查看系统架构白皮书</span>
            </button>
          </div>
        </div>

        {/* 交互式工作台窗口 */}
        <div className="max-w-6xl mx-auto bg-slate-950 border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden relative group hover:border-cyan-400/70 transition-all duration-300 mb-16">
          {/* 四角边角点缀 */}
          <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-sm pointer-events-none z-20"></div>
          <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/70 rounded-tr-sm pointer-events-none z-20"></div>
          <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400/70 rounded-bl-sm pointer-events-none z-20"></div>
          <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400/70 rounded-br-sm pointer-events-none z-20"></div>

          {/* 窗口顶部标题栏 */}
          <div className="bg-slate-900/90 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 pl-2 border-l border-slate-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  实时卫星雷达遥测数据流
                </span>
              </div>
            </div>

            {/* 中间模式切换 Tabs */}
            <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setCmemsViewTab('radar')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  cmemsViewTab === 'radar'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Waves className="w-3.5 h-3.5 text-cyan-400" />
                <span>生态雷达与赤潮预警看板</span>
              </button>
              <button
                onClick={() => setCmemsViewTab('satellite')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  cmemsViewTab === 'satellite'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Satellite className="w-3.5 h-3.5 text-teal-400" />
                <span>多光谱卫星 GIS 遥感图层</span>
              </button>
            </div>

            {/* 右侧在线链接 */}
            <div className="flex items-center space-x-2">
              <a
                href="https://cmems.vanpower.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-cyan-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Lock className="w-3 h-3 text-cyan-400" />
                <span>cmems.vanpower.live</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 截图展示框架 */}
          <div className="relative bg-slate-950 overflow-hidden">
            <img
              src={cmemsViewTab === 'radar' ? '/cmems-radar-dashboard.png' : '/cmems-satellite-layer.jpg'}
              alt={cmemsViewTab === 'radar' ? 'CMEMS 海洋生态雷达预警系统终端' : 'CMEMS 卫星遥感地理图层'}
              className="w-full h-auto object-cover object-top"
              loading="lazy"
              decoding="async"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />

            {/* 悬浮标签 */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>
                  {cmemsViewTab === 'radar' 
                    ? '11 个近海环境异常追踪器持续运行中' 
                    : 'Sentinel 多光谱与近海矢量底图'}
                </span>
              </div>
            </div>
          </div>

          {/* 底部生产遥测指标栏 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-900/80 border-t border-slate-800/90 font-mono text-left">
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>赤潮与富营养化阈值</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-amber-300">8.87 mg/m³ [超限预警]</div>
              <div className="text-[10px] text-slate-400 mt-0.5">阈值: &gt;3.0 偏离异常 / &gt;8.0 赤潮告警</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>气候波动与海洋热浪</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-rose-400">+2.69 °C (超强厄尔尼诺)</div>
              <div className="text-[10px] text-slate-400 mt-0.5">海洋厄尔尼诺指数 (ONI) 持续跟踪</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>核心监控海域坐标</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-cyan-300">31.5000°N, 122.0000°E</div>
              <div className="text-[10px] text-slate-400 mt-0.5">长江口水域 (距上海约 58.3 km)</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>自动化处理引擎底座</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-400">Gemini 3.5 AI + xarray</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Cloud Run Jobs NetCDF 4D 空间切片</div>
            </div>
          </div>
        </div>

        {/* 核心能力卡片网格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-20">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">赤潮爆发与藻华早期预警</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              基于 Copernicus 卫星高频追踪海表叶绿素浓度（Chl-a）距平偏离。在近海发生肉眼可见的水体富营养化前，自动化识别浮游植物爆发趋势。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Fish className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">底层缺氧与水产养殖护航</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              实时计算近海水产养殖区海底溶解氧水平（&lt; 2.0 mg/L 缺氧阈值）。为高经济价值海洋牧场提供自动化的灾害防护告警推送。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <LineChart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">7 天回顾态势曲线追踪</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              交互式 Leaflet GIS 地图工作台，融合过去 7 天连续距平推演曲线、海洋厄尔尼诺指数（ONI）关联与海洋热浪实时监测图层。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Gemini 3.5 AI 深度因果归因</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              多模态遥感智能体融合洋流流速、温跃层垂直分层与沿海入海径流量，自动生成具备专业科学指导意义的防灾应对研判简报。
            </p>
          </div>
        </div>

        {/* CMEMS 技术架构剖析 */}
        <div className="mt-16 pt-16 border-t border-slate-800/80 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-semibold mb-3 border border-cyan-500/20">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>地球遥感大数据工程</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              云原生地球空间信息大数据处理引擎
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              解析我们如何将数十吉字节的原始卫星多维矩阵数据，转化为毫秒级流转的动态瓦片图层与自动化告警服务：
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Satellite className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">1. Copernicus NetCDF 管道</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  通过 Copernicus Marine SDK 和 Python <code className="text-cyan-400 font-mono">xarray</code> 全自动拉取多维 NetCDF4 数据集。精准切片海表温度、叶绿素-a 与溶解氧的 4D 空间矩阵（纬度、经度、深度、时间）。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400">
                Python 3.11 · xarray · NetCDF4
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-teal-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">2. 空间距平数学计算引擎</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  零幻觉的严格统计空间滤波算法。计算滚动基准梯度、叶绿素距平标准差以识别有害藻华（HAB），并对海洋牧场底栖缺氧界限（&lt; 2.0 mg/L）执行高灵敏度裁剪。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-teal-400">
                NumPy · SciPy · 缺氧 &lt; 2.0 mg/L
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">3. Next.js 16 GIS 画布</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  客户端渲染的 Leaflet 深色主题 GIS 界面，叠加 GeoJSON 沿海测深底图、动态色带光栅热力图，并由 Recharts 驱动站点级环境遥测 7 天回顾时序分析。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-blue-400">
                Next.js 16 · Leaflet · GeoJSON · Recharts
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">4. 零闲置成本 Cloud Run Jobs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  基于容器化的 Cloud Run Jobs 与定时调度器，构建零闲置费用的弹性 Serverless 执行框架。自动同步计算指标至 Firestore 并在突破阈值时触发实时告警。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-indigo-400">
                Cloud Run Jobs · Firestore · 告警推送
              </div>
            </div>
          </div>
        </div>

        {/* CMEMS 可扩展卫星遥感场景 */}
        <div className="mt-16 pt-16 border-t border-slate-800/80 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-xs font-semibold mb-3 border border-teal-500/20">
              <Compass className="w-3.5 h-3.5 text-teal-400" />
              <span>地球遥感技术延展</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              可横向扩展的地球空间遥感应用场景
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              支撑 CMEMS 的高吞吐栅格切片、空间距平识别与自动化告警引擎，可迅速复用于其他关键地球观测与卫星遥感应用：
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sprout className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">智慧农业与作物长势监测</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  接入 Sentinel-2 多光谱 10 米分辨率波段，计算 NDVI、NDRE 与 EVI 植被指数，地块级评估作物长势、旱情缺水并优化施肥建议。
                </p>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span className="text-[11px] font-bold text-emerald-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">肉眼不可见的早期旱情识别与精准变量化肥施用决策图。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">森林野火与热异常早期预警</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  结合 MODIS 与 VIIRS 活跃火红外波段持续监测地表热异常，配合高分辨率燃料湿度模型与实时风场向量预报蔓延方向。
                </p>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span className="text-[11px] font-bold text-amber-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">亚小时级火势蔓延预测与精准疏散隔离区划定支撑。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Factory className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">工业碳排放与气体泄漏遥感</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  运用 Sentinel-5P TROPOMI 光谱仪监测炼化厂与能源管线对流层甲烷（CH4）、二氧化氮（NO2）及二氧化硫（SO2）浓度柱密度。
                </p>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span className="text-[11px] font-bold text-indigo-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">独立第三方的实测 ESG 达标核验与逸散泄漏点精确定位。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Fish className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">智慧海洋牧场与港湾通航安全</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  多传感器融合监测近岸浊度、海表盐度、波浪潮流漂移向量与深海网箱/航道周边的溢油漂移轨迹。
                </p>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <span className="text-[11px] font-bold text-cyan-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">前置预防养殖生物资产损失与海事环境监管审计追溯。</span>
              </div>
            </div>
          </div>
        </div>

        {/* 下一个案例导航栏 */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
              下一个旗舰落地案例
            </span>
            <h4 className="text-2xl font-bold text-white mb-1">
              RGM 跑团系统 — Renato Canova 周期化 AI 教练平台
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              阿里云原生 Serverless 架构，深度适配国内大模型（通义千问/DeepSeek），打通 Garmin 与高驰穿戴数据流的专业跑团智能运营系统。
            </p>
          </div>
          <Link
            to="/projects/rgm"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-600/20 shrink-0"
          >
            <span>探索 RGM 跑团训练系统</span>
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
            <span>· 地球遥感与空间 AI 落地系统</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-white transition-colors">首页</Link>
            <Link to="/projects/dailystock" className="hover:text-white transition-colors">DailyStock AI</Link>
            <Link to="/projects/cmems" className="text-cyan-400 font-semibold">CMEMS 海洋生态雷达</Link>
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

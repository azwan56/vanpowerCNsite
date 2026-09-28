import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Presentation,
  Lock,
  Sparkles,
  Calendar,
  Bot,
  Trophy,
  Watch,
  BarChart3,
  Waves,
  Terminal,
  HeartPulse,
  Cloud,
  Compass,
  Users,
  ShieldCheck
} from 'lucide-react';
import WhitePaperModal from '../components/WhitePaperModal';

export default function RgmPage() {
  const [rgmViewTab, setRgmViewTab] = useState<'plan' | 'debrief' | 'leaderboard' | 'portal'>('plan');
  const [showPresentationModal, setShowPresentationModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500 selection:text-white">
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
              className="px-3 py-1 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
            >
              <Waves className="w-3 h-3 text-cyan-400" />
              <span>CMEMS 海洋生态雷达</span>
            </Link>
            <Link
              to="/projects/rgm"
              className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 flex items-center space-x-1.5"
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
              <Presentation className="w-3.5 h-3.5 text-emerald-400" />
              <span>技术白皮书</span>
            </button>
            <a
              href="https://rgm.vanpower.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
            >
              <span>启动云端门户</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* 主体内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* 面包屑导航 */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono mb-6">
          <Link to="/" className="hover:text-emerald-400 transition-colors">首页</Link>
          <span>/</span>
          <span className="text-slate-400">旗舰落地案例</span>
          <span>/</span>
          <span className="text-emerald-400 font-bold">RGM 跑团训练系统</span>
        </div>

        {/* 头部横幅 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold mb-4 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Renato Canova 周期化理论与 AI 教练体系 · 阿里云原生生态</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              RGM — Renato Canova AI 教练与专业跑团运营系统
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              专为长跑与越野跑者打造的运动科学操作系统。依托世界传奇耐力教练 Renato Canova 的周期化训练哲学，根据跑者生理档案量身定制进阶课表，生成训练后生物力学与爬升深度复盘，原生打通 Garmin 与高驰穿戴设备生态。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://rgm.vanpower.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-2xl transition duration-300 shadow-xl shadow-emerald-600/25 group"
            >
              <span>打开 RGM 跑团云端门户</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => setShowPresentationModal(true)}
              className="inline-flex items-center px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-800 transition duration-200 cursor-pointer text-sm"
            >
              <Presentation className="w-4 h-4 mr-2 text-emerald-400" />
              <span>查看系统架构白皮书</span>
            </button>
          </div>
        </div>

        {/* 交互式工作台窗口 */}
        <div className="max-w-6xl mx-auto relative rounded-3xl border border-emerald-500/30 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl mb-16">
          {/* 四角边角点缀 */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-400 pointer-events-none z-20"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-400 pointer-events-none z-20"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-400 pointer-events-none z-20"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-400 pointer-events-none z-20"></div>

          {/* Mac 风格窗口标题栏 */}
          <div className="px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                RGM Canova AI 教练与战队运营控制台
              </span>
            </div>

            {/* 中间模式切换 Tabs */}
            <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setRgmViewTab('plan')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  rgmViewTab === 'plan'
                    ? 'bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>Canova 周期化量身定制课表</span>
              </button>
              <button
                onClick={() => setRgmViewTab('debrief')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  rgmViewTab === 'debrief'
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>训练后生物力学与 AI 战术点评</span>
              </button>
              <button
                onClick={() => setRgmViewTab('leaderboard')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  rgmViewTab === 'leaderboard'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>跑团实时里程榜与战队协同</span>
              </button>
              <button
                onClick={() => setRgmViewTab('portal')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                  rgmViewTab === 'portal'
                    ? 'bg-orange-500/20 text-orange-300 font-bold border border-orange-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Garmin 穿戴数据云端门户</span>
              </button>
            </div>

            {/* 右侧在线链接 */}
            <div className="flex items-center space-x-2">
              <a
                href="https://rgm.vanpower.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-mono text-emerald-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>rgm.vanpower.net</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 截图展示框架 */}
          <div className="relative bg-slate-950 overflow-hidden">
            <img
              src={
                rgmViewTab === 'plan'
                  ? '/rgm-canova-plan.png'
                  : rgmViewTab === 'debrief'
                  ? '/rgm-canova-debrief.png'
                  : rgmViewTab === 'leaderboard'
                  ? '/rgm-club-leaderboard.png'
                  : '/rgm-portal-landing.png'
              }
              alt={
                rgmViewTab === 'plan'
                  ? 'RGM Canova 周期化量身定制训练课表'
                  : rgmViewTab === 'debrief'
                  ? 'RGM 训练后生物力学与 AI 战术深度复盘点评'
                  : rgmViewTab === 'leaderboard'
                  ? 'RGM 月度跑团队伍里程排行榜与实战协同'
                  : 'RGM 阿里云与 Garmin 穿戴生态门户首页'
              }
              className="w-full h-auto object-cover object-top"
              loading="lazy"
              decoding="async"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />

            {/* 悬浮标签 */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>
                  {rgmViewTab === 'plan'
                    ? 'Canova 专项准备期 · 超量恢复生理模型 · 77.5 km 周课表精细拆解'
                    : rgmViewTab === 'debrief'
                    ? 'Renato Canova 专项耐力评估 · 累计爬升 D+ 632m · 48~72h 超量恢复窗口建议'
                    : rgmViewTab === 'leaderboard'
                    ? 'RGM 先锋战队 · 947.2 km 实时跑量争霸 · 戈壁挑战赛实战认证'
                    : '阿里云全栈架构 · Garmin 双区 IoT 接入 · 通义千问 Qwen / DeepSeek AI'}
                </span>
              </div>
            </div>
          </div>

          {/* 底部生产遥测指标栏 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-900/80 border-t border-slate-800/90 font-mono text-left">
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span>Canova 周期化训练日程</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-purple-300">第 3 周 · 周跑量 77.5 km</div>
              <div className="text-[10px] text-slate-400 mt-0.5">乳酸阈值 (LT2) 平台期 · 3x3000m 稳态间歇</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>训练后生物力学与爬升复盘</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-400">累计爬升 D+ 632m</div>
              <div className="text-[10px] text-slate-400 mt-0.5">离心下坡负荷监测 · 48~72h 恢复处方</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>月度跑团里程挑战赛</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-amber-300">947.2 km [竞技一队]</div>
              <div className="text-[10px] text-slate-400 mt-0.5">领跑者: 316km · 队长: 247.9km</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div className="text-[11px] text-slate-400 mb-1 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>穿戴数据与 AI 算力管线</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-cyan-300">通义千问/DeepSeek + 阿里云</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Garmin 双区 API · 微信小程序实时推送</div>
            </div>
          </div>
        </div>

        {/* 核心功能卡片网格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-20">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Canova 经典周期化训练课表</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              严格根据跑者真实生理指标（超量恢复速率、最大摄氧量、历史长距离跑量基础），量身推进 Canova 的 7 周宏观周期，有机融合 Zone 2 有氧基础与 LT2 节奏巡航。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">训练后生物力学与 AI 战术点评</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              超越简单的图表堆砌。AI 模型深度解构路段坡度影响、下坡离心微损伤负荷与高坡度快步行走（Power Hiking）神经募集，输出针对性补给与 48–72 小时超量恢复处方。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Watch className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Garmin 双区与多穿戴 IoT 数据流</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              直连佳明中国版（garmin.cn）与全球国际版 OAuth2 授权体系。亚秒级解析底层二进制 FIT 数据流，精准提取步频、触地时间、垂直振幅与海拔爬升剖面。
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">跑团运营看板与微信小程序</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              通过 6 位专属邀请码极速组建战队，基于月度完赛率与出勤率展开排行对抗。原生微信小程序界面支持滑动调整周跑量目标，生成社交分享海报。
            </p>
          </div>
        </div>

        {/* RGM 技术架构深度剖析 */}
        <div className="mt-16 pt-16 border-t border-slate-800/80 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-xs font-semibold mb-3 border border-emerald-500/20">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>穿戴物联网与云工程</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              技术架构与运动生理科学 AI 引擎
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              解析 RGM 如何将数千名跑者同时上传的原始二进制 FIT 文件，实时处理为个性化生理诊断与训练方案：
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Watch className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">1. 穿戴设备 IoT 采集监听</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  基于 OAuth2 Webhook 监听集群，自动解码来自 Garmin Health API 与高驰开发者接口的底层二进制 FIT 及 TCX 文件，实时滤除传感器噪点、GPS 漂移与异常高程数据。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
                Garmin API · 高驰 API · 二进制 FIT
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">2. 生理数学计算引擎</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  零幻觉的确定性真实计算。计算训练冲量负荷（TRIMP/TSS）、急慢性负荷比（ACWR）、心率漂移解耦（Cardiac Decoupling）及乳酸阈值配速衰减曲线。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400">
                NumPy · ACWR · TSS · 心率解耦
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">3. 阿里云 Serverless 云原生</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  基于阿里云函数计算（Function Compute）与 PolarDB Serverless 数据库，从容应对周末早晨大规模长距离训练后的瞬时数据并发冲击。边缘缓存保障排行榜毫秒级返回。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-400">
                阿里云 · 函数计算 · PolarDB
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">4. 微信原生大模型教练</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  微信小程序前端通过 SSE 流式接收由通义千问 Qwen / DeepSeek 驱动的个性化教练建议，智能评估跑者竞技状态与赛前减量建议，生成专业补水与赛后恢复处方。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-indigo-400">
                微信小程序 · 通义千问 · DeepSeek · SSE
              </div>
            </div>
          </div>
        </div>

        {/* RGM 可扩展企业级应用场景 */}
        <div className="mt-16 pt-16 border-t border-slate-800/80 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-xs font-semibold mb-3 border border-emerald-500/20">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>运动健康场景延展</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              可横向扩展的穿戴物联网与运动科学场景
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              支撑 RGM 的高并发穿戴遥测接入、生理数学引擎与微信原生 AI 教练体系，可无缝扩展至更多企业级健康与竞技领域：
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">企业员工健康管理与趣味竞赛</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  一键发起全公司范围的健步与运动打卡挑战赛，实时监测久坐健康风险，打通企业微信与钉钉组织架构。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-emerald-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">有效降低企业雇主医疗补充支出，全面激发团队协同凝聚力。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">职业运动队与高水平竞技梯队</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  高频追踪集训队队员生物力学指标，早期预警过度训练综合征（OTS），科学调控周期化负荷峰值。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-cyan-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">通过 ACWR 负荷监测降低运动伤病率，确保大赛前最佳竞技状态。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">智能穿戴设备商与健康险风控</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  基于实时生理遥测数据流构建动态健康险保费阶梯算法，并对心血管潜在突发风险执行早期生理预警。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-amber-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">精算级的大数据风险评分与自动化健康促进激励机制。</span>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">大型马拉松赛事运营与医疗救援</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  赛道全线心率异常遥测监控、环境湿球黑球温度（WBGT）热应激指数跟踪与选手密度智能急救调度。
                </p>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <span className="text-[11px] font-bold text-indigo-300 block mb-0.5">业务价值交付：</span>
                <span className="text-[11px] text-slate-400">保障万人级别马拉松赛事的医疗零重大事故与急救无人机响应。</span>
              </div>
            </div>
          </div>
        </div>

        {/* 下一个案例导航栏 */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
              下一个旗舰落地案例
            </span>
            <h4 className="text-2xl font-bold text-white mb-1">
              DailyStock AI — 华尔街机构级美股量化投研终端
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              基于 Google Gemini 3.5 双层推理引擎的美股每日量化投研系统，17 季度 TTM 严格估值，0% 数值逻辑幻觉。
            </p>
          </div>
          <Link
            to="/projects/dailystock"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-600/20 shrink-0"
          >
            <span>探索 DailyStock AI</span>
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
            <span>· 穿戴物联网与运动科学 AI 落地系统</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-white transition-colors">首页</Link>
            <Link to="/projects/dailystock" className="hover:text-white transition-colors">DailyStock AI</Link>
            <Link to="/projects/cmems" className="hover:text-white transition-colors">CMEMS 海洋生态雷达</Link>
            <Link to="/projects/rgm" className="text-emerald-400 font-semibold">RGM 跑团训练系统</Link>
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

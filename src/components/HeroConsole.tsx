import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Waves,
  Trophy,
  ShieldCheck,
  Activity,
  ArrowRight,
  ExternalLink,
  Globe,
  Server,
  Play,
  Pause,
  Terminal,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  RefreshCw,
  Compass,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface HeroConsoleProps {
  market: 'global' | 'enterprise';
  onMarketChange: (market: 'global' | 'enterprise') => void;
  onOpenWhitepaper: () => void;
}

export default function HeroConsole({
  market,
  onMarketChange,
  onOpenWhitepaper
}: HeroConsoleProps) {
  const [activeTab, setActiveTab] = useState<'dailystock' | 'cmems' | 'rgm' | 'sre'>('dailystock');
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const isHoveredRef = useRef(false);

  const tabs: Array<{
    id: 'dailystock' | 'cmems' | 'rgm' | 'sre';
    name: string;
    subname: string;
    icon: typeof BarChart3;
    color: string;
    badge: string;
    badgeColor: string;
  }> = [
    {
      id: 'dailystock',
      name: 'DailyStock 美股量化',
      subname: 'Wall St. Alpha 智能投研',
      icon: BarChart3,
      color: 'indigo',
      badge: '境外 GCP 部署',
      badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/40'
    },
    {
      id: 'cmems',
      name: 'CMEMS 海洋生态雷达',
      subname: 'Copernicus 卫星 4D 切片',
      icon: Waves,
      color: 'cyan',
      badge: '境外 GCP 部署',
      badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/40'
    },
    {
      id: 'rgm',
      name: 'RGM 跑团训练系统',
      subname: 'Canova 周期化 AI 复盘',
      icon: Trophy,
      color: 'emerald',
      badge: '国内阿里云 100% 流畅',
      badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40'
    },
    {
      id: 'sre',
      name: 'SRE 自愈控制中枢',
      subname: 'MAPE-K 自动化闭环',
      icon: ShieldCheck,
      color: 'purple',
      badge: '双轨高可用 VPC',
      badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/40'
    }
  ];

  // 自动轮播逻辑（每 5.5 秒切换一个 Tab，悬停或用户暂停时停止）
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 5500;
    const stepTime = 50;
    const stepIncrement = (stepTime / intervalTime) * 100;

    const timer = setInterval(() => {
      if (isHoveredRef.current) return;

      setProgress((prev) => {
        if (prev >= 100) {
          // 切换到下一个 Tab
          setActiveTab((currTab) => {
            const currentIndex = tabs.findIndex((t) => t.id === currTab);
            const nextIndex = (currentIndex + 1) % tabs.length;
            return tabs[nextIndex].id;
          });
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleTabClick = (tabId: 'dailystock' | 'cmems' | 'rgm' | 'sre') => {
    setActiveTab(tabId);
    setProgress(0);
  };

  return (
    <div 
      className="relative max-w-6xl mx-auto w-full my-8 text-left group"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      {/* 背景环境光晕（Ambient Aura），营造强烈的立体景深与视觉聚焦中心 */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/25 via-cyan-500/25 to-emerald-500/25 rounded-[32px] blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 -z-10"></div>

      {/* 控制台主卡片 */}
      <div className="relative rounded-3xl border border-slate-700/80 bg-slate-950/95 shadow-2xl backdrop-blur-2xl text-slate-200 overflow-hidden ring-1 ring-white/10">
        
        {/* 顶部 macOS 风格控制台标题栏 */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {/* 左侧：窗口圆点 + 系统标识 */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/40 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40 inline-block shadow-sm"></span>
            </div>
            <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-slate-300">
                VANPOWER AGENTIC CONSOLE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ONLINE · 双轨生产集群</span>
              </span>
            </div>
          </div>

          {/* 右侧：遥测指标 + 自动轮播开关 */}
          <div className="flex items-center space-x-3 text-xs font-mono text-slate-400 ml-auto">
            <div className="hidden md:flex items-center space-x-3 text-[11px]">
              <span className="flex items-center space-x-1 text-slate-400">
                <Globe className="w-3 h-3 text-indigo-400" />
                <span>GCP: 38ms</span>
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center space-x-1 text-slate-400">
                <Server className="w-3 h-3 text-emerald-400" />
                <span>阿里云: 12ms</span>
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-emerald-400 font-bold">零幻觉率 0%</span>
            </div>

            {/* 播放/暂停指示按钮 */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 text-[11px]"
              title={isPlaying ? "暂停自动演示" : "继续自动演示"}
            >
              {isPlaying ? <Pause className="w-3 h-3 text-indigo-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
              <span className="hidden sm:inline">{isPlaying ? "演示中" : "已暂停"}</span>
            </button>
          </div>
        </div>

        {/* 四大核心生产节点切换 Tab 栏（带进度条反馈） */}
        <div className="bg-slate-900/60 border-b border-slate-800/80 p-2 sm:p-2.5 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative p-3 rounded-2xl text-left transition-all duration-300 flex items-start space-x-2.5 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-slate-800/90 text-white shadow-lg border border-slate-600/60'
                    : 'bg-slate-900/30 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                }`}
              >
                {/* 活跃项进度条指示器 */}
                {isActive && isPlaying && (
                  <div 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  ></div>
                )}

                <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                  isActive 
                    ? tab.id === 'dailystock' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' :
                      tab.id === 'cmems' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      tab.id === 'rgm' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-slate-800/60 text-slate-500'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="font-bold text-xs truncate">
                      {tab.name}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 truncate font-mono">
                    {tab.subname}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 控制台中枢主展示区（根据选中 Tab 渲染实时数据工作台） */}
        <div className="p-5 sm:p-7 min-h-[380px] flex flex-col justify-between">
          
          {/* 选项 1: DailyStock AI 美股量化投研 */}
          {activeTab === 'dailystock' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* 子标题栏 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">
                    WALL STREET QUANTITATIVE ENGINE
                  </span>
                  <span className="text-xs text-slate-400">
                    美东盘前实时推演 · Google Gemini 3.5 双层推理引擎
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    境外 GCP 部署
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    0% 数值幻觉
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-6 items-center">
                {/* 左侧：量化标的雷达与估值模型 */}
                <div className="lg:col-span-7 space-y-4">
                  {/* 实时标的卡片 */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-indigo-500/30">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="font-bold text-white">NVDA</span>
                        <span className="text-emerald-400 font-bold">+4.82%</span>
                      </div>
                      <div className="text-lg font-black text-white mt-1">$225.07</div>
                      <div className="text-[10px] text-indigo-300 font-mono mt-0.5">确信度 91%</div>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="font-bold text-white">AAPL</span>
                        <span className="text-emerald-400 font-bold">+1.24%</span>
                      </div>
                      <div className="text-lg font-black text-white mt-1">$234.10</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">确信度 88%</div>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="font-bold text-white">TSLA</span>
                        <span className="text-emerald-400 font-bold">+3.15%</span>
                      </div>
                      <div className="text-lg font-black text-white mt-1">$258.40</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">确信度 85%</div>
                    </div>
                  </div>

                  {/* 17季度 TTM 严格估值模型条 */}
                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-semibold flex items-center space-x-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                        <span>17 季度 TTM 严格估值通道 (NVDA)</span>
                      </span>
                      <span className="text-xs font-mono text-indigo-300">合理区间: $218.00 - $228.00</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
                      <div className="absolute left-[35%] right-[25%] top-0 bottom-0 bg-indigo-500/40 border-x border-indigo-400"></div>
                      <div className="absolute left-[68%] top-0 bottom-0 w-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>历史低估 $185.00</span>
                      <span className="text-emerald-300 font-bold">现价 $225.07 (突破通道上沿)</span>
                      <span>极度高估 $260.00</span>
                    </div>
                  </div>

                  {/* 战术战法卡片 */}
                  <div className="p-3.5 bg-indigo-950/30 rounded-2xl border border-indigo-500/20 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-indigo-200 font-bold">开盘 9:30 战术建议 · 盈亏比 3.2 : 1</div>
                      <div className="text-slate-400 text-[11px]">回踩 $219.50 分批挂单，目标位 $235.00，止损位 $212.00</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold shrink-0">
                      Pydantic V2 契约通过
                    </span>
                  </div>
                </div>

                {/* 右侧：模拟终端数据流与截图交互卡片 */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 group/card aspect-[16/10] bg-slate-900 shadow-xl">
                    <img
                      src="/dailystock-market-compass.png"
                      alt="DailyStock 投研终端界面"
                      className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-indigo-300 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-indigo-500/30 backdrop-blur-md">
                        盘前催化剂归因模型
                      </span>
                      <Link
                        to="/projects/dailystock"
                        className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded-xl shadow-lg transition-colors flex items-center space-x-1"
                      >
                        <span>进入子页面剖析</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* 终端实时 Log */}
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 font-mono text-[10.5px] text-slate-400 space-y-1">
                    <div className="flex items-center text-slate-500 space-x-1 mb-1">
                      <Terminal className="w-3 h-3 text-indigo-400" />
                      <span>STREAMING INFERENCE LOGS</span>
                    </div>
                    <div className="text-indigo-300 truncate">&gt; [GEMINI-3.5] Blackwell Ultra 芯片出货上调 18%</div>
                    <div className="text-emerald-400 truncate">&gt; [PYDANTIC-V2] 24 项量化指标严格校验通过 [0% 幻觉]</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 选项 2: CMEMS 海洋生态雷达 */}
          {activeTab === 'cmems' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* 子标题栏 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                    COPERNICUS SATELLITE 4D TENSOR
                  </span>
                  <span className="text-xs text-slate-400">
                    欧盟哥白尼哨兵卫星 · GCP Cloud Run 自动化 NetCDF 切片
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    境外 GCP 部署
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    38ms 极速切片
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-6 items-center">
                {/* 左侧：栅格数据指标与遥感分析 */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-cyan-500/30">
                      <div className="text-xs font-mono text-slate-400">溶解氧 (DO)</div>
                      <div className="text-lg font-black text-rose-400 mt-1">1.84 mg/L</div>
                      <div className="text-[10px] text-rose-400 font-mono mt-0.5">⚠️ 触发缺氧预警</div>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">表层叶绿素</div>
                      <div className="text-lg font-black text-amber-300 mt-1">8.87 mg/m³</div>
                      <div className="text-[10px] text-amber-400 font-mono mt-0.5">赤潮富营养化</div>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">海表温度 (SST)</div>
                      <div className="text-lg font-black text-cyan-400 mt-1">24.6 °C</div>
                      <div className="text-[10px] text-cyan-300 font-mono mt-0.5">高于均值 +1.4°</div>
                    </div>
                  </div>

                  {/* 测站空间坐标与切片性能 */}
                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-semibold flex items-center space-x-1.5">
                        <Waves className="w-3.5 h-3.5 text-cyan-400" />
                        <span>长江口及舟山近海遥感切片矩阵</span>
                      </span>
                      <span className="text-xs font-mono text-cyan-300">空间分辨率: 0.083° 网格</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>监测坐标: 31.24°N, 121.49°E</span>
                      <span className="text-cyan-300">NetCDF4 4D 栅格运算</span>
                      <span className="text-emerald-400">38ms 响应</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-cyan-950/30 rounded-2xl border border-cyan-500/20 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-cyan-200 font-bold">Gemini 3.5 多模态遥感空间推导</div>
                      <div className="text-slate-400 text-[11px]">低氧羽状流向东南漂移，建议近海贝类养殖区启动增氧防灾机制</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold shrink-0">
                      Leaflet 动态图层
                    </span>
                  </div>
                </div>

                {/* 右侧：截图交互预览卡片 */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 group/card aspect-[16/10] bg-slate-900 shadow-xl">
                    <img
                      src="/cmems-radar-dashboard.png"
                      alt="CMEMS 海洋生态雷达界面"
                      className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30 backdrop-blur-md">
                        4D 时空栅格预警
                      </span>
                      <Link
                        to="/projects/cmems"
                        className="text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 px-3 py-1.5 rounded-xl shadow-lg transition-colors flex items-center space-x-1"
                      >
                        <span>进入子页面剖析</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 font-mono text-[10.5px] text-slate-400 space-y-1">
                    <div className="flex items-center text-slate-500 space-x-1 mb-1">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>RASTER PIPELINE TELEMETRY</span>
                    </div>
                    <div className="text-cyan-300 truncate">&gt; [COPERNICUS] Sentinel-3 OLCI 4D NetCDF 栅格同步完成</div>
                    <div className="text-emerald-400 truncate">&gt; [CLOUD-RUN] 38ms 矩阵切片生成，低氧羽状流预警已下发</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 选项 3: RGM 跑团训练系统 */}
          {activeTab === 'rgm' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* 子标题栏 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    CANOVA AI COACH & ALIYUN NATIVE
                  </span>
                  <span className="text-xs text-slate-400">
                    传奇教练 Renato Canova 周期化模型 · 微信小程序极速直连
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                    国内阿里云 100% 流畅
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    12ms BGP 极速响应
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-6 items-center">
                {/* 左侧：跑团科学指标与周期化模型 */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-emerald-500/30">
                      <div className="text-xs font-mono text-slate-400">本周跑量 / 爬升</div>
                      <div className="text-lg font-black text-white mt-1">77.5 km</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">累计爬升 632m</div>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">平均步频 / 步幅</div>
                      <div className="text-lg font-black text-emerald-400 mt-1">184 spm</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">步幅 1.48m</div>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                      <div className="text-xs font-mono text-slate-400">左右触地平衡</div>
                      <div className="text-lg font-black text-purple-300 mt-1">50.1% : 49.9%</div>
                      <div className="text-[10px] text-purple-400 font-mono mt-0.5">对称性极佳</div>
                    </div>
                  </div>

                  {/* Canova 周期化状态条 */}
                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-semibold flex items-center space-x-1.5">
                        <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Canova 专属准备期 (Specific Period) · 负荷监控</span>
                      </span>
                      <span className="text-xs font-mono text-emerald-300">TRIMP 负荷指数: 148</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
                      <div className="w-[78%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>基础期 (Fundamental)</span>
                      <span className="text-emerald-300 font-bold">专属准备期 (当前)</span>
                      <span>竞技专项期 (Specific)</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-emerald-950/30 rounded-2xl border border-emerald-500/20 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-emerald-200 font-bold">Canova AI 课后战术复盘建议</div>
                      <div className="text-slate-400 text-[11px]">第 4 组 2000m 配速 3:28/km 乳酸清除优异，建议补充电解质准备周日长距离</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold shrink-0">
                      国内免翻墙直连
                    </span>
                  </div>
                </div>

                {/* 右侧：截图预览 */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 group/card aspect-[16/10] bg-slate-900 shadow-xl">
                    <img
                      src="/rgm-canova-plan.png"
                      alt="RGM 训练系统界面"
                      className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-300 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30 backdrop-blur-md">
                        Canova 周期化智能课表
                      </span>
                      <Link
                        to="/projects/rgm"
                        className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-xl shadow-lg transition-colors flex items-center space-x-1"
                      >
                        <span>进入子页面剖析</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 font-mono text-[10.5px] text-slate-400 space-y-1">
                    <div className="flex items-center text-slate-500 space-x-1 mb-1">
                      <Terminal className="w-3 h-3 text-emerald-400" />
                      <span>WEARABLE PIPELINE & ALIYUN METRICS</span>
                    </div>
                    <div className="text-emerald-300 truncate">&gt; [GARMIN-CN] 实时心率与 FIT 力学文件同步完成</div>
                    <div className="text-cyan-400 truncate">&gt; [ALIYUN-SHANGHAI] 阿里云上海 VPC 毫秒级运算，微信端无感加载</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 选项 4: SRE 自愈控制中枢 */}
          {activeTab === 'sre' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* 子标题栏 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                    MAPE-K AUTONOMIC CONTROL LOOP
                  </span>
                  <span className="text-xs text-slate-400">
                    多智能体生产自愈架构 · 零感知流量漂移 · 99.99% 系统高可用
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    自愈 MTTR &lt; 3.2s
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    SLA 99.99%
                  </span>
                </div>
              </div>

              {/* 4步自愈闭环流程图 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-indigo-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-400">01. Monitor 监控</span>
                    <Activity className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    eBPF 零侵入探针实时采集 18 个微服务群的延迟、连接池与网络抖动。
                  </p>
                  <div className="text-[10px] font-mono text-indigo-300 pt-1 border-t border-slate-800">
                    采样周期: 100ms
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-2xl border border-cyan-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">02. Analyze 分析</span>
                    <Cpu className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Graph RAG 拓扑网络在 120ms 内定位慢查询与跨区域节点拥塞根因。
                  </p>
                  <div className="text-[10px] font-mono text-cyan-300 pt-1 border-t border-slate-800">
                    根因定位: &lt; 120ms
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-400">03. Plan 编排</span>
                    <Layers className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    自动生成金丝雀流量旁路隔离策略与备用 Serverless 容器快速拉起预案。
                  </p>
                  <div className="text-[10px] font-mono text-purple-300 pt-1 border-t border-slate-800">
                    预案推演: 零人工干预
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-2xl border border-emerald-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">04. Execute 执行</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    无感流量平滑漂移至健康节点，0 宕机热恢复，持续保障核心业务 7x24 稳定。
                  </p>
                  <div className="text-[10px] font-mono text-emerald-300 pt-1 border-t border-slate-800">
                    恢复达成率: 100%
                  </div>
                </div>
              </div>

              {/* 关键 SLA 看板 */}
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-xl font-black text-emerald-400 font-mono">99.99%</div>
                    <div className="text-[11px] text-slate-400">生产集群可用性</div>
                  </div>
                  <div className="h-8 w-px bg-slate-800"></div>
                  <div>
                    <div className="text-xl font-black text-cyan-400 font-mono">&lt; 3.2s</div>
                    <div className="text-[11px] text-slate-400">故障平均自愈 (MTTR)</div>
                  </div>
                  <div className="h-8 w-px bg-slate-800"></div>
                  <div>
                    <div className="text-xl font-black text-indigo-400 font-mono">&lt; 450ms</div>
                    <div className="text-[11px] text-slate-400">TTFT 首字响应</div>
                  </div>
                </div>

                <button
                  onClick={onOpenWhitepaper}
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5 cursor-pointer shadow-md"
                >
                  <span>查阅 SRE 架构白皮书</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* 控制台底部快捷栏与双轨多云切换 */}
        <div className="px-5 sm:px-7 py-3.5 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* 左侧：双轨节点快速筛选 */}
          <div className="flex items-center space-x-2">
            <span className="text-slate-400 text-[11px] font-mono mr-1">多云双轨视图:</span>
            <button
              onClick={() => onMarketChange('global')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                market === 'global'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>全球出海 (GCP + Gemini)</span>
            </button>
            <button
              onClick={() => onMarketChange('enterprise')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                market === 'enterprise'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>国内合规 (阿里云 + Qwen)</span>
            </button>
          </div>

          {/* 右侧：快速直达 */}
          <div className="flex items-center space-x-3 text-slate-400 text-xs">
            <a href="#projects" className="hover:text-indigo-400 transition-colors flex items-center space-x-1 font-semibold">
              <span>探索全部 3 大落地案例</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

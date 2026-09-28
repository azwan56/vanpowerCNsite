import React from 'react';
import { Presentation, ExternalLink, X } from 'lucide-react';

interface WhitePaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhitePaperModal({ isOpen, onClose }: WhitePaperModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-8 animate-in fade-in duration-300">
      <div className="bg-slate-900 w-full max-w-7xl h-[95dvh] sm:h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col border border-slate-700 shadow-2xl relative">
        {/* 弹窗顶部栏 */}
        <div className="px-3.5 sm:px-6 py-3 sm:py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <Presentation className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
            <h3 className="text-xs sm:text-base md:text-lg font-bold text-white truncate">
              企业级 Agentic AI 生产级系统架构与 SRE 自愈运维技术白皮书
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
              <span className="hidden sm:inline">全屏在新窗口打开</span>
              <span className="sm:hidden">全屏打开</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="关闭窗口"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* 弹窗主体 iframe */}
        <div className="flex-1 w-full h-full bg-slate-950">
          <iframe
            src="/gems_architecture_presentation.html"
            title="企业级 Agentic AI 生产级架构白皮书"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

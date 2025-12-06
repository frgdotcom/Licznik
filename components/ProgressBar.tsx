import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full max-w-2xl mt-12 px-4">
      <div className="flex justify-between text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
        <span>Start Kadencji (2023)</span>
        <span>{percentage.toFixed(2)}%</span>
        <span>Koniec (2027)</span>
      </div>
      <div className="h-4 bg-slate-800 rounded-full overflow-hidden shadow-inner border border-slate-700/50">
        <div 
          className="h-full bg-gradient-to-r from-red-700 to-red-500 transition-all duration-1000 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute top-0 right-0 w-1 h-full bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
        </div>
      </div>
      <p className="text-center text-slate-600 text-xs mt-3">
        Postęp X kadencji Sejmu
      </p>
    </div>
  );
};
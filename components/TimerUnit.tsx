import React from 'react';
import { getPolishForm } from '../utils';

interface TimerUnitProps {
  value: number;
  unitKey: 'year' | 'day' | 'hour' | 'minute' | 'second';
  isLast?: boolean;
}

const FORMS = {
  year: ['rok', 'lata', 'lat'],
  day: ['dzień', 'dni', 'dni'],
  hour: ['godzina', 'godziny', 'godzin'],
  minute: ['minuta', 'minuty', 'minut'],
  second: ['sekunda', 'sekundy', 'sekund'],
};

export const TimerUnit: React.FC<TimerUnitProps> = ({ value, unitKey, isLast }) => {
  const label = getPolishForm(value, FORMS[unitKey][0], FORMS[unitKey][1], FORMS[unitKey][2]);

  return (
    <div className="flex flex-col items-center mx-2 md:mx-6 mb-4 md:mb-0">
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 w-32 md:w-40 shadow-xl flex flex-col items-center justify-center group hover:border-red-500/30 transition-colors duration-300">
        <span className="text-4xl md:text-6xl font-black text-white tracking-tight tabular-nums group-hover:scale-110 transition-transform duration-300">
          {value}
        </span>
        <span className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold mt-2">
          {label}
        </span>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
      </div>
    </div>
  );
};
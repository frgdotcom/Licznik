import React, { useState, useEffect } from 'react';
import { TimerUnit } from './components/TimerUnit';
import { ProgressBar } from './components/ProgressBar';
import { calculateTimeLeft, calculateProgress } from './utils';
import { TimeLeft } from './types';

// X term of Sejm started: Nov 13, 2023
// Constitutional term is 4 years.
// Ends: Nov 13, 2027 (Approximate date of next elections/term expiry)
const START_DATE = new Date('2023-11-13T00:00:00');
const END_DATE = new Date('2027-11-13T00:00:00');

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(END_DATE));
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(END_DATE));
      setProgress(calculateProgress(START_DATE, END_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] bg-slate-800/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight drop-shadow-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
            Koniec rządów
          </span>{' '}
          <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            Donalda Tuska
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center mb-8">
          <TimerUnit value={timeLeft.days} unitKey="day" />
          <TimerUnit value={timeLeft.hours} unitKey="hour" />
          <TimerUnit value={timeLeft.minutes} unitKey="minute" />
          <TimerUnit value={timeLeft.seconds} unitKey="second" isLast />
        </div>

        <ProgressBar percentage={progress} />

        <div className="mt-16 text-slate-600 text-sm text-center max-w-md mx-auto leading-relaxed opacity-60 hover:opacity-100 transition-opacity">
          <p>Przewidywana data końca X kadencji Sejmu RP:</p>
          <p className="font-semibold text-slate-400">13 listopada 2027</p>
        </div>
      </main>
      
      <footer className="absolute bottom-4 text-slate-800 text-[10px] uppercase tracking-widest font-bold">
        Licznik Czasu
      </footer>
    </div>
  );
};

export default App;
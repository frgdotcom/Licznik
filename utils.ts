import { TimeLeft } from './types';

// Polish pluralization rules
export const getPolishForm = (n: number, singular: string, pluralA: string, pluralB: string): string => {
  if (n === 1) return singular;
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return pluralA;
  return pluralB;
};

export const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  
  if (difference <= 0) {
    return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(difference / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  
  const displayHours = totalHours % 24;
  const displayMinutes = totalMinutes % 60;
  const displaySeconds = totalSeconds % 60;

  return {
    years: 0,
    days: totalDays,
    hours: displayHours,
    minutes: displayMinutes,
    seconds: displaySeconds
  };
};

export const calculateProgress = (start: Date, end: Date): number => {
  const totalDuration = end.getTime() - start.getTime();
  const timePassed = new Date().getTime() - start.getTime();
  const percentage = (timePassed / totalDuration) * 100;
  return Math.min(Math.max(percentage, 0), 100);
};
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num:number) {
  if (num === null || num === undefined) return '';

  const units = [
    { value: 1E12, symbol: 'T' },
    { value: 1E9,  symbol: 'B' },
    { value: 1E6,  symbol: 'M' },
    { value: 1E3,  symbol: 'K' }
  ];

  for (let i = 0; i < units.length; i++) {
    if (num >= units[i].value) {
      return (num / units[i].value).toFixed(1).replace(/\.0$/, '') + units[i].symbol;
    }
  }

  return num.toString(); // for numbers < 1000
}

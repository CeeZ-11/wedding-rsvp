import React from 'react';
export function FloralCornerTopLeft({
  className = ''


}: {className?: string;}) {
  return (
    <svg
      className={`opacity-20 text-muted-sage pointer-events-none ${className}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      
      <path
        d="M10 10C30 15 45 30 50 50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round" />
      
      <path
        d="M10 10C20 35 30 45 40 60"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round" />
      
      <path
        d="M10 10C40 5 60 15 80 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round" />
      
      <path
        d="M45 25C50 20 55 22 58 28C55 32 48 30 45 25Z"
        fill="currentColor"
        opacity="0.5" />
      
      <path
        d="M25 45C20 50 22 55 28 58C32 55 30 48 25 45Z"
        fill="currentColor"
        opacity="0.5" />
      
      <path
        d="M65 15C70 12 75 15 75 20C70 22 65 20 65 15Z"
        fill="currentColor"
        opacity="0.5" />
      
      <path
        d="M15 65C12 70 15 75 20 75C22 70 20 65 15 65Z"
        fill="currentColor"
        opacity="0.5" />
      
    </svg>);

}
export function FloralCornerBottomRight({
  className = ''


}: {className?: string;}) {
  return (
    <svg
      className={`opacity-20 text-muted-sage pointer-events-none ${className}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: 'rotate(180deg)'
      }}>
      
      <path
        d="M10 10C30 15 45 30 50 50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round" />
      
      <path
        d="M10 10C20 35 30 45 40 60"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round" />
      
      <path
        d="M10 10C40 5 60 15 80 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round" />
      
      <path
        d="M45 25C50 20 55 22 58 28C55 32 48 30 45 25Z"
        fill="currentColor"
        opacity="0.5" />
      
      <path
        d="M25 45C20 50 22 55 28 58C32 55 30 48 25 45Z"
        fill="currentColor"
        opacity="0.5" />
      
      <path
        d="M65 15C70 12 75 15 75 20C70 22 65 20 65 15Z"
        fill="currentColor"
        opacity="0.5" />
      
      <path
        d="M15 65C12 70 15 75 20 75C22 70 20 65 15 65Z"
        fill="currentColor"
        opacity="0.5" />
      
    </svg>);

}
export function DividerFloral({ className = '' }: {className?: string;}) {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div className="h-[1px] w-16 bg-light-sage/50"></div>
      <svg
        className="mx-4 text-muted-sage opacity-40"
        width="24"
        height="12"
        viewBox="0 0 24 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        
        <path
          d="M12 2C14 6 18 8 22 8C18 8 14 10 12 12C10 10 6 8 2 8C6 8 10 6 12 2Z"
          fill="currentColor" />
        
      </svg>
      <div className="h-[1px] w-16 bg-light-sage/50"></div>
    </div>);

}
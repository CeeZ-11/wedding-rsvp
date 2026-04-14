export const CornerBranch = ({
  className = '',
  position = 'top-left',
}: {
  className?: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position]
  return (
    <svg
      className={`w-24 h-24 text-soft-green opacity-60 ${rotation} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10 Q 40 10 60 30 T 90 90"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M25 10 Q 35 20 25 30 Q 15 20 25 10"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M45 15 Q 55 25 45 35 Q 35 25 45 15"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M60 30 Q 75 35 70 50 Q 55 45 60 30"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M75 55 Q 90 60 85 75 Q 70 70 75 55"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M10 30 Q 25 35 20 50 Q 5 45 10 30"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M30 50 Q 45 55 40 70 Q 25 65 30 50"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  )
}
export const FloralDivider = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-center w-full my-8 ${className}`}
    >
      <div className="h-px bg-soft-green/50 flex-1 max-w-[100px]"></div>
      <svg
        className="w-8 h-8 mx-4 text-sage"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C12 3 14 8 18 10C14 12 12 17 12 17C12 17 10 12 6 10C10 8 12 3 12 3Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M12 17V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 21C12 21 15 19 16 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 21C12 21 9 19 8 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="h-px bg-soft-green/50 flex-1 max-w-[100px]"></div>
    </div>
  )
}

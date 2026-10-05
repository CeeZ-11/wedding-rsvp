export function BotanicalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 64 36"
      fill="none"
      className={className}
    >
      <path
        d="M32 32C31 24 32 14 34 4M31 24C26 18 21 15 15 14M32 19C37 13 42 11 49 11M33 12C30 8 27 6 22 5M34 10C38 6 42 4 47 4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 14C18 11 24 12 27 19C22 20 17 18 15 14ZM49 11C45 9 39 10 36 16C41 17 46 15 49 11ZM22 5C26 4 31 6 33 12C28 13 24 10 22 5ZM47 4C43 3 37 5 34 10C39 12 44 9 47 4Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

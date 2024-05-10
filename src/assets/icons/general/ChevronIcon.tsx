import React from "react";

type Props = {
  className?: string;
};

export default function ChevronIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import React from "react";

type Props = {
  className?: string;
};
export default function HomeIcon({ className }: Props) {
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
        d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 16.5V9H11.25V16.5"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

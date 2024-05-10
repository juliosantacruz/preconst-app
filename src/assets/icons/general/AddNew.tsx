import React from "react";

type Props = {
  className?: string;
};

export default function AddNew({ className }: Props) {
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
        d="M8.99988 16.5C13.142 16.5 16.4999 13.1421 16.4999 9C16.4999 4.85786 13.142 1.5 8.99988 1.5C4.85774 1.5 1.49988 4.85786 1.49988 9C1.49988 13.1421 4.85774 16.5 8.99988 16.5Z"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99988 6V12"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99988 9H11.9999"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import React from "react";

type Props = {
  className?: string;
};

export default function GuardarCSV({ className }: Props) {
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
        d="M15.75 6V15.75H2.25V6"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 2.25H0.75V6H17.25V2.25Z"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9H10.5"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

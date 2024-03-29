import React from "react";

type Props = {
  className?: string;
};

export default function ListadoInsumosIcon({ className }: Props) {
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
        d="M7.5 2.25H2.25V7.5H7.5V2.25Z"
        stroke="#3F3F46"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.75 2.25H10.5V7.5H15.75V2.25Z"
        stroke="#3F3F46"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.75 10.5H10.5V15.75H15.75V10.5Z"
        stroke="#3F3F46"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 10.5H2.25V15.75H7.5V10.5Z"
        stroke="#3F3F46"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

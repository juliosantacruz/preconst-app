import React from "react";

type Props = {
  className?: string;
};

export default function EditarProyecto({ className }: Props) {
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
        d="M8.25 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V9.75"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.875 1.87499C14.1734 1.57662 14.578 1.409 15 1.409C15.422 1.409 15.8266 1.57662 16.125 1.87499C16.4234 2.17336 16.591 2.57803 16.591 2.99999C16.591 3.42194 16.4234 3.82662 16.125 4.12499L9 11.25L6 12L6.75 8.99999L13.875 1.87499Z"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

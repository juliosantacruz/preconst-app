import React from "react";

type Props = {
  className?: string;
};

export default function GuardarJSON({ className }: Props) {
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
        d="M15 5.25H3C2.17157 5.25 1.5 5.92157 1.5 6.75V14.25C1.5 15.0784 2.17157 15.75 3 15.75H15C15.8284 15.75 16.5 15.0784 16.5 14.25V6.75C16.5 5.92157 15.8284 5.25 15 5.25Z"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.75V3.75C12 3.35218 11.842 2.97064 11.5607 2.68934C11.2794 2.40804 10.8978 2.25 10.5 2.25H7.5C7.10218 2.25 6.72064 2.40804 6.43934 2.68934C6.15804 2.97064 6 3.35218 6 3.75V15.75"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

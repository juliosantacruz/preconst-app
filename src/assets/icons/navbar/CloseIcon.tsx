import React from "react";


type Props = {
  className?: string;
};


export default function CloseIcon({ className }: Props) {
  return (
    <svg
    className={className}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_345)">
        <path
          d="M18.0312 18.0312C20.9602 15.1023 20.9602 10.3535 18.0312 7.4246C15.1023 4.49567 10.3536 4.49567 7.42464 7.4246C4.49571 10.3535 4.49571 15.1023 7.42464 18.0312C10.3536 20.9601 15.1023 20.9601 18.0312 18.0312Z"
          stroke="#3F3F46"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6066 10.6066L14.8493 14.8492"
          stroke="#3F3F46"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6066 14.8492L14.8493 10.6066"
          stroke="#3F3F46"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_345">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0 12.7279) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

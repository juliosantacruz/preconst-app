import React from "react";


type Props = {
  className?: string;
};


export default function DescargarProyecto({ className }: Props) {
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
        d="M6 12.75L9 15.75L12 12.75"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V15.75"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.66 13.5674C16.3121 13.1089 16.801 12.4546 17.056 11.6993C17.3109 10.9441 17.3186 10.1272 17.0778 9.36732C16.837 8.60742 16.3604 7.94402 15.7171 7.47337C15.0737 7.00272 14.2971 6.74933 13.5 6.74995H12.555C12.3294 5.87085 11.9074 5.05439 11.3206 4.36201C10.7338 3.66963 9.99762 3.11939 9.16742 2.75271C8.33721 2.38604 7.43464 2.21247 6.52766 2.24509C5.62067 2.2777 4.7329 2.51565 3.93118 2.94102C3.12946 3.36639 2.43468 3.96809 1.89915 4.70082C1.36362 5.43356 1.0013 6.27823 0.839456 7.17126C0.677613 8.06429 0.720468 8.9824 0.964796 9.85646C1.20912 10.7305 1.64856 11.5378 2.25001 12.2174"
        stroke="#3F3F46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

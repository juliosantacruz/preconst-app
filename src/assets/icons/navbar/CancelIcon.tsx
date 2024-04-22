import React from 'react'
type Props = {
  className?: string;
};
export default function CancelIcon({ className }: Props) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 4.5L4.5 13.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 4.5L13.5 13.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

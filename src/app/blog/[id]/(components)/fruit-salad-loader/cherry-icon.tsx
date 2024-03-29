import React, { FunctionComponent } from 'react'

export interface CherryIconProperties
  extends React.HTMLAttributes<SVGElement> {}

export const CherryIcon: FunctionComponent<CherryIconProperties> = (
  properties,
) => {
  return (
    <svg
      id="cherry-emoji"
      viewBox="0 0 72 72"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <g>
        <path
          fill="#EA5A47"
          stroke="#EA5A47"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M34.4,46.5c0.9-1.7,2.3-3.1,4.2-4c4.9-2.5,10.8-0.5,13.3,4.4s0.5,10.8-4.4,13.3s-10.8,0.5-13.3-4.4"
        />
        <path
          fill="#D22F27"
          d="M47.5,60.2c-1.3,0.7-2.7,1-4,1c11.3-9.3,1.8-18.3,0.1-19.7c3.4,0.2,6.6,2.2,8.3,5.4 C54.3,51.8,52.3,57.7,47.5,60.2z"
        />
        <circle cx="28.5" cy="51.4" r="9.9" fill="#EA5A47" />
        <path
          fill="#B1CC33"
          d="M35.2,15.7c4.5,4,5.7,11.6,5.7,11.6s-7.7-0.4-12.1-4.4c-4.5-4-5.7-11.6-5.7-11.6S30.8,11.7,35.2,15.7z"
        />
        <path
          fill="#D22F27"
          d="M33.1,60.2c-1.3,0.7-2.7,1-4,1c11.3-9.3,1.8-18.3,0.1-19.7c3.4,0.2,6.6,2.2,8.3,5.4 C39.9,51.8,38,57.7,33.1,60.2z"
        />
      </g>
      <g />
      <g />
      <g />
      <g>
        <path
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M39.1,42.3c1.2-0.5,2.5-0.8,3.9-0.8c5.5,0,9.9,4.4,9.9,9.9s-4.4,9.9-9.9,9.9"
        />
        <path
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M19.5,10.7c0,0.3,0,0.7,0,1c0.1,17.1,3.2,27.7,4.3,31"
        />
        <path
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M43,61.2c-1.5,0-2.9-0.3-4.2-0.9"
        />
        <circle
          cx="28.5"
          cy="51.4"
          r="9.9"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M35.2,15.7c4.5,4,5.7,11.6,5.7,11.6s-7.7-0.4-12.1-4.4c-4.5-4-5.7-11.6-5.7-11.6S30.8,11.7,35.2,15.7z"
        />
        <circle
          cx="28.5"
          cy="51.4"
          r="9.9"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M39,42.3c0,0-19.5-10.1-19.5-31.6"
        />
      </g>
    </svg>
  )
}

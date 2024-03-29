import React, { FunctionComponent } from 'react'

export interface LightbulbIconProperties
  extends React.HTMLAttributes<SVGElement> {}

// https://openmoji.org/library/emoji-1F4A1/
export const LightbulbIcon: FunctionComponent<LightbulbIconProperties> = (
  properties,
) => {
  return (
    <svg
      id="lightbulb-emoji"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <g id="color">
        <path
          fill="#d0cfce"
          d="m35.71 64.65c4.779 0 7.509-2.244 8.156-5.151h-16.31c0.647 2.907 3.376 5.151 8.155 5.151z"
        />
        <path
          fill="#FCEA2B"
          d="m45.5 10.41c-4e-4 0-12.23-3.457-18.2 1.269-5.969 4.726-7.651 15.6-7.651 15.6 0.5848 2.213 4.226 8.493 4.226 8.493 0.54 0.9111 2.253 7.981 3.249 11.86h17.17c0.8662-2.845 4.35-13.65 4.805-14.71 0.584-1.363 1.58-4.016 2.083-5.017 1.21-2.409 0.5378-4.455 0.5378-7.027 0-5.487-1.902-7.726-6.221-10.47z"
        />
        <path
          fill="#fff"
          d="m35.71 7.202c-8.532 0-16.5 6.752-16.5 15.28 0 1.079-0.2641 4.491 1.217 4.491 0 0 2.393-7.825 8.362-12.55s15.52-3.725 15.52-3.725c-0.6645-2.045-5.55-3.499-8.596-3.499z"
        />
      </g>
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="m52.55 23.75c0 3.985-1.785 5.908-3.754 10.5-0.5028 1.172-4.211 13.38-4.211 13.38h-17.17s-2.981-11.67-3.546-12.62c-2.37-3.998-4.419-6.91-4.419-11.26 0-9.141 7.41-16.55 16.55-16.55 9.141 0 16.55 7.41 16.55 16.55z"
        />
        <line
          x1="36"
          x2="36"
          y1="47.22"
          y2="35.28"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="41.97"
          x2="30.03"
          y1="35.28"
          y2="35.28"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.696"
          d="m44.16 58.79c0 3.24-3.651 5.867-8.155 5.867-4.504 0-8.155-2.627-8.155-5.867z"
        />
        <line
          x1="27.99"
          x2="44.01"
          y1="54.98"
          y2="51.51"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.965"
        />
        <line
          x1="38.2"
          x2="43.98"
          y1="56.07"
          y2="54.89"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          x1="28.02"
          x2="33.8"
          y1="51.6"
          y2="50.42"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

import * as React from 'react';

export default function Logo(): JSX.Element {
  return (
    <div className="logo">
      <svg aria-hidden="true" className="logo-icon" viewBox="-12 -12 24 24">
        <defs>
          <ellipse id="orbit" rx="10" ry="5" />
          <g id="portfolio">
            <path d="M-10 -6 h6 v-3 h8 v3 h6 v14 h-20 z" />
            <path d="M-4 -6 h8 z" />
            <path d="M-10 5 h20 z" />
            <path d="M-10 -6 a 10 6 0 0 0 20 0" />
            <path
              d="M-1 -1 a 1 1 0 0 1 2 0 v2 a 1 1 0 0 1 -2 0 z"
              fill="currentColor"
            />
          </g>
          <g id="react">
            <use xlinkHref="#orbit" />
            <use xlinkHref="#orbit" transform="rotate(60)" />
            <use xlinkHref="#orbit" transform="rotate(-60)" />
          </g>
        </defs>
        <g fill="none" stroke="currentColor" strokeLinejoin="round">
          <use xlinkHref="#react" strokeWidth=".5" />
          <use xlinkHref="#portfolio" transform="scale(0.3)" />
        </g>
      </svg>
      <h1 className="logo-title">WebFolio.</h1>
    </div>
  );
}

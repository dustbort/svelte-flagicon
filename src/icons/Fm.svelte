<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-fm"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M244.2 0h496v496h-496z" />
    </clipPath>

    <mask id="FmSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#FmSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a)"
      transform="translate(-252) scale(1.032)"
    >
      <path fill="#6797d6" d="M0 0h992.1v496H0z" />
      <path
        fill="#fff"
        d="M507.9 84.5h38.8l-31.5 21.4 12 34.8-31.3-21.5-31.5 21.5 12-34.8L445 84.4h39l12-34.7m12 363h38.8l-31.5-21.5 12-34.8-31.3 21.5-31.5-21.5 12 34.8-31.4 21.5H484l12 34.7M346 230.1l37.2-11.4-23.9 29.8 21.7 29.7-36.3-11.4-23.8 29.8 1.4-36.8-36.4-11.4 37.2-11.3 1.3-36.8m321 29.8l-37.1-11.4 23.8 29.7-21.7 29.8 36.4-11.4 23.7 29.8-1.3-36.8 36.4-11.4-37.2-11.3-1.3-36.8"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-fm"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="fm-a">
      <path fill-opacity=".7" d="M-81.3 0h682.6v512H-81.3z" />
    </clipPath>

    <mask id="FmSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#FmSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#fm-a)"
      transform="translate(76.3) scale(.94)"
    >
      <path fill="#6797d6" d="M-252 0H772v512H-252z" />
      <path
        fill="#fff"
        d="M259.8 123l-32.4 22.2 12.4-35.9-32.5-22.2h40.1l12.4-35.9 12.4 36h40l-32.4 22.1 12.4 35.9M259.8 390l-32.4-22.2 12.4 36-32.5 22.1h40.1l12.4 35.9 12.4-36 40 .1-32.4-22.2 12.4-35.9m-188.4-92.4L79.3 306l1.4-38-37.5-11.7 38.4-11.7 1.3-38 22.3 30.8 38.4-11.8-24.6 30.7 22.4 30.7m274.2-11.7l24.6 30.7-1.4-38 37.5-11.7-38.4-11.7-1.3-38-22.3 30.8-38.4-11.8 24.6 30.7-22.4 30.7"
      />
    </g>
  </g>
</svg>

{/if}

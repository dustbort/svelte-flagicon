<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-pr"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M51.6 0h708.7v708.7H51.6z" />
    </clipPath>

    <mask id="PrSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#PrSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a)"
      transform="translate(-37.3) scale(.72249)"
    >
      <path fill="#ed0000" d="M0 0h1063v708.7H0z" />
      <path fill="#fff" d="M0 141.7h1063v141.8H0zm0 283.5h1063v141.7H0z" />
      <path fill="#0050f0" d="M0 0l610 353.9L0 707.3V0z" />
      <path
        fill="#fff"
        d="M268.2 450.5l-65.7-49-65.3 49.5 24.3-80.5-65.3-49.7 80.7-.7 25-80.2 25.6 80 80.7.1-64.9 50.2 24.9 80.3z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-pr"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="pr-a">
      <path fill-opacity=".7" d="M-37.3 0h682.7v512H-37.3z" />
    </clipPath>

    <mask id="PrSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#PrSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#pr-a)"
      transform="translate(35) scale(.9375)"
    >
      <path fill="#ed0000" d="M-37.3 0h768v512h-768z" />
      <path
        fill="#fff"
        d="M-37.3 102.4h768v102.4h-768zm0 204.8h768v102.4h-768z"
      />
      <path fill="#0050f0" d="M-37.3 0l440.7 255.7L-37.3 511V0z" />
      <path
        fill="#fff"
        d="M156.4 325.5L109 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
      />
    </g>
  </g>
</svg>

{/if}

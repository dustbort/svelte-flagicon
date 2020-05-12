<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-vn"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
    </clipPath>

    <mask id="VnSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VnSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a)"
      transform="translate(-128) scale(.72249)"
    >
      <path fill="#ec0015" d="M0 0h1063v708.7H0z" />
      <path
        fill="#ff0"
        d="M661 527.5l-124-92.6-123.3 93.5 45.9-152-123.2-93.8 152.4-1.3L536 129.8 584.3 281l152.4.2-122.5 94.7L661 527.5z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-vn"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="vn-a">
      <path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
    </clipPath>

    <mask id="VnSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VnSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#vn-a)"
      transform="translate(80) scale(.9375)"
    >
      <path fill="#ec0015" d="M-128 0h768v512h-768z" />
      <path
        fill="#ff0"
        d="M349.6 381L260 314.3l-89 67.3L204 272l-89-67.7 110.1-1 34.2-109.4L294 203l110.1.1-88.5 68.4 33.9 109.6z"
      />
    </g>
  </g>
</svg>

{/if}

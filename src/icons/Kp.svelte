<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-kp"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M92.2 7.8h593.6v485.5H92.2z" />
    </clipPath>

    <mask id="KpSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#KpSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a)"
      transform="matrix(.86254 0 0 1.0546 -79.5 -8.3)"
    >
      <path
        fill="#fff"
        stroke="#000"
        stroke-width="1.1"
        d="M991.8 492.9H4.2V8.4h987.6z"
      />
      <path fill="#3e5698" d="M991.8 405.2H4.2V493h987.6z" />
      <path fill="#c60000" d="M991.8 384.9H4.2V116.4h987.6z" />
      <path fill="#3e5698" d="M991.8 8.4H4.2V96h987.6z" />
      <path
        fill="#fff"
        d="M473 250.7c0 60.1-61.5 108.9-137.4 108.9-76 0-137.6-48.8-137.6-109 0-60.1 61.6-108.9 137.6-108.9S473 190.5 473 250.7z"
      />
      <path
        fill="#c40000"
        d="M402.9 326.8l-66.1-38.6-67.1 39 26.3-62.8-66.1-38.5 82.4-.3 26.2-63 24.5 62.8 82.4-.4-67.2 39z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-kp"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="kp-a">
      <path fill-opacity=".7" d="M5 .1h682.6V512H5.1z" />
    </clipPath>

    <mask id="KpSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#KpSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#kp-a)"
      transform="translate(-4.8 -.1) scale(.93768)"
    >
      <path fill="#fff" stroke="#000" d="M776 511.5H-76V.5h852z" />
      <path fill="#3e5698" d="M776 419H-76v92.5h852z" />
      <path fill="#c60000" d="M776 397.6H-76V114.4h852z" />
      <path fill="#3e5698" d="M776 .6H-76V93h852z" />
      <path
        fill="#fff"
        d="M328.5 256c0 63.5-53 115-118.6 115S91.3 319.5 91.3 256s53-114.8 118.6-114.8c65.5 0 118.6 51.4 118.6 114.9z"
      />
      <path
        fill="#c40000"
        d="M175.8 270.6l-57-40.7 71-.2 22.7-66.4 21.1 66.1 71-.4-57.9 41.2 21.3 66.1-57-40.7-58 41.3z"
      />
    </g>
  </g>
</svg>

{/if}

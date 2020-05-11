<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-dj"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M55.4 0H764v708.7H55.4z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a)"
      transform="translate(-40) scale(.722)"
    >
      <path fill="#0c0" d="M0 0h1063v708.7H0z" />
      <path fill="#69f" d="M0 0h1063v354.3H0z" />
      <path fill="#fffefe" d="M0 0l529.7 353.9L0 707.3V0z" />
      <path
        fill="red"
        d="M221.2 404.3l-42.7-30.8-42.4 31 15.8-50.3-42.4-31.2 52.4-.4 16.3-50.2 16.6 50 52.4.2-42.1 31.4 16 50.3z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-dj"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="dj-a">
      <path fill-opacity=".7" d="M-40 0h682.7v512H-40z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#dj-a)"
      transform="translate(37.5) scale(.94)"
    >
      <path fill="#0c0" d="M-40 0h768v512H-40z" />
      <path fill="#69f" d="M-40 0h768v256H-40z" />
      <path fill="#fffefe" d="M-40 0l382.7 255.7L-40 511V0z" />
      <path
        fill="red"
        d="M119.8 292L89 270l-30.7 22.4L69.7 256l-30.6-22.5 37.9-.3 11.7-36.3 12 36.2h37.9l-30.5 22.7 11.7 36.4z"
      />
    </g>
  </g>
</svg>

{/if}

<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cz"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M102.4 0h708.7v708.7H102.4z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a)"
      transform="translate(-74) scale(.722)"
    >
      <path fill="#e80000" d="M0 0h1063v708.7H0z" />
      <path fill="#fff" d="M0 0h1063v354.3H0z" />
      <path fill="#00006f" d="M0 0l529.7 353.9L0 707.3V0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cz"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="cz-a">
      <path fill-opacity=".7" d="M-74 0h682.7v512H-74z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#cz-a)"
      transform="translate(69.4) scale(.94)"
    >
      <path fill="#e80000" d="M-74 0h768v512H-74z" />
      <path fill="#fff" d="M-74 0h768v256H-74z" />
      <path fill="#00006f" d="M-74 0l382.7 255.7L-74 511V0z" />
    </g>
  </g>
</svg>

{/if}

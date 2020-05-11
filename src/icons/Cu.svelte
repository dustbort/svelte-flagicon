<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cu"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a)">
      <path fill="#0050f0" d="M-32 0h768v512H-32z" />
      <path fill="#fff" d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z" />
      <path fill="#ed0000" d="M-32 0l440.7 255.7L-32 511V0z" />
      <path
        fill="#fff"
        d="M161.8 325.5L114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cu"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="cu-a">
      <path fill-opacity=".7" d="M-32 0h682.7v512H-32z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#cu-a)"
      transform="translate(30) scale(.94)"
    >
      <path fill="#0050f0" d="M-32 0h768v512H-32z" />
      <path fill="#fff" d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z" />
      <path fill="#ed0000" d="M-32 0l440.7 255.7L-32 511V0z" />
      <path
        fill="#fff"
        d="M161.8 325.5L114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
      />
    </g>
  </g>
</svg>

{/if}

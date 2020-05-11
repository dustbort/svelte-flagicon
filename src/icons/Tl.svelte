<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tl"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h496v496H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a)" transform="scale(1.0321)">
      <path fill="#cb000f" d="M0 0h999v496H0z" />
      <path fill="#f8c00c" d="M0 0c3.1 0 496 248.7 496 248.7L0 496.1V0z" />
      <path d="M0 0c2 0 330 248.7 330 248.7L0 496.1V0z" />
      <path
        fill="#fff"
        d="M181.9 288.9l-59-13L93 327l-5-57.8-58.8-13 53.1-24-3.2-57.5 39 42 53.6-24.4-28 52.2 38 44.4z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tl"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="tl-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#tl-a)" transform="scale(.9375)">
      <path fill="#cb000f" d="M0 0h1031.2v512H0z" />
      <path fill="#f8c00c" d="M0 0c3.2 0 512 256.7 512 256.7L0 512V0z" />
      <path d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512V0z" />
      <path
        fill="#fff"
        d="M187.7 298.2L127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"
      />
    </g>
  </g>
</svg>

{/if}

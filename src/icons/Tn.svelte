<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tn"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M124 0h496v496H124z" />
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
      transform="translate(-128) scale(1.0321)"
    >
      <path fill="#e70013" d="M0 0h744v496H0z" />
      <path
        fill="#fff"
        d="M497.8 247.8a125.1 125.1 0 11-250.2 0 125.1 125.1 0 01250.2 0z"
      />
      <path
        fill="#e70013"
        d="M372.7 330.8a83 83 0 01-83-83 83 83 0 0183-83c11.4 0 24.5 2.7 33.3 9.2-60.6 2.3-76 53.7-76 74.5s9.8 67 76 73.8a70.4 70.4 0 01-33.3 8.5z"
      />
      <path
        fill="#e70013"
        d="M445.8 282.7L408.1 269l-24.9 31.4 1.4-40-37.6-14 38.6-11.1 1.7-40 22.4 33.2 38.6-10.8-24.7 31.6z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tn"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="tn-a">
      <path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#tn-a)"
      transform="translate(80) scale(.9375)"
    >
      <path fill="#e70013" d="M-128 0h768v512h-768z" />
      <path
        fill="#fff"
        d="M385.8 255.8a129.1 129.1 0 11-258.2 0 129.1 129.1 0 01258.2 0z"
      />
      <path
        fill="#e70013"
        d="M256.7 341.4a85.7 85.7 0 010-171.3c11.8 0 25.3 2.8 34.4 9.5-62.6 2.3-78.5 55.5-78.5 76.9s10.1 69.1 78.5 76.2c-7.8 5-22.6 8.7-34.4 8.7z"
      />
      <path
        fill="#e70013"
        d="M332.1 291.8l-38.9-14.2-25.7 32.4 1.5-41.3-38.8-14.5 39.8-11.4 1.7-41.3 23.2 34.3 39.8-11-25.5 32.5z"
      />
    </g>
  </g>
</svg>

{/if}

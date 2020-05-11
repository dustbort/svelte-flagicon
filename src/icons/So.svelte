<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-so"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
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
      transform="translate(-128) scale(.72249)"
    >
      <path fill="#40a6ff" d="M0 0h1063v708.7H0z" />
      <path
        fill="#fff"
        d="M643 527.6l-114.3-74-113.6 74.8 42.3-121.5-113.5-75 140.4-1 43.5-121.1 44.5 120.8 140.3.1-112.9 75.7L643 527.6z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-so"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="so-a">
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
      clip-path="url(#so-a)"
      transform="translate(80) scale(.9375)"
    >
      <path fill="#40a6ff" d="M-128 0h768v512h-768z" />
      <path
        fill="#fff"
        d="M336.5 381.2L254 327.7l-82.1 54 30.5-87.7-82-54.2L222 239l31.4-87.5 32.1 87.3 101.4.1-81.5 54.7 31.2 87.6z"
      />
    </g>
  </g>
</svg>

{/if}

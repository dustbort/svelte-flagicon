<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sc"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h512v496H0z" />
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
      transform="scale(1 1.0321)"
    >
      <path fill="red" d="M0 0h992.1v496H0z" />
      <path fill="#090" d="M0 496l992.1-165.3v165.4H0z" />
      <path fill="#fff" d="M0 496l992.1-330.6v165.3L0 496.1z" />
      <path fill="#009" d="M0 496V0h330.7L0 496z" />
      <path fill="#ff0" d="M0 496L330.7 0h330.7L0 496z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sc"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="sc-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
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
      clip-path="url(#sc-a)"
      transform="scale(.9375)"
    >
      <path fill="red" d="M0 0h992.1v512H0z" />
      <path fill="#090" d="M0 512l992.1-170.7V512H0z" />
      <path fill="#fff" d="M0 512l992.1-341.3v170.6L0 512z" />
      <path fill="#009" d="M0 512V0h330.7L0 512z" />
      <path fill="#ff0" d="M0 512L330.7 0h330.7L0 512z" />
    </g>
  </g>
</svg>

{/if}

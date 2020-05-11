<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-kw"
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
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a)"
      transform="scale(1.0321)"
    >
      <path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <path fill="#f31830" d="M0 330.7h992.1v165.4H0z" />
      <path fill="#00d941" d="M0 0h992.1v165.4H0z" />
      <path d="M0 0v496l247.5-165.3.5-165.5L0 0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-kw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="kw-a">
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
      clip-path="url(#kw-a)"
      transform="scale(.9375)"
    >
      <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <path fill="#f31830" d="M0 341.3h1024V512H0z" />
      <path fill="#00d941" d="M0 0h1024v170.7H0z" />
      <path d="M0 0v512l255.4-170.7.6-170.8L0 0z" />
    </g>
  </g>
</svg>

{/if}

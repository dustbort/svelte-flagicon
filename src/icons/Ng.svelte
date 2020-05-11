<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ng"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#008753" d="M341.3 0H512v512H341.3zM0 0h170.7v512H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ng"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#008753" d="M426.6 0H640v480H426.6zM0 0h213.3v480H0z" />
    </g>
  </g>
</svg>

{/if}

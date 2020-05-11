<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cr"
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
      <path fill="#0000b4" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 80.5h512v343.7H0z" />
      <path fill="#d90000" d="M0 168.2h512v168.2H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cr"
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
      <path fill="#0000b4" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 75.4h640v322.3H0z" />
      <path fill="#d90000" d="M0 157.7h640v157.7H0z" />
    </g>
  </g>
</svg>

{/if}

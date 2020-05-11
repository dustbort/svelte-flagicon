<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-lu"
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
    <path fill="#00a1de" d="M0 256h512v256H0z" />
    <path fill="#ed2939" d="M0 0h512v256H0z" />
    <path fill="#fff" d="M0 170.7h512v170.6H0z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-lu"
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
    <path fill="#00a1de" d="M0 240h640v240H0z" />
    <path fill="#ed2939" d="M0 0h640v240H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
  </g>
</svg>

{/if}

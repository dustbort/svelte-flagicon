<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-dk"
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
    <path fill="#c8102e" d="M0 0h512.1v512H0z" />
    <path fill="#fff" d="M144 0h73.1v512H144z" />
    <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-dk"
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
    <path fill="#c8102e" d="M0 0h640.1v480H0z" />
    <path fill="#fff" d="M205.7 0h68.6v480h-68.6z" />
    <path fill="#fff" d="M0 205.7h640.1v68.6H0z" />
  </g>
</svg>

{/if}

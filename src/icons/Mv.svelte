<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mv"
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
    <path fill="#d21034" d="M0 0h512v512H0z" />
    <path fill="#007e3a" d="M128 128h256v256H128z" />
    <circle cx="288" cy="256" r="85.3" fill="#fff" />
    <ellipse cx="308.6" cy="256" fill="#007e3a" rx="73.9" ry="85.3" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mv"
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
    <path fill="#d21034" d="M0 0h640v480H0z" />
    <path fill="#007e3a" d="M120 120h400v240H120z" />
    <circle cx="350" cy="240" r="80" fill="#fff" />
    <circle cx="380" cy="240" r="80" fill="#007e3a" />
  </g>
</svg>

{/if}

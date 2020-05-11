<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-es-ca"
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
    <path fill="#fcdd09" d="M0 0h512v512H0z" />
    <path
      stroke="#da121a"
      stroke-width="60"
      d="M0 90h810m0 120H0m0 120h810m0 120H0"
      transform="scale(.6321 .94815)"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-es-ca"
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
    <path fill="#fcdd09" d="M0 0h640v480H0z" />
    <path
      stroke="#da121a"
      stroke-width="60"
      d="M0 90h810m0 120H0m0 120h810m0 120H0"
      transform="scale(.79012 .88889)"
    />
  </g>
</svg>

{/if}

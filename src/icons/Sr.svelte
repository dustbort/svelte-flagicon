<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sr"
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
    <path fill="#377e3f" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 102.4h512v307.2H0z" />
    <path fill="#b40a2d" d="M0 153.6h512v204.8H0z" />
    <path
      fill="#ecc81d"
      d="M255.9 163.4l60.2 185.2-157.6-114.5h194.8L195.7 348.6z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sr"
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
    <path fill="#377e3f" d="M.1 0h640v480H.1z" />
    <path fill="#fff" d="M.1 96h640v288H.1z" />
    <path fill="#b40a2d" d="M.1 144h640v192H.1z" />
    <path
      fill="#ecc81d"
      d="M320 153.2l56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
    />
  </g>
</svg>

{/if}

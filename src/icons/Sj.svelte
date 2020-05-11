<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sj"
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
    <path fill="#ef2b2d" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M128 0h128v512H128z" />
    <path fill="#fff" d="M0 192h512v128H0z" />
    <path fill="#002868" d="M160 0h64v512h-64z" />
    <path fill="#002868" d="M0 224h512v64H0z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sj"
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
    <path fill="#ef2b2d" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M180 0h120v480H180z" />
    <path fill="#fff" d="M0 180h640v120H0z" />
    <path fill="#002868" d="M210 0h60v480h-60z" />
    <path fill="#002868" d="M0 210h640v60H0z" />
  </g>
</svg>

{/if}

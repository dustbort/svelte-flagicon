<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-lc"
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
    <g fill-rule="evenodd">
      <path fill="#65cfff" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M254.8 44.8l173.5 421.6-344 1L254.7 44.8z" />
      <path d="M255 103l150 362.6-297.5.8L255 103z" />
      <path fill="#ffce00" d="M254.8 256.1l173.5 210.8-344 .5 170.5-211.3z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-lc"
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
    <g fill-rule="evenodd">
      <path fill="#65cfff" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M318.9 42l162.7 395.3-322.6.9L318.9 42z" />
      <path d="M319 96.5l140.8 340-279 .8L319 96.5z" />
      <path fill="#ffce00" d="M318.9 240.1l162.7 197.6-322.6.5 159.9-198.1z" />
    </g>
  </g>
</svg>

{/if}

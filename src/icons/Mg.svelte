<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mg"
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
      <path fill="#ff3319" d="M170.7 0H512v256H170.7z" />
      <path fill="#00cc28" d="M170.7 256H512v256H170.7z" />
      <path fill="#fff" d="M0 0h170.7v512H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mg"
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
      <path fill="#ff3319" d="M213.3 0H640v240H213.3z" />
      <path fill="#00cc28" d="M213.3 240H640v240H213.3z" />
      <path fill="#fff" d="M0 0h213.3v480H0z" />
    </g>
  </g>
</svg>

{/if}

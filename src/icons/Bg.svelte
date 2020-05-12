<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bg"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="BgSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BgSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#d62612" d="M0 341.3h512V512H0z" />
      <path fill="#fff" d="M0 0h512v170.7H0z" />
      <path fill="#00966e" d="M0 170.7h512v170.6H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bg"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="BgSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BgSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#d62612" d="M0 320h640v160H0z" />
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#00966e" d="M0 160h640v160H0z" />
    </g>
  </g>
</svg>

{/if}

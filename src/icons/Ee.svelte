<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ee"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="EeSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#EeSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt" transform="scale(.482 .72)">
      <rect width="1063" height="708.7" rx="0" ry="0" />
      <rect width="1063" height="236.2" y="475.6" fill="#fff" rx="0" ry="0" />
      <path fill="#1291ff" d="M0 0h1063v236.2H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ee"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="EeSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#EeSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <rect width="640" height="477.9" rx="0" ry="0" />
      <rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0" />
      <path fill="#1291ff" d="M0 0h640v159.3H0z" />
    </g>
  </g>
</svg>

{/if}

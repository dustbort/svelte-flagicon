<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gh"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="GhSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GhSvelteFlagIconRound)' : '' }">
    <path fill="#006b3f" d="M0 0h512v512H0z" />
    <path fill="#fcd116" d="M0 0h512v341.3H0z" />
    <path fill="#ce1126" d="M0 0h512v170.7H0z" />
    <path d="M256 170.7l55.5 170.6L166.3 236h179.4L200.6 341.3z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gh"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="GhSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GhSvelteFlagIconRound)' : '' }">
    <path fill="#006b3f" d="M0 0h640v480H0z" />
    <path fill="#fcd116" d="M0 0h640v320H0z" />
    <path fill="#ce1126" d="M0 0h640v160H0z" />
    <path d="M320 160l52 160-136.1-98.9H404L268 320z" />
  </g>
</svg>

{/if}

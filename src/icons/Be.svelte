<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-be"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="BeSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BeSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M0 0h170.7v512H0z" />
      <path fill="#ffd90c" d="M170.7 0h170.6v512H170.7z" />
      <path fill="#f31830" d="M341.3 0H512v512H341.3z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-be"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="BeSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BeSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M0 0h213.3v480H0z" />
      <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
    </g>
  </g>
</svg>

{/if}

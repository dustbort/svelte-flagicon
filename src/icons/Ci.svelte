<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ci"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="CiSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CiSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd">
      <path fill="#00cd00" d="M341.5 0H512v512H341.5z" />
      <path fill="#ff9a00" d="M0 0h170.3v512H0z" />
      <path fill="#fff" d="M170.3 0h171.2v512H170.3z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ci"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="CiSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CiSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd">
      <path fill="#00cd00" d="M426.8 0H640v480H426.8z" />
      <path fill="#ff9a00" d="M0 0h212.9v480H0z" />
      <path fill="#fff" d="M212.9 0h214v480h-214z" />
    </g>
  </g>
</svg>

{/if}

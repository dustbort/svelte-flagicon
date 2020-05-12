<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-th"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="ThSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ThSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd">
      <path fill="#f4f5f8" d="M0 0h512v512H0z" />
      <path fill="#2d2a4a" d="M0 173.4h512V344H0z" />
      <path fill="#a51931" d="M0 0h512v88H0zm0 426.7h512V512H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-th"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="ThSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ThSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd">
      <path fill="#f4f5f8" d="M0 0h640v480H0z" />
      <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
      <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
    </g>
  </g>
</svg>

{/if}

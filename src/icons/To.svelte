<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-to"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="ToSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ToSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#c10000" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 0h218.3v175H0z" />
      <g fill="#c10000">
        <path d="M89.8 27.3h34.8v121.9H89.8z" />
        <path d="M168.2 70.8v34.8H46.3V70.8z" />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-to"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="ToSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ToSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#c10000" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h250v200.3H0z" />
      <g fill="#c10000">
        <path d="M102.8 31.2h39.9v139.6h-39.8z" />
        <path d="M192.6 81v40H53V81z" />
      </g>
    </g>
  </g>
</svg>

{/if}

<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ch"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="ChSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ChSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#d52b1e" d="M0 0h512v512H0z" />
      <g fill="#fff">
        <path d="M96 208h320v96H96z" />
        <path d="M208 96h96v320h-96z" />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ch"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="ChSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ChSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#d52b1e" d="M0 0h640v480H0z" />
      <g fill="#fff">
        <path d="M170 195h300v90H170z" />
        <path d="M275 90h90v300h-90z" />
      </g>
    </g>
  </g>
</svg>

{/if}

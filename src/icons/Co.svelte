<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-co"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="CoSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CoSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#ffe800" d="M0 0h512v512H0z" />
      <path fill="#00148e" d="M0 256h512v256H0z" />
      <path fill="#da0010" d="M0 384h512v128H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-co"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="CoSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CoSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#ffe800" d="M0 0h640v480H0z" />
      <path fill="#00148e" d="M0 240h640v240H0z" />
      <path fill="#da0010" d="M0 360h640v120H0z" />
    </g>
  </g>
</svg>

{/if}

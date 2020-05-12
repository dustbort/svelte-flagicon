<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bv"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="BvSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BvSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)">
      <path fill="#fff" d="M-68 0h699.7v512H-68z" />
      <path
        fill="#d72828"
        d="M-93-77.8h218.7v276.2H-93zM249.4-.6h381v199h-381zM-67.6 320h190.4v190.3H-67.5zm319.6 2.1h378.3v188.2H252z"
      />
      <path fill="#003897" d="M156.7-25.4H221v535.7h-64.5z" />
      <path fill="#003897" d="M-67.5 224.8h697.8v63.5H-67.5z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bv"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="bv-a">
      <path fill-opacity=".7" d="M0 0h640v480H0z" />
    </clipPath>

    <mask id="BvSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BvSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#bv-a)">
      <path fill="#fff" d="M-28 0h699.7v512H-28z" />
      <path
        fill="#d72828"
        d="M-53-77.8h218.7v276.2H-53zM289.4-.6h381v199h-381zM-27.6 320h190.4v190.3H-27.6zm319.6 2.1h378.3v188.2H292z"
      />
      <path fill="#003897" d="M196.7-25.4H261v535.7h-64.5z" />
      <path fill="#003897" d="M-27.6 224.8h698v63.5h-698z" />
    </g>
  </g>
</svg>

{/if}

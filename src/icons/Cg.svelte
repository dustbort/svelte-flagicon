<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cg"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M115.7 0h496.1v496h-496z" />
    </clipPath>

    <mask id="CgSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CgSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a)"
      transform="translate(-119.5) scale(1.032)"
    >
      <path fill="#ff0" d="M0 0h744v496H0z" />
      <path fill="#00ca00" d="M0 0v496L496 0H0z" />
      <path fill="red" d="M248 496h496V0L248 496z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cg"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="cg-a">
      <path fill-opacity=".7" d="M-79.5 32h640v480h-640z" />
    </clipPath>

    <mask id="CgSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CgSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#cg-a)"
      transform="translate(79.5 -32)"
    >
      <path fill="#ff0" d="M-119.5 32h720v480h-720z" />
      <path fill="#00ca00" d="M-119.5 32v480l480-480h-480z" />
      <path fill="red" d="M120.5 512h480V32l-480 480z" />
    </g>
  </g>
</svg>

{/if}

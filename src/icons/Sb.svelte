<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sb"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h496v496H0z" />
    </clipPath>

    <mask id="SbSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SbSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a)"
      transform="scale(1.0321)"
    >
      <path fill="#0000d6" d="M0 491.4L956.7 0H0v491.4z" />
      <path fill="#006000" d="M992.1 0L26.3 496h965.8V0z" />
      <path fill="#fc0" d="M992.2 0H939L0 470.3V496h53.1l939-469.4V0z" />
      <path
        fill="#fff"
        d="M39 96.1l11.6-33.3-30.2-20.6h37.3L69.2 8.8l11.5 33.4h37.2L87.8 62.8 99.3 96 69.2 75.5zm185.2 0l11.6-33.3-30.2-20.6h37.3l11.5-33.4 11.5 33.4H303l-30 20.6L284.5 96l-30.1-20.6zm0 140l11.6-33.3-30.2-20.6h37.3l11.5-33.4 11.5 33.4H303l-30 20.6 11.6 33.3-30.1-20.6zm-92-69.2l11.5-33.3-30.1-20.6h37.2l11.5-33.3 11.5 33.3h37.3l-30.2 20.6 11.5 33.3-30-20.6zM39 236.1l11.6-33.3-30.2-20.6h37.3l11.5-33.4 11.5 33.4h37.2l-30.1 20.6L99.3 236l-30.1-20.6z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sb"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="sb-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="SbSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SbSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#sb-a)"
      transform="scale(.9375)"
    >
      <path fill="#0000d6" d="M0 507.2L987.4 0H0v507.2z" />
      <path fill="#006000" d="M1024 0L27.2 512H1024V0z" />
      <path fill="#fc0" d="M1024 0h-54.9L0 485.4V512h54.9L1024 27.6V0z" />
      <path
        fill="#fff"
        d="M71.4 9.1l11.8 34.5h38.5L90.6 64.7l11.9 34.4L71.4 78 40.3 99.2l11.9-34.4-31.1-21.3h38.4zm191.1 0l11.9 34.5h38.5l-31.2 21.2 12 34.4L262.4 78l-31 21.3 11.9-34.4-31.2-21.3h38.5zm0 144.5l11.9 34.5h38.5l-31.2 21.2 12 34.4-31.2-21.3-31 21.3 11.9-34.4-31.2-21.3h38.5zm-95-71.4l11.9 34.4h38.4l-31 21.3 11.8 34.4-31-21.3-31.2 21.3 12-34.4-31.2-21.3h38.5zm-96.1 71.4l11.8 34.5h38.5l-31.1 21.2 11.9 34.4-31.1-21.3-31.1 21.3 12-34.4L21 188h38.4z"
      />
    </g>
  </g>
</svg>

{/if}

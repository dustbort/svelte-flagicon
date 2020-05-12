<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tg"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0-.2h496.3V496H0z" />
    </clipPath>

    <mask id="TgSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TgSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a)"
      transform="translate(0 .3) scale(1.0316)"
    >
      <path fill="#ffe300" d="M0-.2h744V496H0z" />
      <path fill="#118600" d="M0 201.5h744v99.7H0zM0 0h744v99.7H0z" />
      <path fill="#d80000" d="M0 0h297.1v301.2H0z" />
      <path
        fill="#fff"
        d="M130.3 124.3c0-.9 18.3-51.5 18.3-51.5l16.6 50.6s55.6 1.7 55.6.8-44 33.2-44 33.2 20.7 58.1 19.9 56.5c-.8-1.7-48.1-34.9-48.1-34.9s-48.2 33.2-47.3 33.2 18.2-54.7 18.2-54.7L76.4 125l53.9-.8z"
      />
      <path fill="#118600" d="M0 396.4h744v99.7H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tg"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="tg-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="TgSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TgSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#tg-a)" transform="scale(.9375)">
      <path fill="#ffe300" d="M0 0h767.6v512H0z" />
      <path fill="#118600" d="M0 208.1h767.6V311H0zM0 .2h767.6v102.9H0z" />
      <path fill="#d80000" d="M0 .3h306.5v310.6H0z" />
      <path
        fill="#fff"
        d="M134.4 128.4c0-.8 18.9-53 18.9-53l17 52.2s57.4 1.7 57.4.8-45.3 34.3-45.3 34.3 21.4 60 20.5 58.2c-.8-1.7-49.6-36-49.6-36s-49.7 34.3-48.8 34.3c.8 0 18.8-56.5 18.8-56.5l-44.5-33.4 55.6-.9z"
      />
      <path fill="#118600" d="M0 409.2h767.6V512H0z" />
    </g>
  </g>
</svg>

{/if}

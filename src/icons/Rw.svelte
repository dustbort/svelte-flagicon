<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-rw"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="RwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#RwSvelteFlagIconRound)' : '' }">
    <path fill="#20603d" d="M0 0h512v512H0z" />
    <path fill="#fad201" d="M0 0h512v384H0z" />
    <path fill="#00a1de" d="M0 0h512v256H0z" />
    <g transform="translate(374.4 133.8) scale(.7111)">
      <g id="b">
        <path
          id="a"
          fill="#e5be01"
          d="M116.1 0L35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
        />
        <use
          width="100%"
          height="100%"
          transform="scale(1 -1)"
          xlink:href="#a"
        />
      </g>
      <use width="100%" height="100%" transform="scale(-1 1)" xlink:href="#b" />
      <circle r="34.3" fill="#e5be01" stroke="#00a1de" stroke-width="3.4" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-rw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="RwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#RwSvelteFlagIconRound)' : '' }">
    <path fill="#20603d" d="M0 0h640v480H0z" />
    <path fill="#fad201" d="M0 0h640v360H0z" />
    <path fill="#00a1de" d="M0 0h640v240H0z" />
    <g transform="translate(511 125.4) scale(.66667)">
      <g id="b">
        <path
          id="a"
          fill="#e5be01"
          d="M116.1 0L35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
        />
        <use
          width="100%"
          height="100%"
          transform="scale(1 -1)"
          xlink:href="#a"
        />
      </g>
      <use width="100%" height="100%" transform="scale(-1 1)" xlink:href="#b" />
      <circle r="34.3" fill="#e5be01" stroke="#00a1de" stroke-width="3.4" />
    </g>
  </g>
</svg>

{/if}

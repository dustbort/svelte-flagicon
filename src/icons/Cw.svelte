<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-cw"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h9000v9000H0z" />
    </clipPath>
    <path id="b" d="M0-1l.2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />

    <mask id="CwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CwSvelteFlagIconRound)' : '' }">
    <g clip-path="url(#a)" transform="scale(.057)">
      <path fill="#002b7f" d="M0 0h13500v9000H0z" />
      <path fill="#f9e814" d="M0 5625h13500v1125H0z" />
      <use
        width="13500"
        height="9000"
        x="2"
        y="2"
        fill="#fff"
        transform="scale(750)"
        xlink:href="#b"
      />
      <use
        width="13500"
        height="9000"
        x="3"
        y="3"
        fill="#fff"
        transform="scale(1000)"
        xlink:href="#b"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-cw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="cw-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>
    <path id="b" d="M0-1l.2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />

    <mask id="CwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CwSvelteFlagIconRound)' : '' }">
    <g clip-path="url(#cw-a)" transform="scale(.94)">
      <path fill="#002b7f" d="M0 0h768v512H0z" />
      <path fill="#f9e814" d="M0 320h768v64H0z" />
      <use
        width="13500"
        height="9000"
        x="2"
        y="2"
        fill="#fff"
        transform="scale(42.67)"
        xlink:href="#b"
      />
      <use
        width="13500"
        height="9000"
        x="3"
        y="3"
        fill="#fff"
        transform="scale(56.9)"
        xlink:href="#b"
      />
    </g>
  </g>
</svg>

{/if}

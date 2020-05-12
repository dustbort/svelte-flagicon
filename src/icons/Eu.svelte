<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-eu"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <g id="d">
      <g id="b">
        <path id="a" d="M0-1l-.3 1 .5.1z" />
        <use transform="scale(-1 1)" xlink:href="#a" />
      </g>
      <g id="c">
        <use transform="rotate(72)" xlink:href="#b" />
        <use transform="rotate(144)" xlink:href="#b" />
      </g>
      <use transform="scale(-1 1)" xlink:href="#c" />
    </g>

    <mask id="EuSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#EuSvelteFlagIconRound)' : '' }">
    <path fill="#039" d="M0 0h512v512H0z" />
    <g fill="#fc0" transform="translate(256 258.4) scale(25.28395)">
      <use width="100%" height="100%" y="-6" xlink:href="#d" />
      <use width="100%" height="100%" y="6" xlink:href="#d" />
      <g id="e">
        <use width="100%" height="100%" x="-6" xlink:href="#d" />
        <use
          width="100%"
          height="100%"
          transform="rotate(-144 -2.3 -2.1)"
          xlink:href="#d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(144 -2.1 -2.3)"
          xlink:href="#d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(72 -4.7 -2)"
          xlink:href="#d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(72 -5 .5)"
          xlink:href="#d"
        />
      </g>
      <use width="100%" height="100%" transform="scale(-1 1)" xlink:href="#e" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-eu"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <g id="d">
      <g id="b">
        <path id="a" d="M0-1l-.3 1 .5.1z" />
        <use transform="scale(-1 1)" xlink:href="#a" />
      </g>
      <g id="c">
        <use transform="rotate(72)" xlink:href="#b" />
        <use transform="rotate(144)" xlink:href="#b" />
      </g>
      <use transform="scale(-1 1)" xlink:href="#c" />
    </g>

    <mask id="EuSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#EuSvelteFlagIconRound)' : '' }">
    <path fill="#039" d="M0 0h640v480H0z" />
    <g fill="#fc0" transform="translate(320 242.3) scale(23.7037)">
      <use width="100%" height="100%" y="-6" xlink:href="#d" />
      <use width="100%" height="100%" y="6" xlink:href="#d" />
      <g id="e">
        <use width="100%" height="100%" x="-6" xlink:href="#d" />
        <use
          width="100%"
          height="100%"
          transform="rotate(-144 -2.3 -2.1)"
          xlink:href="#d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(144 -2.1 -2.3)"
          xlink:href="#d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(72 -4.7 -2)"
          xlink:href="#d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(72 -5 .5)"
          xlink:href="#d"
        />
      </g>
      <use width="100%" height="100%" transform="scale(-1 1)" xlink:href="#e" />
    </g>
  </g>
</svg>

{/if}

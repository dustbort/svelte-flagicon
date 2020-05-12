<script>
  import { v4 as uuidv4 } from "uuid";
  export let id = uuidv4();
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-gd"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <g id="c{id}">
      <g id="b{id}">
        <path
          id="a{id}"
          fill="#fcd116"
          d="M0-1v1h.5"
          transform="rotate(18 0 -1)"
        />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlink:href="#a"
        />
      </g>
      <use width="100%" height="100%" transform="rotate(72)" xlink:href="#b" />
      <use width="100%" height="100%" transform="rotate(144)" xlink:href="#b" />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlink:href="#b"
      />
      <use width="100%" height="100%" transform="rotate(-72)" xlink:href="#b" />
    </g>

    <mask id="GdSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GdSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#ce1126" d="M0 0h512v512H0z" />
    <path fill="#007a5e" d="M71.7 71.7h368.6v368.6H71.7z" />
    <path fill="#fcd116" d="M71.7 71.7h368.6L71.7 440.4h368.6z" />
    <circle cx="255.9" cy="256.1" r="61.4" fill="#ce1126" />
    <use
      width="100%"
      height="100%"
      transform="translate(256 256) scale(56.32)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-16.4 -.1)"
      xlink:href="#d"
    />
    <use
      id="d"
      width="100%"
      height="100%"
      transform="translate(256 35.9) scale(33.28)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      x="100"
      transform="translate(16.4)"
      xlink:href="#d"
    />
    <path
      fill="#ce1126"
      d="M99.8 256.8c7.7 14.3 22.6 29.8 35.7 35.3.2-14.5-5-33.2-12-48l-23.7 12.7z"
    />
    <path
      fill="#fcd116"
      d="M86.8 207.6c11.1 23.3-29 78.7 37.8 91.7a67.5 67.5 0 01-11.5-44.7 75.5 75.5 0 0134.6 32.8c17.5-63.4-44.8-59.5-61-79.8z"
    />
    <use
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-16.4 442)"
      xlink:href="#d"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(256 478) scale(33.28)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      x="100"
      transform="translate(16.4 442.2)"
      xlink:href="#d"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-gd"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <g id="c{id}">
      <g id="b{id}">
        <path
          id="a{id}"
          fill="#fcd116"
          d="M0-1v1h.5"
          transform="rotate(18 0 -1)"
        />
        <use transform="scale(-1 1)" xlink:href="#a" />
      </g>
      <use transform="rotate(72)" xlink:href="#b" />
      <use transform="rotate(144)" xlink:href="#b" />
      <use transform="rotate(216)" xlink:href="#b" />
      <use transform="rotate(288)" xlink:href="#b" />
    </g>

    <mask id="GdSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GdSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#ce1126" d="M0 0h640v480H0z" />
    <path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
    <path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
    <circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126" />
    <use
      width="100%"
      height="100%"
      transform="matrix(52.8 0 0 52.8 320 240)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-30.3)"
      xlink:href="#d"
    />
    <use
      id="d"
      width="100%"
      height="100%"
      transform="matrix(31.2 0 0 31.2 320 33.6)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      x="100"
      transform="translate(30.3)"
      xlink:href="#d"
    />
    <path
      fill="#ce1126"
      d="M102.3 240.7a80.4 80.4 0 0033.5 33.2 111 111 0 00-11.3-45l-22.2 11.8z"
    />
    <path
      fill="#fcd116"
      d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 01-10.9-41.9 70 70 0 0132.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
    />
    <use
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-30.3 414.6)"
      xlink:href="#d"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(31.2 0 0 31.2 320 448.2)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      x="100"
      transform="translate(30.3 414.6)"
      xlink:href="#d"
    />
  </g>
</svg>

{/if}

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
  id="flag-icon-css-tj"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="TjSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TjSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#060" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 0h512v365.7H0z" />
    <path fill="#c00" d="M0 0h512v146.3H0z" />
    <g fill="#f8c300" transform="translate(-256) scale(.73143)">
      <path
        d="M672 340.7a12.5 12.5 0 0123.3 5.9v50h9.4v-50a12.5 12.5 0 0123.3-5.9 29.5 29.5 0 10-56 0"
      />
      <path
        fill="#fff"
        d="M678.7 327.6a20 20 0 0121.3 9.6 20 20 0 0121.3-9.6 21.5 21.5 0 00-42.6 0"
      />
      <path
        id="a"
        d="M695.3 376.6a38 38 0 01-63.8 24.3 39.5 39.5 0 01-59.8 17.5c3.7 36.4 58.3 29 62.3-6.4 17.2 30.1 55 21.5 66-15.4z"
      />
      <use
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 1400 0)"
        xlink:href="#a"
      />
      <path
        id="b"
        d="M658.8 441.3c-7.6 16.5-22.8 19.3-36.1 6 0 0 5.3-3.8 11-4.8a18 18 0 014.3-14.3 22 22 0 019 11.8c8-1 11.8 1.3 11.8 1.3z"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(9.4 700 804)"
        xlink:href="#b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(18.7 700 804)"
        xlink:href="#b"
      />
      <path
        fill="none"
        stroke="#f8c300"
        stroke-width="16"
        d="M603 478a340 340 0 01194 0"
      />
      <g transform="translate(700 380)">
        <g transform="translate(0 -140)">
          <path
            id="c"
            d="M488533-158734l-790463 574305L0-513674l301930 929245-790463-574305z"
            transform="scale(.00005)"
          />
        </g>
        <g id="d">
          <use
            width="100%"
            height="100%"
            transform="translate(-70 -121.2)"
            xlink:href="#c"
          />
          <use
            width="100%"
            height="100%"
            transform="translate(-121.2 -70)"
            xlink:href="#c"
          />
          <use
            width="100%"
            height="100%"
            transform="translate(-140)"
            xlink:href="#c"
          />
        </g>
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlink:href="#d"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-tj"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="TjSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TjSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#060" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h640v342.9H0z" />
    <path fill="#c00" d="M0 0h640v137.1H0z" />
    <path
      fill="#f8c300"
      d="M300.8 233.6a8.6 8.6 0 0116 4V272h6.4v-34.3a8.6 8.6 0 0116-4 20.2 20.2 0 10-38.4 0"
    />
    <path
      fill="#fff"
      d="M305.4 224.7a13.7 13.7 0 0114.6 6.5 13.7 13.7 0 0114.6-6.5 14.7 14.7 0 00-29.2 0"
    />
    <path
      id="a"
      fill="#f8c300"
      d="M316.8 258.3a26 26 0 01-43.8 16.6 27 27 0 01-41 12c2.5 25 40 19.9 42.8-4.4 11.7 20.7 37.6 14.7 45.2-10.6z"
    />
    <use
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="matrix(-1 0 0 1 640 0)"
      xlink:href="#a"
    />
    <path
      id="b"
      fill="#f8c300"
      d="M291.8 302.6c-5.3 11.3-15.7 13.2-24.8 4.1 0 0 3.6-2.6 7.6-3.3-.8-3.1.7-7.5 2.9-9.8a15 15 0 016.1 8.1c5.5-.7 8.2 1 8.2 1z"
    />
    <use
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="rotate(9.4 320 551.3)"
      xlink:href="#b"
    />
    <use
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="rotate(18.7 320 551.3)"
      xlink:href="#b"
    />
    <path
      fill="none"
      stroke="#f8c300"
      stroke-width="11"
      d="M253.5 327.8a233.1 233.1 0 01133 0"
    />
    <g fill="#f8c300" transform="translate(320 164.6) scale(.68571)">
      <path
        id="c"
        d="M301930 415571l-790463-574305h977066l-790463 574305L0-513674z"
        transform="scale(.00005)"
      />
    </g>
    <g id="d" fill="#f8c300" transform="translate(320 260.6) scale(.68571)">
      <use
        width="100%"
        height="100%"
        transform="translate(-70 -121.2)"
        xlink:href="#c"
      />
      <use
        width="100%"
        height="100%"
        transform="translate(-121.2 -70)"
        xlink:href="#c"
      />
      <use
        width="100%"
        height="100%"
        transform="translate(-140)"
        xlink:href="#c"
      />
    </g>
    <use
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="matrix(-1 0 0 1 640 0)"
      xlink:href="#d"
    />
  </g>
</svg>

{/if}

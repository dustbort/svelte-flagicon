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
  id="flag-icon-css-jp"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
    </clipPath>

    <mask id="JpSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#JpSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a{id})"
      transform="translate(-128) scale(.72249)"
    >
      <path fill="#fff" d="M0 0h1063v708.7H0z" />
      <circle
        cx="523.1"
        cy="344.1"
        r="194.9"
        fill="#d30000"
        transform="translate(-59.7 -34.5) scale(1.1302)"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-jp"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="jp-a{id}">
      <path fill-opacity=".7" d="M-88 32h640v480H-88z" />
    </clipPath>

    <mask id="JpSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#JpSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#jp-a{id})"
      transform="translate(88 -32)"
    >
      <path fill="#fff" d="M-128 32h720v480h-720z" />
      <circle
        cx="523.1"
        cy="344.1"
        r="194.9"
        fill="#d30000"
        transform="translate(-168.4 8.6) scale(.76554)"
      />
    </g>
  </g>
</svg>

{/if}

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
  id="flag-icon-css-dz"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="DzSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#DzSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#fff" d="M256 0h256v512H256z" />
    <path fill="#006233" d="M0 0h256v512H0z" />
    <path
      fill="#d21034"
      d="M367 192a128 128 0 100 128 102.4 102.4 0 110-128m4.2 64L256 218.4l71.7 98.2V195.4L256 293.6z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-dz"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="DzSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#DzSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#fff" d="M320 0h320v480H320z" />
    <path fill="#006233" d="M0 0h320v480H0z" />
    <path
      fill="#d21034"
      d="M424 180a120 120 0 100 120 96 96 0 110-120m4 60l-108-35.2 67.2 92V183.2l-67.2 92z"
    />
  </g>
</svg>

{/if}

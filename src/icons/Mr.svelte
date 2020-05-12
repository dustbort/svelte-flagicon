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
  id="flag-icon-css-mr"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="MrSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MrSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#cd2a3e" d="M0 0h512v512H0z" />
    <path fill="#006233" d="M0 76.8h512v358.4H0z" />
    <path
      fill="#ffc400"
      d="M416 164.9a160 160 0 01-320 0 165.2 165.2 0 00-5.4 41.8A165.4 165.4 0 10416 165z"
      class="st1"
    />
    <path
      fill="#ffc400"
      d="M256 100l-14.4 44.3h-46.5l37.6 27.3-14.3 44.2 37.6-27.3 37.6 27.3-14.4-44.2 37.7-27.3h-46.5z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mr"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="MrSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MrSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#cd2a3e" d="M0 0h640v480H0z" />
    <path fill="#006233" d="M0 72h640v336H0z" />
    <path
      fill="#ffc400"
      d="M470 154.6a150 150 0 01-300 0 154.9 154.9 0 00-5 39.2 155 155 0 10310 0 154.4 154.4 0 00-5-39.2z"
      class="st1"
    />
    <path
      fill="#ffc400"
      d="M320 93.8l-13.5 41.5H263l35.3 25.6-13.5 41.4 35.3-25.6 35.3 25.6-13.5-41.4 35.3-25.6h-43.6z"
    />
  </g>
</svg>

{/if}

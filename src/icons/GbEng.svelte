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
  id="flag-icon-css-gb-eng"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="GbEngSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GbEngSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path fill="#ce1124" d="M215 0h82v512h-82z" />
    <path fill="#ce1124" d="M0 215h512v82H0z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gb-eng"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="GbEngSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GbEngSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z" />
    <path fill="#ce1124" d="M0 201.6h640v76.8H0z" />
  </g>
</svg>

{/if}

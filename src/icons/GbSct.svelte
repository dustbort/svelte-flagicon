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
  id="flag-icon-css-gb-sct"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="GbSctSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GbSctSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#0065bd" d="M0 0h512v512H0z" />
    <path
      stroke="#fff"
      stroke-width=".6"
      d="M0 0l5 3M0 3l5-3"
      transform="scale(102.4 170.66667)"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gb-sct"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="GbSctSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GbSctSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#0065bd" d="M0 0h640v480H0z" />
    <path
      stroke="#fff"
      stroke-width=".6"
      d="M0 0l5 3M0 3l5-3"
      transform="scale(128 160)"
    />
  </g>
</svg>

{/if}

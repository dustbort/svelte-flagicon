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
  id="flag-icon-css-lv"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="LvSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#LvSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#981e32" d="M0 0h512v204.8H0zm0 307.2h512V512H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-lv"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="LvSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#LvSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z" />
    </g>
  </g>
</svg>

{/if}

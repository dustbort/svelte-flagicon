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
  id="flag-icon-css-hu"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="HuSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#HuSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#fff" d="M512 512H0V0h512z" />
      <path fill="#388d00" d="M512 512H0V341.3h512z" />
      <path fill="#d43516" d="M512 170.8H0V.1h512z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-hu"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="HuSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#HuSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z" />
      <path fill="#388d00" d="M640 480H0V320h640z" />
      <path fill="#d43516" d="M640 160.1H0V.1h640z" />
    </g>
  </g>
</svg>

{/if}

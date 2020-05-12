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
  id="flag-icon-css-nl"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="NlSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#NlSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#21468b" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 0h512v341.3H0z" />
    <path fill="#ae1c28" d="M0 0h512v170.7H0z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-nl"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="NlSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#NlSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#21468b" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h640v320H0z" />
    <path fill="#ae1c28" d="M0 0h640v160H0z" />
  </g>
</svg>

{/if}

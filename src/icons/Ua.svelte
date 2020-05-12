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
  id="flag-icon-css-ua"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="UaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#UaSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#ffd500" d="M0 0h512v512H0z" />
      <path fill="#005bbb" d="M0 0h512v256H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ua"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="UaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#UaSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#ffd500" d="M0 0h640v480H0z" />
      <path fill="#005bbb" d="M0 0h640v240H0z" />
    </g>
  </g>
</svg>

{/if}

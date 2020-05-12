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
  id="flag-icon-css-bw"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="BwSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BwSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#00cbff" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 192h512v128H0z" />
      <path d="M0 212.7h512V299H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="BwSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BwSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#00cbff" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path d="M0 186h640v108H0z" />
    </g>
  </g>
</svg>

{/if}

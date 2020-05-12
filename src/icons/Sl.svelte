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
  id="flag-icon-css-sl"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <rect width="384" height="512" rx="4.6" ry="7.6" />
    </clipPath>

    <mask id="SlSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SlSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a{id})" transform="scale(1.33333 1)">
      <path fill="#0000cd" d="M0 341.7h512V512H0z" />
      <path fill="#fff" d="M0 171.4h512v170.3H0z" />
      <path fill="#00cd00" d="M0 0h512v171.4H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sl"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="SlSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SlSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#0000cd" d="M0 320.3h640V480H0z" />
      <path fill="#fff" d="M0 160.7h640v159.6H0z" />
      <path fill="#00cd00" d="M0 0h640v160.7H0z" />
    </g>
  </g>
</svg>

{/if}

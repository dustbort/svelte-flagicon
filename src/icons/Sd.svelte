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
  id="flag-icon-css-sd"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M0 0h496v496H0z" />
    </clipPath>

    <mask id="SdSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SdSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a{id})"
      transform="scale(1.0321)"
    >
      <path d="M0 330.7h992.1v165.4H0z" />
      <path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <path fill="red" d="M0 0h992.9v165.4H0z" />
      <path fill="#009a00" d="M0 0v496l330.7-248L0 0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sd"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="sd-a{id}">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="SdSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SdSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#sd-a{id})"
      transform="scale(.9375)"
    >
      <path d="M0 341.3h1024V512H0z" />
      <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <path fill="red" d="M0 0h1024.8v170.7H0z" />
      <path fill="#009a00" d="M0 0v512l341.3-256L0 0z" />
    </g>
  </g>
</svg>

{/if}

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
  id="flag-icon-css-gm"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="GmSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GmSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="red" d="M0 0h512v170.7H0z" />
      <path fill="#fff" d="M0 170.7h512V199H0z" />
      <path fill="#009" d="M0 199.1h512V313H0z" />
      <path fill="#fff" d="M0 312.9h512v28.4H0z" />
      <path fill="#090" d="M0 341.3h512V512H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gm"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="gm-a{id}">
      <path fill-opacity=".7" d="M0-48h640v480H0z" />
    </clipPath>

    <mask id="GmSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GmSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#gm-a{id})"
      transform="translate(0 48)"
    >
      <path fill="red" d="M0-128h640V85.3H0z" />
      <path fill="#fff" d="M0 85.3h640V121H0z" />
      <path fill="#009" d="M0 120.9h640V263H0z" />
      <path fill="#fff" d="M0 263.1h640v35.6H0z" />
      <path fill="#090" d="M0 298.7h640V512H0z" />
    </g>
  </g>
</svg>

{/if}

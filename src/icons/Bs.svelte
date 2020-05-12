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
  id="flag-icon-css-bs"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M56.6 26.4H537v480.3H56.6z" />
    </clipPath>

    <mask id="BsSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BsSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a{id})"
      transform="matrix(1.066 0 0 1.067 -60.4 -28.1)"
    >
      <path fill="#fff" d="M990 506.2H9.4V27.6H990z" />
      <path fill="#ffe900" d="M990 370.6H9.4V169.2H990z" />
      <path fill="#08ced6" d="M990 506.2H9.4V346.7H990zm0-319H9.4V27.9H990z" />
      <path d="M9 25.9c2.1 0 392.3 237 392.3 237L7.8 505.3 9 25.9z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bs"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="bs-a{id}">
      <path fill-opacity=".7" d="M-12 0h640v480H-12z" />
    </clipPath>

    <mask id="BsSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BsSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" clip-path="url(#bs-a{id})" transform="translate(12)">
      <path fill="#fff" d="M968.5 480h-979V1.8h979z" />
      <path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z" />
      <path fill="#08ced6" d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z" />
      <path d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2-10.9 0z" />
    </g>
  </g>
</svg>

{/if}

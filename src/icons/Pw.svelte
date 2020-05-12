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
  id="flag-icon-css-pw"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M61.7 4.2h170.8V175H61.7z" />
    </clipPath>

    <mask id="PwSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#PwSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a{id})"
      transform="translate(-185 -12.5) scale(2.9973)"
    >
      <path fill="#4aadd6" d="M0 4.2h301.2V175H0z" />
      <path
        fill="#ffde00"
        d="M185.9 86.8a52 52 0 01-53 50.8 52 52 0 01-53.2-50.8c0-28 23.8-50.8 53.1-50.8s53 22.7 53 50.8z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-pw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="pw-a{id}">
      <path fill-opacity=".7" d="M-70.3 0h640v480h-640z" />
    </clipPath>

    <mask id="PwSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#PwSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#pw-a{id})"
      transform="translate(70.3)"
    >
      <path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z" />
      <path
        fill="#ffde00"
        d="M335.6 232.1a135.9 130.1 0 11-271.7 0 135.9 130.1 0 11271.7 0z"
      />
    </g>
  </g>
</svg>

{/if}

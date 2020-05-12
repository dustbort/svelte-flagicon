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
  id="flag-icon-css-ss"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="SsSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SsSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#078930" d="M0 358.4h512V512H0z" />
    <path fill="#fff" d="M0 153.6h512v204.8H0z" />
    <path d="M0 0h512v153.6H0z" />
    <path fill="#da121a" d="M0 179.2h512v153.6H0z" />
    <path fill="#0f47af" d="M0 0l433 256L0 512z" />
    <path fill="#fcdd09" d="M209 207.8L64.4 256l144.8 48.1-89.5-126v155.8z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ss"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="SsSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SsSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#078930" d="M0 336h640v144H0z" />
    <path fill="#fff" d="M0 144h640v192H0z" />
    <path d="M0 0h640v144H0z" />
    <path fill="#da121a" d="M0 168h640v144H0z" />
    <path fill="#0f47af" d="M0 0l415.7 240L0 480z" />
    <path fill="#fcdd09" d="M200.7 194.8L61.7 240l139 45.1L114.9 167v146z" />
  </g>
</svg>

{/if}

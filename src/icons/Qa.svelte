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
  id="flag-icon-css-qa"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="QaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#QaSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#8d1b3d" d="M0 0h512v512H0z" />
    <path
      fill="#fff"
      d="M0 0v512h113l104.2-28.4L113 455l104.2-28.4L113 398.2l104.2-28.4L113 341.3 217.2 313 113 284.4 217.2 256 113 227.6 217.2 199 113 170.7l104.2-28.5L113 113.8l104.2-28.5L113 57l104.2-28.4L113 0H0z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-qa"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="QaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#QaSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#8d1b3d" d="M0 0h640v480H0z" />
    <path
      fill="#fff"
      d="M0 0v480h158.4l97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6L256.1 80l-97.7-26.7 97.8-26.6L158.3 0H0z"
    />
  </g>
</svg>

{/if}

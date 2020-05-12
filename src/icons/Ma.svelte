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
  id="flag-icon-css-ma"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="MaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MaSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#c1272d" d="M512 0H0v512h512z" />
    <path
      fill="none"
      stroke="#006233"
      stroke-width="12.5"
      d="M256 191.4l-38 116.8 99.4-72.2H194.6l99.3 72.2z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ma"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="MaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MaSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#c1272d" d="M640 0H0v480h640z" />
    <path
      fill="none"
      stroke="#006233"
      stroke-width="11.7"
      d="M320 179.4L284.4 289l93.2-67.6H262.4l93.2 67.6z"
    />
  </g>
</svg>

{/if}

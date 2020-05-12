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
  id="flag-icon-css-mu"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="MuSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MuSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#009f4d" d="M0 384h512v128H0z" />
      <path fill="#151f6d" d="M0 128h512v128H0z" />
      <path fill="#ee2737" d="M0 0h512v128H0z" />
      <path fill="#ffcd00" d="M0 256h512v128H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mu"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="MuSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MuSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#00a04d" d="M0 360h640v120H0z" />
      <path fill="#151f6d" d="M0 120h640v120H0z" />
      <path fill="#ee2737" d="M0 0h640v120H0z" />
      <path fill="#ffcd00" d="M0 240h640v120H0z" />
    </g>
  </g>
</svg>

{/if}

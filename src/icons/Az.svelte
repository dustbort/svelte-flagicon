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
  id="flag-icon-css-az"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="AzSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#AzSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#3f9c35" d="M0 0h512v512H0z" />
    <path fill="#ed2939" d="M0 0h512v341.3H0z" />
    <path fill="#00b9e4" d="M0 0h512v170.7H0z" />
    <circle cx="238.8" cy="256" r="76.8" fill="#fff" />
    <circle cx="255.9" cy="256" r="64" fill="#ed2939" />
    <path
      fill="#fff"
      d="M324.2 213.3l8.1 23 22-10.5-10.4 22 23 8.2-23 8.2 10.4 22-22-10.5-8.1 23-8.2-23-22 10.5 10.5-22-23-8.2 23-8.2-10.5-22 22 10.5 8.2-23z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-az"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="AzSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#AzSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#3f9c35" d="M.1 0h640v480H.1z" />
    <path fill="#ed2939" d="M.1 0h640v320H.1z" />
    <path fill="#00b9e4" d="M.1 0h640v160H.1z" />
    <circle cx="304" cy="240" r="72" fill="#fff" />
    <circle cx="320" cy="240" r="60" fill="#ed2939" />
    <path
      fill="#fff"
      d="M384 200l7.7 21.5 20.6-9.8-9.8 20.7L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8L384 200z"
    />
  </g>
</svg>

{/if}

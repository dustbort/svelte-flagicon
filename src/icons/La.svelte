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
  id="flag-icon-css-la"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
    </clipPath>

    <mask id="LaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#LaSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a{id})"
      transform="translate(-128) scale(.72249)"
    >
      <path fill="#ce1126" d="M0 0h1063v708.7H0z" />
      <path fill="#002868" d="M0 176h1063v356.6H0z" />
      <path
        fill="#fff"
        d="M684.2 354.3a152.7 152.7 0 11-305.4 0 152.7 152.7 0 01305.4 0z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-la"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="la-a{id}">
      <path fill-opacity=".7" d="M0 0h640v480H0z" />
    </clipPath>

    <mask id="LaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#LaSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" clip-path="url(#la-a{id})">
      <path fill="#ce1126" d="M-40 0h720v480H-40z" />
      <path fill="#002868" d="M-40 119.3h720v241.4H-40z" />
      <path
        fill="#fff"
        d="M423.4 240a103.4 103.4 0 11-206.8 0 103.4 103.4 0 11206.8 0z"
      />
    </g>
  </g>
</svg>

{/if}

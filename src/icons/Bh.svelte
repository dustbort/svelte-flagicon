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
  id="flag-icon-css-bh"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="BhSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BhSvelteFlagIconRound' + id + ')' : '' }">
    <defs id="defs448">
      <clipPath id="a">
        <path id="path445" fill-opacity=".7" d="M0 0h640v480H0z" />
      </clipPath>
    </defs>
    <path
      id="path1077"
      fill="#fff"
      stroke-width="4.4"
      d="M0 0h512v512H0"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1079"
      fill="#ce1126"
      stroke-width="4.5"
      d="M512 0H102.4l83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2H512"
      opacity="1"
      stop-opacity="1"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bh"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="BhSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BhSvelteFlagIconRound' + id + ')' : '' }">
    <defs id="defs448">
      <clipPath id="bh-a">
        <path id="path445" fill-opacity=".7" d="M0 0h640v480H0z" />
      </clipPath>
    </defs>
    <path
      id="path1077"
      fill="#fff"
      stroke-width="4.8"
      d="M0 0h640v480H0"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1079"
      fill="#ce1126"
      stroke-width="5.1"
      d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544"
      opacity="1"
      stop-opacity="1"
    />
  </g>
</svg>

{/if}

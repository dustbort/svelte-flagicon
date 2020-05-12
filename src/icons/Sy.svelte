<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sy"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="SySvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SySvelteFlagIconRound)' : '' }">
    <rect
      width="512"
      height="170.7"
      y="170.7"
      fill="#fff"
      fill-rule="evenodd"
      rx="0"
      ry="0"
    />
    <rect
      width="512"
      height="170.7"
      y="341.3"
      fill-rule="evenodd"
      rx="0"
      ry="0"
    />
    <path fill="red" fill-rule="evenodd" d="M0 0h512v170.7H0z" />
    <path
      fill="#090"
      fill-rule="evenodd"
      d="M151.4 299.7l-30.8-22.2L90 300l11.4-36.6L70.9 241l37.8-.3 11.7-36.5 12 36.4H170l-30.4 22.8 11.7 36.4zm285.4 0l-30.7-22.2-30.6 22.5 11.4-36.6-30.5-22.5 37.7-.3 11.7-36.5 12 36.4h37.8l-30.4 22.8 11.6 36.4z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sy"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="SySvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SySvelteFlagIconRound)' : '' }">
    <rect
      width="640"
      height="160"
      y="160"
      fill="#fff"
      fill-rule="evenodd"
      rx="0"
      ry="0"
    />
    <rect width="640" height="160" y="320" fill-rule="evenodd" rx="0" ry="0" />
    <path fill="red" fill-rule="evenodd" d="M0 0h640v160H0z" />
    <path
      fill="#090"
      fill-rule="evenodd"
      d="M201.9 281l-28.8-20.9-28.7 21.1 10.7-34.2-28.7-21.2 35.4-.3 11-34.1 11.3 34h35.4L191 246.9l10.9 34.2zm307.6 0l-28.8-20.9-28.7 21.1 10.7-34.2-28.6-21.2 35.4-.3 11-34.1 11.2 34h35.4l-28.5 21.4 11 34.2z"
    />
  </g>
</svg>

{/if}

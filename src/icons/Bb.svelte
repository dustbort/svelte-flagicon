<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-bb"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="BbSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BbSvelteFlagIconRound)' : '' }">
    <path fill="#00267f" d="M0-.2h512V512H0z" />
    <path fill="#ffc726" d="M170.7-.2h170.6V512H170.7z" />
    <path
      id="a"
      d="M256 173.3c-5.5 15.1-11.2 30.9-23.3 43a51.7 51.7 0 0114.6-2.3v63.6l-18 2.7c-.7 0-.9-1-.9-2.4a243.6 243.6 0 00-11.7-53.6c-.4-2.3-7.2-11.3-2-9.7.7 0 7.7 3 6.6 1.6a68 68 0 00-37.1-19.2c-1.2-.3-2 .3-.9 1.7 18 27.7 33.1 60.4 33 99.2 7 0 24-4.1 31-4.1v44.9h8.8l2-125.4z"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 512 0)"
      xlink:href="#a"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-bb"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="BbSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BbSvelteFlagIconRound)' : '' }">
    <path fill="#00267f" d="M0 0h640v480H0z" />
    <path fill="#ffc726" d="M213.3 0h213.4v480H213.3z" />
    <path
      id="a"
      d="M319.8 135.5c-7 19-14 38.6-29.2 53.7 4.7-1.6 13-3 18.2-2.8v79.5l-22.4 3.3c-.8 0-1-1.3-1-3-2.2-24.7-8-45.5-14.8-67-.5-2.9-9-14-2.4-12 .8 0 9.5 3.6 8.2 1.9a85 85 0 00-46.4-24c-1.5-.3-2.4.5-1 2.2 22.4 34.6 41.3 75.5 41.1 124 8.8 0 30-5.2 38.7-5.2v56.1H320l2.5-156.7z"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 639.5 0)"
      xlink:href="#a"
    />
  </g>
</svg>

{/if}

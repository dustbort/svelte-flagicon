<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-na"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="NaSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#NaSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a)">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#3662a2" d="M-108.2.2l.8 368.6L466.6 0l-574.8.2z" />
      <path fill="#38a100" d="M630.7 511.5l-1.4-383.2-579 383.5 580.4-.3z" />
      <path
        fill="#c70000"
        d="M-107.9 396.6l.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2l-613 396.4z"
      />
      <path
        fill="#ffe700"
        d="M154 183.4l-23.1-14-13.4 23.6-13-23.8L81 183l.6-27.1-27 .2 14-23.2L45 119.5l23.8-13L55 83l27 .6-.1-27.1 23.2 14 13.4-23.6 13 23.7L155.2 57l-.6 27 27-.1-14 23.2 23.6 13.3-23.8 13.1 13.7 23.4-27-.5z"
      />
      <path
        fill="#3662a2"
        d="M167.8 120c0 27.2-22.3 49.3-49.8 49.3s-49.7-22.1-49.7-49.4 22.3-49.3 49.8-49.3 49.7 22 49.7 49.3z"
      />
      <path fill="#ffe700" d="M157 120a39 39 0 11-77.9 0 39 39 0 0177.9 0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-na"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="na-a">
      <path fill-opacity=".7" d="M0 0h640v480H0z" />
    </clipPath>

    <mask id="NaSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#NaSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#na-a)">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#3662a2" d="M-26.4.2l.8 345.6L512.5 0-26.4.2z" />
      <path fill="#38a100" d="M666.4 479.6L665 120.3 122.3 479.8l544-.2z" />
      <path
        fill="#c70000"
        d="M-26 371.8l.4 108.2 117.5-.1L665.4 95.4l-.7-94.1-116-1L-26 371.7z"
      />
      <path
        fill="#ffe700"
        d="M219.6 172l-21.8-13.2-12.6 22.1-12.2-22.2-22 12.9.6-25.4-25.4.2 13.2-21.8-22.1-12.5 22.2-12.3-12.8-22 25.4.6-.1-25.5 21.7 13.2L186.3 44l12.2 22.2 22-12.9-.6 25.4 25.4-.2-13.2 21.8 22.1 12.5-22.2 12.3 12.8 22-25.4-.6z"
      />
      <path
        fill="#3662a2"
        d="M232.4 112.4c0 25.6-20.9 46.3-46.6 46.3s-46.6-20.7-46.6-46.3 20.8-46.2 46.6-46.2 46.6 20.7 46.6 46.2z"
      />
      <path
        fill="#ffe700"
        d="M222.3 112.4a36.5 36.5 0 11-73 0 36.5 36.5 0 0173 0z"
      />
    </g>
  </g>
</svg>

{/if}

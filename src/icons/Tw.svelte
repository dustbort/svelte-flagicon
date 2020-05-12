<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tw"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h496v496H0z" />
    </clipPath>

    <mask id="TwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TwSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a)"
      transform="scale(1.0321)"
    >
      <path fill="#fe0000" d="M0 0h744v496H0z" />
      <path fill="#000095" d="M0 0h373.7v248H0z" />
      <path
        fill="#fff"
        d="M273.3 173l-45.8-9.4 9.7 45.8-35-31.1-14.4 44.5-14.8-44.4-34.8 31.3 9.5-45.8-45.8 9.7 31-35-44.5-14.4 44.5-14.8-31.4-34.8 45.9 9.5-9.8-45.8 35 31 14.5-44.5 14.7 44.5 34.8-31.4-9.4 45.9L273 74l-31.1 35 44.5 14.4-44.4 14.8z"
      />
      <path
        fill="#000095"
        d="M231 169.5l-14.4 7.7-14.1 8.3-16.4-.6-16.4.2-14-8.6-14.2-8-7.7-14.5-8.4-14 .5-16.4-.1-16.4 8.7-13.8 8-14.3 14.5-7.7 14-8.3 16.5.5 16.4-.2 13.9 8.7 14.3 8 7.7 14.5 8.3 14-.5 16.4.2 16.3-8.7 14z"
      />
      <path
        fill="#fff"
        d="M237 124.3a50.3 50.3 0 11-100.5 0 50.3 50.3 0 01100.5 0z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="tw-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="TwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TwSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#tw-a)"
      transform="scale(.9375)"
    >
      <path fill="#fe0000" d="M0 0h768v512H0z" />
      <path fill="#000095" d="M0 0h385.7v256H0z" />
      <path
        fill="#fff"
        d="M282.1 178.6l-47.3-9.8 10 47.3-36-32.1-15 46-15.2-45.9-36 32.4 9.8-47.4-47.2 10.1 32-36.1-46-15 46-15.2-32.4-35.8 47.3 9.7-10-47.3 36 32.1 15-46 15.2 45.9 35.9-32.4-9.7 47.4 47.2-10.1-32 36.1 45.9 15-45.9 15.2z"
      />
      <path
        fill="#000095"
        d="M238.5 175l-15 7.9-14.5 8.6-17-.6-16.9.2-14.3-9L146 174l-8-15-8.6-14.5.6-16.8-.2-17 9-14.2 8.3-14.8 14.9-7.9 14.6-8.6 16.9.6 17-.2 14.3 9 14.7 8.2 8 14.9 8.6 14.5-.6 16.9.2 16.9-9 14.3z"
      />
      <path
        fill="#fff"
        d="M244.6 128.3a51.9 51.9 0 11-103.7 0 51.9 51.9 0 01103.7 0z"
      />
    </g>
  </g>
</svg>

{/if}

<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-pk"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="PkSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#PkSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)">
      <path fill="#0c590b" d="M-95 0h768v512H-95z" />
      <path fill="#fff" d="M-95 0H97.5v512H-95z" />
      <g fill="#fff">
        <path
          d="M403.7 225.4l-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z"
        />
        <path
          d="M415.4 306a121.2 121.2 0 01-161.3 59.4 122.1 122.1 0 01-59.5-162.1A118.6 118.6 0 01266 139a156.2 156.2 0 00-11.8 10.9A112.3 112.3 0 00415.5 306z"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-pk"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="pk-a">
      <path fill-opacity=".7" d="M-52.3 0h682.6v512H-52.3z" />
    </clipPath>

    <mask id="PkSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#PkSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#pk-a)"
      transform="translate(49) scale(.9375)"
    >
      <path fill="#0c590b" d="M-95 0h768v512H-95z" />
      <path fill="#fff" d="M-95 0H97.5v512H-95z" />
      <g fill="#fff">
        <path
          d="M403.7 225.4l-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z"
        />
        <path
          d="M415.4 306a121.2 121.2 0 01-161.3 59.4 122.1 122.1 0 01-59.5-162.1A118.6 118.6 0 01266 139a156.2 156.2 0 00-11.8 10.9A112.3 112.3 0 00415.5 306z"
        />
      </g>
    </g>
  </g>
</svg>

{/if}

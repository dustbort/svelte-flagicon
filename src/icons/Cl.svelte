<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cl"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h708.7v708.7H0z" />
    </clipPath>

    <mask id="ClSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ClSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a)" transform="scale(.722)">
      <path fill="#fff" d="M354.3 0H1063v354.3H354.3z" />
      <path fill="#0039a6" d="M0 0h354.3v354.3H0z" />
      <path
        fill="#fff"
        d="M232.3 265.3l-55-41.1-54.5 41.5 20.3-67.5-54.5-41.7 67.4-.6 21-67.3 21.3 67.2h67.5L211.4 198l20.8 67.4z"
      />
      <path fill="#d52b1e" d="M0 354.3h1063v354.4H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cl"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="cl-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="ClSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ClSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#cl-a)" transform="scale(.9375)">
      <path fill="#fff" d="M256 0h512v256H256z" />
      <path fill="#0039a6" d="M0 0h256v256H0z" />
      <path
        fill="#fff"
        d="M167.8 191.7L128.2 162l-39.5 30 14.7-48.8L64 113.1l48.7-.5L127.8 64l15.5 48.5 48.7.1-39.2 30.4 15 48.7z"
      />
      <path fill="#d52b1e" d="M0 256h768v256H0z" />
    </g>
  </g>
</svg>

{/if}

<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-se"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M119 7.3h490.7V498H119z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#a)" transform="translate(-124.1 -7.6) scale(1.0433)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path
          fill="#006aa7"
          d="M2.9 7.6h245.4v196.3H2.9zm0 294.1h245.4V498H2.9z"
        />
        <path fill="#fecc00" d="M2.9 203.8h245.4v98.1H2.9z" />
        <path fill="#fecc00" d="M247.3 7.3h98.1v490.8h-98.1z" />
        <path fill="#fecc00" d="M342.3 203.8H784V302H342.3z" />
        <path
          fill="#006aa7"
          d="M345.3 301.8H787V498H345.3zm0-294.2H787v196.3H345.3z"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-se"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="se-a">
      <path fill-opacity=".7" d="M-53.4 0h682.6v512H-53.4z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#se-a)" transform="translate(50) scale(.9375)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path
          fill="#006aa7"
          d="M-121.1.3h256v204.8h-256zm0 306.9h256V512h-256z"
        />
        <path fill="#fecc00" d="M-121.1 205h256v102.4h-256z" />
        <path fill="#fecc00" d="M133.8 0h102.4v512H133.8z" />
        <path fill="#fecc00" d="M233 205h460.8v102.4H233z" />
        <path
          fill="#006aa7"
          d="M236.2 307.2H697V512H236.2zm0-306.9H697v204.8H236.2z"
        />
      </g>
    </g>
  </g>
</svg>

{/if}

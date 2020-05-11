<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ax"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M166 0h850v850H166z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#a)" transform="translate(-100) scale(.6024)">
      <path fill="#0053a5" d="M0 0h1300v850H0z" />
      <g fill="#ffce00">
        <path d="M400 0h250v850H400z" />
        <path d="M0 300h1300v250H0z" />
      </g>
      <g fill="#d21034">
        <path d="M475 0h100v850H475z" />
        <path d="M0 375h1300v100H0z" />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ax"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="ax-a">
      <path fill-opacity=".7" d="M106.3 0h1133.3v850H106.3z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#ax-a)" transform="matrix(.56472 0 0 .56482 -60 -.1)">
      <path fill="#0053a5" d="M0 0h1300v850H0z" />
      <g fill="#ffce00">
        <path d="M400 0h250v850H400z" />
        <path d="M0 300h1300v250H0z" />
      </g>
      <g fill="#d21034">
        <path d="M475 0h100v850H475z" />
        <path d="M0 375h1300v100H0z" />
      </g>
    </g>
  </g>
</svg>

{/if}

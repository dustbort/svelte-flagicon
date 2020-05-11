<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-fo"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g fill-rule="evenodd" stroke-width="0" clip-path="url(#a)">
      <path fill="#fff" d="M-78 0h708.2v512H-78z" />
      <path
        fill="#003897"
        d="M-75.9 199.1h198.3V0h113.3v199.1h396.6V313H235.7v199H122.4V312.9H-76V199z"
      />
      <path
        fill="#d72828"
        d="M-75.9 227.6h226.6V0h56.7v227.6h424.9v56.9h-425V512h-56.6V284.4H-75.9v-56.8z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-fo"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="fo-a">
      <path fill-opacity=".7" d="M-78 32h640v480H-78z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="0"
      clip-path="url(#fo-a)"
      transform="translate(78 -32)"
    >
      <path fill="#fff" d="M-78 32h663.9v480H-78z" />
      <path
        fill="#003897"
        d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186V218.7z"
      />
      <path
        fill="#d72828"
        d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76v-53.4z"
      />
    </g>
  </g>
</svg>

{/if}

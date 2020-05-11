<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mk"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#d20000" d="M0 0h512v512H0z" />
    <path
      fill="#ffe600"
      d="M0 0h86.8L256 246.9 425.2 0H512L0 512h86.8L256 265.1 425.2 512H512zm512 204.8v102.4L0 204.8v102.4zM204.8 0L256 219.4 307.2 0zm0 512L256 292.6 307.2 512z"
    />
    <circle
      cx="256"
      cy="256"
      r="82.3"
      fill="#ffe600"
      stroke="#d20000"
      stroke-width="18.3"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mk"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#d20000" d="M0 0h640v480H0z" />
    <path
      fill="#ffe600"
      d="M0 0h96l224 231.4L544 0h96L0 480h96l224-231.4L544 480h96zm640 192v96L0 192v96zM280 0l40 205.7L360 0zm0 480l40-205.7L360 480z"
    />
    <circle
      cx="320"
      cy="240"
      r="77.1"
      fill="#ffe600"
      stroke="#d20000"
      stroke-width="17.1"
    />
  </g>
</svg>

{/if}

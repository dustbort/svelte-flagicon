<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-gg"
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
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path fill="#e8112d" d="M192 0h128v512H192z" />
    <path fill="#e8112d" d="M0 187.7h512v136.6H0z" />
    <path
      id="a"
      fill="#f9dd16"
      d="M46 305.8l23.3-25h210v-49.7h-210L46 206.2z"
    />
    <use
      width="36"
      height="24"
      transform="matrix(0 1.06667 -.9375 0 496 -17)"
      xlink:href="#a"
    />
    <use
      width="36"
      height="24"
      transform="matrix(0 -1.06667 .9375 0 16 529)"
      xlink:href="#a"
    />
    <use
      width="36"
      height="24"
      transform="rotate(180 256 256)"
      xlink:href="#a"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-gg"
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
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#e8112d" d="M256 0h128v480H256z" />
    <path fill="#e8112d" d="M0 176h640v128H0z" />
    <path
      id="a"
      fill="#f9dd16"
      d="M110 286.7l23.3-23.4h210v-46.6h-210L110 193.3z"
    />
    <use
      width="36"
      height="24"
      transform="rotate(90 320 240)"
      xlink:href="#a"
    />
    <use
      width="36"
      height="24"
      transform="rotate(-90 320 240)"
      xlink:href="#a"
    />
    <use
      width="36"
      height="24"
      transform="rotate(180 320 240)"
      xlink:href="#a"
    />
  </g>
</svg>

{/if}

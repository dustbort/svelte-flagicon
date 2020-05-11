<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-tf"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <path id="a" fill="#fff" d="M0-21l12.3 38L-20-6.5h40L-12.3 17z" />

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#002395" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 0h312.3v210H0z" />
    <path fill="#002395" d="M0 0h102.4v204.8H0z" />
    <path fill="#ed2939" d="M204.8 0h102.4v204.8H204.8z" />
    <path
      fill="#fff"
      d="M282.4 234.2l16.5 26.3h46.9V352l-35.3-55-47.3 75.5h23l24.4-43.5 49.9 89.6 49.9-89.6 24.3 43.5h23L410.5 297l-35.2 55v-50.6h21.1l15.7-25h-36.8v-16h46.9l16.5-26.2H282.4zm55 112h-51.2v18h51.2zm97.3 0h-51.2v18h51.2z"
    />
    <use
      width="100%"
      height="100%"
      x="416"
      y="362"
      transform="translate(-172) scale(1.28)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="371"
      y="328"
      transform="translate(-172) scale(1.28)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="461"
      y="328"
      transform="translate(-172) scale(1.28)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="333"
      y="227"
      transform="translate(-172) scale(1.28)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="499"
      y="227"
      transform="translate(-172) scale(1.28)"
      xlink:href="#a"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-tf"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <path id="a" fill="#fff" d="M0-21l12.3 38L-20-6.5h40L-12.3 17z" />

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#002395" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h292.8v196.8H0z" />
    <path fill="#002395" d="M0 0h96v192H0z" />
    <path fill="#ed2939" d="M192 0h96v192h-96z" />
    <path
      fill="#fff"
      d="M426 219.6l15.4 24.6h44V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6H426zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"
    />
    <use
      width="100%"
      height="100%"
      x="416"
      y="362"
      transform="scale(1.2)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="371"
      y="328"
      transform="scale(1.2)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="461"
      y="328"
      transform="scale(1.2)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="333"
      y="227"
      transform="scale(1.2)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      x="499"
      y="227"
      transform="scale(1.2)"
      xlink:href="#a"
    />
  </g>
</svg>

{/if}

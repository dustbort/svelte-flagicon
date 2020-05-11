<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ps"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M237.1 0h493.5v493.5H237.1z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#a)" transform="translate(-246) scale(1.0375)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path d="M0 0h987v164.5H0z" />
        <path fill="#fff" d="M0 164.5h987V329H0z" />
        <path fill="#090" d="M0 329h987v164.5H0z" />
        <path fill="red" d="M0 493.5l493.5-246.8L0 0v493.5z" />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ps"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="ps-a">
      <path fill-opacity=".7" d="M-118 0h682.7v512H-118z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#ps-a)" transform="translate(110.6) scale(.9375)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path d="M-246 0H778v170.7H-246z" />
        <path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
        <path fill="#090" d="M-246 341.3H778V512H-246z" />
        <path fill="red" d="M-246 512l512-256L-246 0v512z" />
      </g>
    </g>
  </g>
</svg>

{/if}

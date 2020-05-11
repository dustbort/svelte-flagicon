<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-jo"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M113.6 0H607v493.5H113.6z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#a)" transform="translate(-117.8) scale(1.0375)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path d="M0 0h987v164.5H0z" />
        <path fill="#fff" d="M0 164.5h987V329H0z" />
        <path fill="#090" d="M0 329h987v164.5H0z" />
        <path fill="red" d="M0 493.5l493.5-246.8L0 0v493.5z" />
        <path
          fill="#fff"
          d="M164.8 244l22 10.6h-24.5l5.5 24-15.3-19.3-15.3 19.2 5.5-23.9H118l22.1-10.7-15.3-19.1 22.1 10.6 5.5-23.9 5.5 24 22-10.7z"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-jo"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="jo-a">
      <path fill-opacity=".7" d="M-117.8 0h682.6v512h-682.6z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#jo-a)" transform="translate(110.5) scale(.9375)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path d="M-117.8 0h1024v170.7h-1024z" />
        <path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
        <path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
        <path fill="red" d="M-117.8 512l512-256-512-256v512z" />
        <path
          fill="#fff"
          d="M24.5 289l5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
        />
      </g>
    </g>
  </g>
</svg>

{/if}

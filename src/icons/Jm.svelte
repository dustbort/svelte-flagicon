<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-jm"
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
    <g fill-rule="evenodd">
      <path d="M0 0l256 256L0 512zm512 0L256 256l256 256z" />
      <path fill="#090" d="M0 0l256 256L512 0zm0 512l256-256 256 256z" />
      <path fill="#fc0" d="M512 0h-47.7L0 464.3V512h47.7L512 47.7z" />
      <path fill="#fc0" d="M0 0v47.7L464.3 512H512v-47.7L47.7 0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-jm"
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
    <g fill-rule="evenodd">
      <path d="M0 0l320 240L0 480zm640 0L320 240l320 240z" />
      <path fill="#090" d="M0 0l320 240L640 0zm0 480l320-240 320 240z" />
      <path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z" />
      <path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z" />
    </g>
  </g>
</svg>

{/if}

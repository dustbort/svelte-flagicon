<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bf"
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
      <path fill="#de0000" d="M512 511.6H.5V0H512z" />
      <path fill="#35a100" d="M511.8 512H0V256.2h511.7z" />
    </g>
    <path
      fill="#fff300"
      fill-rule="evenodd"
      d="M389 223.8l-82.9 56.5 31.7 91.6-82.7-56.7-82.8 56.7 31.7-91.6-82.8-56.6 102.3.2 31.6-91.7 31.5 91.6"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bf"
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
      <path fill="#de0000" d="M640 479.6H.4V0H640z" />
      <path fill="#35a100" d="M639.6 480H0V240.2h639.6z" />
      <path
        fill="#fff300"
        d="M254.6 276.2l-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4"
      />
    </g>
  </g>
</svg>

{/if}

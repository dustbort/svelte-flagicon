<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-lt"
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
    <g fill-rule="evenodd" stroke-width="1pt" transform="scale(.51314 1.0322)">
      <rect
        width="1063"
        height="708.7"
        fill="#006a44"
        rx="0"
        ry="0"
        transform="scale(.93865 .69686)"
      />
      <rect
        width="1063"
        height="236.2"
        y="475.6"
        fill="#c1272d"
        rx="0"
        ry="0"
        transform="scale(.93865 .69686)"
      />
      <path fill="#fdb913" d="M0 0h997.8v164.6H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-lt"
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
    <g fill-rule="evenodd" stroke-width="1pt" transform="scale(.64143 .96773)">
      <rect
        width="1063"
        height="708.7"
        fill="#006a44"
        rx="0"
        ry="0"
        transform="scale(.93865 .69686)"
      />
      <rect
        width="1063"
        height="236.2"
        y="475.6"
        fill="#c1272d"
        rx="0"
        ry="0"
        transform="scale(.93865 .69686)"
      />
      <path fill="#fdb913" d="M0 0h997.8v164.6H0z" />
    </g>
  </g>
</svg>

{/if}

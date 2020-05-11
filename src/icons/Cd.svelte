<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cd"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0-88h600v600H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#a)" transform="matrix(.853 0 0 .853 0 75.1)">
      <path fill="#007fff" d="M0-88h800v600H0z" />
      <path
        fill="#f7d618"
        d="M36 32h84l26-84 26 84h84l-68 52 26 84-68-52-68 52 26-84-68-52zM750-88L0 362v150h50L800 62V-88h-50"
      />
      <path fill="#ce1021" d="M800-88L0 392v120L800 32V-88" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cd"
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
    <path fill="#007fff" d="M0 0h640v480H0z" />
    <path
      fill="#f7d618"
      d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96zM600 0L0 360v120h40l600-360V0h-40"
    />
    <path fill="#ce1021" d="M640 0L0 384v96L640 96V0" />
  </g>
</svg>

{/if}

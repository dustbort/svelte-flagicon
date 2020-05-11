<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-is"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M85.4 0h486v486h-486z" />
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
      clip-path="url(#a)"
      transform="translate(-90) scale(1.0535)"
    >
      <path fill="#003897" d="M0 0h675v486H0z" />
      <path
        fill="#fff"
        d="M0 189h189V0h108v189h378v108H297v189H189V297H0V189z"
      />
      <path
        fill="#d72828"
        d="M0 216h216V0h54v216h405v54H270v216h-54V270H0v-54z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-is"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="is-a">
      <path fill-opacity=".7" d="M0 0h640v480H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g fill-rule="evenodd" stroke-width="0" clip-path="url(#is-a)">
      <path fill="#003897" d="M0 0h666.7v480H0z" />
      <path
        fill="#fff"
        d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0V186.7z"
      />
      <path
        fill="#d72828"
        d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0v-53.4z"
      />
    </g>
  </g>
</svg>

{/if}

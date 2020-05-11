<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bj"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill="gray" d="M67.6-154h666v666h-666z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#a)" transform="translate(-52 118.4) scale(.7688)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#319400" d="M0-154h333v666H0z" />
        <path fill="#ffd600" d="M333-154h666v333H333z" />
        <path fill="#de2110" d="M333 179h666v333H333z" />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bj"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="bj-a">
      <path fill="gray" d="M67.6-154h666v666h-666z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#319400" d="M0-154h333v666H0z" />
        <path fill="#ffd600" d="M333-154h666v333H333z" />
        <path fill="#de2110" d="M333 179h666v333H333z" />
      </g>
    </g>
  </g>
</svg>

{/if}

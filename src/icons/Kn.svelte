<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-kn"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M151.7-.3h745.1v745H151.7z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a)"
      transform="translate(-104.2 .2) scale(.68714)"
    >
      <path fill="#ffe900" d="M-5.3 0h1073.5v744H-5.3z" />
      <path fill="#35a100" d="M-5.8 0l1.2 536.4L830.7-.4-5.8 0z" />
      <path fill="#c70000" d="M1069.5 744l-1.9-557.7L225 744.5l844.5-.4z" />
      <path
        d="M-5.3 576.9l.7 167.9 182.3-.3L1068 147.6l-1-146L886.9 0-5.4 576.9z"
      />
      <path
        fill="#fff"
        d="M818 269l-64.2-2.2-25.3 60.2-14.3-61.5-64.2-2.2 55.4-35.7L691 166l48.5 39.4 55.3-35.9-25.4 60.2zM417.5 529.6l-64.3-2.3-25.2 60.2-14.3-61.5-64.3-2.2 55.4-35.8-14.4-61.4 48.5 39.4 55.3-35.9-25.3 60.1z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-kn"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="kn-a">
      <path fill-opacity=".7" d="M-80.1 0h682.7v512H-80.1z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#kn-a)"
      transform="translate(75.1) scale(.9375)"
    >
      <path fill="#ffe900" d="M-107.8.2h737.6v511.3h-737.6z" />
      <path fill="#35a100" d="M-108.2.2l.8 368.6L466.6 0l-574.8.2z" />
      <path fill="#c70000" d="M630.7 511.5l-1.4-383.2-579 383.5 580.4-.3z" />
      <path
        d="M-107.9 396.6l.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2l-613 396.4z"
      />
      <path
        fill="#fff"
        d="M380.4 156.6l-9.8-42.2 33.3 27 38-24.6-17.4 41.3 33.4 27-44.2-1.5-17.3 41.3-9.9-42.2-44.1-1.5zm-275.2 179l-9.9-42.3 33.3 27 38-24.6-17.4 41.3 33.4 27-44.1-1.5-17.4 41.3-9.8-42.2-44.1-1.5z"
      />
    </g>
  </g>
</svg>

{/if}

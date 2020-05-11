<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-nr"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M135.6 0h496.1v496h-496z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a)"
      transform="translate(-140) scale(1.0321)"
    >
      <path fill="#002170" d="M0 0h992.1v496H0z" />
      <path fill="#ffb20d" d="M0 226.8h992.1v42.4H0z" />
      <path
        fill="#fff"
        d="M292.4 424.4l-31.9-32-10.2 44-11.7-43.7-30.9 33 11.8-43.6-43.2 13 32-31.8-44-10.3 43.6-11.6-33-31 43.6 11.8-13-43.2 31.8 32 10.3-44 11.7 43.6 30.8-32.9-11.7 43.6 43.2-13-32 31.8 44 10.3L290 362l33 30.9-43.7-11.7z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-nr"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="nr-a">
      <path fill-opacity=".7" d="M-54.7 0H628v512H-54.7z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#nr-a)"
      transform="translate(51.3) scale(.9375)"
    >
      <path fill="#002170" d="M-140 0H884v512H-140z" />
      <path fill="#ffb20d" d="M-140 234.1H884V278H-140z" />
      <path
        fill="#fff"
        d="M161.8 438l-33-33-10.5 45.4-12-45-31.9 34 12.1-45L42 407.9l33-33-45.4-10.6 45-12-34-31.8 45 12L72 288l33 33 10.6-45.4 12 45 31.8-34-12 45 44.5-13.5-33 33 45.4 10.5-45 12 34 32-45-12.2z"
      />
    </g>
  </g>
</svg>

{/if}

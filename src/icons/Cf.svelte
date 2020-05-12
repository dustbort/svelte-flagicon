<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cf"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="CfSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CfSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a)">
      <path fill="#00f" d="M-52-.5h768v127H-52z" />
      <path fill="#ff0" d="M-52 383.5h768V512H-52z" />
      <path fill="#009a00" d="M-52 255h768v128.5H-52z" />
      <path fill="#fff" d="M-52 126.5h768V255H-52z" />
      <path fill="red" d="M268 0h128v512H268z" />
      <path
        fill="#ff0"
        d="M109.5 112.3L75.9 89.1l-33.4 23.4 11.6-39.2-32.5-24.6 40.7-1L75.7 8.8l13.5 38.6 40.8.8L97.6 73"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-cf"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="cf-a">
      <path fill-opacity=".7" d="M-12.4 32h640v480h-640z" />
    </clipPath>

    <mask id="CfSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CfSvelteFlagIconRound)' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#cf-a)"
      transform="translate(12.4 -32)"
    >
      <path fill="#00f" d="M-52 32h719.3v119H-52z" />
      <path fill="#ff0" d="M-52 391.6h719.3V512H-52z" />
      <path fill="#009a00" d="M-52 271.3h719.3v120.3H-52z" />
      <path fill="#fff" d="M-52 151h719.3v120.3H-52z" />
      <path fill="red" d="M247.7 32.5h119.9V512H247.7z" />
      <path
        fill="#ff0"
        d="M99.3 137.7l-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
      />
    </g>
  </g>
</svg>

{/if}

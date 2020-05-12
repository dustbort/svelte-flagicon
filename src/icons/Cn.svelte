<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-cn"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />

    <mask id="CnSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CnSvelteFlagIconRound)' : '' }">
    <path fill="#de2910" d="M0 0h512v512H0z" />
    <use
      width="30"
      height="20"
      transform="matrix(76.8 0 0 76.8 128 128)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="rotate(-121 142.6 -47) scale(25.5827)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="rotate(-98.1 198 -82) scale(25.6)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="rotate(-74 272.4 -114) scale(25.6137)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="matrix(16 -19.968 19.968 16 256 230.4)"
      xlink:href="#a"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-cn"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <path id="a" fill="#ffde00" d="M-.6.8L0-1 .6.8-1-.3h2z" />

    <mask id="CnSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CnSvelteFlagIconRound)' : '' }">
    <path fill="#de2910" d="M0 0h640v480H0z" />
    <use
      width="30"
      height="20"
      transform="matrix(71.9991 0 0 72 120 120)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
      xlink:href="#a"
    />
    <use
      width="30"
      height="20"
      transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
      xlink:href="#a"
    />
  </g>
</svg>

{/if}

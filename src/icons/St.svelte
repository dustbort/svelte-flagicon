<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-st"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="StSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#StSvelteFlagIconRound)' : '' }">
    <path fill="#12ad2b" d="M0 0h512v512H0z" />
    <path fill="#ffce00" d="M0 146.3h512v219.4H0z" />
    <path fill="#d21034" d="M0 0v512l192-256" />
    <g id="c" transform="translate(276.9 261.5) scale(.33167)">
      <g id="b">
        <path id="a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlink:href="#a"
        />
      </g>
      <use width="100%" height="100%" transform="rotate(72)" xlink:href="#b" />
      <use width="100%" height="100%" transform="rotate(144)" xlink:href="#b" />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlink:href="#b"
      />
      <use width="100%" height="100%" transform="rotate(-72)" xlink:href="#b" />
    </g>
    <use
      width="100%"
      height="100%"
      x="700"
      transform="translate(-550.9)"
      xlink:href="#c"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-st"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="StSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#StSvelteFlagIconRound)' : '' }">
    <path fill="#12ad2b" d="M0 0h640v480H0z" />
    <path fill="#ffce00" d="M0 137.1h640V343H0z" />
    <path fill="#d21034" d="M0 0v480l240-240" />
    <g id="c" transform="translate(351.6 240) scale(.34286)">
      <g id="b">
        <path id="a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlink:href="#a"
        />
      </g>
      <use width="100%" height="100%" transform="rotate(72)" xlink:href="#b" />
      <use width="100%" height="100%" transform="rotate(144)" xlink:href="#b" />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlink:href="#b"
      />
      <use width="100%" height="100%" transform="rotate(-72)" xlink:href="#b" />
    </g>
    <use
      width="100%"
      height="100%"
      x="700"
      transform="translate(-523.2)"
      xlink:href="#c"
    />
  </g>
</svg>

{/if}

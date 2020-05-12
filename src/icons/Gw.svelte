<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-gw"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="GwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GwSvelteFlagIconRound)' : '' }">
    <path fill="#ce1126" d="M0 0h160v512H0z" />
    <path fill="#fcd116" d="M160 0h352v256H160z" />
    <path fill="#009e49" d="M160 256h352v256H160z" />
    <g transform="translate(-46.2 72.8) scale(.7886)">
      <g id="b" transform="matrix(80 0 0 80 160 240)">
        <path id="a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlink:href="#a"
        />
      </g>
      <use
        width="100%"
        height="100%"
        transform="rotate(72 160 240)"
        xlink:href="#b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(144 160 240)"
        xlink:href="#b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144 160 240)"
        xlink:href="#b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-72 160 240)"
        xlink:href="#b"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-gw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="GwSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GwSvelteFlagIconRound)' : '' }">
    <path fill="#ce1126" d="M0 0h220v480H0z" />
    <path fill="#fcd116" d="M220 0h420v240H220z" />
    <path fill="#009e49" d="M220 240h420v240H220z" />
    <g id="b" transform="matrix(80 0 0 80 110 240)">
      <path id="a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
      <use width="100%" height="100%" transform="scale(-1 1)" xlink:href="#a" />
    </g>
    <use
      width="100%"
      height="100%"
      transform="rotate(72 110 240)"
      xlink:href="#b"
    />
    <use
      width="100%"
      height="100%"
      transform="rotate(144 110 240)"
      xlink:href="#b"
    />
    <use
      width="100%"
      height="100%"
      transform="rotate(-144 110 240)"
      xlink:href="#b"
    />
    <use
      width="100%"
      height="100%"
      transform="rotate(-72 110 240)"
      xlink:href="#b"
    />
  </g>
</svg>

{/if}

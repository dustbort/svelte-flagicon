<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-hn"
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
    <path fill="#0073cf" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 170.7h512v170.6H0z" />
    <g id="c" fill="#0073cf" transform="translate(256 256) scale(28.44446)">
      <g id="b">
        <path id="a" d="M0-1l-.3 1 .5.1z" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlink:href="#a"
        />
      </g>
      <use width="100%" height="100%" transform="rotate(72)" xlink:href="#b" />
      <use width="100%" height="100%" transform="rotate(-72)" xlink:href="#b" />
      <use width="100%" height="100%" transform="rotate(144)" xlink:href="#b" />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlink:href="#b"
      />
    </g>
    <use
      width="100%"
      height="100%"
      transform="translate(142.2 -45.5)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(142.2 39.8)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-142.2 -45.5)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-142.2 39.8)"
      xlink:href="#c"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-hn"
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
    <path fill="#0073cf" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <g id="c" fill="#0073cf" transform="translate(320 240) scale(26.66665)">
      <g id="b">
        <path id="a" d="M-.3 0l.5.1L0-1z" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlink:href="#a"
        />
      </g>
      <use width="100%" height="100%" transform="rotate(72)" xlink:href="#b" />
      <use width="100%" height="100%" transform="rotate(-72)" xlink:href="#b" />
      <use width="100%" height="100%" transform="rotate(144)" xlink:href="#b" />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlink:href="#b"
      />
    </g>
    <use
      width="100%"
      height="100%"
      transform="translate(133.3 -42.7)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(133.3 37.3)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-133.3 -42.7)"
      xlink:href="#c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-133.3 37.3)"
      xlink:href="#c"
    />
  </g>
</svg>

{/if}

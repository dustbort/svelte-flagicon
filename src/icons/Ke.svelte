<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-ke"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <path
      id="a"
      stroke-miterlimit="10"
      d="M-28.6 47.5l1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 00-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
    />

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path d="M0 0h512v153.6H0z" />
    <path fill="#060" d="M0 358.4h512V512H0z" />
    <g id="b" transform="matrix(3.2 0 0 3.2 255.8 256)">
      <use width="100%" height="100%" stroke="#000" xlink:href="#a" />
      <use width="100%" height="100%" fill="#fff" xlink:href="#a" />
    </g>
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 511.7 0)"
      xlink:href="#b"
    />
    <path
      fill="#b00"
      d="M255.8 102.4c-19.2 0-51.2 51.2-60.8 76.8H0v153.6h195c9.7 25.6 41.7 76.8 60.9 76.8 19.2 0 51.2-51.2 60.8-76.8H512V179.2H316.6c-9.6-25.6-41.6-76.8-60.8-76.8z"
    />
    <path
      id="c"
      d="M316.6 332.8a220 220 0 0016-76.8 220 220 0 00-16-76.8 220 220 0 00-16 76.8 220 220 0 0016 76.8"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 511.7 0)"
      xlink:href="#c"
    />
    <g fill="#fff" transform="matrix(3.2 0 0 3.2 255.8 256)">
      <ellipse rx="4" ry="6" />
      <path id="d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
      <use width="100%" height="100%" transform="scale(-1)" xlink:href="#d" />
      <use width="100%" height="100%" transform="scale(-1 1)" xlink:href="#d" />
      <use width="100%" height="100%" transform="scale(1 -1)" xlink:href="#d" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-ke"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <path
      id="a"
      stroke-miterlimit="10"
      d="M-28.6 47.5l1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 00-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
    />

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path d="M0 0h640v144H0z" />
    <path fill="#060" d="M0 336h640v144H0z" />
    <g id="b" transform="matrix(3 0 0 3 320 240)">
      <use width="100%" height="100%" stroke="#000" xlink:href="#a" />
      <use width="100%" height="100%" fill="#fff" xlink:href="#a" />
    </g>
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640 0)"
      xlink:href="#b"
    />
    <path
      fill="#b00"
      d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
    />
    <path
      id="c"
      d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640 0)"
      xlink:href="#c"
    />
    <g fill="#fff" transform="matrix(3 0 0 3 320 240)">
      <ellipse rx="4" ry="6" />
      <path id="d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
      <use width="100%" height="100%" transform="scale(-1)" xlink:href="#d" />
      <use width="100%" height="100%" transform="scale(-1 1)" xlink:href="#d" />
      <use width="100%" height="100%" transform="scale(1 -1)" xlink:href="#d" />
    </g>
  </g>
</svg>

{/if}

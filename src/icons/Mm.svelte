<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-mm"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <path id="a" fill="#fff" d="M.2 0h-.4L0-.5z" transform="scale(8.844)" />
    <g id="b">
      <use width="18" height="12" transform="rotate(-144)" xlink:href="#a" />
      <use width="18" height="12" transform="rotate(-72)" xlink:href="#a" />
      <use width="18" height="12" xlink:href="#a" />
      <use width="18" height="12" transform="rotate(72)" xlink:href="#a" />
      <use width="18" height="12" transform="rotate(144)" xlink:href="#a" />
    </g>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#fecb00" d="M0 0h512v170.7H0z" />
    <path fill="#ea2839" d="M0 341.3h512V512H0z" />
    <path fill="#34b233" d="M0 170.7h512v170.6H0z" />
    <use
      width="18"
      height="12"
      x="9"
      y="6.4"
      transform="translate(-127.7) scale(42.66667)"
      xlink:href="#b"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-mm"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <path id="a" fill="#fff" d="M0-.5l.2.5h-.4z" transform="scale(8.844)" />
    <g id="b">
      <use width="18" height="12" transform="rotate(-144)" xlink:href="#a" />
      <use width="18" height="12" transform="rotate(-72)" xlink:href="#a" />
      <use width="18" height="12" xlink:href="#a" />
      <use width="18" height="12" transform="rotate(72)" xlink:href="#a" />
      <use width="18" height="12" transform="rotate(144)" xlink:href="#a" />
    </g>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path fill="#fecb00" d="M0-.1h640V160H0z" />
    <path fill="#ea2839" d="M0 320h640v160H0z" />
    <path fill="#34b233" d="M0 160h640v160H0z" />
    <use
      width="18"
      height="12"
      x="9"
      y="6.4"
      transform="matrix(40 0 0 40 -40 0)"
      xlink:href="#b"
    />
  </g>
</svg>

{/if}

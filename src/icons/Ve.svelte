<script>
  import { v4 as uuidv4 } from "uuid";
  export let id = uuidv4();
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-ve"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <g id="d{id}" transform="translate(0 -36)">
      <g id="c{id}">
        <g id="b{id}">
          <path id="a{id}" fill="#fff" d="M0-5L-1.5-.2l2.8.9z" />
          <use
            width="180"
            height="120"
            transform="scale(-1 1)"
            xlink:href="#a"
          />
        </g>
        <use width="180" height="120" transform="rotate(72)" xlink:href="#b" />
      </g>
      <use width="180" height="120" transform="rotate(-72)" xlink:href="#b" />
      <use width="180" height="120" transform="rotate(144)" xlink:href="#c" />
    </g>

    <mask id="VeSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VeSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#cf142b" d="M0 0h512v512H0z" />
    <path fill="#00247d" d="M0 0h512v341.3H0z" />
    <path fill="#fc0" d="M0 0h512v170.7H0z" />
    <g id="f" transform="translate(256.3 358.4) scale(4.265)">
      <g id="e">
        <use width="180" height="120" transform="rotate(10)" xlink:href="#d" />
        <use width="180" height="120" transform="rotate(30)" xlink:href="#d" />
      </g>
      <use width="180" height="120" transform="rotate(40)" xlink:href="#e" />
    </g>
    <use
      width="180"
      height="120"
      transform="rotate(-80 256.3 358.4)"
      xlink:href="#f"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-ve"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <g id="d{id}" transform="translate(0 -36)">
      <g id="c{id}">
        <g id="b{id}">
          <path id="a{id}" fill="#fff" d="M0-5L-1.5-.2l2.8.9z" />
          <use
            width="180"
            height="120"
            transform="scale(-1 1)"
            xlink:href="#a"
          />
        </g>
        <use width="180" height="120" transform="rotate(72)" xlink:href="#b" />
      </g>
      <use width="180" height="120" transform="rotate(-72)" xlink:href="#b" />
      <use width="180" height="120" transform="rotate(144)" xlink:href="#c" />
    </g>

    <mask id="VeSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VeSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#cf142b" d="M0 0h640v480H0z" />
    <path fill="#00247d" d="M0 0h640v320H0z" />
    <path fill="#fc0" d="M0 0h640v160H0z" />
    <g id="f" transform="matrix(4 0 0 4 320 336)">
      <g id="e">
        <use width="180" height="120" transform="rotate(10)" xlink:href="#d" />
        <use width="180" height="120" transform="rotate(30)" xlink:href="#d" />
      </g>
      <use width="180" height="120" transform="rotate(40)" xlink:href="#e" />
    </g>
    <use
      width="180"
      height="120"
      transform="rotate(-80 320 336)"
      xlink:href="#f"
    />
  </g>
</svg>

{/if}

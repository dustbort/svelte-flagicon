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
  id="flag-icon-css-cm"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="CmSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CmSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#007a5e" d="M0 0h170.7v512H0z" />
    <path fill="#ce1126" d="M170.7 0h170.6v512H170.7z" />
    <path fill="#fcd116" d="M341.3 0H512v512H341.3z" />
    <g fill="#fcd116" transform="translate(256 256) scale(5.6889)">
      <g id="b">
        <path id="a" d="M0-8L-2.5-.4 1.3.9z" />
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
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-cm"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="CmSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#CmSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#007a5e" d="M0 0h213.3v480H0z" />
    <path fill="#ce1126" d="M213.3 0h213.4v480H213.3z" />
    <path fill="#fcd116" d="M426.7 0H640v480H426.7z" />
    <g fill="#fcd116" transform="translate(320 240) scale(7.1111)">
      <g id="b">
        <path id="a" d="M0-8L-2.5-.4 1.3.9z" />
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
  </g>
</svg>

{/if}

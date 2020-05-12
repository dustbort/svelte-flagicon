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
  id="flag-icon-css-sn"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="SnSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SnSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#0b7226" d="M0 0h170.7v512H0z" />
      <path fill="#ff0" d="M170.7 0h170.6v512H170.7z" />
      <path fill="#bc0000" d="M341.3 0H512v512H341.3z" />
    </g>
    <path
      fill="#0b7226"
      d="M197 351.7l22-71.7-60.4-46.5h74.5l24.2-76 22.1 76H356L295.6 280l22.1 74-60.3-46.5z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-sn"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="SnSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#SnSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#0b7226" d="M0 0h213.3v480H0z" />
      <path fill="#ff0" d="M213.3 0h213.3v480H213.3z" />
      <path fill="#bc0000" d="M426.6 0H640v480H426.6z" />
    </g>
    <path
      fill="#0b7226"
      d="M342 218.8h71.8l-56.6 43.6 20.7 69.3-56.6-43.6-56.6 41.6 20.7-67.3-56.6-43.6h69.8l22.7-71.3z"
    />
  </g>
</svg>

{/if}

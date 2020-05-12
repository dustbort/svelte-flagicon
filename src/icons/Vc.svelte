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
  id="flag-icon-css-vc"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="VcSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VcSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#f4f100" d="M0 0h510.4v512H0z" />
      <path fill="#199a00" d="M385.6 0H512v512H385.6z" />
      <path fill="#0058aa" d="M0 0h126.4v512H0z" />
    </g>
    <path
      fill="#199a00"
      fill-rule="evenodd"
      d="M191.2 138.6l-49.5 76.2 47.8 79.3 46.7-78.6-45-76.9zm129.4 0L271 214.8l47.7 79.3 46.8-78.6-45-76.9zm-65.4 103.9l-49.4 76.1 47.7 79.4 46.7-78.7-45-76.8z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-vc"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="VcSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VcSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd">
      <path fill="#f4f100" d="M0 0h640v480H0z" />
      <path fill="#199a00" d="M490 0h150v480H490z" />
      <path fill="#0058aa" d="M0 0h150v480H0z" />
      <path
        fill="#199a00"
        d="M259.3 130l-46.4 71.3 44.7 74.4 43.8-73.7-42.1-72zm121.2 0l-46.3 71.3 44.7 74.4 43.8-73.7-42.2-72zm-61.2 97.3l-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"
      />
    </g>
  </g>
</svg>

{/if}

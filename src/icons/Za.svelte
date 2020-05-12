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
  id="flag-icon-css-za"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M70.1 0h499.6v499.6H70.1z" />
    </clipPath>

    <mask id="ZaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ZaSvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#a{id})" transform="translate(-71.9) scale(1.0248)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path d="M0 397.9v-296l220.4 147.9L0 397.9z" />
        <path fill="#00c" d="M150.4 499.7l247.4-166.5h351.6v166.5h-599z" />
        <path fill="red" d="M134.5 0h615v166.6H397.7S137.8-1.6 134.5 0z" />
        <path
          fill="#fc0"
          d="M0 62.5v39.3l220.4 148L0 397.8v39.4l277.6-187.4L0 62.5z"
        />
        <path
          fill="#093"
          d="M0 62.5V0h92.6l294 199h362.8v101.7H386.6l-294 198.9H0v-62.4l277.6-187.4L0 62.5z"
        />
        <path
          fill="#fff"
          d="M92.6 0h57.8l247.4 166.6h351.6V199H386.6L92.6 0zm0 499.7h57.8l247.4-166.5h351.6v-32.4H386.6l-294 198.8z"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-za"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="za-a{id}">
      <path fill-opacity=".7" d="M-71.9 0h682.7v512H-71.9z" />
    </clipPath>

    <mask id="ZaSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ZaSvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#za-a{id})" transform="translate(67.4) scale(.93748)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path d="M-71.9 407.8V104.4L154 256.1-72 407.8z" />
        <path fill="#00c" d="M82.2 512.1l253.6-170.6H696V512H82.2z" />
        <path fill="red" d="M66 0h630v170.8H335.7S69.3-1.7 66 0z" />
        <path
          fill="#fc0"
          d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192L-72 64z"
        />
        <path
          fill="#093"
          d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"
        />
        <path
          fill="#fff"
          d="M23 0h59.2l253.6 170.7H696V204H324.3L23 .1zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"
        />
      </g>
    </g>
  </g>
</svg>

{/if}

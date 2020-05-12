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
  id="flag-icon-css-il"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="IlSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#IlSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a{id})">
      <path fill="#fff" d="M619.4 512H-112V0h731.4z" />
      <path
        fill="#00c"
        d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
      />
      <path fill="#fff" d="M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z" />
      <path fill="#00c" d="M136 320.6L246.2 129l112.4 190.8-222.6.8z" />
      <path
        fill="#fff"
        d="M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-il"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="il-a{id}">
      <path fill-opacity=".7" d="M-87.6 0H595v512H-87.6z" />
    </clipPath>

    <mask id="IlSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#IlSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#il-a{id})"
      transform="translate(82.1) scale(.94)"
    >
      <path fill="#fff" d="M619.4 512H-112V0h731.4z" />
      <path
        fill="#00c"
        d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
      />
      <path fill="#fff" d="M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z" />
      <path fill="#00c" d="M136 320.6L246.2 129l112.4 190.8-222.6.8z" />
      <path
        fill="#fff"
        d="M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
      />
    </g>
  </g>
</svg>

{/if}

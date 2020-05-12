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
  id="flag-icon-css-et"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M229.3 6.3h489.3v489.3H229.3z" />
    </clipPath>

    <mask id="EtSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#EtSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#a{id})"
      transform="translate(-240 -6.6) scale(1.046)"
    >
      <path fill="#ffc621" d="M2 9.7h991.8v475.9H1.9z" />
      <path fill="#ef2118" d="M0 333.6h993.2v162H0z" />
      <path fill="#298c08" d="M2 6.3h991.8v172H2z" />
      <circle
        cx="534.2"
        cy="353"
        r="199.7"
        fill="#006bc6"
        transform="matrix(.515 0 0 .515 204.7 77)"
      />
      <path
        fill="#ffc621"
        d="M434 186.2l-6 4.3 22.4 31.6 6-3.9-22.3-32zm28.2 74.5l-9.2-6.5 3.8-12-46 .6-13.3-10.2 62.7-.7 11.7-35.3L478 211l-16 49.8zm73.1-67.6l-6-4.5-23.3 31 5.5 4.5 23.8-31zm-62.5 49.3l3.3-10.7h12.7L474.3 188l5.7-15.8 19.6 59.7 37.2.4-11.7 10.3-52.3-.2zm86.6 49l2.5-7.2-36.6-12.6-2.6 6.5 36.7 13.2zm-66-44.4l11.2-.2 4 12.1 37-27.2 16.7.6-50.7 37 11 35.5-13.4-8-15.9-49.8zm-19 97.5l7.6.1.3-38.7-7-.4-.8 39zm21-76.8l3.7 10.6L489 286l37.6 26.5 4.8 16-51.2-36.2-30.1 21.7 3.3-15.2 42.1-31zm-98.7 12.4l2.3 7.2 36.9-11.7-1.8-6.8-37.4 11.3zm79.6-3.8l-9 6.8-10.4-7.4-13.5 44-13.8 9.5 18.7-60-30-21.8 15.5-1.6 42.5 30.5z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-et"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="et-a{id}">
      <path fill-opacity=".7" d="M-61.3 0h682.7v512H-61.3z" />
    </clipPath>

    <mask id="EtSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#EtSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#et-a{id})"
      transform="translate(57.5) scale(.94)"
    >
      <path fill="#ffc621" d="M-238 3.5H800v498H-238z" />
      <path fill="#ef2118" d="M-240 342.5H799.3V512H-240z" />
      <path fill="#298c08" d="M-238 0H800v180H-238z" />
      <circle
        cx="534.2"
        cy="353"
        r="199.7"
        fill="#006bc6"
        transform="matrix(.54 0 0 .54 -25.8 74)"
      />
      <path
        fill="#ffc621"
        d="M214.3 188.2l-6.5 4.5 23.5 33 6.3-4-23.4-33.5zm29.4 78l-9.7-6.8 4-12.7-48.1.7-14-10.7 65.7-.7 12.2-36.9 6.6 15-16.7 52zm76.5-70.7l-6.3-4.8-24.3 32.4 5.6 4.7 25-32.3zM254.8 247l3.5-11.2h13.3L256.4 190l6-16.5 20.5 62.4 38.8.5-12.2 10.7-54.7-.2zm90.6 51.2l2.7-7.4-38.3-13.3-2.8 7 38.4 13.7zm-69.1-46.4l11.7-.1 4.1 12.6 38.8-28.5 17.6.6-53.1 38.7 11.5 37.2-14-8.4-16.6-52.1zm-19.8 102l7.9.2.3-40.5-7.4-.5-.8 40.9zm22-80.3l3.8 11.1-10.7 8 39.4 27.7 5 16.8-53.6-38-31.5 22.7 3.5-16 44-32.3zm-103.3 13l2.3 7.5 38.7-12.2-2-7.2-39 11.9zm83.2-4l-9.4 7.1-10.8-7.7-14.2 46-14.4 10 19.5-62.7-31.4-23 16.3-1.6 44.4 31.9z"
      />
    </g>
  </g>
</svg>

{/if}

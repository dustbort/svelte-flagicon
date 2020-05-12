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
  id="flag-icon-css-ly"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path d="M250 12h500v500H250z" />
    </clipPath>

    <mask id="LySvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#LySvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#a{id})" transform="translate(-256 -12.3) scale(1.024)">
      <path fill="#239e46" d="M0 12h1000v500H0z" />
      <path d="M0 12h1000v375H0z" />
      <path fill="#e70013" d="M0 12h1000v125H0z" />
      <path
        fill="#fff"
        d="M544.2 217.8a54.3 54.3 0 100 88.4 62.5 62.5 0 110-88.4M530.4 262l84.1-27.3-52 71.5v-88.4l52 71.5z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ly"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="ly-a{id}">
      <path d="M166.7-20h666.6v500H166.7z" />
    </clipPath>

    <mask id="LySvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#LySvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#ly-a{id})" transform="matrix(.96 0 0 .96 -160 19.2)">
      <path fill="#239e46" d="M0-20h1000v500H0z" />
      <path d="M0-20h1000v375H0z" />
      <path fill="#e70013" d="M0-20h1000v125H0z" />
      <path
        fill="#fff"
        d="M544.2 185.8a54.3 54.3 0 100 88.4 62.5 62.5 0 110-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
      />
    </g>
  </g>
</svg>

{/if}

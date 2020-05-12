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
  id="flag-icon-css-tz"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M102.9 0h496v496H103z" />
    </clipPath>

    <mask id="TzSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TzSvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#a{id})" transform="translate(-106.2) scale(1.0321)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#09f" d="M0 0h744.1v496H0z" />
        <path fill="#090" d="M0 0h744.1L0 496V0z" />
        <path d="M0 496h165.4L744 103.4V0H578.7L0 392.7v103.4z" />
        <path
          fill="#ff0"
          d="M0 378L567 0h56L0 415.3v-37.2zm121.1 118l623-415.3V118L177 496h-55.9z"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tz"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="tz-a{id}">
      <path fill-opacity=".7" d="M10 0h160v120H10z" />
    </clipPath>

    <mask id="TzSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TzSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#tz-a{id})"
      transform="matrix(4 0 0 4 -40 0)"
    >
      <path fill="#09f" d="M0 0h180v120H0z" />
      <path fill="#090" d="M0 0h180L0 120V0z" />
      <path d="M0 120h40l140-95V0h-40L0 95v25z" />
      <path
        fill="#ff0"
        d="M0 91.5L137.2 0h13.5L0 100.5v-9zM29.3 120L180 19.5v9L42.8 120H29.3z"
      />
    </g>
  </g>
</svg>

{/if}

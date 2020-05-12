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
  id="flag-icon-css-ag"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill="#25ff01" d="M109 47.6h464.8v464.9H109z" />
    </clipPath>

    <mask id="AgSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#AgSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a{id})"
      transform="translate(-120 -52.4) scale(1.1014)"
    >
      <path fill="#fff" d="M0 47.6h693V512H0z" />
      <path d="M1.5 48.2h690.9v196.2H1.5z" />
      <path fill="#0061ff" d="M128.3 232.1h458.5v103.4H128.3z" />
      <path
        fill="#e20000"
        d="M692.5 49.2v463.3H347L692.5 49.2zm-691.3 0v463.3h345.7L1.2 49.2z"
      />
      <path
        fill="#ffd600"
        d="M508.8 232.2l-69.3-17.6 59-44.4-72.5 10.3 37.3-63-64.1 37.2 11.3-73.5-43.4 58-17.6-67.3-19.6 69.3-43.4-59 12.4 75.6-64.1-39.3 37.2 63-70.3-11.3 57.9 43.4-72.4 18.6h321.6z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ag"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="ag-a{id}">
      <path fill-opacity=".7" d="M-79.7 0H603v512H-79.7z" />
    </clipPath>

    <mask id="AgSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#AgSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#ag-a{id})"
      transform="translate(74.7) scale(.9375)"
    >
      <path fill="#fff" d="M-120 0h763.3v511.5H-120z" />
      <path d="M-118.3.6h760.9v216.1h-761z" />
      <path fill="#0061ff" d="M21.3 203.2h505V317h-505z" />
      <path
        fill="#e20000"
        d="M642.8 1.8V512H262L642.8 1.7zm-761.5 0V512H262L-118.7 1.7z"
      />
      <path
        fill="#ffd600"
        d="M440.4 203.3L364 184l64.9-49-79.7 11.4 41-69.5-70.7 41L332.3 37l-47.9 63.8-19.3-74-21.7 76.3-47.8-65 13.7 83.2L138.5 78l41 69.5-77.4-12.5 63.8 47.8L86 203.3h354.3z"
      />
    </g>
  </g>
</svg>

{/if}

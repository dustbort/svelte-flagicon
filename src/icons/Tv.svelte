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
  id="flag-icon-css-tv"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="TvSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TvSvelteFlagIconRound' + id + ')' : '' }">
    <defs id="defs540">
      <clipPath id="a">
        <path id="path537" fill-opacity=".7" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <path
      id="rect597"
      fill="#009fca"
      fill-opacity="1"
      stroke-width="4.9"
      d="M0 0h512v512H0z"
    />
    <path
      id="path572"
      fill="#fff40d"
      fill-rule="evenodd"
      stroke-width="1pt"
      d="M478 226.3l7.1 20.4-18.4-12.6-18.5 12.6 7.1-20.4-18.5-12.6h22.9l7-20.4 7 20.4h22.8zm-57.2 162.8l7 20.4-18.4-12.7-18.4 12.7 7-20.4-18.4-12.7h22.8l7-20.4 7 20.5h22.9zm57.3-36.9l7 20.4-18.4-12.6-18.5 12.6 7.1-20.4-18.5-12.6h22.9l7-20.4 7 20.4h22.8zm-246.2 118l7.1 20.5-18.4-12.7-18.5 12.7 7.1-20.4-18.5-12.6h22.8l7-20.4 7.1 20.4h22.8zm43.1-88.4l-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.8zm67.3-93l-7.1-20.4 18.4 12.6 18.5-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zm56.5-19.3l-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zm-56.5 161l-7.1-20.4 18.4 12.6 18.5-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zM275 446.9l-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.8z"
      opacity="1"
      stop-opacity="1"
    />
    <g id="g947" transform="scale(.5)">
      <path id="path925" fill="#012169" d="M0 0h512v512H0z" />
      <path
        id="path927"
        fill="#FFF"
        d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
      />
      <path
        id="path929"
        fill="#C8102E"
        d="M184 324l11 34L42 512H0v-3zm124-12l54 8 150 147v45zM512 0L320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
      />
      <path id="path931" fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
      <path
        id="path933"
        fill="#C8102E"
        d="M0 208v96h512v-96zM208 0v512h96V0z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tv"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="TvSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TvSvelteFlagIconRound' + id + ')' : '' }">
    <defs id="defs830">
      <clipPath id="tv-a">
        <path id="path827" fill-opacity=".7" d="M0 0h640v480H0z" />
      </clipPath>
    </defs>
    <path
      id="rect891"
      fill="#009fca"
      fill-opacity="1"
      stroke-width="11.8"
      d="M0 0h640v480H0z"
    />
    <path
      id="path862"
      fill="#fff40d"
      fill-rule="evenodd"
      stroke-width="1pt"
      d="M593.3 122.7H621l-22.3 15.2 8.5 24.7-22.3-15.3-22.2 15.3 8.5-24.7-22.3-15.2h27.5l8.5-24.7zm-69.2 196.8h27.6l-22.3 15.2 8.5 24.7-22.3-15.3-22.3 15.3 8.6-24.7-22.3-15.2H507l8.5-24.7zm69.2-44.6H621l-22.3 15.2 8.5 24.7-22.3-15.3-22.2 15.3 8.5-24.7-22.3-15.2h27.5l8.5-24.7zM295.8 417.7h27.6L301 432.8l8.6 24.6-22.3-15.2-22.3 15.2 8.6-24.6-22.4-15.3h27.6l8.5-24.6zm62.6-76.5h-27.6l22.3-15.3-8.5-24.6 22.3 15.2 22.3-15.2-8.6 24.6 22.3 15.3h-27.5l-8.5 24.6zm81.3-112.5H412l22.3-15.2-8.5-24.7 22.3 15.3 22.3-15.3-8.6 24.7 22.3 15.2h-27.5l-8.5 24.7zm68.3-23.3h-27.6l22.4-15.3-8.6-24.6 22.3 15.2 22.3-15.2-8.6 24.6 22.4 15.3H525l-8.5 24.6zM439.7 400H412l22.3-15.2L426 360l22.3 15.2 22.3-15.2-8.6 24.7 22.3 15.2h-27.5l-8.5 24.7zm-81.3 19.9h-27.6l22.3-15.2-8.5-24.7 22.3 15.2 22.3-15.2-8.6 24.6L403 420h-27.5l-8.5 24.7z"
      opacity="1"
      stop-opacity="1"
    />
    <g id="g1551" transform="scale(.5)">
      <path id="path1529" fill="#012169" d="M0 0h640v480H0z" />
      <path
        id="path1531"
        fill="#FFF"
        d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
      />
      <path
        id="path1533"
        fill="#C8102E"
        d="M424 281l216 159v40L369 281zm-184 20l6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
      />
      <path
        id="path1535"
        fill="#FFF"
        d="M241 0v480h160V0zM0 160v160h640V160z"
      />
      <path
        id="path1537"
        fill="#C8102E"
        d="M0 193v96h640v-96zM273 0v480h96V0z"
      />
    </g>
  </g>
</svg>

{/if}

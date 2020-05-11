<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-au"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path id="path598" fill="#006" stroke-width="1.3" d="M0 0h512v512H0z" />
    <path
      id="path606"
      fill="#fff"
      fill-rule="evenodd"
      stroke-width="1.3"
      d="M54.9 368.6L95.5 384l13.4-41.4 13.3 41.4 40.7-15.4-24.1 36.3 37.4 22.2-43.3 3.7 6 43.1-30-31.5-30 31.5 6-43-43.4-3.8L79 404.9m325 71.5l-19 1.6 2.7 18.8-13-13.7-13 13.7L364 478l-18.8-1.6 16.3-9.6L351 451l17.7 6.7 5.8-18 5.7 18L398 451l-10.4 15.8m16.2-270.4L385 198l2.6 18.8-13-13.7-13 13.7L364 198l-18.8-1.6 16.3-9.6L351 171l17.7 6.7 5.8-18 5.7 18L398 171l-10.4 15.8m-88.8 123.4l-18.8 1.6 2.6 18.7-13-13.7-13 13.7 2.5-18.7-18.8-1.6 16.3-9.7-10.5-15.7 17.7 6.7 5.8-18 5.7 18 17.7-6.7-10.4 15.7M497 282.2l-18.8 1.6 2.6 18.7-13-13.7-13 13.7 2.5-18.7-18.8-1.6 16.3-9.7-10.5-15.7 17.7 6.7 5.8-18 5.8 18 17.6-6.7-10.4 15.7M416.6 355l-10.3 6.4 2.9-11.8-9.3-7.8 12-.9 4.7-11.2L421 341l12.1 1-9.2 7.7 2.9 11.8"
    />
    <g id="g1582" transform="scale(.5)">
      <path id="path1560" fill="#006" d="M0 0h512v512H0z" />
      <path
        id="path1562"
        fill="#fff"
        d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
      />
      <path
        id="path1564"
        fill="#c8102e"
        d="M184 324l11 34L42 512H0v-3zm124-12l54 8 150 147v45zM512 0L320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
      />
      <path
        id="path1566"
        fill="#fff"
        d="M176 0v512h160V0zM0 176v160h512V176z"
      />
      <path
        id="path1568"
        fill="#c8102e"
        d="M0 208v96h512v-96zM208 0v512h96V0z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-au"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <path id="path617" fill="#006" stroke-width="1.3" d="M0 0h640v480H0z" />
    <path
      id="path625"
      fill="#fff"
      fill-rule="evenodd"
      stroke-width="1.3"
      d="M299.8 392.5l-43.7 3.8 6 43.4L232 408l-30.1 31.7 6-43.4-43.7-3.8 37.7-22.3-24.3-36.5 41 15.5 13.4-41.7 13.5 41.7 41-15.5-24.3 36.5m224.4 62.3L476 416.7l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.7-19 1.7 2.6 18.9-13-13.9-13.2 13.9 2.6-18.9-19-1.6m16.4-291.9L476 134.6l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.8-19 1.6 2.6 18.9-13-13.8-13.2 13.7 2.6-18.8-19-1.6M380.8 265l-10.5-15.8 17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7L407 265l16.4 9.7-19 1.7 2.7 18.9-13.2-13.9-13 13.9 2.5-18.9-19-1.6m216.3-38L570 221l17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7-10.5 15.8 16.3 9.7-19 1.7 2.6 18.8-13-13.8-13.2 13.8 2.6-18.8-19-1.7M542 320l-10.3 6.5 2.9-11.9-9.3-7.8 12.1-1 4.6-11.2 4.7 11.3 12.1.9-9.3 7.8 2.9 11.9"
    />
    <path id="path969" fill="#006" stroke-width=".5" d="M0 0h320v240H0z" />
    <path
      id="path971"
      fill="#fff"
      stroke-width=".5"
      d="M37.5 0l122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
    />
    <path
      id="path973"
      fill="#c8102e"
      stroke-width=".5"
      d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
    />
    <path
      id="path975"
      fill="#fff"
      stroke-width=".5"
      d="M120.5 0v240h80V0zM0 80v80h320V80z"
    />
    <path
      id="path977"
      fill="#c8102e"
      stroke-width=".5"
      d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"
    />
  </g>
</svg>

{/if}

<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ms"
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
    <path
      id="rect950"
      fill="#012169"
      stroke-width=".6"
      d="M.2 0h512v512H.2z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path962"
      fill="#fff"
      stroke-width=".8"
      d="M281.6 127H487l-.3 146.3c1.7 58.7-35 95.2-102.3 111.7-47.9-12-103.1-36.5-103.2-110l.3-148z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path964"
      fill="#00a2bd"
      stroke="#000"
      stroke-width="1.8"
      d="M286.1 131.4h196.4l-.2 140.2c1.6 56.3-33.4 91.2-97.8 107-45.8-11.4-98.6-35-98.6-105.4l.2-141.8z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path966"
      fill="#a53d08"
      stroke-width=".8"
      d="M481 288.2c-7.2 53.7-48.6 77.2-96.6 89.7-42.4-11.4-88-29.6-97-89.5l193.6-.2z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path968"
      fill="#000"
      stroke-width=".8"
      d="M376.7 157.5l-.3-17.6 14 .1.1 17.5h38.2l.1 13.7-38.3.2-.3 161.4-13.6.1-.2-161.7-38 .2v-14z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path970"
      fill="#ff9a08"
      fill-rule="evenodd"
      stroke="#000"
      stroke-width=".8"
      d="M345.8 294.8l35 36.3c12-13.3 3.6-63-12.3-72.1-1.9 5.9-5.1 13-8.6 15.2-7.6 5.2-26.1 11.2-20 15 1.5-1.9 5.2-3.7 7 .6 2 6.9-7.8 7.3-7.8 7.3s-6.2-.8-7.3-7c-1-6.4 9.3-12.2 10.1-12.6 1-.3 14.4-4 16.7-15.9 2.8-11.8 5.8-10 6.3-10.2 17.7 1.7 29.2 33.3 29.9 55.5.6 22.2-9 37-10.8 38-1.8.9-42-47.9-42-47.9l3.8-2.2z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path972"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M371.2 261l.3 65.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path974"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M367.3 262.3l.2 59.4"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path976"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M363 270.9l.3 47.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path978"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M359.6 274.2l.2 39.1"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path980"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M355.9 276v33"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path982"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M351.9 278.6v26.1"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path984"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M348.4 280.7v20"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path986"
      fill="none"
      stroke="#ffdf00"
      stroke-linecap="round"
      stroke-width="1"
      d="M345.2 299l36 41.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path988"
      fill="none"
      stroke="#ffdf00"
      stroke-linecap="round"
      stroke-width="1.4"
      d="M383 273s16.3 35.7 1.2 65"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path990"
      fill="none"
      stroke="#ffdf00"
      stroke-linecap="round"
      stroke-width="1.4"
      d="M341 291.4s1.2-3.1 2.7-1.8"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path992"
      fill="none"
      stroke="#ffdf00"
      stroke-linecap="round"
      stroke-width="1.4"
      d="M338.1 282.3s-6.5 5.8-3 9.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path998"
      fill="#008021"
      stroke="#000"
      stroke-width=".3"
      d="M390.6 191.4c2.4-2 3.7-3.3 5.2-3 1.5.2 3.5 0 5-.4a31 31 0 0112-.4c1 .2 2.4.7 4.6 2.5 2.1 1.8 5.2 5 4.2 13.6s-.7 12.3-1.2 17.2c-.8 8.5-2.7 15.5-6 15 4.5 8 5 15 8 20.5s4.8 16.8 3.7 29c-1.2 12.3-4.4 39.7 5.3 58.2-1.6 1.1-5.5 0-9-3.7s-5-3.6-7.9-1.4c-8.7 6.7-17 14.8-29 6.7-2.8-1.8-3.7-4-1.6-9.7 5-14 7.5-33.4 6.7-42.4V191.4z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1000"
      fill="#ffe1cf"
      stroke="#000"
      stroke-width=".3"
      d="M399 182.8c.6 2 .9 4.5-.1 6.8s-1.3 5 .4 8.4c2.8-3.9 6.7-3 9-5.4 2.3-2.3 2.8-4.5 4.5-5-1.7-1.5-4.4-3-3.8-7.5.6-4.3 6.7-8 1.2-14.6a8.1 8.1 0 00-11-1.4 8 8 0 00-2.4 2.6c-.3.8.1 2.5-.7 3.5l-2 2c-.6.3-1 .8-.4 1.5.2.2.7.3 1.1.4a9 9 0 01-.8 1.5c-.3.3-.2.6.1 1-.4 1.3.4 1.5-.1 2.5-.5.9-1.2 2 .6 3 .6.3 3 .9 4.3.7z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1002"
      fill="#ffe1cf"
      stroke="#000"
      stroke-width=".3"
      d="M376.5 205.7c-3.2.9-8.4-.5-12.4 0-1.7.1-3-.8-2.8-2.5.2-1.7.4-4.4 0-6.8-.5-3.8 1.3-9 3.9-14.8A33 33 0 00369 170c0-1.8.2-3.8 1.8-4.8 1.2-.8 1.4-1.5 1.8-2.1 1-1.5 2-1.8 2-1 .1.5 0 1-.5 1.7 1-.9 2.8-1.9 3.2-2.2.4-.2 2.4-1.7 2.5-.3.8-.4 1.4-.4 1.6 0 .2.5 0 .7-.3 1 .5 0 1.2 1 0 1.8.7-.2 1.3.8.2 1.8-1.1.9-2.4 1.6-2.8 2.3-.4.8-3.1 2.9-4.2 3.3-1.1.5-1.2 1.1-1.2 2.7 0 17.8-2.1 16.4-2.1 20.6 0 1.2-.2 2.2 1 1.9 1-.4 2.8-.9 4.5-.9v10z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1004"
      fill="#ffe1cf"
      stroke="#000"
      stroke-width=".3"
      d="M377.2 244c5.2-2.6 11.2-3.5 14.3-4.3 3-.8 8-3.3 10.5-4.5 2.4-1.3 4.4-3 5.7-3.5 1.4-.5 3-1.4 3.8-3.1 4.5-8.8 7-15.8 7-22 0-4-1-8.5-5-5.2-3.7 3-7.7 8.9-8.8 13.1-1.6 6.5-3 7.9-3.3 9.1-.4 1.3-1.7 1.3-3.2 1.6a26.7 26.7 0 00-13.5 6.4 136 136 0 01-14.3 9.2c-3.7 2-4.4 2.3-5.2 4a16 16 0 01-2.3 3.7 3 3 0 00-.7 2.5l-.3 5.4c0 1.1.2 1.4.7 1.5.4 0 1-.2 1.3-1.6-.2 1.4 1.7 1 1.8 0 0 1.4 2 .5 2-.8 0 1 1.6.3 1.7-.2l1.1-3.4c.7-1.3 1.4-3 2.8-4 1.5-1 .8-2.3 3.9-3.9z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1006"
      fill="#ffe1cf"
      stroke="#000"
      stroke-width=".3"
      d="M414.5 338.5l1.3 3.6c.2.9-.2 1.1-.4 1.6a32.8 32.8 0 00-2.8 8.8c0 1.2-1 2.5-1.3 3.2-.5.8-.3 1.5.7 2.3.5.3 2-.2 2.3-1 .5.6 1.6.4 2-.5.6.5 1.4.2 2-.7.5.4 1.3-.3 1.6-.8.8.4 1.6 0 1.7-1.7l.4-1.2c.2-.4.3-1.1.3-1.7 0-.7.4-2 .9-2.8.5-1 1.5-2.5 1-4-.3-1.4-.9-1.3-1.4-3.3-1.3-1.3-3-3.2-4.8-3.3-1.8-.1-2.8 1.1-3.5 1.5z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1008"
      fill="#ffe1cf"
      stroke="#000"
      stroke-width=".3"
      d="M381.7 348.4c1.6 1.6 5.3 1.7 7.8-1-1-.4-3-1.3-3.8-2-1.3 1.2-2.8 2.6-4 3z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1012"
      fill="#870f00"
      stroke="#000"
      stroke-width=".3"
      d="M398 165c.7-4 3.6-4 5.4-3.5.8.1 2.6.3 4.3-.2 3.5-.9 6 .3 5.7 3.6 1 .7 1.9 2.3 1.7 3.7-.2 1.4.1 2 1.4 2.1 1.3.2 4 1.8 2.2 4 1.7 1 3 3.7 2.1 5.4-.9 1.8-3.7 2.1-4.8.5-1.3.6-3.4.7-4.6-.6-.9 1-3 .9-3.5 0-.4-1-1-1.4-1.9-1.7-1-.3-1-2.8.4-3.1-.2-.8-.1-1.6.2-2 .4-.4.1-1.2-.7-1.8-.8-.7-1.5-3-.7-4.4-1.4.5-4.4-.9-5-1.8-.7-1-1.6-1-2.1-.2z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1014"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M399 182.8c2.2-.3 3-1.7 4.6-1.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1016"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M394.1 176.5l.6.4c.4.2 1 .3 1.4.3"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1018"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M394.8 174.1l1 .6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1020"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M400 165c-1.3-1.2 2.3-3.8 6-.1.7.6 2.5.7 3 .5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1022"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M405.2 167c1.7-.4 4.3-.4 5 1.5.8 2 2.3.7 3.5 3 1.2 2.4 3.2 5 5 3.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1024"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M411.4 180a4 4 0 01-.4-3.3c-.7-.8-.4-2.4 0-3.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1026"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M406.4 175.2c0 .7 1 2 2.4 2.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1028"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M416 180.6c-.8-1-.7-2-.5-3.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1030"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M407.6 169.1c0 1 .5 2.4 1.6 3 .3.5 1.4 2.1 3.7 1.9"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1032"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M413.4 165a11 11 0 00-5.3-2.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1034"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M399.3 198c-2 2.7-3.2 6.4-2.3 11.6 1 5.1 2.4 12.8-1.4 16.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1036"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M414.3 235.9c-2.6-.6-6.4-.6-8.5.9a8.2 8.2 0 01-7.9.4"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1038"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M408.7 235.7c-2.3.4-3.4 2-3.4 6.3 0 4.2-.9 10.5-.1 16.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1040"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M404.5 237.5c-1.5.4-3 .4-2.8 4.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1042"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M396.7 242c0-2.4 1-4.7 2.6-4.3"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1044"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M413.3 242.5c.2-5.4-1-7-2.7-7 2.2.1 3.7.4 4.6 9.4.7 6.6 2.1 9 3.7 14.3 4.2 13.6 2.1 34.6 4.2 42"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1046"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M410.2 244.2a71.6 71.6 0 01-.5 49.3c4.8 13.4 9.7 23.1 10.6 28.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1048"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M396.3 274.1c.8-2.8-2-3.2.5-13.3 1-4.4 1.3-7 .6-8.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1050"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M397.4 258.3c-1 4.5 3.3 13 1.1 19"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1052"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M393 278.5c0 4 1 9 .8 13-.2 3.9 1.4 5.7 3.2 9.4 6.7 13.4 11.3 23 10.6 35.5 0 2.3.7 7.2-1.7 8.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1054"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M393.3 348.4c.7 0 1.4-.3 2.3-2.4.8-2 3.6-14.5 2.5-23"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1056"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M399.4 332.6a27 27 0 01-1.3 12.4"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1058"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M403.8 324.7c1 5.6 1 10.7.1 14.3"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1060"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M401.5 339c.1 2.3 1.2 8-.6 8.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1062"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M410.2 312.2c4.2 6.7 7.6 23.2 11.1 26.7"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1064"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M413.9 336.2c-.2-1.8-.3-4.4-1.3-5.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1066"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M367.8 255.5c0-1.3-.2-2.5 1.2-4.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1068"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M365.7 256.2c.2-4.4.1-4.8 1.4-6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1070"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M364 256.3c0-3.1-.4-4.2.8-6.3"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1072"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M379.8 161.2l-4.6 3.4"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1074"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M381 162.2c-.5.1-2 1.4-4.9 3.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1076"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M381.2 164c-1 .4-2.6 2-4.2 3.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1078"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M374 163.7l-1.6 1.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1080"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M414.3 357c-.3-.3-.3-1.3.2-2.4"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1082"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M416.3 356.5c-.3-.3 0-1.7.4-2.6"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1084"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M418.3 355.8c-.4-.2-.5-1 0-2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1086"
      fill="none"
      stroke="#000"
      stroke-width=".3"
      d="M419.9 355c-.3 0-.4-.5 0-1.8"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1090"
      fill="#000"
      stroke="none"
      stroke-width=".3"
      d="M397.2 168.7c.8 1 1.7 1 1.8 1.7l.4 1h-.6l-1.4-.1c-.4 0-.9-.5-.6-.6.3 0 .3-.1.2-.3l.3-.6c.2-.1 0 0 0-.4-.2-.3-.3-1-.1-.7z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1092"
      fill="#000"
      stroke="none"
      stroke-width=".3"
      d="M397.7 167.7a6 6 0 013.4 1.5c.7.8.1.6-.2.6-.4 0-1-.2-1.4-.6-.3-.4-1.4-1-2-1.1-.2-.1-.5-.5.2-.4z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path2758"
      fill="#012169"
      stroke-width=".5"
      d="M.2 0h256v256H.2z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path2760"
      fill="#FFF"
      stroke-width=".5"
      d="M256.2 0v32l-95 96 95 93.5V256h-33.5l-95.5-94-93 94H.2v-34l93-93.5L.2 37V0h31l96 94 93-94z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path2762"
      fill="#C8102E"
      stroke-width=".5"
      d="M92.2 162l5.5 17-76.5 77H.2v-1.5zm62-6l27 4 75 73.5V256zm102-156l-96 98-2-22 75-76zM.2.5L96.7 95l-29.5-4-67-66.5z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path2764"
      fill="#FFF"
      stroke-width=".5"
      d="M88.2 0v256h80V0zM.2 88v80h256V88z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path2766"
      fill="#C8102E"
      stroke-width=".5"
      d="M.2 104v48h256v-48zm104-104v256h48V0z"
      opacity="1"
      stop-opacity="1"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ms"
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
    <path
      id="rect950"
      fill="#012169"
      stroke-width=".7"
      d="M0 0h640v480H0z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path962"
      fill="#fff"
      stroke-width=".8"
      d="M384.9 111h205.5l-.3 146.3c1.7 58.7-34.9 95.2-102.3 111.7-47.9-12-103-36.5-103.2-110l.3-148z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path964"
      fill="#00a2bd"
      stroke="#000"
      stroke-width="1.8"
      d="M389.4 115.4h196.4l-.2 140.2c1.6 56.3-33.4 91.2-97.8 107-45.8-11.4-98.5-35-98.6-105.4l.2-141.8z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path966"
      fill="#a53d08"
      stroke-width=".8"
      d="M584.3 272.2c-7.2 53.7-48.6 77.2-96.5 89.7-42.5-11.4-88.2-29.6-97-89.5l193.5-.2z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path968"
      fill="#000"
      stroke-width=".8"
      d="M480 141.5l-.3-17.6 14 .1.1 17.5H532l.1 13.7-38.3.2-.3 161.4-13.6.1-.2-161.7-38 .2v-14z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path970"
      fill="#ff9a08"
      fill-rule="evenodd"
      stroke="#000"
      stroke-width=".8"
      d="M449 278.8l35 36.3c12.1-13.3 3.7-63-12.2-72.1-1.9 5.9-5.1 13-8.6 15.2-7.5 5.2-26.1 11.2-19.9 15 1.4-1.9 5.1-3.7 6.9.6 2 6.9-7.8 7.3-7.8 7.3s-6.2-.8-7.3-7c-1-6.4 9.3-12.2 10.2-12.6.8-.3 14.3-4 16.6-15.9 2.9-11.8 5.8-10 6.3-10.2 17.7 1.7 29.2 33.3 29.9 55.5.6 22.2-9 37-10.8 38-1.7.9-42-47.9-42-47.9l3.8-2.2z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path972"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M474.6 245l.2 65.5"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path974"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M470.6 246.3l.3 59.4"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path976"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M466.4 254.9l.2 47.2"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path978"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M462.9 258.2l.2 39.1"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path980"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M459.2 260v33"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path982"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M455.2 262.6v26.1"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path984"
      fill="#ff9a08"
      stroke="#000"
      stroke-width=".8"
      d="M451.7 264.7v20"
      opacity="1"
      stop-opacity="1"
    />
    <g
      id="g994"
      fill="none"
      stroke="#ffdf00"
      stroke-linecap="round"
      stroke-width="1.8"
      opacity="1"
      transform="matrix(.8 0 0 .8 -230.7 -7)"
    >
      <path id="path986" stroke-width="1" d="M849 362.4l45.1 51.6" />
      <path id="path988" d="M896.3 329.9s20.4 44.7 1.5 81.4" />
      <path id="path990" d="M843.7 353s1.5-3.9 3.4-2.3" />
      <path id="path992" d="M840.2 341.6s-8.2 7.2-3.7 11.9" />
    </g>
    <path
      id="path998"
      fill="#008021"
      stroke="#000"
      stroke-width=".3"
      d="M494 175.4c2.3-2 3.6-3.3 5.1-3 1.5.2 3.5 0 5-.4a31 31 0 0112-.4c1 .2 2.5.7 4.6 2.5 2.1 1.8 5.2 5 4.2 13.6s-.7 12.3-1.2 17.2c-.8 8.5-2.7 15.5-6 15 4.5 8 5 15 8 20.5s4.8 16.8 3.7 29c-1.2 12.3-4.4 39.7 5.3 58.2-1.6 1.1-5.5 0-9-3.7s-5-3.6-7.8-1.4c-8.8 6.7-17 14.8-29.1 6.7-2.8-1.8-3.6-4-1.6-9.7 5-14 7.5-33.4 6.7-42.4V175.4z"
      opacity="1"
      stop-opacity="1"
    />
    <g
      id="g1010"
      fill="#ffe1cf"
      stroke="#000"
      stroke-width=".4"
      opacity="1"
      transform="matrix(.8 0 0 .8 -230.7 -7)"
    >
      <path
        id="path1000"
        d="M916.2 217.2a12 12 0 01-.1 8.5c-1.3 3-1.6 6.4.6 10.6 3.4-5 8.3-4 11.2-6.8 2.9-2.9 3.5-5.6 5.6-6.2-2.1-1.9-5.4-4-4.7-9.4.7-5.5 8.3-10 1.4-18.3a10 10 0 00-16.7 1.5c-.4 1 .2 3-.9 4.3-.7 1-1.6 1.8-2.6 2.5-.6.5-1 1.1-.3 2 .3.3.8.3 1.3.5l-1 1.8c-.4.4-.2.8.2 1.2-.6 1.7.5 2-.2 3.2-.7 1.1-1.5 2.5.8 3.8.7.3 3.8 1 5.4.8z"
      />
      <path
        id="path1002"
        d="M888.1 246c-4 1-10.5-.8-15.4-.2-2.2.2-3.9-.9-3.6-3 .3-2.2.6-5.5.1-8.6a39.5 39.5 0 014.8-18.4 41.2 41.2 0 004.8-14.6c0-2.3.2-4.8 2.2-6.1 1.5-1 1.8-1.9 2.3-2.7 1.2-1.8 2.4-2.2 2.5-1.1.1.6-.1 1.2-.7 2 1.3-1 3.5-2.3 4-2.6.5-.4 3-2.2 3.2-.5 1-.5 1.7-.5 2 0 .2.7 0 .9-.4 1.3.7-.1 1.5 1.1 0 2.3.8-.3 1.6 1 .2 2.1-1.3 1.2-3 2-3.4 3-.5 1-4 3.6-5.3 4.1-1.4.6-1.5 1.4-1.5 3.4 0 22.2-2.6 20.4-2.6 25.8 0 1.4-.3 2.7 1.1 2.3 1.5-.5 3.6-1.1 5.7-1.1v12.5z"
      />
      <path
        id="path1004"
        d="M889 293.8c6.5-3.3 14-4.5 17.9-5.5a78 78 0 0013-5.6c3.1-1.6 5.6-3.8 7.3-4.3a8.1 8.1 0 004.8-4 63 63 0 008.6-27.3c0-5-1.3-10.7-6.2-6.7a37 37 0 00-11 16.5c-2 8-3.7 9.8-4.1 11.4-.5 1.6-2.1 1.6-4 2a33.4 33.4 0 00-17 8 170 170 0 01-17.8 11.5c-4.6 2.6-5.5 2.8-6.5 5-1 2-2 3.6-2.8 4.5-.9 1-1.1 2-1 3.2.2 1-.2 5.3-.3 6.7 0 1.5.3 1.8.9 1.9.5 0 1.3-.2 1.6-2-.3 1.8 2.1 1.2 2.2-.1 0 1.9 2.5.8 2.6-1 0 1.3 2 .4 2.1-.1.5-1.5.8-3 1.4-4.2.8-1.7 1.7-3.9 3.4-5 1.9-1.4 1-3 4.9-5z"
      />
      <path
        id="path1006"
        d="M935.7 411.9c.4 1.6 1.2 3.4 1.5 4.5.3 1-.2 1.4-.5 2a41 41 0 00-3.4 11c-.1 1.5-1.2 3-1.7 4-.6 1-.3 1.8 1 2.8.5.4 2.5-.2 2.7-1.2.8.7 2 .5 2.6-.6.7.6 1.8.2 2.5-.9.6.4 1.6-.4 2-1 1 .5 2-.1 2-2 0-.5.3-1.2.6-1.6.3-.5.4-1.4.4-2.2 0-.8.4-2.4 1.1-3.5.7-1.1 1.9-3.1 1.4-5-.5-1.7-1.2-1.6-1.9-4-1.6-1.7-3.7-4-6-4.2-2.2-.1-3.5 1.4-4.3 1.9z"
      />
      <path
        id="path1008"
        d="M894.7 424.3c2 2 6.5 2 9.7-1.3-1.1-.5-3.7-1.7-4.8-2.6-1.6 1.6-3.4 3.4-5 3.9z"
      />
    </g>
    <path
      id="path1012"
      fill="#870f00"
      stroke="#000"
      stroke-width=".3"
      d="M501.4 149c.6-4 3.5-4 5.3-3.5.8.1 2.6.3 4.4-.2 3.4-.9 6 .3 5.6 3.6 1 .7 2 2.3 1.7 3.7-.1 1.4.2 2 1.4 2.1 1.3.2 4 1.8 2.2 4 1.7 1 3 3.7 2.1 5.4-.9 1.8-3.6 2.1-4.8.5-1.3.6-3.3.7-4.6-.6-.9 1-3 .9-3.5 0-.4-1-1-1.4-1.9-1.7-.9-.3-1-2.8.4-3.1-.1-.8 0-1.6.3-2 .3-.4 0-1.2-.8-1.8-.8-.7-1.5-3-.7-4.4-1.4.5-4.4-.9-5-1.8-.7-1-1.6-1-2.1-.2z"
      opacity="1"
      stop-opacity="1"
    />
    <g
      id="g1088"
      fill="none"
      stroke="#000"
      stroke-width=".4"
      opacity="1"
      transform="matrix(.8 0 0 .8 -230.7 -7)"
    >
      <path id="path1014" d="M916.2 217.2c2.8-.3 3.7-2 5.8-2" />
      <path id="path1016" d="M910.2 209.4l.7.4c.5.3 1.2.4 1.7.5" />
      <path id="path1018" d="M911 206.4l1.2.7" />
      <path
        id="path1020"
        d="M917.5 195c-1.6-1.6 2.8-4.8 7.5-.2 1 .9 3.1.9 3.8.7"
      />
      <path
        id="path1022"
        d="M924 197.5c2.2-.5 5.4-.5 6.4 2 1 2.4 2.8.8 4.3 3.7 1.5 2.9 3.9 6.1 6.2 3.9"
      />
      <path id="path1024" d="M931.7 213.7a5 5 0 01-.5-4c-.8-1-.5-3.1 0-4.1" />
      <path id="path1026" d="M925.5 207.7c.1.9 1.3 2.5 3 2.8" />
      <path id="path1028" d="M937.5 214.5c-1-1.3-.9-2.5-.6-4" />
      <path id="path1030" d="M927 200.1c0 1.3.7 3 2 3.6.4.8 1.8 2.8 4.7 2.5" />
      <path id="path1032" d="M934.3 194.9a13.6 13.6 0 00-6.6-3.1" />
      <path
        id="path1034"
        d="M916.7 236.3c-2.5 3.3-4 7.9-3 14.4 1.2 6.5 3.1 16-1.6 20.3"
      />
      <path
        id="path1036"
        d="M935.4 283.6c-3.3-.8-8-.8-10.7 1.1-2.5 1.9-6.9 2-9.8.6"
      />
      <path
        id="path1038"
        d="M928.4 283.3c-2.9.5-4.2 2.6-4.2 7.9 0 5.3-1.2 13.1-.2 20.8"
      />
      <path id="path1040" d="M923.2 285.6c-2 .5-3.9.5-3.5 5.6" />
      <path id="path1042" d="M913.4 291.3c.1-3 1.2-6 3.2-5.4" />
      <path
        id="path1044"
        d="M934.2 292c.1-7-1.4-8.9-3.4-8.8 2.7 0 4.6.4 5.8 11.6.8 8.4 2.6 11.3 4.6 17.9 5.2 17 2.6 43.2 5.2 52.5"
      />
      <path
        id="path1046"
        d="M930.2 294c5.5 15.8 8.4 33.4-.5 61.6 6 16.8 12 28.9 13.2 35.8"
      />
      <path
        id="path1048"
        d="M913 331.4c1-3.6-2.7-4 .5-16.7 1.4-5.5 1.6-8.8.7-10.5"
      />
      <path id="path1050" d="M914.2 311.7c-1.3 5.6 4.2 16.1 1.5 23.8" />
      <path
        id="path1052"
        d="M908.9 336.9c0 5 1.1 11.3.9 16.2-.3 4.9 1.7 7.1 4 11.8 8.4 16.7 14 28.6 13.3 44.4-.2 2.9.8 9-2.2 10.7"
      />
      <path id="path1054" d="M909.1 424.2c.9 0 1.8-.4 2.9-3a81 81 0 003-28.8" />
      <path id="path1056" d="M916.8 404.5c.4 3.3.4 10.1-1.7 15.5" />
      <path id="path1058" d="M922.3 394.6c1.3 7 1.1 13.4.1 17.9" />
      <path id="path1060" d="M919.4 412.5c.2 2.8 1.5 10-.7 10.6" />
      <path id="path1062" d="M930.2 379c5.4 8.4 9.5 29 14 33.3" />
      <path id="path1064" d="M934.8 409c-.1-2.3-.2-5.5-1.5-7" />
      <path id="path1066" d="M877.2 308c.1-1.5-.2-3 1.6-5.5" />
      <path id="path1068" d="M874.6 309c.3-5.5.2-6 1.8-7.6" />
      <path id="path1070" d="M872.4 309.1c0-4-.4-5.3 1.2-7.8" />
      <path id="path1072" d="M892.3 190.2l-5.7 4.3" />
      <path id="path1074" d="M893.9 191.5c-.7.1-2.7 1.8-6.2 4.5" />
      <path id="path1076" d="M894 193.8c-1.2.5-3.3 2.5-5.2 3.9" />
      <path id="path1078" d="M885.1 193.4l-2 2" />
      <path id="path1080" d="M935.3 435c-.3-.3-.3-1.6.3-3" />
      <path id="path1082" d="M938 434.4c-.5-.4 0-2.2.3-3.3" />
      <path id="path1084" d="M940.4 433.5c-.5-.2-.6-1.2 0-2.6" />
      <path id="path1086" d="M942.3 432.5c-.3-.1-.4-.7.1-2.2" />
    </g>
    <g
      id="g1094"
      fill="#000"
      stroke="none"
      stroke-width=".4"
      opacity="1"
      transform="matrix(.8 0 0 .8 -230.7 -7)"
    >
      <path
        id="path1090"
        d="M914 199.6c1 1.3 2.1 1.2 2.3 2 .2 1 .3 1 .5 1.3.2.2-.5.2-.8 0h-1.7c-.5 0-1.1-.7-.8-.7.4-.1.4-.2.3-.5 0-.3.2-.7.4-.8l-.1-.4c-.2-.4-.4-1.2-.1-1z"
      />
      <path
        id="path1092"
        d="M914.6 198.3a8 8 0 014.3 2c.8 1 .1.7-.3.7s-1.3-.2-1.7-.8a5.8 5.8 0 00-2.4-1.4c-.4-.1-.8-.6.1-.5z"
      />
    </g>
    <path
      id="path1746"
      fill="#012169"
      stroke-width=".5"
      d="M0 0h320v240H0z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1748"
      fill="#FFF"
      stroke-width=".5"
      d="M37.5 0l122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1750"
      fill="#C8102E"
      stroke-width=".5"
      d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1752"
      fill="#FFF"
      stroke-width=".5"
      d="M120.5 0v240h80V0zM0 80v80h320V80z"
      opacity="1"
      stop-opacity="1"
    />
    <path
      id="path1754"
      fill="#C8102E"
      stroke-width=".5"
      d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"
      opacity="1"
      stop-opacity="1"
    />
  </g>
</svg>

{/if}

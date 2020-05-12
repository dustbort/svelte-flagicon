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
  id="flag-icon-css-hk"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M164.8 0H909v744H165z" />
    </clipPath>

    <mask id="HkSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#HkSvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#a{id})" transform="matrix(.7 0 0 .7 -113.4 0)">
      <path fill="#ba0000" fill-rule="evenodd" d="M1063 744.1H0V0h1063z" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M516.4 360.1s-75-32.3-64.3-116c10.4-40.3 28.8-67.7 62.2-82.6a223 223 0 0148-8.4c-4.4 4-8 8.1-9.8 13.2-3.6 9.2-1 18 3.8 26.8a78 78 0 0110.8 34.4 53.2 53.2 0 01-21.2 49c-9.6 7.3-21 9.9-30.2 18.3a41.1 41.1 0 00-13.2 26.4c-.3 23.4 6.1 26.7 13.9 39z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="3.1"
        d="M502.1 239v-.3"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="3.1"
        d="M506.9 351.4c-29.2-25.8-26.7-90.7-4.4-112.4"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M501.9 223l9.6-2.1 1.1-9.4 4.8 8 9.6-2.1-6.6 7.1 4.8 8-9-3.6-6.6 7.1 1.2-9.3"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M522.8 354.6s8.9-81.2 92-95.4c41.6-1.9 73.2 7.7 97.3 35.2a223.4 223.4 0 0122 43.4c-5.1-3-10-5.2-15.5-5.5-9.8-.7-17.4 4.4-24.4 11.5-8 8.8-17 15.3-29.8 20.4a53.3 53.3 0 01-53-5.9c-9.9-7-15.6-17.1-26.4-23.5a41 41 0 00-29.1-4.9c-22.5 6.7-23.7 13.7-33.2 24.7z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="3.1"
        d="M634.4 305.5l.3-.1"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="3.1"
        d="M528.3 343c16.1-35.5 79-52 106.2-37.2"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M649.6 300.6l4.8 8.6 9.3-1.7-6.2 7 4.9 8.5-8.8-4.3-6.3 7 .9-9.6-8.8-4.3 9.3-1.6"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M528.4 360.5s79.8-17.4 119.7 57c15 38.8 16 71.8-2.5 103.4-10 13-21.7 24-34.2 34.6 1.2-5.8 1.7-11.2.3-16.4-2.4-9.5-9.7-15.1-18.7-19.5a77.2 77.2 0 01-28.7-21.7 53.3 53.3 0 01-11.3-52.2c3.5-11.6 11.3-20.3 13.9-32.5a41 41 0 00-4.6-29.2c-13.4-19.1-20.5-18-34-23.5z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="3.1"
        d="M610.4 450.7l.2.3"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="3.1"
        d="M541.1 362c38.8 4 74.5 58.4 69 88.9"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M619.8 463.6l-6.5 7.3 4.5 8.3-8.6-3.8-6.5 7.4 1.3-9.7-8.6-3.7 9.3-2.2 1.3-9.7 4.5 8.3"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M526.6 368.7s39 71.7-21.1 131c-33.1 25.2-64.5 35.4-100 26.5-15.3-5.8-29.1-14-42.8-23 5.8-.5 11.2-1.5 15.8-4.4 8.4-5 11.8-13.5 13.5-23.4a77.2 77.2 0 0112.7-33.7 53.2 53.2 0 0147-25.4c12 .1 22.6 5.1 35 4.2a41 41 0 0026.8-12.6c14.6-18.3 11.6-24.8 13-39.2z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="3.1"
        d="M463 472.7l-.2.3"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="3.1"
        d="M528.7 381.4c7 38.3-35.1 87.8-66 91.1"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M453.3 485.4l-8.9-4.2-6.7 6.7 1.2-9.3-8.9-4.2 9.7-1.5 1.1-9.3 4.8 8.4 9.6-1.5-6.7 6.6"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M517.7 367.1s-54.7 60.7-130.5 23.6c-34.8-22.8-54.9-49-58.3-85.4.4-16.3 3.6-32.1 7.5-48 2.5 5.3 5.1 10 9.4 13.4 7.5 6.3 16.7 6.7 26.5 5a77.2 77.2 0 0136 .8 53.3 53.3 0 0139.6 35.8c4 11.5 2.7 23 7.7 34.5a41 41 0 0020.8 21c22 7.7 27.2 2.8 41.3-.7z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="3.1"
        d="M398.4 341.7h-.3"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="3.1"
        d="M506.4 373.4c-33.8 19.3-94.5-4-107.8-32"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M383.2 336.8l1-9.8-8.4-4 9.1-2 1-9.8 4.7 8.6 9-2-6.2 7.3 4.6 8.6-8.5-4.1"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-hk"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="hk-a{id}">
      <path fill-opacity=".7" d="M-89 0h682.6v512H-89z" />
    </clipPath>

    <mask id="HkSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#HkSvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#hk-a{id})" transform="translate(83.5) scale(.94)">
      <path fill="#ba0000" fill-rule="evenodd" d="M618 512h-731.4V0H618z" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M241.9 247.8s-51.6-22.2-44.2-79.8c7.1-27.7 19.8-46.6 42.7-56.9 10.8-3.3 21.8-4.8 33-5.7-3 2.8-5.4 5.6-6.7 9-2.4 6.4-.6 12.4 2.7 18.5 4.1 7 6.6 14.2 7.4 23.6a36.6 36.6 0 01-14.6 33.7c-6.6 5.1-14.4 6.9-20.8 12.7-5 4.8-8 9.7-9 18.1-.2 16.1 4.1 18.4 9.5 26.8z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="2.1"
        d="M232 164.5v-.3"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="2.1"
        d="M235.3 241.8c-20-17.7-18.3-62.4-3-77.3"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M244.6 154.5l3.3 5.5-6-2.5-4.7 5 .8-6.5-6-2.5 6.5-1.5.8-6.4 3.3 5.5 6.6-1.5"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M246.3 244s6-55.9 63.3-65.7c28.6-1.2 50.4 5.3 67 24.3 6.3 9.3 10.9 19.4 15 29.8-3.5-2-6.8-3.5-10.6-3.7-6.7-.5-12 3-16.8 7.9a53.2 53.2 0 01-20.4 14 36.6 36.6 0 01-36.5-4c-6.8-4.9-10.8-11.8-18.2-16.2a28.2 28.2 0 00-20-3.4c-15.5 4.6-16.3 9.4-22.8 17z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="2.1"
        d="M323 210.2h.3"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="2.1"
        d="M250 236c11.2-24.4 54.4-35.8 73.1-25.6"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M336.3 219.3L332 224l.6-6.5-6-3 6.3-1 .6-6.7 3.4 6 6.4-1.2-4.3 4.7 3.3 6"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M250.1 248s55-12 82.4 39.3c10.3 26.7 11 49.4-1.7 71.1-6.8 9-15 16.5-23.5 23.8.8-4 1.1-7.6.1-11.2-1.6-6.6-6.6-10.5-12.8-13.5a53.1 53.1 0 01-19.8-15 36.6 36.6 0 01-7.7-35.8c2.4-8 7.7-14 9.5-22.4a28 28 0 00-3.1-20c-9.3-13.2-14.1-12.5-23.4-16.3z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="2.1"
        d="M306.5 310.1l.2.2"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="2.1"
        d="M259 249c26.6 2.9 51.1 40.2 47.4 61.3"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M302.1 325.6l-5.9-2.6 6.5-1.5.8-6.7 3.1 5.7 6.5-1.5-4.5 5 3 5.7-5.8-2.6-4.5 5.1"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M248.9 253.7s26.9 49.4-14.5 90c-22.8 17.4-44.4 24.5-68.8 18.4-10.5-4-20-9.7-29.5-15.9 4-.3 7.7-1 10.9-3 5.8-3.4 8.1-9.3 9.3-16a53 53 0 018.8-23.3 36.6 36.6 0 0132.2-17.5c8.4.1 15.6 3.6 24.2 3 6.9-.9 12.3-2.8 18.4-8.8 10-12.5 8-17 9-27z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="2.1"
        d="M205.1 325.3l-.1.2"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="2.1"
        d="M250.3 262.4c4.9 26.4-24.1 60.5-45.4 62.7"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M189 325.4l.9-6.4 3.3 5.7 6.6-1-4.6 4.6 3.3 5.7-6.1-2.9-4.6 4.6.8-6.4-6.1-2.9"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M242.8 252.6S205.2 294.4 153 269c-24-15.7-37.8-33.8-40.1-58.8.3-11.3 2.4-22.1 5.1-33 1.7 3.6 3.6 6.8 6.5 9.2 5.1 4.3 11.5 4.5 18.3 3.4a52 52 0 0124.7.6 36.6 36.6 0 0127.3 24.6c2.7 7.9 1.8 15.9 5.3 23.8 3 6.2 6.6 10.6 14.3 14.4 15.2 5.3 18.7 1.9 28.4-.5z"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="2.1"
        d="M160.7 235.2l-.2-.1"
      />
      <path
        fill="none"
        stroke="#ba0000"
        stroke-width="2.1"
        d="M235 256.9c-23.2 13.3-65-2.7-74.2-22"
      />
      <path
        fill="#ba0000"
        fill-rule="evenodd"
        d="M155.3 220l6.3-1.3-4.3 5 3.1 5.9-5.8-2.8-4.3 5 .7-6.8-5.9-2.8 6.3-1.3.7-6.8"
      />
    </g>
  </g>
</svg>

{/if}

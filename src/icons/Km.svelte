<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-km"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M0 0h416.3v416.3H0z" />
    </clipPath>

    <mask id="KmSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#KmSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a)" transform="scale(1.23)">
      <path fill="#ff0" d="M0 0h625v104H0z" />
      <path fill="#fff" d="M0 104h625v104.1H0z" />
      <path fill="#be0027" d="M0 208.1h625v104H0z" />
      <path fill="#3b5aa3" d="M0 312.2h625v104H0z" />
      <path fill="#239e46" d="M0 0v416.2l310.4-207.5L0 0z" />
      <path
        fill="#fff"
        d="M127.8 115c-69.2-3.5-100.7 51.6-100.6 94.2-.2 50.4 47.6 92 91.7 89.4A100 100 0 0165.8 209a98.3 98.3 0 0162-94z"
      />
      <path
        fill="#fff"
        d="M126.8 160.2l-9.8-7.6-11.8 3.7 4.2-11.6-7.1-10.1 12.3.4 7.4-10 3.4 12 11.8 3.9-10.3 7zm-.2 42.3l-9.8-7.6-11.8 3.7 4.2-11.6-7.2-10.1 12.4.4 7.4-10 3.4 12 11.8 4-10.3 6.9zm.2 42.8l-9.8-7.6-11.8 3.7 4.2-11.7-7.1-10 12.3.4 7.4-10 3.4 12 11.8 3.9-10.3 6.9zm-.2 43.1l-9.8-7.6-11.8 3.7 4.2-11.6-7.2-10.1 12.4.4 7.4-10 3.4 12 11.8 4-10.3 6.9z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-km"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="km-a">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="KmSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#KmSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd" clip-path="url(#km-a)" transform="scale(.9375)">
      <path fill="#ff0" d="M0 0h768.8v128H0z" />
      <path fill="#fff" d="M0 128h768.8v128H0z" />
      <path fill="#be0027" d="M0 256h768.8v128H0z" />
      <path fill="#3b5aa3" d="M0 384h768.8v128H0z" />
      <path fill="#239e46" d="M0 0v512l381.9-255.3L0 0z" />
      <path
        fill="#fff"
        d="M157.2 141.4c-85-4.3-123.9 63.5-123.8 115.9-.2 62 58.6 113 112.8 110C117 353.5 81.2 314.6 81 257c-.3-52.1 29.5-97.5 76.3-115.6z"
      />
      <path
        fill="#fff"
        d="M156 197l-12-9.3-14.6 4.6 5.2-14.4-8.8-12.4 15.2.6 9-12.3 4.3 14.7 14.4 4.8-12.6 8.5zm-.3 52.1l-12-9.4-14.6 4.6 5.3-14.3-8.9-12.4 15.3.5 9-12.2 4.2 14.6 14.5 4.9-12.7 8.5zm.2 52.6l-12-9.4-14.5 4.6 5.2-14.3-8.8-12.4 15.2.5 9-12.2 4.3 14.6 14.4 4.8-12.6 8.6zm-.2 53l-12-9.3L129 350l5.3-14.4-8.9-12.4 15.3.6 9-12.3 4.2 14.7 14.5 4.8-12.7 8.5z"
      />
    </g>
  </g>
</svg>

{/if}

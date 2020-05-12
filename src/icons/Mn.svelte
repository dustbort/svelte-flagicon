<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mn"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="MnSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MnSvelteFlagIconRound)' : '' }">
    <path fill="#c4272f" d="M0 0h512v512H0z" />
    <path fill="#015197" d="M170.7 0h170.6v512H170.7z" />
    <circle cx="85.6" cy="215.3" r="28" fill="#f9cf02" />
    <circle cx="85.6" cy="202.5" r="30.5" fill="#c4272f" />
    <path
      fill="#f9cf02"
      fill-rule="evenodd"
      d="M73 169.5a12.7 12.7 0 0025.3 0c0-5.1-3.1-5.8-3.1-7.7 0-1.9 1.9-4.4-2-7.6 2 3.2-1.2 3.8-1.2 7s1.2 3.2 1.2 5.7a2.5 2.5 0 01-5 0c0-2.5 2.5-5 2.5-8.9 0-3.8-.6-5-2.5-8.2-2-3.2-5.1-5.8-2.6-8.3-3.8 1.3-1.9 6.4-1.9 9.5 0 3.2-2.5 5.1-2.5 9 0 3.7 1.9 4.4 1.9 7a2.5 2.5 0 01-5.1 0c0-2.6 1.3-2.6 1.3-5.8 0-3.2-3.2-3.8-1.3-7-3.8 3.2-1.9 5.7-1.9 7.6 0 2-3.2 2.6-3.2 7.7z"
    />
    <circle cx="85.6" cy="207.6" r="20.4" fill="#f9cf02" />
    <path
      fill="#f9cf02"
      d="M29.6 248.3v122.2h25.5V248.3zm86.6 0v122.2h25.4V248.3zm-56 20.4v10.2H111v-10.2zm0 71.3v10H111v-10zm0-91.7H111l-25.5 15.3zm0 107H111l-25.5 15.2z"
    />
    <circle
      cx="85.6"
      cy="309.4"
      r="27"
      fill="#f9cf02"
      stroke="#c4272f"
      stroke-width="3"
    />
    <path
      fill="none"
      stroke="#c4272f"
      stroke-width="3"
      d="M85.6 282.4a13.5 13.5 0 010 27 13.5 13.5 0 100 27"
    />
    <circle cx="85.6" cy="295.9" r="5.1" fill="#c4272f" />
    <circle cx="85.6" cy="322.9" r="5.1" fill="#c4272f" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mn"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="MnSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MnSvelteFlagIconRound)' : '' }">
    <path fill="#c4272f" d="M0 0h640v480H0z" />
    <path fill="#015197" d="M213.3 0h213.4v480H213.3z" />
    <circle cx="107" cy="189.1" r="35" fill="#f9cf02" />
    <circle cx="107" cy="173.2" r="38.2" fill="#c4272f" />
    <path
      fill="#f9cf02"
      fill-rule="evenodd"
      d="M91.1 131.8a15.9 15.9 0 0031.8 0c0-6.3-4-7.2-4-9.5 0-2.4 2.4-5.6-2.4-9.6 2.4 4-1.6 4.8-1.6 8.8 0 4 1.6 4 1.6 7.1a3.2 3.2 0 01-6.3 0c0-3.1 3.1-6.3 3.1-11 0-4.9-.7-6.5-3.1-10.4-2.4-4-6.4-7.2-3.2-10.4-4.8 1.6-2.4 8-2.4 12s-3.2 6.3-3.2 11 2.4 5.7 2.4 8.8a3.2 3.2 0 01-6.3 0c0-3.1 1.6-3.1 1.6-7.1s-4-4.8-1.6-8.8c-4.8 4-2.4 7.2-2.4 9.6 0 2.4-4 3.1-4 9.5z"
    />
    <circle cx="107" cy="179.5" r="25.4" fill="#f9cf02" />
    <path
      fill="#f9cf02"
      d="M37 230.4v152.7h31.8V230.4zm108.2 0v152.7H177V230.4zm-70 25.5v12.7h63.6v-12.7zm0 89v12.8h63.6V345zm0-114.5h63.6L107 249.5zm0 133.7h63.6L107 383z"
    />
    <circle
      cx="107"
      cy="306.8"
      r="33.7"
      fill="#f9cf02"
      stroke="#c4272f"
      stroke-width="3.8"
    />
    <path
      fill="none"
      stroke="#c4272f"
      stroke-width="3.8"
      d="M107 273a16.9 16.9 0 010 33.8 16.9 16.9 0 100 33.7"
    />
    <circle cx="107" cy="289.9" r="6.4" fill="#c4272f" />
    <circle cx="107" cy="323.6" r="6.4" fill="#c4272f" />
  </g>
</svg>

{/if}

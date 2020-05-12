<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-td"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="TdSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TdSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd">
      <path fill="#000067" d="M0 0h171.2v512H0z" />
      <path fill="red" d="M340.8 0H512v512H340.8z" />
      <path fill="#ff0" d="M171.2 0h169.6v512H171.2z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-td"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="TdSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TdSvelteFlagIconRound)' : '' }">
    <g fill-rule="evenodd">
      <path fill="#000067" d="M0 0h214v480H0z" />
      <path fill="red" d="M426 0h214v480H426z" />
      <path fill="#ff0" d="M214 0h212v480H214z" />
    </g>
  </g>
</svg>

{/if}

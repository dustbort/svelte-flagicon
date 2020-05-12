<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tt"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="TtSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TtSvelteFlagIconRound)' : '' }">
    <path fill="#fff" d="M0 0h512v512H0z" style="width: 0;" />
    <g fill-rule="evenodd">
      <path
        fill="#e00000"
        d="M371 512L0 1v510.7l371 .3zM141 0l371 511V.2L141 0z"
      />
      <path d="M22.2.2h94.9l374.5 511.3h-97.9L22.2.2z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tt"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="TtSvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TtSvelteFlagIconRound)' : '' }">
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path
      fill="#e00000"
      fill-rule="evenodd"
      d="M463.7 480L0 1v478.8l463.7.2zM176.3 0L640 479V.2L176.3 0z"
    />
    <path fill-rule="evenodd" d="M27.7.2h118.6l468.2 479.3H492.2L27.7.2z" />
  </g>
</svg>

{/if}

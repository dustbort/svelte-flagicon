<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gr"
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
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 0h512v57H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 57h512v57H0z"
    />
    <path
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 114h512v57H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 171h512v57H0z"
    />
    <path
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 228h512v56.9H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 284.9h512v57H0z"
    />
    <path
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 341.9h512v57H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 398.9h512v57H0z"
    />
    <path fill="#005bae" stroke-width="3" d="M0 0h284.9v284.9H0z" />
    <g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
      <path d="M148 0h74v370h-74z" transform="scale(.77)" />
      <path d="M0 148h370v74H0z" transform="scale(.77)" />
    </g>
    <path
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width=".8"
      d="M0 455h512v57H0z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gr"
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
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 0h640v53.3H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 53.3h640v53.4H0z"
    />
    <path
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 106.7h640V160H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 160h640v53.3H0z"
    />
    <path fill="#005bae" stroke-width=".9" d="M0 0h266.7v266.7H0z" />
    <path
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 213.3h640v53.4H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 266.7h640V320H0z"
    />
    <path
      fill="#005bae"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 320h640v53.3H0z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      stroke-width="6.7"
      d="M0 373.3h640v53.4H0z"
    />
    <g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
      <path d="M20 0h10v50H20z" transform="scale(5.33333)" />
      <path d="M0 20h50v10H0z" transform="scale(5.33333)" />
    </g>
    <path fill="#005bae" stroke-width=".6" d="M0 426.7h640V480H0z" />
  </g>
</svg>

{/if}

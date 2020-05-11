<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mh"
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
    <g fill-rule="evenodd">
      <path fill="#3b5aa3" d="M0 0h511.9v512H0z" />
      <path
        fill="#fff"
        d="M139 1.2l-5.3 88-23.2-56.1 9 59.7-35.9-48.2 23.5 55-47-36.5L96.7 109 43.5 85.4l46.6 35.3-58-7.7L87 134.7l-86 7.9 86 5.7-54.5 22.4L90 163l-46.4 34.2 53.8-23.6-36.7 46.2 46.7-35.4-23.4 54 37.4-46.8-10 58.3 23.4-54.5 5.4 86.1 8.2-85.9 20.3 54.9-7.7-59.1 37.2 46.8-24.5-54.7 46.7 37.6-37-47 55.4 23.1-49.1-35.8 59.8 10-57.3-22 89-5.5-89-8.3L251 116l-60.7 7.6 50.2-35-56.6 22.7 39-47.3-47.5 37.1 23-56.8-37 48.3 8-60.3-22 56.9-8.2-88z"
      />
      <path fill="#e2ae57" d="M0 498.2L512 0v92.7L0 512v-13.8z" />
      <path fill="#fff" d="M18 512l494-320.8-.1-101.9L-.1 512h18z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-mh"
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
    <g fill-rule="evenodd">
      <path fill="#3b5aa3" d="M0 0h639.9v480H0z" />
      <path fill="#e2ae57" d="M0 467L639.9 0v87L0 480v-13z" />
      <path
        fill="#fff"
        d="M22.4 480L640 179.2l-.1-95.5L0 480h22.4zm153-464.8L169 118l-27-65.6 10.4 69.8-41.9-56.4 27.5 64.3-55-42.6 42.8 53.6-62.1-27.6 54.4 41.2-67.7-9 64 25.4L14 180.3l100.6 6.7-63.7 26.2 67-9-54.3 40 63-27.6-43 54 54.6-41.3-27 62.9 43.6-54.7-11.8 68.1 27.5-63.7 6.2 100.7 9.7-100.4 23.7 64-9-69 43.4 54.8-28.6-64 54.6 44-43.4-54.9 64.9 27-57.4-41.9 69.9 11.8-67-25.7 104.1-6.5-104-9.7 68.5-22.8-71 9 58.6-41-66 26.5 45.6-55.3-55.6 43.4 26.7-66.4-43.1 56.4 9.3-70.4-25.7 66.5-9.6-102.8z"
      />
    </g>
  </g>
</svg>

{/if}

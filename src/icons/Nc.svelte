<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-nc"
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
    <path fill="#009543" stroke-width=".8" d="M0 0h512v512H0z" />
    <path fill="#ed4135" stroke-width=".8" d="M0 0h512v341.3H0z" />
    <path fill="#0035ad" stroke-width=".8" d="M0 0h512v170.7H0z" />
    <circle
      cx="225.6"
      cy="256"
      r="167.8"
      fill="#fae600"
      stroke="#000"
      stroke-width="5.7"
    />
    <path
      stroke="#000"
      stroke-width="6.8"
      d="M197.2 281h56.9m-56.9-42h56.9M225.6 88.6v286.8"
    />
    <path
      stroke-width="1.1"
      d="M158 410c68.6 28 132.8 1.8 132.8 1.8s-24.3-26.2-36.7-36.5c-12.1-10-47.8-9.6-60 0-10 8-39.2 37.5-36 34.8z"
    />
    <ellipse cx="225.6" cy="333.4" stroke-width="1.1" rx="18.8" ry="27.3" />
    <ellipse cx="225.6" cy="260" stroke-width="1.1" rx="22.8" ry="14.4" />
    <circle cx="225.6" cy="193.4" r="22.8" stroke-width="1.1" />
    <path
      stroke-width="1.1"
      d="M253 108.7s2 3.2-2.2 10.7c-19.9 35.7-39.7 36.5-43.5 39.5-4.2 3.4-6 3.2-6 3.2.4-3 .6-15.6.8-16.8 3-16.6 28.3-16.4 48-33.5 3-2.7 2.8-3.2 2.8-3.2z"
    />
    <path
      d="M265.5 163s4 11.2 4.5 22.5c1 18 18.2 18.5 30 18.5v-10c-8.9 0-16.6-1.3-23-14.5a115 115 0 00-11.5-16.5zm-.5 145s6.3-7.8 13.7-26c3.8-9.5 13-15 21.3-15v-14c-19 0-28.2 7-29.1 17.4-2 21.1-5.9 37.6-5.9 37.6z"
      transform="translate(-115.7) scale(1.13778)"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 451.3 0)"
      xlink:href="#leaf"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-nc"
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
    <path fill="#009543" stroke-width=".9" d="M0 0h640v480H0z" />
    <path fill="#ed4135" stroke-width=".9" d="M0 0h640v320H0z" />
    <path fill="#0035ad" stroke-width=".9" d="M0 0h640v160H0z" />
    <circle
      cx="240"
      cy="240"
      r="157.3"
      fill="#fae600"
      stroke="#000"
      stroke-width="5.3"
    />
    <path
      stroke="#000"
      stroke-width="6.4"
      d="M213.3 263.5h53.3M213.3 224h53.3M240 83.2V352"
    />
    <path
      stroke-width="1.1"
      d="M176.6 384.4c64.2 26.3 124.4 1.7 124.4 1.7s-22.7-24.6-34.3-34.2c-11.4-9.4-44.8-9-56.2 0a488.7 488.7 0 00-33.9 32.5z"
    />
    <ellipse cx="240" cy="312.5" stroke-width="1.1" rx="17.6" ry="25.6" />
    <ellipse cx="240" cy="243.7" stroke-width="1.1" rx="21.3" ry="13.5" />
    <circle cx="240" cy="181.3" r="21.3" stroke-width="1.1" />
    <path
      stroke-width="1.1"
      d="M265.6 101.9s1.8 3-2 10c-18.6 33.5-37.3 34.2-40.8 37.1-4 3.2-5.6 3-5.6 3 .3-2.9.5-14.6.7-15.7 2.9-15.7 26.5-15.5 45-31.5 2.9-2.5 2.7-3 2.7-3z"
    />
    <path
      d="M265.5 163s4 11.2 4.5 22.5c1 18 18.2 18.5 30 18.5v-10c-8.9 0-16.6-1.3-23-14.5a115 115 0 00-11.5-16.5zm-.5 145s6.3-7.8 13.7-26c3.8-9.5 13-15 21.3-15v-14c-19 0-28.2 7-29.1 17.4-2 21.1-5.9 37.6-5.9 37.6z"
      transform="translate(-80) scale(1.06667)"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 480 0)"
      xlink:href="#leaf"
    />
  </g>
</svg>

{/if}

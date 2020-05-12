<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-my"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="MySvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MySvelteFlagIconRound)' : '' }">
    <path fill="#cc0001" d="M0 0h512v512H0z" />
    <path id="a" fill="#fff" d="M0 475.5h512V512H0z" />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -73.1)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -146.3)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -219.4)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -292.6)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -365.7)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -438.9)"
      xlink:href="#a"
    />
    <path fill="#010066" d="M0 0h320v292.6H0z" />
    <g fill="#fc0">
      <path
        d="M123.8 51.9a93 93 0 00-93.2 92.9 93 93 0 00143.7 78.1 82.7 82.7 0 01-27 4.5 82.5 82.5 0 01-82.7-82.3c0-45.5 37-82.4 82.6-82.4a82.6 82.6 0 0128.7 5A93 93 0 00124 52z"
      />
      <path
        d="M278.4 193.2L239 172.7l11.6 41.9-26.2-35-8.2 42.6-8-42.7-26.5 35 11.8-41.9-39.3 20.4 29.2-32.8-44.5 1.7 40.9-17.1-40.9-17.3 44.5 1.8-29-32.9 39.2 20.5L182 75l26.2 35 8.2-42.6 8 42.7L251 75l-11.8 42 39.3-20.4-29.2 32.8 44.5-1.7-40.9 17.2 40.9 17.2-44.5-1.8z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-my"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="MySvelteFlagIconRound">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MySvelteFlagIconRound)' : '' }">
    <path fill="#cc0001" d="M0 0h640v480H0z" />
    <path id="a" fill="#fff" d="M0 445.8h640V480H0z" />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -68.6)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -137.2)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -205.8)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -274.3)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -343)"
      xlink:href="#a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -411.5)"
      xlink:href="#a"
    />
    <path fill="#010066" d="M0 0h372.6v274.3H0z" />
    <g fill="#fc0">
      <path
        d="M149.7 48.5c-49 0-88.9 39.7-88.9 88.6a88.8 88.8 0 0089 88.6 88.7 88.7 0 0048-14 78.9 78.9 0 01-25.8 4.2 78.7 78.7 0 01-78.8-78.5 78.7 78.7 0 01106.2-73.7 88.7 88.7 0 00-49.7-15.2z"
      />
      <path
        d="M297.1 183.2l-37.4-19.5 11 40-25-33.5-7.8 40.7-7.7-40.7-25.1 33.4 11.2-40-37.6 19.5 28-31.3-42.5 1.6 39-16.3-39-16.5 42.5 1.7L178.9 91l37.4 19.5-11-40 25 33.5 7.8-40.7 7.7 40.7 25.1-33.3-11.2 39.9 37.6-19.4-28 31.2 42.5-1.6-39 16.4 39 16.5-42.5-1.8z"
      />
    </g>
  </g>
</svg>

{/if}

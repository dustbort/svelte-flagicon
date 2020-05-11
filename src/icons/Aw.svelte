<script>
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-aw"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a">
      <path fill="gray" d="M0 0h512v512H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#a)">
      <path fill="#39c" d="M0 0v512h768V0H0z" />
      <path fill="#ff0" d="M0 341.3v28.5h768v-28.5H0zm0 57v28.4h768v-28.5H0z" />
      <path
        fill="#9cc"
        d="M122 28l2.4 2.5-2.3-2.4zm-2.3 4.8l2.4 2.4-2.4-2.4m4.7 0l2.4 2.4-2.3-2.4z"
      />
      <path
        fill="#ccf"
        d="M119.7 35.2l2.4 2.4-2.4-2.4m4.7 0l2.4 2.4-2.3-2.4z"
      />
      <path fill="#6cc" d="M117.3 40l2.4 2.3-2.4-2.3z" />
      <path fill="#c66" d="M122 40l2.4 2.3-2.3-2.3z" />
      <path fill="#6cc" d="M126.8 40l2.4 2.3-2.4-2.3z" />
      <path
        fill="#ccf"
        d="M117.3 42.4l2.4 2.3-2.4-2.3zm9.5 0l2.4 2.3-2.4-2.3z"
      />
      <path
        fill="#fcc"
        d="M119.7 44.7l2.4 2.4-2.4-2.4m4.7 0l2.4 2.4-2.3-2.4z"
      />
      <path fill="#6cc" d="M115 47.1l2.3 2.4-2.4-2.4z" />
      <path
        fill="#c00"
        stroke="#fff"
        stroke-width="3"
        d="M121.7 32.9L105 96.2l-63.5 17.2 63.3 16.5 16.9 63.3 16.9-63.3 63.2-16.9-63.3-16.8-16.8-63.3z"
      />
      <path fill="#6cc" d="M129.2 47.1l2.4 2.4-2.4-2.4z" />
      <path fill="#9cf" d="M115 49.5l2.3 2.4-2.4-2.4m14.3 0l2.4 2.4-2.4-2.4z" />
      <path
        fill="#fcc"
        d="M117.3 51.9l2.4 2.3-2.4-2.3m9.5 0l2.4 2.3-2.4-2.3z"
      />
      <path fill="#69c" d="M112.5 54.3l2.4 2.3-2.4-2.3z" />
      <path fill="#c33" d="M118.1 55.8l.8 1.6-.8-1.6m9.5 0l.8 1.6-.8-1.6z" />
      <path fill="#69c" d="M131.6 54.3l2.4 2.3-2.4-2.3z" />
      <path fill="#9cf" d="M112.5 56.6L115 59l-2.4-2.4m19 0L134 59l-2.4-2.4z" />
      <path fill="#fcc" d="M115 59l2.3 2.4-2.4-2.4m14.3 0l2.4 2.4-2.4-2.4z" />
      <path
        fill="#69c"
        d="M110.2 61.4l2.3 2.4-2.3-2.4zm23.8 0l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#9cc"
        d="M110.2 63.8l2.3 2.4-2.3-2.4m23.8 0l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#cff"
        d="M110.2 66.2l2.3 2.3-2.3-2.3m23.8 0l2.4 2.3-2.4-2.3z"
      />
      <path fill="#69c" d="M107.8 68.5l2.4 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M112.5 68.5L115 71l-2.4-2.4m19 0L134 71l-2.4-2.4z" />
      <path fill="#69c" d="M136.3 68.5l2.4 2.4-2.3-2.4z" />
      <path fill="#9cc" d="M107.8 71l2.4 2.3-2.4-2.4z" />
      <path fill="#c33" d="M113.3 72.5l.8 1.6-.8-1.6m19 0l.9 1.6-.8-1.6z" />
      <path fill="#9cc" d="M136.3 71l2.4 2.3-2.3-2.4z" />
      <path
        fill="#cff"
        d="M107.8 73.3l2.4 2.4-2.4-2.4m28.6 0l2.3 2.4-2.3-2.4z"
      />
      <path
        fill="#fcc"
        d="M110.2 75.7l2.3 2.3-2.3-2.3m23.8 0l2.4 2.3-2.4-2.3z"
      />
      <path fill="#9cc" d="M105.4 78l2.4 2.4-2.4-2.3z" />
      <path fill="#c33" d="M111 79.6l.7 1.6-.8-1.6m23.9 0l.8 1.6-.8-1.6z" />
      <path fill="#9cc" d="M138.7 78l2.4 2.4-2.4-2.3z" />
      <path
        fill="#ccf"
        d="M105.4 80.4l2.4 2.4-2.4-2.4m33.3 0l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#fcc"
        d="M107.8 82.8l2.4 2.4-2.4-2.4m28.6 0l2.3 2.4-2.3-2.4z"
      />
      <path fill="#9cc" d="M103 85.2l2.4 2.4-2.4-2.4z" />
      <path fill="#c33" d="M108.6 86.8l.8 1.6-.8-1.6m28.5 0l.8 1.6-.8-1.6z" />
      <path fill="#9cc" d="M141.1 85.2l2.4 2.4-2.4-2.4z" />
      <path fill="#ccf" d="M103 87.6l2.4 2.4-2.4-2.4m38.1 0l2.4 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M105.4 90l2.4 2.3-2.4-2.3m33.3 0l2.4 2.3-2.4-2.3z" />
      <path fill="#9cc" d="M100.6 92.3l2.4 2.4-2.4-2.4z" />
      <path
        fill="#c33"
        d="M105.4 92.3l2.4 2.4-2.4-2.4m33.3 0l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#9cc"
        d="M143.5 92.3l2.4 2.4-2.4-2.4m-50 2.4l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#ccf"
        d="M95.9 94.7l2.4 2.4-2.4-2.4m52.3 0l2.4 2.4-2.3-2.4z"
      />
      <path
        fill="#9cc"
        d="M150.6 94.7l2.4 2.4-2.4-2.4m-64.2 2.4l2.3 2.4-2.3-2.4z"
      />
      <path fill="#ccf" d="M88.7 97.1l2.4 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M98.3 97.1l2.3 2.4-2.3-2.4z" />
      <path
        fill="#c33"
        d="M100.6 97.1l2.4 2.4-2.4-2.4m42.9 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#fcc" d="M145.9 97.1l2.3 2.4L146 97z" />
      <path fill="#ccf" d="M155.4 97.1l2.4 2.4-2.4-2.4z" />
      <path fill="#9cc" d="M157.8 97.1l2.3 2.4-2.3-2.4z" />
      <path fill="#69c" d="M76.8 99.5l2.4 2.4-2.4-2.4z" />
      <path fill="#9cc" d="M79.2 99.5l2.4 2.4-2.4-2.4z" />
      <path fill="#cff" d="M81.6 99.5l2.4 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M91.1 99.5l2.4 2.4-2.4-2.4z" />
      <path fill="#c33" d="M95 100.3l1.7.8-1.6-.8m54.7 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M153 99.5l2.4 2.4-2.4-2.4z" />
      <path fill="#cff" d="M162.5 99.5l2.4 2.4-2.4-2.4z" />
      <path fill="#9cc" d="M165 99.5l2.3 2.4-2.4-2.4z" />
      <path
        fill="#69c"
        d="M167.3 99.5l2.4 2.4-2.4-2.4m-97.6 2.4l2.4 2.3-2.4-2.3z"
      />
      <path fill="#9cc" d="M72 101.9l2.5 2.3L72 102z" />
      <path fill="#cff" d="M74.5 101.9l2.3 2.3-2.3-2.3z" />
      <path fill="#fcc" d="M84 101.9l2.4 2.3L84 102z" />
      <path fill="#c33" d="M88 102.7l1.5.8-1.5-.8m69 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M160.2 101.9l2.3 2.3-2.3-2.3z" />
      <path fill="#cff" d="M169.7 101.9l2.3 2.3-2.3-2.3z" />
      <path fill="#9cc" d="M172 101.9l2.4 2.3-2.3-2.3z" />
      <path
        fill="#69c"
        d="M174.4 101.9l2.4 2.3-2.4-2.3m-111.8 2.3l2.3 2.4-2.3-2.4z"
      />
      <path fill="#9cf" d="M65 104.2l2.3 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M76.8 104.2l2.4 2.4-2.4-2.4z" />
      <path fill="#c33" d="M80.8 105l1.6.8-1.6-.8m83.3 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M167.3 104.2l2.4 2.4-2.4-2.4z" />
      <path fill="#9cf" d="M179.2 104.2l2.4 2.4-2.4-2.4z" />
      <path fill="#69c" d="M181.6 104.2l2.3 2.4-2.3-2.4z" />
      <path fill="#6cc" d="M55.4 106.6l2.4 2.4-2.4-2.4z" />
      <path fill="#9cf" d="M57.8 106.6l2.4 2.4-2.4-2.4z" />
      <path
        fill="#fcc"
        d="M67.3 106.6l2.4 2.4-2.4-2.4zm109.5 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#9cf" d="M186.3 106.6l2.4 2.4-2.4-2.4z" />
      <path
        fill="#6cc"
        d="M188.7 106.6l2.4 2.4-2.4-2.4M48.3 109l2.4 2.4-2.4-2.4z"
      />
      <path fill="#ccf" d="M50.6 109l2.4 2.4-2.3-2.4z" />
      <path fill="#fcc" d="M60.2 109l2.3 2.4-2.3-2.4z" />
      <path fill="#c33" d="M64.1 109.8l1.6.8-1.6-.8m116.7 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M184 109l2.3 2.4-2.3-2.4z" />
      <path fill="#ccf" d="M193.5 109l2.4 2.4-2.4-2.4z" />
      <path fill="#6cc" d="M195.9 109l2.3 2.4-2.3-2.4z" />
      <path fill="#9cc" d="M41.1 111.4l2.4 2.4-2.4-2.4z" />
      <path fill="#ccf" d="M43.5 111.4l2.4 2.4-2.4-2.4z" />
      <path
        fill="#fcc"
        d="M53 111.4l2.4 2.4-2.4-2.4zm138.1 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#ccf" d="M200.6 111.4l2.4 2.4-2.4-2.4z" />
      <path
        fill="#9cc"
        d="M203 111.4l2.4 2.4-2.4-2.4m-166.6 2.4l2.4 2.3-2.4-2.3z"
      />
      <path
        fill="#c66"
        d="M48.3 113.8l2.4 2.3-2.4-2.3zm147.6 0l2.3 2.3-2.3-2.3z"
      />
      <path
        fill="#9cc"
        d="M207.8 113.8l2.3 2.3-2.3-2.3M41 116l2.4 2.4L41 116z"
      />
      <path fill="#ccf" d="M43.5 116.1l2.4 2.4-2.4-2.4z" />
      <path
        fill="#fcc"
        d="M53 116.1l2.4 2.4-2.4-2.4m138.1 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#ccf" d="M200.6 116.1l2.4 2.4-2.4-2.4z" />
      <path fill="#9cc" d="M203 116.1l2.4 2.4-2.4-2.4z" />
      <path fill="#6cc" d="M48.3 118.5l2.4 2.4-2.4-2.4z" />
      <path fill="#ccf" d="M50.6 118.5L53 121l-2.3-2.4z" />
      <path fill="#fcc" d="M60.2 118.5l2.3 2.4-2.3-2.4z" />
      <path fill="#c33" d="M64.1 119.3l1.6.8-1.6-.8m116.7 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M184 118.5l2.3 2.4-2.3-2.4z" />
      <path fill="#ccf" d="M193.5 118.5l2.4 2.4-2.4-2.4z" />
      <path
        fill="#6cc"
        d="M195.9 118.5l2.3 2.4-2.3-2.4M55.4 121l2.4 2.4-2.4-2.4z"
      />
      <path fill="#9cf" d="M57.8 120.9l2.4 2.4-2.4-2.4z" />
      <path
        fill="#fcc"
        d="M67.3 120.9l2.4 2.4-2.4-2.4zm109.5 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#9cf" d="M186.3 120.9l2.4 2.4-2.4-2.4z" />
      <path fill="#6cc" d="M188.7 120.9l2.4 2.4-2.4-2.4z" />
      <path fill="#69c" d="M62.5 123.3l2.4 2.4-2.3-2.4z" />
      <path fill="#9cf" d="M65 123.3l2.3 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M76.8 123.3l2.4 2.4-2.4-2.4z" />
      <path fill="#c33" d="M80.8 124l1.6.9-1.6-.8m83.3 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M167.3 123.3l2.4 2.4-2.4-2.4z" />
      <path fill="#9cf" d="M179.2 123.3l2.4 2.4-2.4-2.4z" />
      <path
        fill="#69c"
        d="M181.6 123.3l2.3 2.4-2.3-2.4m-111.9 2.4l2.4 2.3-2.4-2.3z"
      />
      <path fill="#9cc" d="M72 125.7l2.5 2.3-2.4-2.3z" />
      <path fill="#cff" d="M74.5 125.7l2.3 2.3-2.3-2.3z" />
      <path fill="#fcc" d="M84 125.7l2.4 2.3-2.4-2.3z" />
      <path fill="#c33" d="M88 126.5l1.5.7-1.5-.8m69 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M160.2 125.7l2.3 2.3-2.3-2.3z" />
      <path fill="#cff" d="M169.7 125.7l2.3 2.3-2.3-2.3z" />
      <path fill="#9cc" d="M172 125.7l2.4 2.3-2.3-2.3z" />
      <path
        fill="#69c"
        d="M174.4 125.7l2.4 2.3-2.4-2.3M76.8 128l2.4 2.4-2.4-2.4z"
      />
      <path fill="#9cc" d="M79.2 128l2.4 2.4-2.4-2.4z" />
      <path fill="#cff" d="M81.6 128l2.4 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M91.1 128l2.4 2.4-2.4-2.4z" />
      <path fill="#c33" d="M95 128.8l1.7.8-1.6-.8m54.7 0l1.6.8-1.6-.8z" />
      <path fill="#fcc" d="M153 128l2.4 2.4-2.4-2.4z" />
      <path fill="#cff" d="M162.5 128l2.4 2.4-2.4-2.4z" />
      <path fill="#9cc" d="M165 128l2.3 2.4-2.4-2.4z" />
      <path fill="#69c" d="M167.3 128l2.4 2.4-2.4-2.4z" />
      <path fill="#9cc" d="M86.4 130.4l2.3 2.4-2.3-2.4z" />
      <path fill="#ccf" d="M88.7 130.4l2.4 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M98.3 130.4l2.3 2.4-2.3-2.4z" />
      <path
        fill="#c33"
        d="M100.6 130.4l2.4 2.4-2.4-2.4m42.9 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#fcc" d="M145.9 130.4l2.3 2.4-2.3-2.4z" />
      <path fill="#ccf" d="M155.4 130.4l2.4 2.4-2.4-2.4z" />
      <path
        fill="#9cc"
        d="M157.8 130.4l2.3 2.4-2.3-2.4m-64.3 2.4l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#ccf"
        d="M95.9 132.8l2.4 2.4-2.4-2.4m52.3 0l2.4 2.4-2.3-2.4z"
      />
      <path
        fill="#9cc"
        d="M150.6 132.8l2.4 2.4-2.4-2.4m-50 2.4l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#c33"
        d="M105.4 135.2l2.4 2.4-2.4-2.4m33.3 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#9cc" d="M143.5 135.2l2.4 2.4-2.4-2.4z" />
      <path
        fill="#fcc"
        d="M105.4 137.6l2.4 2.3-2.4-2.3m33.3 0l2.4 2.3-2.4-2.3z"
      />
      <path fill="#ccf" d="M103 140l2.4 2.3-2.4-2.4z" />
      <path fill="#c33" d="M108.6 141.5l.8 1.6-.8-1.6m28.5 0l.8 1.6-.8-1.6z" />
      <path fill="#ccf" d="M141.1 140l2.4 2.3-2.4-2.4z" />
      <path
        fill="#9cc"
        d="M103 142.3l2.4 2.4-2.4-2.4m38.1 0l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#fcc"
        d="M107.8 144.7l2.4 2.4-2.4-2.4m28.6 0l2.3 2.4-2.3-2.4z"
      />
      <path fill="#ccf" d="M105.4 147l2.4 2.5-2.4-2.4z" />
      <path fill="#c33" d="M111 148.7l.7 1.6-.8-1.6m23.9 0l.8 1.6-.8-1.6z" />
      <path fill="#ccf" d="M138.7 147l2.4 2.5-2.4-2.4z" />
      <path
        fill="#9cc"
        d="M105.4 149.5l2.4 2.3-2.4-2.3m33.3 0l2.4 2.3-2.4-2.3z"
      />
      <path
        fill="#fcc"
        d="M110.2 151.8l2.3 2.4-2.3-2.3m23.8 0l2.4 2.3-2.4-2.3z"
      />
      <path fill="#cff" d="M107.8 154.2l2.4 2.4-2.4-2.4z" />
      <path fill="#c33" d="M113.3 155.8l.8 1.6-.8-1.6m19 0l.9 1.6-.8-1.6z" />
      <path fill="#cff" d="M136.3 154.2l2.4 2.4-2.3-2.4z" />
      <path
        fill="#9cc"
        d="M107.8 156.6l2.4 2.4-2.4-2.4m28.6 0l2.3 2.4-2.3-2.4z"
      />
      <path fill="#69c" d="M107.8 159l2.4 2.4-2.4-2.4z" />
      <path fill="#fcc" d="M112.5 159l2.4 2.4-2.4-2.4m19 0l2.5 2.4-2.4-2.4z" />
      <path fill="#69c" d="M136.3 159l2.4 2.4-2.3-2.4z" />
      <path
        fill="#cff"
        d="M110.2 161.4l2.3 2.3-2.3-2.3zm23.8 0l2.4 2.3-2.4-2.3z"
      />
      <path
        fill="#9cc"
        d="M110.2 163.8l2.3 2.3-2.3-2.3m23.8 0l2.4 2.3-2.4-2.3z"
      />
      <path
        fill="#69c"
        d="M110.2 166.1l2.3 2.4-2.3-2.4m23.8 0l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#fcc"
        d="M115 168.5l2.3 2.4-2.4-2.4m14.3 0l2.4 2.4-2.4-2.4z"
      />
      <path fill="#9cf" d="M112.5 170.9l2.4 2.4-2.4-2.4z" />
      <path fill="#c33" d="M118.1 172.5l.8 1.6-.8-1.6m9.5 0l.8 1.6-.8-1.6z" />
      <path fill="#9cf" d="M131.6 170.9l2.4 2.4-2.4-2.4z" />
      <path
        fill="#69c"
        d="M112.5 173.3l2.4 2.3-2.4-2.3m19 0l2.5 2.3-2.4-2.3z"
      />
      <path
        fill="#fcc"
        d="M117.3 175.7l2.4 2.3-2.4-2.3m9.5 0l2.4 2.3-2.4-2.3z"
      />
      <path fill="#9cf" d="M115 178l2.3 2.4-2.4-2.4zm14.2 0l2.4 2.4-2.4-2.4z" />
      <path
        fill="#6cc"
        d="M115 180.4l2.3 2.4-2.4-2.4m14.3 0l2.4 2.4-2.4-2.4z"
      />
      <path
        fill="#fcc"
        d="M119.7 182.8l2.4 2.4-2.4-2.4m4.7 0l2.4 2.4-2.3-2.4z"
      />
      <path
        fill="#ccf"
        d="M117.3 185.2l2.4 2.3-2.4-2.3m9.5 0l2.4 2.3-2.4-2.3z"
      />
      <path fill="#6cc" d="M117.3 187.6l2.4 2.3-2.4-2.3z" />
      <path fill="#c66" d="M122 187.6l2.4 2.3-2.3-2.3z" />
      <path fill="#6cc" d="M126.8 187.6l2.4 2.3-2.4-2.3z" />
      <path
        fill="#ccf"
        d="M119.7 192.3l2.4 2.4-2.4-2.4m4.7 0l2.4 2.4-2.3-2.4z"
      />
      <path
        fill="#9cc"
        d="M119.7 194.7l2.4 2.4-2.4-2.4m4.7 0l2.4 2.4-2.3-2.4m-2.4 4.8l2.4 2.3-2.4-2.4z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-aw"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="aw-a">
      <path fill-opacity=".7" d="M0 0h288v216H0z" />
    </clipPath>

    <mask id="svelte_flagicons_round">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    <g clip-path="url(#aw-a)" transform="scale(2.2222)">
      <path fill="#39c" d="M0 0v216h324V0H0z" />
      <path fill="#ff0" d="M0 144v12h324v-12H0zm0 24v12h324v-12H0z" />
    </g>
    <path fill="#9cc" d="M142.7 28l2.9 3-3-3zm-3 6l3 3-3-3m5.9 0l3 3-3-3z" />
    <path fill="#ccf" d="M139.7 37l3 2.9-3-3m5.9 0l3 3-3-3z" />
    <path fill="#6cc" d="M136.7 42.8l3 3-3-3z" />
    <path fill="#c66" d="M142.7 42.8l2.9 3-3-3z" />
    <path fill="#6cc" d="M148.6 42.8l2.9 3-3-3z" />
    <path fill="#ccf" d="M136.7 45.8l3 3-3-3zm11.9 0l2.9 3-3-3z" />
    <path fill="#fcc" d="M139.7 48.7l3 3-3-3m5.9 0l3 3-3-3z" />
    <path fill="#6cc" d="M133.8 51.7l3 3-3-3z" />
    <path
      fill="#c00"
      stroke="#fff"
      stroke-width="3.7"
      d="M142.2 34l-20.7 78.5L42.8 134l78.4 20.5 21 78.4 20.9-78.4 78.4-21-78.4-20.9-21-78.4z"
    />
    <path fill="#6cc" d="M151.5 51.7l3 3-3-3z" />
    <path fill="#9cf" d="M133.8 54.6l3 3-3-3m17.7 0l3 3-3-3z" />
    <path fill="#fcc" d="M136.7 57.6l3 3-3-3m11.9 0l2.9 3-3-3z" />
    <path fill="#69c" d="M130.8 60.5l3 3-3-3z" />
    <path fill="#c33" d="M137.7 62.5l1 2-1-2m11.8 0l1 2-1-2z" />
    <path fill="#69c" d="M154.5 60.5l3 3-3-3z" />
    <path fill="#9cf" d="M130.8 63.5l3 3-3-3m23.7 0l3 3-3-3z" />
    <path fill="#fcc" d="M133.8 66.4l3 3-3-3m17.7 0l3 3-3-3z" />
    <path fill="#69c" d="M127.9 69.4l3 3-3-3zm29.5 0l3 3-3-3z" />
    <path fill="#9cc" d="M127.9 72.3l3 3-3-3m29.5 0l3 3-3-3z" />
    <path fill="#cff" d="M127.9 75.3l3 3-3-3m29.5 0l3 3-3-3z" />
    <path fill="#69c" d="M125 78.3l2.9 2.9-3-3z" />
    <path fill="#fcc" d="M130.8 78.3l3 2.9-3-3m23.7 0l3 3-3-3z" />
    <path fill="#69c" d="M160.4 78.3l3 2.9-3-3z" />
    <path fill="#9cc" d="M125 81.2l2.9 3-3-3z" />
    <path fill="#c33" d="M131.8 83.2l1 2-1-2m23.6 0l1 2-1-2z" />
    <path fill="#9cc" d="M160.4 81.2l3 3-3-3z" />
    <path fill="#cff" d="M125 84.2l2.9 3-3-3m35.5 0l3 3-3-3z" />
    <path fill="#fcc" d="M127.9 87.1l3 3-3-3m29.5 0l3 3-3-3z" />
    <path fill="#9cc" d="M122 90l3 3-3-3z" />
    <path fill="#c33" d="M128.9 92l1 2-1-2m29.5 0l1 2-1-2z" />
    <path fill="#9cc" d="M163.3 90l3 3-3-3z" />
    <path fill="#ccf" d="M122 93l3 3-3-3m41.3 0l3 3-3-3z" />
    <path fill="#fcc" d="M125 96l2.9 3-3-3m35.5 0l3 3-3-3z" />
    <path fill="#9cc" d="M119 99l3 2.9-3-3z" />
    <path fill="#c33" d="M126 100.9l.9 2-1-2m35.4 0l1 2-1-2z" />
    <path fill="#9cc" d="M166.3 99l3 2.9-3-3z" />
    <path fill="#ccf" d="M119 101.9l3 3-3-3m47.3 0l3 3-3-3z" />
    <path fill="#fcc" d="M122 104.8l3 3-3-3m41.3 0l3 3-3-3z" />
    <path fill="#9cc" d="M116 107.8l3 3-3-3z" />
    <path fill="#c33" d="M122 107.8l3 3-3-3m41.3 0l3 3-3-3z" />
    <path fill="#9cc" d="M169.2 107.8l3 3-3-3m-62 3l3 2.9-3-3z" />
    <path fill="#ccf" d="M110.2 110.7l3 3-3-3m65 0l2.9 3-3-3z" />
    <path fill="#9cc" d="M178 110.7l3 3-3-3m-79.6 3l3 3-3-3z" />
    <path fill="#ccf" d="M101.3 113.7l3 3-3-3z" />
    <path fill="#fcc" d="M113.1 113.7l3 3-3-3z" />
    <path fill="#c33" d="M116 113.7l3 3-3-3m53.2 0l3 3-3-3z" />
    <path fill="#fcc" d="M172.2 113.7l3 3-3-3z" />
    <path fill="#ccf" d="M184 113.7l3 3-3-3z" />
    <path fill="#9cc" d="M187 113.7l2.9 3-3-3z" />
    <path fill="#69c" d="M86.6 116.6l3 3-3-3z" />
    <path fill="#9cc" d="M89.5 116.6l3 3-3-3z" />
    <path fill="#cff" d="M92.5 116.6l3 3-3-3z" />
    <path fill="#fcc" d="M104.3 116.6l3 3-3-3z" />
    <path fill="#c33" d="M109.2 117.6l2 1-2-1m67.9 0l2 1-2-1z" />
    <path fill="#fcc" d="M181 116.6l3 3-3-3z" />
    <path fill="#cff" d="M192.8 116.6l3 3-3-3z" />
    <path fill="#9cc" d="M195.8 116.6l3 3-3-3z" />
    <path fill="#69c" d="M198.7 116.6l3 3-3-3m-121 3l3 3-3-3z" />
    <path fill="#9cc" d="M80.7 119.6l3 3-3-3z" />
    <path fill="#cff" d="M83.6 119.6l3 3-3-3z" />
    <path fill="#fcc" d="M95.4 119.6l3 3-3-3z" />
    <path fill="#c33" d="M100.3 120.6l2 1-2-1m85.6 0l2 1-2-1z" />
    <path fill="#fcc" d="M189.9 119.6l3 3-3-3z" />
    <path fill="#cff" d="M201.7 119.6l3 3-3-3z" />
    <path fill="#9cc" d="M204.6 119.6l3 3-3-3z" />
    <path fill="#69c" d="M207.6 119.6l3 3-3-3m-138.8 3l3 2.9-3-3z" />
    <path fill="#9cf" d="M71.8 122.5l3 3-3-3z" />
    <path fill="#fcc" d="M86.6 122.5l3 3-3-3z" />
    <path fill="#c33" d="M91.5 123.5l2 1-2-1m103.3 0l2 1-2-1z" />
    <path fill="#fcc" d="M198.7 122.5l3 3-3-3z" />
    <path fill="#9cf" d="M213.5 122.5l3 3-3-3z" />
    <path fill="#69c" d="M216.4 122.5l3 3-3-3z" />
    <path fill="#6cc" d="M60 125.5l3 3-3-3z" />
    <path fill="#9cf" d="M63 125.5l2.9 3-3-3z" />
    <path fill="#fcc" d="M74.8 125.5l2.9 3-3-3zm135.8 0l2.9 3-3-3z" />
    <path fill="#9cf" d="M222.3 125.5l3 3-3-3z" />
    <path fill="#6cc" d="M225.3 125.5l3 3-3-3m-174.2 3l3 2.9-3-3z" />
    <path fill="#ccf" d="M54 128.4l3 3-3-3z" />
    <path fill="#fcc" d="M65.9 128.4l3 3-3-3z" />
    <path fill="#c33" d="M70.8 129.4l2 1-2-1m144.7 0l2 1-2-1z" />
    <path fill="#fcc" d="M219.4 128.4l3 3-3-3z" />
    <path fill="#ccf" d="M231.2 128.4l3 3-3-3z" />
    <path fill="#6cc" d="M234.2 128.4l3 3-3-3z" />
    <path fill="#9cc" d="M42.3 131.4l3 3-3-3z" />
    <path fill="#ccf" d="M45.2 131.4l3 3-3-3z" />
    <path fill="#fcc" d="M57 131.4l3 3-3-3zm171.3 0l3 3-3-3z" />
    <path fill="#ccf" d="M240 131.4l3 3-3-3z" />
    <path fill="#9cc" d="M243 131.4l3 3-3-3m-206.6 3l3 2.9-3-3z" />
    <path fill="#c66" d="M51.1 134.3l3 3-3-3zm183 0l3 3-3-3z" />
    <path fill="#9cc" d="M249 134.3l2.9 3-3-3m-206.6 3l3 3-3-3z" />
    <path fill="#ccf" d="M45.2 137.3l3 3-3-3z" />
    <path fill="#fcc" d="M57 137.3l3 3-3-3m171.3 0l3 3-3-3z" />
    <path fill="#ccf" d="M240 137.3l3 3-3-3z" />
    <path fill="#9cc" d="M243 137.3l3 3-3-3z" />
    <path fill="#6cc" d="M51.1 140.3l3 2.9-3-3z" />
    <path fill="#ccf" d="M54 140.3l3 2.9-3-3z" />
    <path fill="#fcc" d="M65.9 140.3l3 2.9-3-3z" />
    <path fill="#c33" d="M70.8 141.2l2 1-2-1m144.7 0l2 1-2-1z" />
    <path fill="#fcc" d="M219.4 140.3l3 2.9-3-3z" />
    <path fill="#ccf" d="M231.2 140.3l3 2.9-3-3z" />
    <path fill="#6cc" d="M234.2 140.3l3 2.9-3-3m-174.2 3l3 3-3-3z" />
    <path fill="#9cf" d="M63 143.2l2.9 3-3-3z" />
    <path fill="#fcc" d="M74.8 143.2l2.9 3-3-3zm135.8 0l2.9 3-3-3z" />
    <path fill="#9cf" d="M222.3 143.2l3 3-3-3z" />
    <path fill="#6cc" d="M225.3 143.2l3 3-3-3z" />
    <path fill="#69c" d="M68.8 146.2l3 2.9-3-3z" />
    <path fill="#9cf" d="M71.8 146.2l3 2.9-3-3z" />
    <path fill="#fcc" d="M86.6 146.2l3 2.9-3-3z" />
    <path fill="#c33" d="M91.5 147.1l2 1-2-1m103.3 0l2 1-2-1z" />
    <path fill="#fcc" d="M198.7 146.2l3 2.9-3-3z" />
    <path fill="#9cf" d="M213.5 146.2l3 2.9-3-3z" />
    <path fill="#69c" d="M216.4 146.2l3 2.9-3-3m-138.7 3l3 3-3-3z" />
    <path fill="#9cc" d="M80.7 149.1l3 3-3-3z" />
    <path fill="#cff" d="M83.6 149.1l3 3-3-3z" />
    <path fill="#fcc" d="M95.4 149.1l3 3-3-3z" />
    <path fill="#c33" d="M100.3 150l2 1-2-1m85.6 0l2 1-2-1z" />
    <path fill="#fcc" d="M189.9 149.1l3 3-3-3z" />
    <path fill="#cff" d="M201.7 149.1l3 3-3-3z" />
    <path fill="#9cc" d="M204.6 149.1l3 3-3-3z" />
    <path fill="#69c" d="M207.6 149.1l3 3-3-3m-121 3l2.9 2.9-3-3z" />
    <path fill="#9cc" d="M89.5 152l3 3-3-3z" />
    <path fill="#cff" d="M92.5 152l3 3-3-3z" />
    <path fill="#fcc" d="M104.3 152l3 3-3-3z" />
    <path fill="#c33" d="M109.2 153l2 1-2-1m67.9 0l2 1-2-1z" />
    <path fill="#fcc" d="M181 152l3 3-3-3z" />
    <path fill="#cff" d="M192.8 152l3 3-3-3z" />
    <path fill="#9cc" d="M195.8 152l3 3-3-3z" />
    <path fill="#69c" d="M198.7 152l3 3-3-3z" />
    <path fill="#9cc" d="M98.4 155l3 3-3-3z" />
    <path fill="#ccf" d="M101.3 155l3 3-3-3z" />
    <path fill="#fcc" d="M113.1 155l3 3-3-3z" />
    <path fill="#c33" d="M116 155l3 3-3-3m53.2 0l3 3-3-3z" />
    <path fill="#fcc" d="M172.2 155l3 3-3-3z" />
    <path fill="#ccf" d="M184 155l3 3-3-3z" />
    <path fill="#9cc" d="M187 155l2.9 3-3-3m-79.7 3l3 3-3-3z" />
    <path fill="#ccf" d="M110.2 158l3 3-3-3m65 0l2.9 3-3-3z" />
    <path fill="#9cc" d="M178 158l3 3-3-3m-62 3l3 2.9-3-3z" />
    <path fill="#c33" d="M122 161l3 2.9-3-3m41.3 0l3 3-3-3z" />
    <path fill="#9cc" d="M169.2 161l3 2.9-3-3z" />
    <path fill="#fcc" d="M122 163.9l3 3-3-3m41.3 0l3 3-3-3z" />
    <path fill="#ccf" d="M119 166.8l3 3-3-3z" />
    <path fill="#c33" d="M126 168.8l.9 2-1-2m35.4 0l1 2-1-2z" />
    <path fill="#ccf" d="M166.3 166.8l3 3-3-3z" />
    <path fill="#9cc" d="M119 169.8l3 3-3-3m47.3 0l3 3-3-3z" />
    <path fill="#fcc" d="M125 172.7l2.9 3-3-3m35.5 0l3 3-3-3z" />
    <path fill="#ccf" d="M122 175.7l3 3-3-3z" />
    <path fill="#c33" d="M128.9 177.6l1 2-1-2m29.5 0l1 2-1-2z" />
    <path fill="#ccf" d="M163.3 175.7l3 3-3-3z" />
    <path fill="#9cc" d="M122 178.6l3 3-3-3m41.3 0l3 3-3-3z" />
    <path fill="#fcc" d="M127.9 181.6l3 3-3-3m29.5 0l3 3-3-3z" />
    <path fill="#cff" d="M125 184.5l2.9 3-3-3z" />
    <path fill="#c33" d="M131.8 186.5l1 2-1-2m23.6 0l1 2-1-2z" />
    <path fill="#cff" d="M160.4 184.5l3 3-3-3z" />
    <path fill="#9cc" d="M125 187.5l2.9 3-3-3m35.5 0l3 3-3-3z" />
    <path fill="#69c" d="M125 190.4l2.9 3-3-3z" />
    <path fill="#fcc" d="M130.8 190.4l3 3-3-3m23.7 0l3 3-3-3z" />
    <path fill="#69c" d="M160.4 190.4l3 3-3-3z" />
    <path fill="#cff" d="M127.9 193.4l3 3-3-3zm29.5 0l3 3-3-3z" />
    <path fill="#9cc" d="M127.9 196.3l3 3-3-3m29.5 0l3 3-3-3z" />
    <path fill="#69c" d="M127.9 199.3l3 3-3-3m29.5 0l3 3-3-3z" />
    <path fill="#fcc" d="M133.8 202.2l3 3-3-3m17.7 0l3 3-3-3z" />
    <path fill="#9cf" d="M130.8 205.2l3 3-3-3z" />
    <path fill="#c33" d="M137.7 207.2l1 2-1-2m11.8 0l1 2-1-2z" />
    <path fill="#9cf" d="M154.5 205.2l3 3-3-3z" />
    <path fill="#69c" d="M130.8 208.2l3 2.9-3-3m23.7 0l3 3-3-3z" />
    <path fill="#fcc" d="M136.7 211.1l3 3-3-3m11.9 0l2.9 3-3-3z" />
    <path fill="#9cf" d="M133.8 214l3 3-3-3zm17.7 0l3 3-3-3z" />
    <path fill="#6cc" d="M133.8 217l3 3-3-3m17.7 0l3 3-3-3z" />
    <path fill="#fcc" d="M139.7 220l3 3-3-3m5.9 0l3 3-3-3z" />
    <path fill="#ccf" d="M136.7 222.9l3 3-3-3m11.9 0l2.9 3-3-3z" />
    <path fill="#6cc" d="M136.7 225.9l3 3-3-3z" />
    <path fill="#c66" d="M142.7 225.9l2.9 3-3-3z" />
    <path fill="#6cc" d="M148.6 225.9l2.9 3-3-3z" />
    <path fill="#ccf" d="M139.7 231.8l3 3-3-3m5.9 0l3 3-3-3z" />
    <path fill="#9cc" d="M139.7 234.7l3 3-3-3m5.9 0l3 3-3-3m-3 6l3 2.9-3-3z" />
  </g>
</svg>

{/if}

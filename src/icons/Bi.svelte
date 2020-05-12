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
  id="flag-icon-css-bi"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill="gray" d="M60.8 337h175v175h-175z" />
    </clipPath>

    <mask id="BiSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BiSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#a{id})"
      transform="translate(-178 -986) scale(2.9257)"
    >
      <path
        fill="#00cf00"
        d="M0 337l146.6 87.5L0 512zm293.1 0l-146.5 87.5L293 512z"
      />
      <path
        fill="red"
        d="M0 337l146.6 87.5L293 337zm0 175l146.6-87.5L293 512z"
      />
      <path fill="#fff" d="M293.1 337h-27.3L0 495.7V512h27.3l265.8-158.7z" />
      <path
        fill="#fff"
        d="M197.2 424.5a50.6 50.6 0 11-101.2 0 50.6 50.6 0 01101.2 0z"
      />
      <path fill="#fff" d="M0 337v16.3L265.8 512h27.3v-16.3L27.3 337z" />
      <path
        fill="red"
        stroke="#00de00"
        stroke-width="1pt"
        d="M156.5 405.4l-6.6.1-3.4 5.6-3.4-5.6-6.5-.1 3.2-5.8-3.2-5.7 6.6-.2 3.4-5.6 3.4 5.7h6.5l-3.1 5.8zm-22 38.2h-6.6l-3.4 5.7-3.4-5.6-6.6-.2 3.2-5.7-3.1-5.8 6.5-.1 3.4-5.6 3.4 5.6 6.6.2-3.2 5.7zm44.6 0h-6.6l-3.4 5.7-3.4-5.6-6.5-.2 3.1-5.7-3.1-5.8 6.6-.1 3.4-5.6 3.4 5.6 6.5.2-3.2 5.7z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-bi"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="bi-a{id}">
      <path fill-opacity=".7" d="M-90.5 0H592v512H-90.5z" />
    </clipPath>

    <mask id="BiSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BiSvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#bi-a{id})"
      transform="translate(84.9) scale(.9375)"
    >
      <path
        fill="#00cf00"
        d="M-178 0l428.8 256L-178 512zm857.6 0L250.8 256l428.8 256z"
      />
      <path
        fill="red"
        d="M-178 0l428.8 256L679.6 0zm0 512l428.8-256 428.8 256z"
      />
      <path fill="#fff" d="M679.6 0h-79.9L-178 464.3V512h79.9L679.6 47.7z" />
      <path
        fill="#fff"
        d="M398.9 256a148 148 0 11-296.1 0 148 148 0 01296 0z"
      />
      <path fill="#fff" d="M-178 0v47.7L599.7 512h79.9v-47.7L-98.1 0z" />
      <path
        fill="red"
        stroke="#00de00"
        stroke-width="3.9"
        d="M280 200.2l-19.3.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm-64.6 111.6l-19.2.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm130.6 0l-19.2.3-10 16.4-10-16.4-19.1-.4 9.3-16.9-9.3-16.8 19.2-.4 10-16.4 10 16.5 19.2.4-9.4 16.8z"
      />
    </g>
  </g>
</svg>

{/if}

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
  id="flag-icon-css-gb"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="GbSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GbSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#012169" d="M0 0h512v512H0z" />
    <path
      fill="#FFF"
      d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
    />
    <path
      fill="#C8102E"
      d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
    />
    <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
    <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-gb"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="GbSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#GbSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path
      fill="#FFF"
      d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
    />
    <path
      fill="#C8102E"
      d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
    />
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
  </g>
</svg>

{/if}

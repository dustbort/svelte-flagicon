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
  id="flag-icon-css-by"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M0 0h496v496H0z" />
    </clipPath>

    <mask id="BySvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BySvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" clip-path="url(#a{id})" transform="scale(1.032)">
      <path fill="#b20000" d="M0 0h992.1v329.5H0z" />
      <path fill="#429f00" d="M0 329.5h992.1v166.6H0z" />
      <path fill="#fff" d="M0 0h109.8v496H0z" />
      <g fill="#b20000" stroke-width="1pt">
        <path
          d="M5.2 8.4h5.3v8.4H5.2zm15.7 0h15.7v8.4H21zM26.1 0h5.3v8.4H26zm26.2 0h5.2v8.4h-5.2zm21 8.4h15.6v8.4H73.2zM78.4 0h5.2v8.4h-5.2zM15.7 16.8h10.5v8.4H15.7zm15.7 0h10.5v8.4H31.4zm36.6 0h10.5v8.4H68zm15.7 0H94v8.4H83.8zm-73.2 8.4h10.4v8.4H10.5zm26.1 0h10.5v8.4H36.6zm26.2 0h10.4v8.4H62.8zm26.1 0h10.5v8.4H88.9zM99.4 8.4h5.2v8.4h-5.2zM5.2 33.6h10.5V42H5.2zm36.6 0h10.5V42H41.8zm52.4 0h10.4V42H94.2zM10.5 59h10.4v8.4H10.5zm5.2 8.4h10.5v8.4H15.7zm21-8.4H47v8.4H36.6zm-5.3 8.4h10.4v8.4H31.4zm-10.5 8.4h15.7V84H21zm5.2 8.2h5.3v8.5H26zm36.7-25.2h10.4v8.5H62.8zm5.2 8.5h10.5v8.4H68zm21-8.4h10.4v8.4H88.9zm-5.3 8.4H94v8.4H83.8zm-10.5 8.4H89V84H73.2zm5.3 8.3h5.2v8.5h-5.2zm-26.2-8.3h5.2V84h-5.2zM0 75.7h5.2V84H0zm104.6 0h5.2V84h-5.2zm-78.5 42h5.3v8.4H26zm-5.2 8.4h15.7v8.4H21zm-5.2 8.4h26.2v8.4H15.7zm62.8-16.8h5.2v8.4h-5.2z"
        />
        <path
          d="M73.2 126.1H89v8.4H73.2zm-5.2 8.4h26.1v8.4H68zm5.2 42h26.2v8.5H73.2zM62.8 143h36.6v8.4H62.8zm-52.3 0H47v8.4H10.5zm5.2 42h15.7v8.5H15.7zm-5.2-8.3h26.1v8.4H10.5zm73.2-16.9h26.1v8.5h-26zM78.5 185h15.7v8.4H78.5zm-57.6 8.4h5.3v8.4h-5.3zm62.8 0h5.2v8.4h-5.2zM0 159.7h26.2v8.5H0zm47 16.9h15.8v8.4H47zm5.3 8.4h5.2v8.4h-5.2zm-15.7-25.3h36.6v8.5H36.6zm21-126H68V42H57.5zM47 42h15.7v8.4H47zm-5.3 8.4h10.5v8.4H41.8zm15.7 0H68v8.4H57.5zM0 42h10.5v8.4H0zm5.2 8.4h10.5v8.4H5.2zM99.4 42h10.4v8.4H99.4zM94 50.4h10.5v8.4H94.2zM0 126.1h5.2v8.4H0zm104.6 0h5.2v8.4h-5.2zm-57.5 67.3h15.7v8.4H47zm-5.3 8.4h10.5v8.4H41.8zm15.7 0H68v8.4H57.5zm-20.9 8.4h10.5v8.4H36.6zm26.2 0h10.4v8.4H62.8zm-31.4 8.4h10.5v8.4H31.4zm36.6 0h10.5v8.4H68zM26.1 227h10.5v8.4H26.1zm47.1 0h10.5v8.4H73.2zm-57.5 8.4h15.7v8.4H15.7zm62.8 0h15.7v8.4H78.5zm10.4-8.4h10.5v8.4H88.9zm5.3-8.4h10.4v8.4H94.2zm5.2-8.4h10.4v8.4H99.4zm-89 16.8H21v8.4H10.5zm-5.2-8.4h10.5v8.4H5.2z"
        />
        <path
          d="M0 210.2h10.5v8.4H0zm21 33.6h5.2v8.4h-5.3zm62.7 0h5.2v8.4h-5.2zm-31.4-25.2h5.2v8.4h-5.2zm-15.7 25.2h5.2v8.4h-5.2zm31.4 0h5.2v8.4H68zm-15.7 0h5.2v8.4h-5.2zm-52.3 0h5.2v8.4H0zm104.6 0h5.2v8.4h-5.2zM52.3 126.1h5.2v8.4h-5.2zm-26.1-84h5.2v8.3h-5.2zm52.3 0h5.2v8.3h-5.2zM47 100.8h15.7v8.4H47zm-10.4 8.5h15.7v8.4H36.6z"
        />
        <path
          d="M41.8 117.7h5.3v8.4h-5.3zm-10.4-16.8h10.5v8.4H31.4zm5.2-8.4h15.7v8.4H36.6zm5.2-8.4h5.3v8.4h-5.3zm15.7 8.4h15.7v8.4H57.5zm5.3-8.4H68v8.4h-5.2zm5.2 16.8h10.5v8.4H68zm-10.5 8.4h15.7v8.4H57.5zm5.3 8.4H68v8.4h-5.2zm20.9-16.8h10.5v8.4H83.7zm5.2-8.4h15.7v8.4H89zm10.5 8.4h10.4v8.4H99.4z"
        />
        <path
          d="M89 109.3h15.6v8.4H89zm5.2 8.4h5.2v8.4h-5.2zm0-33.6h5.2v8.4h-5.2zM0 100.9h10.5v8.4H0zm5.2-8.4H21v8.4H5.2zm10.5 8.4h10.5v8.4H15.7z"
        />
        <path
          d="M5.2 109.3H21v8.4H5.2zm5.3 8.4h5.2v8.4h-5.2zm0-33.6h5.2v8.4h-5.2zm-5.3 67.2h21v8.4h-21zm26.2 0h21v8.4h-21zm26.1 0h21v8.4h-21zm26.2 0h21v8.4h-21zm-41.9 16.8H68v8.5H41.8zm-36.6 0h26.2v8.5H5.2zm73.3 0h26.1v8.5H78.5zm26.1 33.7h5.2v8.4h-5.2zM0 201.8h5.2v8.4H0zm5.2 285.9h5.3v-8.5H5.2zm15.7 0h15.7v-8.5H21zm5.2 8.3h5.3v-8.3H26zm26.2 0h5.2v-8.3h-5.2zm21-8.3h15.6v-8.4H73.2zm5.2 8.3h5.2v-8.3h-5.2zm-62.8-16.8h10.5v-8.4H15.7zm15.7 0h10.5v-8.4H31.4zm36.6 0h10.5v-8.4H68zm15.7 0H94v-8.4H83.8zm-47-8.4H47v-8.4H36.6zm26 0h10.5v-8.4H62.8zm26.2 0h10.5v-8.4H88.9zm10.5 16.9h5.2v-8.5h-5.2zM5.2 462.4h10.5V454H5.2zm36.6 0h10.5V454H41.8zm52.4 0h10.4V454H94.2zm-83.7-25.2h10.4v-8.4H10.5zm5.2-8.4h10.5v-8.4H15.7zm21 8.4H47v-8.4H36.6zm-5.3-8.4h10.4v-8.4H31.4zm-10.5-8.4h15.7V412H21zm5.2-8.4h5.3v-8.4H26zm36.7 25.2h10.4v-8.4H62.8zm5.2-8.4h10.5v-8.4H68zm21 8.4h10.4v-8.4H88.9zm-5.3-8.4H94v-8.4H83.8zm-10.5-8.4H89V412H73.2zm5.3-8.4h5.2v-8.4h-5.2zm-26.2 8.4h5.2V412h-5.2zm-52.3 0h5.2V412H0zm104.6 0h5.2V412h-5.2zm-78.4-42h5.2v-8.5h-5.2z"
        />
        <path
          d="M21 370h15.6v-8.5H21zm-5.3-8.5h26.2v-8.4H15.7zm62.8 16.8h5.2V370h-5.2zm-5.3-8.3H89v-8.5H73.2zm-5.2-8.5h26.1v-8.4H68zm5.2-42h26.2v-8.4H73.2zm-10.4 33.6h36.6v-8.4H62.8zm-52.3 0H47v-8.4H10.5zm5.2-42h15.7v-8.4H15.7zm-5.2 8.4h26.1v-8.4H10.5zm73.2 16.8h26.1V328h-26zm-5.2-25.2h15.7v-8.4H78.5zM0 336.3h26.2V328H0zm47-16.8h15.8v-8.4H47zm5.3-8.4h5.2v-8.4h-5.2zm-15.7 25.2h36.6V328H36.6zm21 126.1H68V454H57.5zM47 454h15.7v-8.4H47zm-5.3-8.4h10.5v-8.4H41.8zm15.7 0H68v-8.4H57.5zM0 454h10.5v-8.4H0zm5.2-8.4h10.5v-8.4H5.2zm94.2 8.4h10.4v-8.4H99.4zm-5.3-8.4h10.5v-8.4H94.2zM0 370h5.2v-8.4H0zm104.6 0h5.2v-8.4h-5.2zm-62.8-75.6h10.5V286H41.8zm15.7 0H68V286H57.5zM36.6 286h10.5v-8.4H36.6zm26.2 0h10.4v-8.4H62.8zm-31.4-8.5h10.4V269H31.4zm36.6 0h10.5V269H68zM26.1 269h10.5v-8.3H26.1zm47.1 0h10.5v-8.3H73.2zm-57.5-8.3h15.7v-8.5H15.7zm62.8 0h15.7v-8.5H78.5zm10.4 8.4h10.5v-8.5H88.9zm5.3 8.3h10.4v-8.3H94.2zm5.2 8.5h10.4v-8.4H99.4zm-89-16.8H21v-8.5H10.5zm-5.2 8.3h10.5v-8.3H5.2zM0 286h10.5v-8.4H0zm21-33.7h5.2v-8.4h-5.3zm31.3 25.3h5.2V269h-5.2zm0 92.5h5.2v-8.5h-5.2zm-26.1 84h5.2v-8.4h-5.2zm52.3 0h5.2v-8.4h-5.2zM47 395.2h15.7v-8.4H47zm-10.5-8.4h15.7v-8.4H36.6zm5.2-8.5H47V370h-5.3zm-10.4 16.9h10.4v-8.4H31.4zm5.3 8.4h15.7v-8.4H36.6zm5.2 8.4h5.3v-8.4h-5.3zm15.7-8.4h15.7v-8.4H57.5zm5.3 8.4H68v-8.4h-5.2zm5.2-16.8h10.5v-8.4H68zm-10.5-8.4h15.7v-8.4H57.5zm5.3-8.5H68V370h-5.2zm20.9 16.9H94v-8.4H83.8zm5.2 8.4h15.7v-8.4H89zm10.5-8.4h10.4v-8.4H99.4zm-10.5-8.4h15.7v-8.4H89zm5.3-8.5h5.2V370h-5.2zm0 33.7h5.2v-8.4h-5.2zM0 395.2h10.5v-8.4H0z"
        />
        <path
          d="M5.2 403.6H21v-8.4H5.2zm10.5-8.4h10.5v-8.4H15.7zm-10.5-8.4H21v-8.4H5.2zm5.3-8.5h5.2V370h-5.2zm0 33.7h5.2v-8.4h-5.2zm-5.3-67.3h21v-8.4h-21zm26.2 0h21v-8.4h-21zm26.1 0h21v-8.4h-21zm26.2 0h21v-8.4h-21zM41.8 328H68v-8.4H41.8zm-36.6 0h26.2v-8.4H5.2zm73.3 0h26.1v-8.4H78.5zm26.1-33.6h5.2V286h-5.2zM0 294.3h5.2v-8.4H0zm47-42h5.3v8.3h-5.2zm10.5 0h5.3v8.3h-5.3zm0-16.9h5.3v8.4h-5.3zm-10.4 0h5.2v8.4h-5.2zm-36.6 227h10.4v8.4H10.5zm73.2-159.7h5.2v-8.4h-5.2zm-62.8 0h5.2v-8.4H21zm26.2-8.4h15.7v8.4H47z"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-by"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="by-a{id}">
      <path fill-opacity=".7" d="M0 0h682.6v512H0z" />
    </clipPath>

    <mask id="BySvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#BySvelteFlagIconRound' + id + ')' : '' }">
    <g
      fill-rule="evenodd"
      clip-path="url(#by-a{id})"
      transform="scale(.9376 .9375)"
    >
      <path fill="#b20000" d="M0 0h1024v340.1H0z" />
      <path fill="#429f00" d="M0 340.1h1024V512H0z" />
      <path fill="#fff" d="M0 0h113.4v512H0z" />
      <g fill="#b20000" stroke-width="1pt">
        <path
          d="M5.4 8.7h5.4v8.7H5.4zm16.2 0h16.2v8.7H21.6zM27 0h5.4v8.7H27zm27 0h5.4v8.7H54zm21.6 8.7h16.2v8.7H75.6zM81 0h5.4v8.7H81zM16.2 17.4H27V26H16.2zm16.2 0h10.8V26H32.4zm37.8 0H81V26H70.2zm16.2 0h10.8V26H86.4zM10.8 26h10.8v8.7H10.8zm27 0h10.8v8.7H37.8zm27 0h10.8v8.7H64.8zm27 0h10.8v8.7H91.8zm10.8-17.3h5.4v8.7h-5.4zm-97.2 26h10.8v8.7H5.4zm37.8 0H54v8.7H43.2zm54 0H108v8.7H97.2zm-86.4 26h10.8v8.7H10.8zm5.4 8.7H27v8.7H16.2zm21.6-8.6h10.8v8.6H37.8zm-5.4 8.6h10.8v8.7H32.4zm-10.8 8.7h16.2v8.7H21.6z"
        />
        <path
          d="M27 86.8h5.4v8.7H27zm37.8-26h10.8v8.6H64.8zm5.4 8.6H81v8.7H70.2zm21.6-8.6h10.8v8.6H91.8zm-5.4 8.6h10.8v8.7H86.4zm-10.8 8.7h16.2v8.7H75.6zm5.4 8.7h5.4v8.7H81zM54 78h5.4v8.7H54zM0 78h5.4v8.7H0zm108 0h5.4v8.7H108zm-81 43.4h5.4v8.7H27zm-5.4 8.8h16.2v8.6H21.6zm-5.4 8.6h27v8.7h-27zM81 121.5h5.4v8.7H81zm-5.4 8.7h16.2v8.6H75.6zm-5.4 8.6h27v8.7h-27zm5.4 43.4h27v8.7h-27zm-10.8-34.7h37.8v8.7H64.8zm-54 0h37.8v8.7H10.8zm5.4 43.4h16.2v8.7H16.2zm-5.4-8.7h27v8.7h-27zM86.4 165h27v8.7h-27zM81 191h16.2v8.7H81z"
        />
        <path
          d="M21.6 199.6H27v8.7h-5.4zm64.8 0h5.4v8.7h-5.4zM0 164.9h27v8.7H0zm48.6 17.3h16.2v8.7H48.6zM54 191h5.4v8.7H54zm-16.2-26h37.8v8.7H37.8zM59.4 34.7h10.8v8.7H59.4zm-10.8 8.7h16.2v8.7H48.6zm-5.4 8.7H54v8.6H43.2zm16.2 0h10.8v8.6H59.4zM0 43.4h10.8v8.7H0zm5.4 8.7h10.8v8.6H5.4zm97.2-8.7h10.8V52h-10.8zM97.2 52H108v8.6H97.2zM0 130h5.4v8.7H0zm108 0h5.4v8.7H108zm-59.4 69.5h16.2v8.7H48.6zm-5.4 8.7H54v8.6H43.2zm16.2 0h10.8v8.6H59.4zm-21.6 8.6h10.8v8.7H37.8zm27 0h10.8v8.7H64.8zm-32.4 8.7h10.8v8.7H32.4zm37.8 0H81v8.7H70.2zM27 234.3h10.8v8.7H27zm48.6 0h10.8v8.7H75.6zM16.2 243h16.2v8.7H16.2zm64.8 0h16.2v8.7H81zm10.8-8.7h10.8v8.7H91.8zm5.4-8.7H108v8.7H97.2zm5.4-8.7h10.8v8.7h-10.8zm-91.8 17.4h10.8v8.7H10.8zm-5.4-8.7h10.8v8.7H5.4zM0 217h10.8v8.7H0zm21.6 34.8H27v8.6h-5.4zm64.8 0h5.4v8.6h-5.4zm-32.4-26h5.4v8.6H54zm-16.2 26h5.4v8.6h-5.4zm32.4 0h5.4v8.6h-5.4zm-16.2 0h5.4v8.6H54zm-54 0h5.4v8.6H0zm108 0h5.4v8.6H108zM54 130.2h5.4v8.6H54zM27 43.4h5.4v8.7H27zm54 0h5.4v8.7H81zm-32.4 60.7h16.2v8.7H48.6zm-10.8 8.7H54v8.7H37.8zm5.4 8.7h5.4v8.7h-5.4zm-10.8-17.4h10.8v8.7H32.4zm5.4-8.6H54v8.6H37.8zm5.4-8.7h5.4v8.7h-5.4zm16.2 8.7h16.2v8.6H59.4zm5.4-8.7h5.4v8.7h-5.4zm5.4 17.3H81v8.7H70.2zm-10.8 8.7h16.2v8.7H59.4zm5.4 8.7h5.4v8.7h-5.4zm21.6-17.4h10.8v8.7H86.4zm5.4-8.6H108v8.6H91.8zm10.8 8.6h10.8v8.7h-10.8zm-10.8 8.7H108v8.7H91.8zm5.4 8.7h5.4v8.7h-5.4zm0-34.7h5.4v8.7h-5.4zM0 104h10.8v8.7H0zm5.4-8.6h16.2v8.6H5.4zm10.8 8.6H27v8.7H16.2zm-10.8 8.7h16.2v8.7H5.4z"
        />
        <path
          d="M10.8 121.5h5.4v8.7h-5.4zm0-34.7h5.4v8.7h-5.4zm-5.4 69.4H27v8.7H5.4zm27 0H54v8.7H32.4zm27 0H81v8.7H59.4zm27 0H108v8.7H86.4zm-43.2 17.4h27v8.6h-27zm-37.8 0h27v8.6h-27zm75.6 0h27v8.6H81zm27 34.7h5.4v8.6H108zm-108 0h5.4v8.6H0zm5.4 295h5.4v-8.6H5.4zm16.2 0h16.2v-8.6H21.6zM27 512h5.4v-8.7H27zm27 0h5.4v-8.7H54zm21.6-8.7h16.2v-8.7H75.6zM81 512h5.4v-8.7H81zm-64.8-17.4H27V486H16.2zm16.2 0h10.8V486H32.4zm37.8 0H81V486H70.2zm16.2 0h10.8V486H86.4zM37.8 486h10.8v-8.7H37.8zm27 0h10.8v-8.7H64.8zm27 0h10.8v-8.7H91.8zm10.8 17.3h5.4v-8.7h-5.4zm-97.2-26h10.8v-8.7H5.4zm37.8 0H54v-8.7H43.2zm54 0H108v-8.7H97.2zm-86.4-26h10.8v-8.7H10.8zm5.4-8.7H27v-8.7H16.2zm21.6 8.7h10.8v-8.7H37.8zm-5.4-8.7h10.8v-8.7H32.4zm-10.8-8.7h16.2v-8.7H21.6zm5.4-8.7h5.4v-8.6H27zm37.8 26h10.8v-8.6H64.8zm5.4-8.6H81v-8.7H70.2zm21.6 8.7h10.8v-8.7H91.8zm-5.4-8.7h10.8v-8.7H86.4zm-10.8-8.7h16.2v-8.7H75.6zm5.4-8.7h5.4v-8.6H81zM54 434h5.4v-8.7H54zm-54 0h5.4v-8.7H0zm108 0h5.4v-8.7H108zm-81-43.4h5.4v-8.7H27zm-5.4-8.8h16.2v-8.6H21.6zm-5.4-8.6h27v-8.7h-27zM81 390.5h5.4v-8.7H81z"
        />
        <path
          d="M75.6 381.8h16.2v-8.6H75.6zm-5.4-8.6h27v-8.7h-27zm5.4-43.4h27V321h-27zm-10.8 34.7h37.8v-8.7H64.8zm-54 0h37.8v-8.7H10.8zm5.4-43.4h16.2v-8.7H16.2zm-5.4 8.7h27V321h-27zM86.4 347h27v-8.7h-27zM81 321h16.2v-8.7H81zM0 347h27v-8.7H0zm48.6-17.3h16.2V321H48.6zM54 321h5.4v-8.7H54zm-16.2 26h37.8v-8.7H37.8zm21.6 130.2h10.8v-8.7H59.4zm-10.8-8.7h16.2V460H48.6zm-5.4-8.7H54v-8.7H43.2zm16.2 0h10.8v-8.7H59.4zM0 468.6h10.8V460H0zm5.4-8.7h10.8v-8.6H5.4zm97.2 8.7h10.8V460h-10.8zm-5.4-8.7H108v-8.6H97.2zM0 382h5.4v-8.7H0zm108 0h5.4v-8.7H108zm-64.8-78.2H54v-8.6H43.2zm16.2 0h10.8v-8.6H59.4zm-21.6-8.6h10.8v-8.7H37.8zm27 0h10.8v-8.7H64.8zm-32.4-8.7h10.8v-8.7H32.4zm37.8 0H81v-8.7H70.2zM27 277.7h10.8V269H27zm48.6 0h10.8V269H75.6zM16.2 269h16.2v-8.7H16.2zm64.8 0h16.2v-8.7H81zm10.8 8.7h10.8V269H91.8zm5.4 8.7H108v-8.7H97.2zm5.4 8.7h10.8v-8.7h-10.8zm-91.8-17.4h10.8V269H10.8zm-5.4 8.7h10.8v-8.7H5.4zM0 295h10.8v-8.7H0zm21.6-34.8H27v-8.6h-5.4zm32.4 26h5.4v-8.6H54zm0 95.5h5.4v-8.6H54zm-27 86.8h5.4V460H27zm54 0h5.4V460H81zM48.6 408h16.2v-8.7H48.6zm-10.8-8.7H54v-8.7H37.8zm5.4-8.7h5.4v-8.7h-5.4zM32.4 408h10.8v-8.7H32.4zm5.4 8.5H54V408H37.8zm5.4 8.7h5.4v-8.6h-5.4zm16.2-8.7h16.2V408H59.4zm5.4 8.7h5.4v-8.6h-5.4zm5.4-17.3H81v-8.7H70.2zm-10.8-8.7h16.2v-8.7H59.4zm5.4-8.7h5.4v-8.7h-5.4zM86.4 408h10.8v-8.7H86.4zm5.4 8.5H108V408H91.8zm10.8-8.6h10.8v-8.7h-10.8zm-10.8-8.7H108v-8.7H91.8zm5.4-8.7h5.4v-8.7h-5.4zm0 34.7h5.4v-8.6h-5.4zM0 408h10.8v-8.7H0zm5.4 8.5h16.2V408H5.4z"
        />
        <path
          d="M16.2 407.9H27v-8.7H16.2zm-10.8-8.7h16.2v-8.7H5.4zm5.4-8.7h5.4v-8.7h-5.4zm0 34.7h5.4v-8.6h-5.4zm-5.4-69.4H27v-8.7H5.4zm27 0H54v-8.7H32.4zm27 0H81v-8.7H59.4zm27 0H108v-8.7H86.4zm-43.2-17.4h27v-8.6h-27zm-37.8 0h27v-8.6h-27zm75.6 0h27v-8.6H81zm27-34.6h5.4V295H108zm-108 0h5.4V295H0zm48.6-43.5H54v8.7h-5.4zm10.8 0h5.4v8.7h-5.4zm0-17.3h5.4v8.7h-5.4zm-10.8 0H54v8.7h-5.4zM10.8 477.3h10.8v8.7H10.8zm75.6-164.9h5.4v-8.7h-5.4zm-64.8 0H27v-8.7h-5.4zm27-8.7h16.2v8.7H48.6z"
        />
      </g>
    </g>
  </g>
</svg>

{/if}

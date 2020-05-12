module.exports.kebabToPascal = (text) => {
  return text
    .replace(/^\w/, p => p.toUpperCase())
    .replace(/-\w/g, p => p[1].toUpperCase());
};

function fixSvg(name, code) {
  let defs = "";
  {
    const defs1 = code.split("<defs>");
    if (defs1.length > 1) {
      const defs2 = defs1[1].split("</defs>");
      defs = defs2[0];
      code = `
        ${defs1[0]}
        ${defs2[1]}
      `;
    }
    defs = `
      ${defs}
      <mask id="${name}SvelteFlagIconRound">
        <rect width="100%" height="100%" fill="black" />
        <circle r="50%" cx="50%" cy="50%" fill="white" />
      </mask>
    `;
  }

  let defIds = [];
  defs = defs.replace(/\Wid="[^"]+"/g, p => {
    const defId = p.substr(5, p.length - 6);
    defIds.push(defId);
    return `${p[0]}id="${defId}{id}"`;
  });

  for (const defId of defIds) {
    code = code.replace(`url(#${defId})`, `url(#${defId}{id})`);
  }

  code = code
    .replace(/<svg [^>]*>/, p => `
      ${p.substr(0, p.length - 1)} width="{size}">
      <defs>
        ${defs}
      </defs>
      <g mask="{ round ? 'url(#${name}SvelteFlagIconRound' + id + ')' : '' }">
    `)
    .replace("</svg>", "</g></svg>");
  ;

  return code;
}

module.exports.getSvelte = (name, svg1x1, svg4x3) => {
  return `
    <script>
      import { v4 as uuidv4 } from 'uuid';
      export let id = uuidv4();
      export let size = 32;
      export let round = false;
      export let square = false;
    </script>

    {#if square}
    ${fixSvg(name, svg1x1)}
    {:else}
    ${fixSvg(name, svg4x3)}
    {/if}
  `
};
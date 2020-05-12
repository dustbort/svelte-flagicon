# Svelte FlagIcon Components

SVG icons designed by [lipis](https://github.com/lipis/flag-icon-css).

# Installation

```
npm install svelte-flagicon
```

# Usage

```
<script>
  import { Us } from "svelte-flagicon";
</script>
<div>
  <Us />
</div>
```

You can import all the icons at once:

```
<script> 
  import * as Flags from "svelte-flagicon";
</script>
<div>
  <Flags.Us />
</div>
```

or include component from source folder:

```
<script>
  import Us from "svelte-flagicon/src/icons/Us.svelte
</script>
```

Icons can be configured with props:

```
<Us round square size="16" />
```

Props:

| Name | Type | Default | Purpose |
|------|------|---------|---------|
| round | boolean | false | Applies a mask to the flag to create a circular icon. |
| size | number | 32 | Sets the width of the icon in pixels. |
| square | boolean | false | Changes the aspect ratio from 4x3 to 1x1. |

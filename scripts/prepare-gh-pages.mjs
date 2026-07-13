import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");

writeFileSync(
  join(outDir, "index.html"),
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=./en/" />
    <link rel="canonical" href="./en/" />
    <title>human.md</title>
    <script>location.replace("./en/");</script>
  </head>
  <body></body>
</html>
`,
);

writeFileSync(join(outDir, ".nojekyll"), "");

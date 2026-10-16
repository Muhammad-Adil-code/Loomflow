# Notice

Loomflow is a modified fork of [Flowise](https://github.com/FlowiseAI/Flowise), Copyright (c) 2023-present FlowiseAI, Inc., licensed under the Apache License, Version 2.0. A copy of the licence is in [LICENSE.md](LICENSE.md).

This is an independent project. It is not affiliated with or endorsed by FlowiseAI, Inc. The Flowise name and marks are not used as the name of this product.

## Statement of changes

Per section 4(b) of the Apache License 2.0, the following files and areas were modified from the upstream snapshot:

-   Branding: user-visible product name changed from "Flowise" to "Loomflow" in UI strings, page titles, `index.html`, the web manifest, README and Docker image labels. The upstream announcement banner was removed.
-   Logo and assets: new logo, favicons and social preview image; upstream logo and screenshot images removed.
-   Theme: new light and dark colour palette in `packages/ui/src/themes` and `packages/ui/src/assets/scss`.
-   Canvas: restyled node cards, category-coloured node headers (`packages/ui/src/utils/nodeCategoryColors.js`), smooth-step edges and a dotted grid.
-   Navigation: left menu renamed and regrouped, and the default landing route changed to Agents.
-   README rewritten, with this notice added.

Not changed: npm package names, the `flowise` CLI, `FLOWISE_*` environment variables, database identifiers and API routes. All upstream copyright, patent, trademark and attribution notices in source files are retained.

## Commercially licensed files

As described in [LICENSE.md](LICENSE.md), everything under `packages/server/src/enterprise` and files carrying an explicit FlowiseAI copyright notice (for example `packages/server/src/IdentityManager.ts`) are under a separate commercial licence. They are unmodified in this fork and are not relicensed here.

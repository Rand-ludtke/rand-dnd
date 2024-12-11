import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { FilePath, FullSlug } from "../../util/path"
import { sharedPageComponents } from "../../../quartz.layout"
import { defaultProcessedContent } from "../vfile"
import { write } from "./helpers"
import { i18n } from "../../i18n"
import DepGraph from "../../depgraph"

const NotFound = () => {
  return `
    <div style="text-align: center; font-family: monospace;">
      <pre>
         _______________
        |               |
        |   404 Error   |
        |_______________|
            \\\|||///
            ( O   O )
         --ooo--( )--ooo---
       Oh no! You seem lost.
       Let's find a better path!
      </pre>
      <p><a href="/">Return to safety</a></p>
    </div>
  `;
};

export const NotFoundPage: QuartzEmitterPlugin = () => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    pageBody: NotFound(),
    beforeBody: [],
    left: [],
    right: [],
  };

  const { head: Head, pageBody, footer: Footer } = opts;
  const Body = BodyConstructor();

  return {
    name: "404Page",
    getQuartzComponents() {
      return [Head, Body, pageBody, Footer];
    },
    async getDependencyGraph(_ctx, _content, _resources) {
      return new DepGraph<FilePath>();
    },
    async emit(ctx, _content, resources): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration;
      const slug = "404" as FullSlug;

      const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
      const path = url.pathname as FullSlug;
      const externalResources = pageResources(path, resources);
      const notFound = i18n(cfg.locale).pages.error.title;
      const [tree, vfile] = defaultProcessedContent({
        slug,
        text: notFound,
        description: notFound,
        frontmatter: { title: notFound, tags: [] },
      });
      const componentData: QuartzComponentProps = {
        ctx,
        fileData: vfile.data,
        externalResources,
        cfg,
        children: [],
        tree,
        allFiles: [],
      };

      return [
        await write({
          ctx,
          content: renderPage(cfg, slug, componentData, opts, externalResources),
          slug,
          ext: ".html",
        }),
      ];
    },
  };
};

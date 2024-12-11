import { i18n } from "../../i18n";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types";

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
  const baseDir = url.pathname;

  return (
    <article class="popover-hint" style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <div>
        <br />&nbsp;&nbsp;&nbsp;&nbsp;___________<br />
        &nbsp;&nbsp;/&nbsp;Hey&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br />
        &nbsp;|&nbsp;Lost?&nbsp;\\<br />
        &nbsp;|___________\\<br />
        &nbsp;&nbsp;\____________\\<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😶<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/| |\<br />
      </div>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  );
};

export default (() => NotFound) satisfies QuartzComponentConstructor;

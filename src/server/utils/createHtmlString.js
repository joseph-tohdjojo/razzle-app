import React from "react";
import { renderToString } from "react-dom/server";
import PropTypes from "prop-types";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

Html.propTypes = {
  children: PropTypes.element
};

function Html({ bundle, children }) {
  return (
    <html lang="">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {assets.client && assets.client.css && (
          <link rel="stylesheet" href={assets.client.css} />
        )}

        {process.env.NODE_ENV === "production" ? (
          <script src={bundle} defer></script>
        ) : (
          <script src={bundle} defer crossOrigin></script>
        )}
      </head>
      <body>
        <div id="react-mount-point">{children}</div>
      </body>
    </html>
  );
}

export default function createHtmlString(Layout, name) {
  return `<!DOCTYPE html>${renderToString(
    <Html bundle={assets[name].js}>
      <Layout />
    </Html>
  )}`;
}

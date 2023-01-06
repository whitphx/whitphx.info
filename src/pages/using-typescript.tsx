// If you don't want to use TypeScript you can delete this file!
import * as React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const UsingTypescript: React.FC<PageProps<Queries.UsingTypescriptQuery>> = ({
  data,
  path,
  location,
}) => (
  <Layout title="Using TypeScript" location={location}>
    <Seo title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don&apos;t support TypeScript yet.
    </p>
    <p>
      For type checking you&apos;ll want to install <em>typescript</em> via npm
      and run <em>tsc --init</em> to create a <em>tsconfig</em> file.
    </p>
    <p>
      You&apos;re currently on the page &quot;{path}&quot; which was built on{" "}
      {data.site?.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default UsingTypescript;

export const query = graphql`
  query UsingTypescript {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

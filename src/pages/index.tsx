import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <main>First commit with a brand new Gatsby project!</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

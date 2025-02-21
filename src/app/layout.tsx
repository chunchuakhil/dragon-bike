// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import ReduxProvider from "@/store/provider";
import RootHoc from "@/hoc/RootHoc";

export const metadata = {
  title: "Dragon Bike",
  description: "For Rent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ReduxProvider>
          <RootHoc>{children}</RootHoc>
        </ReduxProvider>
      </body>
    </html>
  );
}

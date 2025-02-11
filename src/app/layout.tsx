// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import CollapseDesktopAppShell from "@/components/CollapseDesktopAppShell";

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
        <MantineProvider theme={{ primaryColor: "teal" }}>
          <CollapseDesktopAppShell>{children}</CollapseDesktopAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

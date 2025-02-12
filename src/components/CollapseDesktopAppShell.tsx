"use client";

import { ReactNode } from "react";
import { AppShell, Burger, Group, Skeleton, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "@/store/store";

interface CollapseDesktopAppShellProps {
  children: ReactNode;
}

const CollapseDesktopAppShell: React.FC<CollapseDesktopAppShellProps> = ({
  children,
}) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const isLogin = useAppSelector((state) => state.authReducer.value.isAuth);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          {/* <MantineLogo size={30} /> */}
          <Title order={2}>Dragon Bike</Title>
          <div>{isLogin ? "LoggedIN" : "Not loggedIN"}</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        Navbar
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default CollapseDesktopAppShell;

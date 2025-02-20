"use client";

import { ReactNode } from "react";
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Flex,
  Group,
  Skeleton,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { appRouter } from "@/routes/routes";

interface CollapseDesktopAppShellProps {
  children: ReactNode;
}

const CollapseDesktopAppShell: React.FC<CollapseDesktopAppShellProps> = ({
  children,
}) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { userImage, isAuth, userName } = useAppSelector(
    (state) => state.authReducer.value
  );
  const pathname = usePathname();
  const router = useRouter();

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
        <Group h="100%" px="md" justify="space-between">
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

          <Flex>
            <Flex
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
              gap={"sm"}
            >
              <Flex visibleFrom="xs" justify="center" gap={"sm"}>
                <div>Welcome</div>
                {isAuth && <div>{userName?.split(" ")[0]}</div>}
              </Flex>
              {isAuth && <Avatar src={userImage} alt={userName ?? "image"} />}
            </Flex>
            {!isAuth && !pathname.includes(appRouter.gotoLoginPage) && (
              <Button onClick={() => router.push(appRouter.gotoLandingPage)}>
                LogIn
              </Button>
            )}
          </Flex>
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

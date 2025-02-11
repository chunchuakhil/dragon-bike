import { appRouter } from "@/routes/routes";
import { Card, Image, Text, Group, Badge, Button, Flex } from "@mantine/core";
import Link from "next/link";

interface ResponsiveCardProps {
  imageSrc?: string;
  title: string;
  description?: string;
  badgeText?: string;
}

const BikeItemCard: React.FC<ResponsiveCardProps> = ({
  imageSrc,
  title,
  description,
  badgeText,
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group gap="md" wrap="nowrap" align="start">
        {/* Image Section */}
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={100}
          radius="md"
          fit="cover"
        />

        {/* Text Section */}

        <div style={{ flex: 1 }}>
          <Group justify="space-between">
            <Text fw={500} size="lg">
              {title}
            </Text>
            {badgeText && <Badge color="blue">{badgeText}</Badge>}
          </Group>
          <Text size="sm" c="dimmed" mt="xs">
            {description}
          </Text>
          <Flex justify="flex-end" align="flex-end" direction="row" wrap="wrap">
            <Link href={appRouter.gotoBikeDetailsPage}>
              <Button mt="md">Book Now</Button>
            </Link>
          </Flex>
        </div>
      </Group>
    </Card>
  );
};

export default BikeItemCard;

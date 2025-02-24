"use client";
import { DatePickerInput } from "@mantine/dates";
import React from "react";
import { IconCalendar } from "@tabler/icons-react";
import { Container, Flex, Select, Button, Text, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FaRupeeSign } from "react-icons/fa";
import dayjs from "dayjs";

const ShowPriceForm = () => {
  const icon = <IconCalendar size={18} stroke={1.5} />;
  const InputFixedWidth = 200;

  const today = new Date();
  const tomorrow = dayjs(today).add(1, "day").toDate();
  const dayAfterTomorrow = dayjs(today).add(2, "day").toDate();

  // Generate time options between 6 AM - 10 PM
  const generateTimeOptions = (period: "AM" | "PM") => {
    const times = [];
    for (let i = 6; i <= 10; i++) {
      times.push(`${i} ${period}`);
    }
    return times;
  };

  const timeOptions = [
    ...generateTimeOptions("AM"),
    ...generateTimeOptions("PM"),
  ];

  const form = useForm({
    initialValues: {
      startDate: null as Date | null,
      endDate: null as Date | null,
      startTime: null as string | null,
      endTime: null as string | null,
    },
    validate: {
      startDate: (value) => (!value ? "Pick-up date is required" : null),
      endDate: (value, values) =>
        !value
          ? "Drop-off date is required"
          : values.startDate &&
            dayjs(value).isBefore(dayjs(values.startDate).add(1, "day"))
          ? "Drop-off date must be at least 1 day after pick-up"
          : null,
      startTime: (value) => (!value ? "Pick-up time is required" : null),
      endTime: (value) => (!value ? "Drop-off time is required" : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const { startDate, endDate, startTime, endTime } = values;
    if (!startDate || !endDate || !startTime || !endTime) return;

    // Create Date objects with selected times
    const pickUpDateTime = new Date(startDate);
    pickUpDateTime.setHours(
      parseInt(startTime.split(" ")[0]) + (startTime.includes("PM") ? 12 : 0),
      0,
      0,
      0
    );

    const dropOffDateTime = new Date(endDate);
    dropOffDateTime.setHours(
      parseInt(endTime.split(" ")[0]) + (endTime.includes("PM") ? 12 : 0),
      0,
      0,
      0
    );

    // Ensure drop-off is at least 1 hour after pick-up
    const timeDifference =
      (dropOffDateTime.getTime() - pickUpDateTime.getTime()) / (1000 * 60 * 60);
    if (timeDifference < 1) {
      form.setErrors({
        endTime: "Drop-off time must be at least 1 hour after pick-up",
      });
      return;
    }

    console.log("Final Date Objects:", { pickUpDateTime, dropOffDateTime });
  };

  return (
    <Container m={"sm"} size={"xl"}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex gap={"sm"} direction={"column"}>
          <Flex gap={"sm"} wrap={"wrap"}>
            <DatePickerInput
              leftSection={icon}
              leftSectionPointerEvents="none"
              label="Pick-up Date"
              placeholder="Date"
              {...form.getInputProps("startDate")}
              w={InputFixedWidth}
              minDate={today}
              maxDate={tomorrow}
            />
            <Select
              label="Pick-up Time"
              placeholder="Select time"
              data={timeOptions}
              {...form.getInputProps("startTime")}
              w={InputFixedWidth}
            />
          </Flex>
          <Flex gap={"sm"} wrap={"wrap"}>
            <DatePickerInput
              leftSection={icon}
              leftSectionPointerEvents="none"
              label="Drop-off Date"
              placeholder="Date"
              {...form.getInputProps("endDate")}
              w={InputFixedWidth}
              minDate={tomorrow}
              maxDate={dayAfterTomorrow}
            />
            <Select
              label="Drop-off Time"
              placeholder="Select time"
              data={timeOptions}
              {...form.getInputProps("endTime")}
              w={InputFixedWidth}
            />
          </Flex>
          <Group>
            <FaRupeeSign />
            <Text fw={700} size="lg" c="green">
              800
            </Text>
          </Group>

          <Button type="submit" mt="md">
            Pay Now
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default ShowPriceForm;

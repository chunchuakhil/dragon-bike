import React from "react";
import { Interface } from "readline";
import { Card, Image, Text, Group, Badge, Button, Flex } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { Box } from "@mantine/core";
import dayjs from "dayjs";
import { difference } from "next/dist/build/utils";
interface BookBikeCard {
  imageSrc?: string;
  title: string;
  badgeTitle: string;
  description?: string;
  pickupDate?: Date | null;
  returnDate?: Date | null;
  onPickupDateChange?: (date: Date | null) => void;
  onReturnDateChange?: (date: Date | null) => void;
}

const BookBike: React.FC<BookBikeCard> = ({
  imageSrc,
  title,
  badgeTitle,
  description,
  pickupDate,
  returnDate,
  onPickupDateChange,
  onReturnDateChange,
}) => {
  const getTimeDifference = (
    pickupDate: Date | null | undefined,
    returnDate: Date | null | undefined
  ): number | null => {
    if (!pickupDate || !returnDate) return null; // Return null if dates are not selected

    const diffInMs = returnDate.getTime() - pickupDate.getTime(); // Get difference in milliseconds
    const diffInHours = diffInMs / (1000 * 60 * 60); // Convert to hours

    return diffInHours > 0 ? diffInHours : 0; // Return number
  };

  const calculateTotalPrice = (
    pickupDate: Date | null | undefined,
    returnDate: Date | null | undefined,
    rate: number
  ): number | null => {
    const difference = getTimeDifference(pickupDate, returnDate);
    if (difference === null) return null;

    return difference * rate;
  };

  const calculateAdvancePrice = (
    pickupDate: Date | null | undefined,
    returnDate: Date | null | undefined,
    rate: number
  ): number | null => {
    const difference = getTimeDifference(pickupDate, returnDate);
    if (difference === null) return null;

    return difference * rate;
  };

  const pricePerHour = 41.6666;
  const advancePricePerHour = 20.8333;
  const totalPrice = calculateTotalPrice(pickupDate, returnDate, pricePerHour);
  const totalAdvance = calculateAdvancePrice(
    pickupDate,
    returnDate,
    advancePricePerHour
  );


  return (
    <Group>
      <Flex gap="md" direction="column">
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={100}
          radius="md"
          fit="cover"
        />
        {badgeTitle && <Badge color="green">{badgeTitle}</Badge>}
        <DateTimePicker
          dropdownType="modal"
          size="sm"
          value={pickupDate}
          onChange={onPickupDateChange}
          label="Pickup Date & Time"
          placeholder="select date and time"
          minDate={new Date()} // Prevent selecting past dates
          clearable
        />
        <DateTimePicker
          dropdownType="modal"
          size="sm"
          value={returnDate}
          onChange={onReturnDateChange}
          label="Return Date & Time"
          placeholder="select date and time"
          minDate={new Date()} // Prevent selecting past dates
          clearable
        />

        <Text>
          Total Price:{" "}
          {totalPrice !== null
            ? `${totalPrice.toFixed(2)}/- Rupees`
            : "Select both dates"}
        </Text>
        <Text>
          Advance Price:{" "}
          {totalAdvance !== null
            ? `${totalAdvance.toFixed(2)}/- Rupees`
            : "Select both dates"}
        </Text>
        <Text>
          Enter Driving License : <input type="text" />
        </Text>
        <Text>
          Aadhar Number : <input type="text" />
        </Text>
      </Flex>
    </Group>
  );
};

export default BookBike;

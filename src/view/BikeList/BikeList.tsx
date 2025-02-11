import React from "react";
import { fakeBikeData } from "../../../fakedata/fakeData";
import BikeItemCard from "@/components/BikeItemCard/BikeItemCard";
import { Flex } from "@mantine/core";

const BikeList = () => {
  return (
    <>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
      >
        {fakeBikeData.map((bike) => {
          return (
            <BikeItemCard
              key={bike._id}
              title={bike.name}
              imageSrc={bike?.image}
              badgeText={bike.isBooked ? "Booked" : "Available"}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default BikeList;

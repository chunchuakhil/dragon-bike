"use client";

import React, { useEffect, useState } from "react";
import BikeItemCard from "@/components/BikeItemCard/BikeItemCard";
import { Flex } from "@mantine/core";
import { customerApi } from "@/api/api";
import { IBikeDetails } from "@/api/models";

const BikeList = () => {
  const [bikeList, setBikeList] = useState<IBikeDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customerApi.getBikeList();
        setBikeList(response as IBikeDetails[]);
      } catch (error) {
        console.error("Error fetching bike list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex mih={50} gap="md" justify="center" align="center" direction="column">
      {bikeList.map((bike) => (
        <BikeItemCard
          key={bike.id}
          title={bike.name}
          imageSrc={bike.image}
          badgeText={bike.bookingStatus ? "Booked" : "Available"}
        />
      ))}
    </Flex>
  );
};

export default BikeList;

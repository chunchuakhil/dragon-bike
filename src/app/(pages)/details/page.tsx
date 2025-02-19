"use client";
import React, { useState } from "react";
import BookBike from "@/components/BookBike";

const page = () => {
  const[PickupDate,setPickupDate]=useState<Date|null>(null);
  const[returnDate,setReturnDate]=useState<Date|null>(null);
  return (
    <>
    <h1>details page</h1>
    {
      
      <BookBike  imageSrc="https://img.freepik.com/free-vector/man-woman-riding-moped-mountains_74855-10868.jpg?t=st=1739283687~exp=1739287287~hmac=89604eea8ad0daed0b4c5f9cbf7a54effc3d4123e153f211a482d168d8bdb8fb&w=1800"

       title={"Suzuki Gixxer"} badgeTitle={"Available"} pickupDate={PickupDate??null} returnDate={returnDate??null} onPickupDateChange={setPickupDate} onReturnDateChange={setReturnDate}/>

    }
    </>
  )
};

export default page;

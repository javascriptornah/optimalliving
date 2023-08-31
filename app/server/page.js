"use client";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import {
  data_entries_us,
  data_entries_us_two,
  data_entries_canada,
  data_entries_various,
  stateMappings,
} from "@/data/misc";
import { pushUser, pushState, addUser } from "@/lib/SupabaseDevFunctions";

const Cont = styled.div`
  min-height: 100vh;
  padding-top: 160px;
`;

const Page = () => {
  const func = () => {
    const newArr = [];
    for (let data of data_entries_various) {
      newArr.push(data);
    }
    console.log("newArr");
    console.log(newArr);
  };

  const func2 = async () => {
    for (let user of data_entries_various) {
      const res = await addUser(user);
      console.log(res);
    }
  };
  return (
    <Cont colors={COLORS}>
      <p>Click me</p>
      <p>Click me two</p>
    </Cont>
  );
};

export default Page;

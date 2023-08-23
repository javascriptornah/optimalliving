"use client";

import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@mui/material";

const Cont = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  .flex-holder {
    display: flex;
    justify-content: center;
    & > div {
      &:nth-of-type(1) {
        margin-right: 16px;
      }
      &:nth-of-type(2) {
        margin-left: 16px;
      }
    }
    @media only screen and (max-width: 700px) {
      flex-direction: column;
      & > div {
        &:nth-of-type(1) {
          margin-bottom: 32px;
          margin-right: 0px;
        }
        &:nth-of-type(2) {
          margin-left: 0px;
        }
      }
    }
  }
`;

const Render = () => {
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [age, setAge] = useState("");
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  console.log("age");
  console.log(age);

  const submitForm = handleSubmit(async (formData) => {});
  return (
    <Cont colors={COLORS}>
      <h1 className="mar-bottom-8">Book a consultation</h1>
      <div className="black-line-2 mar-bottom-32"></div>
      <div className="flex-holder">
        <div>
          <h3 className="mar-bottom-16">Select a date</h3>
          <Calendar onChange={setDay} value={day} minDate={new Date()} />
          <div className="mar-bottom-32"></div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="Select date" />
          </LocalizationProvider>
        </div>
        <div>
          <form onSubmit={submitForm}>
            <label htmlFor="">
              <h5 className="mar-bottom-8">Name</h5>
              <input
                type="text"
                placeholder="name"
                name="name"
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            <div className="mar-bottom-32"></div>
            <label htmlFor="">
              <h5 className="mar-bottom-8">Email</h5>
              <input
                type="text"
                placeholder="email"
                name="email"
                {...register("email", {
                  required: true,
                })}
              />
            </label>
            <div className="mar-bottom-32"></div>
            <label htmlFor="">
              <h5 className="mar-bottom-8">Name</h5>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            <div className="mar-bottom-32"></div>
            <h5 className="mar-bottom-8">Age</h5>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={(e) => setAge(e.target.value)}
              >
                <MenuItem value={"15<"}>15 {"<"}</MenuItem>
                <MenuItem value={"15-20"}>15 - 20</MenuItem>
                <MenuItem value={"20-30"}>20 - 30</MenuItem>
                <MenuItem value={"30-40"}>30 - 40</MenuItem>
                <MenuItem value={"40-50"}>40 - 50</MenuItem>
                <MenuItem value={"50+"}>50+</MenuItem>
              </Select>
            </FormControl>
            <div className="mar-bottom-32"></div>
            <label
              htmlFor="
            "
            >
              <h5 className="mar-bottom-8">
                What health issues do you have (if any)? Or what is your health
                like?
              </h5>
              <textarea
                placeholder="health status"
                name=""
                {...register("healthIssues", {
                  required: true,
                })}
              ></textarea>
            </label>
            <div className="mar-bottom-32"></div>
            <label
              htmlFor="
            "
            >
              <h5 className="mar-bottom-8">What are your health goals?</h5>
              <textarea
                placeholder="Health goals"
                name=""
                {...register("What are your health goals?", {
                  required: true,
                })}
              ></textarea>
            </label>
            <div className="mar-bottom-32"></div>
          </form>
        </div>
      </div>
    </Cont>
  );
};

export default Render;

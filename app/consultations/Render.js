"use client";

import { useState, useRef } from "react";
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
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

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
  .time {
  }
`;

const Render = () => {
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const testRef = useRef(null);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  console.log("time");
  console.log(time);

  console.log("age");
  console.log(age);

  const checkErrors = () => {
    let errorState = false;
    if (time == "") {
      toast.error("Please select a time");
      timeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      timeRef.current.classList.add("border-error");
      setTimeout(() => {
        timeRef.current.classList.remove("border-error");
      }, 2000);

      errorState = true;
    }

    return errorState;
  };

  const submitForm = handleSubmit(async (formData) => {
    // return if time wasn't selected, else process form
    if (!checkErrors) return;
  });
  return (
    <Cont colors={COLORS}>
      <Toaster />
      <h1 className="mar-bottom-8">Book a consultation</h1>
      <div className="black-line-2 mar-bottom-32"></div>
      <div className="flex-holder">
        <div>
          <h3 className="mar-bottom-16">Select a date</h3>
          <div ref={dateRef}>
            <Calendar onChange={setDay} value={day} minDate={new Date()} />
          </div>
          <div className="mar-bottom-32"></div>
          <div ref={timeRef} className="time">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Select time"
                value={time}
                onChange={(value) => setTime(value)}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div>
          <form onSubmit={submitForm}>
            {/** Name */}
            <label htmlFor="">
              <h5 className="mar-bottom-8">Name</h5>
              <input
                type="text"
                placeholder="name"
                name="name"
                className={errors?.name?.type == "required" ? "error" : ""}
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            <div className="mar-bottom-8"></div>
            {errors.name?.type == "required" && (
              <p className="red">*Name required</p>
            )}
            <div className="mar-bottom-16"></div>
            {/** End of name */}

            {/** Email */}
            <label htmlFor="">
              <h5 className="mar-bottom-8">Email</h5>
              <input
                type="text"
                placeholder="email"
                name="email"
                className={errors?.email?.type == "required" ? "error" : ""}
                {...register("email", {
                  required: true,
                })}
              />
            </label>
            <div className="mar-bottom-8"></div>
            {errors.email?.type == "required" && (
              <p className="red">*Email required</p>
            )}
            <div className="mar-bottom-16"></div>
            {/** End of email */}

            {/** Instagram */}
            <label htmlFor="">
              <h5 className="mar-bottom-8">Instagram</h5>
              <input
                type="text"
                className={errors?.instagram?.type == "required" ? "error" : ""}
                {...register("instagram", {
                  required: false,
                })}
              />
            </label>

            <div className="mar-bottom-16"></div>

            {/** Age */}
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
            {/** End of age */}

            {/** Health status */}
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
                className={
                  errors?.healthIssues?.type == "required" ? "error" : ""
                }
                {...register("healthIssues", {
                  required: true,
                })}
              ></textarea>
            </label>
            <div className="mar-bottom-8"></div>
            {errors.healthIssues?.type == "required" && (
              <p className="red">*Health status required</p>
            )}
            <div className="mar-bottom-32"></div>
            {/** End of health status */}

            {/** Health goals */}
            <label
              htmlFor="
            "
            >
              <h5 className="mar-bottom-8">What are your health goals?</h5>
              <textarea
                placeholder="Health goals"
                name=""
                className={errors?.goals?.type == "required" ? "error" : ""}
                {...register("goals", {
                  required: true,
                })}
              ></textarea>
            </label>
            <div className="mar-bottom-8"></div>
            {errors.goals?.type == "required" && (
              <p className="red">*Health goals required</p>
            )}
            <div className="mar-bottom-32"></div>
            {/** End of health goals */}

            {/** How much pay */}
            <label htmlFor="">
              <h5 className="mar-bottom-8">
                How much are you willing to pay for perfect health?
              </h5>
              <input
                type="text"
                placeholder="quantity"
                name="quantity"
                {...register("money", {
                  required: false,
                })}
              />
            </label>

            {/** End of how much pay */}
            <div className="mar-bottom-32"></div>

            {/** Submit btn */}
            <button className="black-btn">
              <h4>Book</h4>
            </button>
          </form>
        </div>
      </div>
    </Cont>
  );
};

export default Render;

import { useRef } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import emailjs, { init } from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/lib/SupabaseFunctions";

const Cont = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;

  .label-one {
    margin-right: 16px;
  }
  .label-two {
    margin-left: 16px;
  }
  @media only screen and (max-width: 600px) {
    .label-one {
      margin-right: 0px;
      margin-bottom: 16px;
    }
    .label-two {
      margin-left: 0px;
    }
    .flex-holder {
      flex-direction: column;
    }
  }
`;

const Contact = () => {
  const textRef = useRef(null);
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const submitForm = handleSubmit(async (formData) => {
    console.log("form dataaa");
    console.log(formData);
    sendContactForm(formData.name, formData.email, formData.message);
    const myPromise = emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    toast.promise(myPromise, {
      loading: "Sending...",
      success: "Message sent!",
      error: "Error sending...",
    });

    textRef.current.innerHTML =
      "Thanks for the message! I'll get back to you soon";
    clearForm();
  });

  function clearForm() {
    init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
  }

  return (
    <Cont colors={COLORS} className="contact-form" onSubmit={submitForm}>
      <Toaster />
      <div className="center-inline mar-bottom-32">
        <h2 className="">Get in touch with me!</h2>
      </div>
      <div className="flex space-between mar-bottom-32 flex-holder">
        <label className="flex-one label-one">
          <h5 className="mar-bottom-8">Name</h5>
          <input
            placeholder="John doe"
            className={errors?.name?.type == "required" ? "error" : ""}
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          <div className="mar-bottom-8"></div>
          {errors.name?.type == "required" && (
            <p className="red">*Name required</p>
          )}
        </label>

        <label className="flex-one label-two">
          <h5 className="mar-bottom-8">Email</h5>
          <input
            placeholder="johndoe@gmail.com"
            type="text"
            className={errors?.email?.type == "required" ? "error" : ""}
            {...register("email", {
              required: true,
            })}
          />
          <div className="mar-bottom-8"></div>
          {errors.email?.type == "required" && (
            <p className="red">*Email required</p>
          )}
        </label>
      </div>

      <label>
        <h5 className="mar-bottom-8">Message</h5>
        <textarea
          placeholder="Tell me about how your health is doing"
          className={errors?.message?.type == "required" ? "error" : ""}
          {...register("message", {
            required: true,
          })}
        />
      </label>
      <div className="mar-bottom-8"></div>
      {errors.message?.type == "required" && (
        <p className="red">*Message required</p>
      )}
      <div className="mar-bottom-16"></div>
      <button className="black-btn flex-inline align-center">
        <h5 className="mar-right-8">Send</h5>
        <FontAwesomeIcon icon={faPaperPlane} className="white icon-ssm" />
      </button>
      <p className="green mar-top-8" ref={textRef}></p>
    </Cont>
  );
};

export default Contact;

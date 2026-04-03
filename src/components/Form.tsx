import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "../data/form";
import "./Form.css";

export default function Form() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      const timer = setTimeout(() => {
        reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-form-div slide-up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="name-input"
          {...register("name")}
          type="text"
          placeholder="Name"
        />
        {formState.errors.name && (
          <p className="name-error">{formState.errors.name.message}</p>
        )}
        <input
          className="email-input"
          {...register("email")}
          type="text"
          placeholder="Email"
        />
        {formState.errors.email && (
          <p className="email-error">{formState.errors.email.message}</p>
        )}
        <input
          className="subject-input"
          {...register("subject")}
          type="text"
          placeholder="Subject"
        />
        {formState.errors.subject && (
          <p className="subject-error">{formState.errors.subject.message}</p>
        )}
        <textarea
          className="message-input"
          {...register("message")}
          placeholder="Message"
        />
        {formState.errors.message && (
          <p className="message-error">{formState.errors.message.message}</p>
        )}
        <button className="submit-button" type="submit">
          Send
        </button>
        {formState.isSubmitSuccessful && (
          <p className="success-message">Message sent successfully!</p>
        )}
      </form>
    </div>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { FormSchema } from "../data/form";
import "./conctact-page.css";

export default function ContactPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(FormSchema),
  });

  return (
    <>
      <Header />
      <main>
        <section className="contact-section">
          <h1>Contact us today!</h1>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <fieldset>
              <input {...register("name")} type="text" placeholder="Name" />
              {formState.errors.name && <p>{formState.errors.name.message}</p>}
              <input {...register("email")} type="text" placeholder="Email" />
              <input
                {...register("subject")}
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="message-input"
                {...register("message")}
                placeholder="Message"
              />
              <button className="submit-button" type="submit">
                Send
              </button>
            </fieldset>
          </form>
        </section>
      </main>
    </>
  );
}

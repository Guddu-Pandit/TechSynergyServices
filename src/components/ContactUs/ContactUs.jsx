import styles from "./ContactUs.module.css";
import React from "react";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "164e7017-b5e2-4db0-8f70-896274a81bbe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.Heading}>
        <h2>Contact Us</h2>
        <p>Let’s connect! We’d love to hear from you.</p>
      </div>
      <div className={styles.contact_form}>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name="text" rows={8} required/>
          </div>
          <div
            className={styles.btn}
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <span>{result}</span>
    </section>
  );
};

export default ContactUs;

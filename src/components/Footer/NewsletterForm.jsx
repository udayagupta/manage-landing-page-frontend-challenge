import React, {useState} from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);

  const handleChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsEmail(true);
  };

  const onSumbit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setIsEmail(emailRegex.test(email));
    setEmail("");
  };

  return (
    <form noValidate={true} onSubmit={onSumbit} className="flex gap-3">
      <label htmlFor="email" className="relative">
        <input
          value={email}
          type="email"
          className="border"
          placeholder="Updates in your inbox..."
          name="email"
          id="email"
          onChange={(e) => handleChange(e)}
        />
        {!isEmail && <p className="error">Please insert a valid email!</p>}
      </label>
      <button type="submit" className="submit-btn">
        Go
      </button>
    </form>
  );
};
export default NewsletterForm;

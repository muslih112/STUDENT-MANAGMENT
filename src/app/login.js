"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div>
      <section className="form flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="Login_Form bg-blue-100 p-5 text-center rounded-3xl mt-30 h-80 w-90"
        >
          <h1 className="staff-login text-2xl mb-5 pt-6">Staff Login</h1>
          <input
            placeholder="Email@gmail.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="Email_Input bg-white h-10 w-70 mb-5 text-2x1 px-3"
          />
          <br />
          <input
            placeholder="Password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="Password_Input bg-white h-10 w-70 mb-5 text-2x1 px-3"
          />
          <br />
          <button
            type="submit"
            className="Login_Button bg-green-400 h-10 w-70 cursor-pointer text-3x1 rounded-xl"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
}

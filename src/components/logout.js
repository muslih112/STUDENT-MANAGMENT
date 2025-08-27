"use client";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();
  return (
    <button
      className="log-out items-center cursor-pointer text-white rounded-xl bg-red-500 justify-center w-full flex h-12 text-xl mt-100"
      onClick={() => router.push("/")}
    >
      log out
    </button>
  );
};
export default Logout;

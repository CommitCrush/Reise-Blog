import Link from "next/link";
import { RegisterUser } from "../../../actions/register";

export default function RegisterPage() {
  //max-w-md p-8 rounded-lg
  //const [email, ]
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h3 className=" text-xl text-center">Register</h3>
      <form
        action={RegisterUser}
        className="space-x-4  bg-Cyan-200 p-10 rounded-lg gap-4 flex flex-col "
      >
        <div className="">
          <label htmlFor="username" className="block text-md font-medium">
            Username
          </label>
          <input
            id="username"
            name="username"
            placeholder="username"
            type="text"
            required
            className="mt-1 block w-full rounded border-gray-300 shadow-sm bg-white p-2"
          />
        </div>
        <div className="">
          <label htmlFor="email" className="block text-md font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            required
            className="mt-1 block w-full rounded border-gray-300 shadow-sm bg-white p-2"
          />
        </div>
        <div className="">
          <label htmlFor="password" className="block text-md font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            required
            className="font-mediummt-1 block w-full rounded border-gray-300 shadow-sm bg-white p-2"
          />
        </div>
        <button
          type="submit"
          className="font-mediummt  text-white w-full rounded border-gray-300 shadow-sm bg-blue-600 p-2"
        >
          send
        </button>
        <p className="text-center">
          Hast du bereit dein Acount ?
          <Link href="/login" className="text-blue-600 hover: underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}

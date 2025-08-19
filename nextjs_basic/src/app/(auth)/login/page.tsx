import Link from "next/link";
import { LoginUser } from "../../../actions/login";

export default function LoginPage() {
  return (
    <main className="mx-auto h-screen flex items-center justify-center flex-col gap-5">
      <h3 className=" text-xl text-center">Login</h3>
      <form
        //method="POST"
        action={LoginUser}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            required
          />
        </div>
<<<<<<< HEAD
        <button
          type="submit"
        >
          send
        </button>
        <p className="text-center">
          Ich habe kein Acount ?
          <Link href="/register">
            Register
          </Link>
        </p>
=======
        <button type="submit">send</button>
        <Link href="/register">Register</Link>
>>>>>>> a864c65 (feat: implement login page with email and password fields)
      </form>
    </main>
  );
}

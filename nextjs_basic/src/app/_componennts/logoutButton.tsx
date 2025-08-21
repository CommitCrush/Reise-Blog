import { logout } from "../../actions/logout";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button 
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
      >
        Logout
      </button>
    </form>
  );
}

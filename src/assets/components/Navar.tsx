import Logo from "../components/navbar/logo";
import Navigation from "./navbar/navigation";
import SignIn from "./navbar/SignIN";
import SignUp from "./navbar/SignUp";
const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-100 bg-white ">
      <div className="mx-auto flex h-20 container items-center justify-between px-10">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-5 ">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

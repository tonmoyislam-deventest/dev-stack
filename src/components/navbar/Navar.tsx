import Logo from "../navbar/Logo";
import Navigation from "../navbar/Navigation";
import SignIn from "../navbar/SignIn";
import SignUp from "../navbar/SignUp";
const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-100 sticky top-0 backdrop-blur-3xl">
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

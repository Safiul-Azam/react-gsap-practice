import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" space-x-4 bg-green-400">
      <Link className="text-black" to="/">
        Simple tween Max
      </Link>
    </div>
  );
};

export default Navbar;

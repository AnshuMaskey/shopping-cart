import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../redux/redux-saga/actionCreator";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart, "cart");
  const dispatch = useDispatch();

  const inputChange = (e) => {
    e.preventDefault;
    dispatch(search(e.target.value));
  };
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="bg-gradient-to-br from-violet-900 to-purple-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
              SHOPPING CART
            </h1>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5   font-semibold">
          {/* <Link to={"/"}>
          <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
            Home
          </li>
        </Link> */}
          <div className="search-box backg">
            <input
              type="text"
              className=" bg-gradient-to-br from-violet-900 to-purple-300  mx-auto  text-black tracking-wider pl-6 pt-1 h-[40px] w-[250px] rounded-xl"
              onChange={inputChange}
            />
          </div>
          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingBasket className=" cursor-pointer hover:text-purple-600 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

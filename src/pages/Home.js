import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../redux/redux-saga/actionCreator";
import { ThreeDots } from "react-loader-spinner";
import { setLoader } from "../redux/redux-saga/actionCreator";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item);
  const search = useSelector((state) => state.search);
  const isLoading = useSelector((state) => state.isLoading);
  // console.log(item, "item");

  useEffect(() => {
    dispatch(getProducts());
    dispatch(setLoader(true));
    // console.log("chalyo");
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15%",
            margin: "auto",
          }}
        >
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
          {items
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
              return false;
            })
            .map((item) => {
              return <Product key={item.id} item={item} />;
            })}
        </div>
      )}
    </>
  );
};

export default Home;

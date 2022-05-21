import classes from "./products.module.scss";
import Item from "./item/item";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import MainNavigation from "../../components/layout/MainNavigation";
import Footer from "../../components/layout/Footer";

function Products() {
  const [userStyles, setUserStyle] = useState([]);

  useEffect(() => {
    axiosInstance.get(`accounts/user_styles/`).then((res) => {
      console.log(res);
      console.log(res.data);
      setUserStyle(res.data);
    });
  }, []);
  return (
    <>
      <MainNavigation />
      <div className={classes.Products}>
        <div className={classes.Products__itemContainer}>
          {userStyles.map((element) => (
            <Item
              name={" شلوار مردانه سیدونا مدل MSI03072-403"}
              price={99000}
              priceOff={100000}
              img={element.style_image_url}
            ></Item>
          ))}

          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
          <Item
            name={" شلوار مردانه سیدونا مدل MSI03072-403"}
            price={99000}
            priceOff={100000}
            img={"./images/clothes/11bg.png"}
          />
        </div>
        <div className={classes.Products__filterContainer}>
          <h2>فیلترها</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Products;

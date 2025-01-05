import AppBar from "@/components/appBar/AppBar";
import AppBar2 from "@/components/appBar/AppBar2";
import CartModel from "@/components/cart/CartModel";

const HomePage = () => {
  return (
    <div>
      <AppBar2 />
      <AppBar />
      <CartModel />
    </div>
  );
};

export default HomePage;

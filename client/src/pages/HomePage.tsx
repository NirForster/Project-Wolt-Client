import CartModel from "@/components/cart/CartModel";
import { testShopApiConnection } from "../services/apiTest";
import AppBar from "@/components/appBar/AppBar";

const HomePage = () => {
  const handleTestConnection = async () => {
    await testShopApiConnection();
  };

  return (
    <div>
      <h1>HomePage</h1>
      {/* <CartTabs /> */}
      <AppBar />
      <button
        onClick={handleTestConnection}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Test User API Connection
      </button>
    </div>
  );
};

export default HomePage;

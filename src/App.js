import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Fotter from "./Components/Fotter";
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Fotter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

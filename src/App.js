import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { obj, arr } from "./components/Header/Header";

function App() {
  console.log(obj, arr);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

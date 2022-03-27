import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import GlobalStyles from "./styles/";

function App() {
  const pathname = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GlobalStyles />
      <Home />
      <Toaster position="bottom-left" />
    </>
  );
}

export default App;

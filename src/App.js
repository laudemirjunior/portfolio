import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import Routes from "./routes";
import GlobalStyles from "./styles/";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GlobalStyles />
      <Routes />
      <Toaster position="bottom-left" />
    </>
  );
}

export default App;

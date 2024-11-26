import { CssBaseline, ThemeProvider } from "@mui/material";
import { lazy, Suspense, useCallback, useState } from "react";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./components/Home/Home"));
const AboutContent = lazy(() => import("./components/About/AboutContent"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ThreeD = lazy(() => import("./components/ThreeD/ThreeD"));
import theme from "./theme";

const App = () => {
  const [checked, setChecked] = useState(false);
  const smoothScrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  const handleMode = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Suspense fallback={<div>Loading..........</div>}>
        <ThemeProvider theme={theme(checked)}>
          <CssBaseline />
          <Navbar
            smoothScrollTo={smoothScrollTo}
            checked={checked}
            handleMode={handleMode}
          ></Navbar>
          <Home checked={checked} smoothScrollTo={smoothScrollTo}></Home>
          <AboutContent></AboutContent>
          <Portfolio></Portfolio>
          <ThreeD></ThreeD>
          <Contact></Contact>
        </ThemeProvider>
      </Suspense>
    </>
  );
};

export default App;

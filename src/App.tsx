import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/Theme";
import { Footer, Header } from "./layouts";
import { Loader } from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Theme>
        {/* <Header /> */}
        {/* <Outlet /> */}
        {/* <Footer /> */}
        <Loader />
      </Theme>
    </Suspense>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { wait } from "./assets/utils";
import { Preloader } from "./subcomponents";

const Dashboard = lazy(async () => {
  // Wait one second before loading the component
  await wait(1000);

  // Import the Services component from the ./Views/Services module
  return import("./pages/Dashboard");
});

const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

import { RouterProvider } from "react-router-dom";
import router from "./router";
import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <RouterProvider router={router} />
      </ContentLayout>
    </MainLayout>
  );
};

export default App;

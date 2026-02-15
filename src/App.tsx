import { BrowserRouter } from "react-router-dom";
import { AppHeader } from "@/shared/components/template/AppHeader/AppHeader";
import { AppRoutes } from "@/app/routes/AppRoutes";
import { User } from "./features/users";

function App() {
  return (
    <BrowserRouter>
      {/* <AppHeader /> */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

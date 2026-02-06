import { Login } from "./pages/Login/Login";
import { AppHeader } from "./shared/components/AppHeader/AppHeader";
import { LicenseTable } from "./shared/components/LicenseTable/LicenseTable";
import { Details } from "./pages/Details/Details";
import { User } from "./pages/secretary/User/User";
import { TechnicalResponsibleForm } from "./pages/secretary/NewUser/TechnicalResponsibleForm/TechnicalResponsibleForm";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <AppHeader /> */}
      {/* <LicenseTable /> */}
      {/* <Details /> */}
      {/* <User /> */}
      <TechnicalResponsibleForm />
    </>
  );
}

export default App;

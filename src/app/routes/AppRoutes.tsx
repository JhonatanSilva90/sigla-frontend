import { Routes, Route } from "react-router-dom";
import { Login } from "@/pages/Login/Login";
import { LicenseTable } from "@/shared/components/LicenseTable/LicenseTable";
import { Details } from "@/pages/Details/Details";
import { User } from "@/features/users/";

import { TechnicalResponsibleForm } from "@/features/users";
import { UserForm } from "@/features/users";
import {
  TechnicalResponsibleLayout,
  ProtocolForm,
  LicenseTracker,
} from "@/features/licenses/technicalResponsible";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/users" element={<User />} />
      <Route path="/" element={<LicenseTable />} />
      <Route path="/licenses/:id" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/new" element={<UserForm />} />
      <Route
        path="/users/technical-responsible/new"
        element={<TechnicalResponsibleForm />}
      />
      <Route
        path="/technical-responsible"
        element={<TechnicalResponsibleLayout />}
      >
        <Route path="protocol" element={<ProtocolForm />} />
        <Route path="tracker" element={<LicenseTracker />} />
      </Route>
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";
import { Login } from "@/pages/Login/Login";
import { LicenseTable } from "@/shared/components/LicenseTable/LicenseTable";
import { Details } from "@/pages/Details/Details";
import { User } from "@/features/users/";
import { TechnicalResponsibleForm } from "@/features/users";
import { UserForm } from "@/features/users";
import {
  ProtocolForm,
  LicenseTracker,
  StandardDocuments,
} from "@/features/licenses/technicalResponsible";
import { TechnicalResponsibleLayout } from "@/layouts/TechnicalResponsibleLayout";
import { MainLayout } from "@/layouts";
import { Navigate } from "react-router-dom";

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
      <Route element={<MainLayout />}>
        <Route
          path="technical-responsible/"
          element={<TechnicalResponsibleLayout />}
        >
          <Route index element={<Navigate to="tracker" replace />} />
          <Route path="tracker" element={<LicenseTracker />} />
          <Route path="protocol" element={<ProtocolForm />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>
      </Route>
    </Routes>
  );
}

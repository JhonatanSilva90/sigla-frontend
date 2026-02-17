import { Routes, Route, Navigate } from "react-router-dom";
import { LicenseTable } from "@/shared/components/LicenseTable/LicenseTable";
import { Login, Details, RegisteredLicenses } from "@/pages";
import { User, UserForm, TechnicalResponsibleForm } from "@/features/users";
import {
  ProtocolForm,
  LicenseTracker,
  StandardDocuments,
} from "@/features/licenses/technicalResponsible";
import { TechnicalResponsibleLayout } from "@/layouts/TechnicalResponsibleLayout";
import { MainLayout, SecretaryLayout } from "@/layouts";
import { CoordinatorLayout } from "@/layouts/CoordinatorLayout/CoordinatorLayout";

export function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />

      {/* Rotas que usam MainLayout */}
      <Route element={<MainLayout />}>
        {/* Usuários */}
        <Route path="/users" element={<User />} />
        <Route path="/users/new" element={<UserForm />} />
        <Route
          path="/users/technical-responsible/new"
          element={<TechnicalResponsibleForm />}
        />

        {/* Licenças */}
        <Route path="/licenses" element={<LicenseTable />} />
        <Route path="/licenses/:id" element={<Details />} />

        {/* Rotas aninhadas - Responsável Técnico */}
        <Route
          path="technical-responsible"
          element={<TechnicalResponsibleLayout />}
        >
          <Route index element={<Navigate to="tracker" replace />} />
          <Route path="tracker" element={<LicenseTracker />} />
          <Route path="protocol" element={<ProtocolForm />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>

        {/* Rotas aninhadas - Secretaria */}
        <Route path="secretary" element={<SecretaryLayout />}>
          <Route index element={<Navigate to="licenses" replace />} />
          <Route path="licenses" element={<LicenseTable />} />
          <Route path="users" element={<User />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>

        {/* Rota aninhada - Coordenador */}
        <Route path="coordinator" element={<CoordinatorLayout />}>
          <Route index element={<Navigate to="licenses" replace />} />
          <Route path="protocols" element={<RegisteredLicenses />} />
          <Route path="licenses" element={<LicenseTable />} />
          <Route path="users" element={<User />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>
      </Route>
    </Routes>
  );
}

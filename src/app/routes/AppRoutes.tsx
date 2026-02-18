import { Routes, Route, Navigate } from "react-router-dom";
import { LicenseTable } from "@/shared/components/LicenseTable/LicenseTable";
import {
  Login,
  Details,
  RegisteredLicenses,
  Users,
  ProtocolForm,
  LicenseTracker,
  StandardDocuments,
} from "@/pages";
import { UserForm, TechnicalResponsibleForm } from "@/features/users";
import { MainLayout } from "@/layouts";
import { RoleLayout } from "@/shared/layouts/RoleLayout";

export function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />

      {/* Rotas que usam MainLayout */}
      <Route element={<MainLayout />}>
        {/* Usuários */}
        <Route path="/users" element={<Users />} />
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
          element={
            <RoleLayout
              title="RESPONSÁVEL TÉCNICO"
              menuItems={[
                { label: "Rastreamento", path: "tracker" },
                { label: "Protocolo", path: "protocol" },
                { label: "Documentos Padrão", path: "standard-documents" },
              ]}
            />
          }
        >
          <Route index element={<Navigate to="tracker" replace />} />
          <Route path="tracker" element={<LicenseTracker />} />
          <Route path="protocol" element={<ProtocolForm />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>

        {/* Rotas aninhadas - Secretaria */}
        <Route
          path="secretary"
          element={
            <RoleLayout
              title="SECRETARIA"
              menuItems={[
                { label: "Licenças", path: "licenses" },
                { label: "Usuários", path: "users" },
                { label: "Documentos Padrão", path: "standard-documents" },
              ]}
            />
          }
        >
          <Route index element={<Navigate to="licenses" replace />} />
          <Route path="licenses" element={<LicenseTable />} />
          <Route path="users" element={<Users />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>

        {/* Rota aninhada - Coordenador */}
        <Route
          path="coordinator"
          element={
            <RoleLayout
              title="COORDENADOR"
              menuItems={[
                { label: "Protocolos", path: "protocols" },
                { label: "Licenças", path: "licenses" },
                { label: "Usuários", path: "users" },
                { label: "Documentos Padrão", path: "standard-documents" },
              ]}
            />
          }
        >
          <Route index element={<Navigate to="protocols" replace />} />
          <Route path="protocols" element={<RegisteredLicenses />} />
          <Route path="licenses" element={<LicenseTable />} />
          <Route path="users" element={<Users />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>

        {/* Rota aninhada - Analista */}
        <Route
          path="analyst"
          element={
            <RoleLayout
              title="ANALISTA"
              menuItems={[
                { label: "Licenças", path: "licenses" },
                { label: "Usuários", path: "users" },
                { label: "Documentos Padrão", path: "standard-documents" },
              ]}
            />
          }
        >
          <Route index element={<Navigate to="licenses" replace />} />
          <Route path="licenses" element={<LicenseTable />} />
          <Route path="users" element={<Users />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>

        {/* Rota aninhada - Coordenador */}
        <Route
          path="coordinator"
          element={
            <RoleLayout
              title="COORDENADOR"
              menuItems={[
                { label: "Protocolos", path: "protocols" },
                { label: "Licenças", path: "licenses" },
                { label: "Usuários", path: "users" },
                { label: "Documentos Padrão", path: "standard-documents" },
              ]}
            />
          }
        >
          <Route index element={<Navigate to="protocols" replace />} />
          <Route path="protocols" element={<RegisteredLicenses />} />
          <Route path="licenses" element={<LicenseTable />} />
          <Route path="users" element={<Users />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>

        {/* Rota aninhada - Administrativo */}
        <Route
          path="administrative"
          element={
            <RoleLayout
              title="ADMINISTRATIVO"
              menuItems={[
                { label: "Usuários", path: "users" },
                { label: "Documentos Padrão", path: "standard-documents" },
              ]}
            />
          }
        >
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" element={<Users />} />
          <Route path="standard-documents" element={<StandardDocuments />} />
        </Route>
      </Route>
    </Routes>
  );
}

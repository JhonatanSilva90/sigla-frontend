import { Stepper, Step, StepLabel } from "@mui/material";
import type { LicenseStatus } from "../types/license.types";
import {
  AssignmentTurnedIn,
  Search,
  ReportProblem,
  FactCheck,
  Verified,
} from "@mui/icons-material";
import type { StepIconProps } from "@mui/material/StepIcon";
import styles from "./LicenseStepper.module.scss";

const LICENSE_STEPS = [
  { label: "Protocolado", icon: <AssignmentTurnedIn fontSize="small" /> },
  { label: "Em Análise", icon: <Search fontSize="small" /> },
  {
    label: "Notificação de Pendências",
    icon: <ReportProblem fontSize="small" />,
  },
  { label: "Realização de Vistoria", icon: <FactCheck fontSize="small" /> },
  { label: "Licença Emitida", icon: <Verified fontSize="small" /> },
] as const;

type Props = {
  status: LicenseStatus;
};

function getStepIndex(status: LicenseStatus) {
  return LICENSE_STEPS.findIndex((step) => step.label === status);
}

export function LicenseStepper({ status }: Props) {
  const activeStep = getStepIndex(status);

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      className={styles.stepper}
    >
      {LICENSE_STEPS.map((step) => (
        <Step key={step.label}>
          <StepLabel slots={{ stepIcon: CustomStepIcon }}>
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, icon } = props;

  const stepIndex = Number(icon) - 1;
  const lastStepIndex = LICENSE_STEPS.length - 1;

  // Se for o último passo e estiver ativo, considerar como concluído
  const isCompleted = completed || (active && stepIndex === lastStepIndex);

  return (
    <div
      className={`
        ${styles.stepIcon}
        ${isCompleted ? styles.completed : ""}
        ${active && stepIndex !== lastStepIndex ? styles.active : ""}
      `}
    >
      {LICENSE_STEPS[stepIndex].icon}
    </div>
  );
}

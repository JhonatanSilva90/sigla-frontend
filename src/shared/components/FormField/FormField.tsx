import { FormControl, FormLabel, TextField } from "@mui/material";
import styles from "./FormField.module.scss";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  labelColor?: string;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
}

export function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  labelColor,
  multiline = false,
  minRows,
  maxRows,
}: FormFieldProps) {
  return (
    <FormControl>
      <FormLabel
        htmlFor={id}
        className={styles.label}
        style={labelColor ? { color: labelColor } : undefined}
      >
        {label}
      </FormLabel>
      <TextField
        variant="outlined"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={styles.input}
        multiline={multiline}
        minRows={minRows}
        maxRows={maxRows}
      />
    </FormControl>
  );
}

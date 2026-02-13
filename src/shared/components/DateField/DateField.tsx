import dayjs, { Dayjs } from "dayjs";
import { FormLabel } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./DateField.module.scss";

interface DateFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  labelColor?: string;
  format?: string;
}

export function DateField({
  label,
  value,
  onChange,
  labelColor = "var(--grey-700)",
  format = "DD/MM/YYYY",
}: DateFieldProps) {
  function handleDateChange(date: Dayjs | null) {
    onChange(date ? date.format("YYYY-MM-DD") : "");
  }

  return (
    <div className={styles.wrapper}>
      <FormLabel
        htmlFor="date"
        className={styles.label}
        sx={{ color: labelColor }}
      >
        {label}
      </FormLabel>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value ? dayjs(value) : null}
          onChange={handleDateChange}
          format={format}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: "outlined",
              className: styles.input,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

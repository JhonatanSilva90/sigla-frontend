// import { Button, Typography, IconButton, Box } from "@mui/material";
// import styles from "./FileUpload.module.scss";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import DownloadIcon from "@mui/icons-material/Download";

// interface FileUploadProps {
//   label: string;
//   file: File | null;
//   onChange: (file: File | null) => void;
// }

// export function FileUpload({ label, file, onChange }: FileUploadProps) {
//   const hasFile = Boolean(file);

//   return (
//     <Box className={styles.upload}>
//       <Typography variant="body2">{label}</Typography>

//       <Button
//         component="label"
//         variant={hasFile ? "contained" : "outlined"}
//         sx={(theme) => ({
//           ...(hasFile
//             ? {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.primary.contrastText,

//                 "&:hover": {
//                   backgroundColor: theme.palette.primary.dark,
//                 },
//               }
//             : {
//                 color: theme.palette.primary.main,
//                 borderColor: theme.palette.primary.main,

//                 "&:hover": {
//                   backgroundColor: theme.palette.action.hover,
//                 },
//               }),
//         })}
//       >
//         {hasFile ? (
//           " Trocar arquivo"
//         ) : (
//           <Typography
//             variant="body2"
//             sx={{ display: "flex", alignItems: "center", gap: "4px" }}
//           >
//             Seleciovar arquivo <DownloadIcon fontSize="small" />
//           </Typography>
//         )}

//         <input
//           type="file"
//           hidden
//           onChange={(e) => onChange(e.target.files?.[0] || null)}
//         />
//       </Button>

//       {hasFile && (
//         <Box className={styles.fileInfo}>
//           <Typography variant="inherit" className={styles.fileName}>
//             {file!.name}
//           </Typography>

//           <IconButton
//             size="small"
//             aria-label="Remover arquivo"
//             onClick={() => onChange(null)}
//           >
//             <DeleteForeverIcon fontSize="small" color="error" />
//           </IconButton>
//         </Box>
//       )}
//     </Box>
//   );
// }

import { Button, Typography, IconButton, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import styles from "./FileUpload.module.scss";

interface FileUploadProps {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
}

export function FileUpload({ label, file, onChange }: FileUploadProps) {
  const hasFile = Boolean(file);

  return (
    <Box className={styles.upload}>
      <Typography variant="body2">{label}</Typography>

      <Button
        component="label"
        variant={hasFile ? "contained" : "outlined"}
        color="primary"
        className={styles.uploadButton}
        startIcon={!hasFile ? <DownloadIcon fontSize="small" /> : undefined}
      >
        {hasFile ? "Trocar arquivo" : "Selecionar arquivo"}

        <input
          type="file"
          hidden
          onChange={(e) => onChange(e.target.files?.[0] || null)}
        />
      </Button>

      {hasFile && (
        <Box className={styles.fileInfo}>
          <Typography variant="caption" className={styles.fileName}>
            {file!.name}
          </Typography>

          <IconButton
            size="small"
            aria-label="Remover arquivo"
            onClick={() => onChange(null)}
          >
            <DeleteForeverIcon fontSize="small" color="error" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}

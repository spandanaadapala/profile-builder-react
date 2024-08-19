import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

const StyledTextField = styled(TextField)({
  marginTop: "25px",
  width: "85%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "40px",
    height: 40,
  },
  "& .MuiInputBase-input": {
    fontSize: 14,
  },
});

const StyledLabel = styled("span")({
  fontSize: "0.7rem",
});

const SignIn = () => {
  const theme = useTheme();
  const lineColor = theme.palette.primary.main;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper sx={{ width: 400, height: 400, p: 2 }}>
        <Typography variant="body2">SIGN IN</Typography>
        <Typography
          sx={{
            fontSize: "0.7rem",

            borderBottom: `5px solid ${lineColor}`,
            display: "inline",
            paddingBottom: "5px",
          }}
        >
          SIGN IN YOUR ACCOUNT
        </Typography>
        <StyledTextField
          id="username"
          variant="outlined"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledTextField
          id="password"
          variant="outlined"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            marginTop: "10px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<StyledLabel>REMEMBER ME</StyledLabel>}
          />
          <Link sx={{ fontSize: "0.7rem" }}>Forgot Password</Link>
        </Box>

        <Button
          variant="contained"
          sx={{ width: 250, borderRadius: "40px", marginTop: "20px" }}
        >
          SIGN IN
        </Button>
        <Typography sx={{ fontSize: "0.7rem", marginTop: "20px" }}>
          DON'T HAVE AN ACCOUNT <Link sx={{ fontSize: "0.7rem" }}>SIGN UP</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;

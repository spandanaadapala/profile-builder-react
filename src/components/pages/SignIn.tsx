import { TextField, Box } from "@mui/material";

const SignIn = () => {
  return (
    <Box>
      <TextField id="username" variant="outlined" placeholder="USERNAME" />
      <TextField id="password" variant="outlined" placeholder="PASSWORD" />
    </Box>
  );
};

export default SignIn;

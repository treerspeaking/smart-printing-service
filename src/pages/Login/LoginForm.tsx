import React from "react";
import { useState } from "react";
import {
  Paper,
  Typography,
  Stack,
  TextField,
  Link,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  FilledInput,
} from "@mui/material";
import { LoginButton } from "./LoginButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LoginForm = () => {
  var [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log({
      username: username,
      password: password,
    });
  }

  return (
    <Paper
      elevation={4}
      sx={{ width: "600px", height: "600px", flexGrow: 1, borderRadius: 12 }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", marginTop: "81px" }}>
        ĐĂNG NHẬP
      </Typography>

      <Stack
        direction={"column"}
        spacing={2}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Stack direction={"column"} spacing={2}>
          <Typography variant="h6">Tên người dùng</Typography>
          <TextField
            required
            id="filled-required"
            label="Bắt buộc"
            variant="filled"
            sx={{ height: "71px", width: "500px" }}
            placeholder="Nhập tên người dùng"
            onChange={(e) => {setUsername(e.target.value)}}
          />
        </Stack>

        <Stack direction={"column"} spacing={2}>
          <Typography variant="h6">Mật khẩu</Typography>
          <FormControl sx={{ height:"71px", width: "500px" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Mật khẩu
            </InputLabel>
            <FilledInput
              required
              id="filled-adornment-password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => {setPassword(e.target.value)}}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <LoginButton submitHandler={e => handleSubmit(e)}></LoginButton>
        </Stack>
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          underline="hover"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="h6">Quên Mật Khẩu?</Typography>
          {/* <Button  variant='text'sx={{width:161, height:57,fontWeight:'underline'}}>Quên Mật Khẩu?</Button> */}
        </Link>
      </Stack>
    </Paper>
  );
};

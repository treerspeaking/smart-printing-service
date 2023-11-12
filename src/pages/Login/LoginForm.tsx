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
  Box
} from "@mui/material";
import { LoginButton } from "./LoginButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth, AuthProvider } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
export const LoginForm = () => {

  var [showPassword, setShowPassword] = useState(false);
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  var [error, setError] = useState("");
  var [loading, setLoading] = useState(false);
  var {login} = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log({
      username: username,
      password: password,
    });

    e.preventDefault();

    if (username === "" || password === "") {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const hcmutEmailPattern = /@hcmut\.edu\.vn$/;
    if (!hcmutEmailPattern.test(username)) {
      setError("Phải đăng nhập bằng mail có đuôi @hcmut.edu.vn");
      return;
    }

    try {
      setError("");
      setLoading(true);

      await login(username, password);

      navigate('/home'); // Navigate to home page
      
      console.log("Login success");
    } 
    catch (error) {
      console.log(error.code);
      if (error.code == "auth/too-many-requests")
      {
        setError("Đang có quá nhiều yêu cầu đăng nhập, vui lòng đợi một lúc");
      } 
      else if (error.code == "auth/invalid-login-credentials" || error.code == "auth/user-not-found" || error.code == "auth/wrong-password") 
      {
        setError("Sai tên người dùng hoặc mật khẩu");
      } 
      else 
      {
        setError("Đã xảy ra lỗi, vui lòng thử lại sau");
      }
    }

    setLoading(false);

  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        {error !== "" && 
          <Box 
            bgcolor="#f4d3d9" 
              color="#673042" 
              p={2} 
              my={2} 
              sx={{ height: "71px", width: "500px" }}>
            <Typography variant="h6">{error}</Typography>
          </Box>
        }

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
          <LoginButton submitHandler={e => handleSubmit(e)} disable = {loading}></LoginButton>
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

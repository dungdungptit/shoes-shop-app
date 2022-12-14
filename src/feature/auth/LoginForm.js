import { Box, Button, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Link } from '@mui/material'
import { Stack } from '@mui/system'
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import bg_login from '../../assets/images/bg_login.jpg'
import bg0_login from '../../assets/images/bg0_login.jpg'
import { loginAsync } from '../../store/reducer/authSlice'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [validateMsg, setValidateMsg] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAsync(user)).then(res => {
      // if (res.payload.status === 200) {
      console.log(res);
      // }
      if (res.type === "auth/login/rejected") {
        console.log("Sai tài khoản hoặc mật khẩu");
        setValidateMsg(
          "Sai tài khoản hoặc mật khẩu"
        )
      }
      else {
        navigate('/')
      }
    })
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${bg0_login})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant="h1"
          sx={{
            color: '#fff',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: '10rem',
            fontWeight: 700,
            zIndex: 0,
          }}>
          Welcome to Shoes Shop
        </Typography>
      </Box>

      <Stack spacing={3}
        sx={{
          flex: 1,
          height: 'auto',
          maxWidth: 480,
          boxSizing: 'border-box',
          width: '100%',
          margin: '0 auto',
          p: { xs: "48px 12px", md: "48px 64px", },
          bgcolor: '#fff',
          borderRadius: 4,
        }}>
        <Box component='form' noValidate autoComplete="off" onSubmit={onSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 600, width: "100%", color: '#000', textAlign: 'start', fontSize: "1.5rem", mb: 4 }}>
            Sign in to Shoes Shop
          </Typography>
          <Typography variant='body1' sx={{ fontWeight: 400, width: "100%", color: '#000', textAlign: 'start', fontSize: "1rem", mb: 4 }}>
            New user?
            <Link href="/register" underline="hover" sx={{ color: '#000', fontWeight: 600, ml: 1 }}>
              Create an account
            </Link>
          </Typography>
          <TextField id="outlined-basic" sx={{ width: "100%", mb: 2 }} label="Username" variant="outlined" name='username'
            defaultValue={user.username} onChange={onChange} />
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name='password'
              type={showPassword ? 'text' : 'password'}
              defaultValue={user.password}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Typography variant='body2' component="a" sx={{ cursor: "pointer", "&:hover": { color: '#000' }, width: "100%", color: '#000', fontSize: "0.875rem", my: 2, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            Fogot password?
          </Typography>

          {validateMsg && (
            <Typography variant='body1' sx={{ fontWeight: 400, width: "100%", color: '#f44336', textAlign: 'start', fontSize: "1rem", mb: 1 }}>
              {validateMsg}
            </Typography>
          )}
          <Button variant="contained"
            sx={{
              width: "100%", bgcolor: '#212b36', color: '#fff', textDecoration: 'none',
              fontWeight: 700,
              height: 48,
              p: "8px 22px",
              fonSize: 15,
              "&:hover": {
                bgcolor: "#212b36"
              },
              textTransform: "capitalize"
            }} type='submit'>
            Submit
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default LoginForm






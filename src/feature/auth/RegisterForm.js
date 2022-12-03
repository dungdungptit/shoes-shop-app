import { Box, Button, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Link, Select, MenuItem, duration } from '@mui/material'
import { Stack } from '@mui/system'
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { loginAsync } from '../../store/reducers/authSlice'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import bg_login from '../../assets/images/bg_login.jpg'
import bg0_login from '../../assets/images/bg0_login.jpg'
import { registerAsync } from '../../store/reducer/authSlice'

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'username',
    'password',
    'email',
    'phone',
    'address',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Không được để trống';
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email không hợp lệ';
  }

  if (values.password && values.password.length < 8) {
    errors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
  }

  if (values.phone && values.phone.length < 10) {
    errors.phone = 'Số điện thoại phải có ít nhất 10 số';
  }

  if (values.phone && !/^[0-9]*$/.test(values.phone)) {
    errors.phone = 'Số điện thoại không hợp lệ';
  }

  return errors;
};

const RegisterForm = () => {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: 'dung',
    password: '123456',
    firstName: 'Quang Dung',
    lastName: 'Dang',
    gender: "true",
    email: 'dung@gmail.com',
    phone: '0123456789',
    address: 'Ha Noi',
  })

  const [dob, setDob] = useState(new Date())

  // console.log(JSON.stringify(user));

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch()
  const [validateMsg, setValidateMsg] = useState({});

  const onSubmit = (e) => {
    e.preventDefault()
    // dispatch(loginAsync(user))

    // localStorage.setItem('user', JSON.stringify(user))

    // navigate('/login')
    const data = {
      ...user,
      dob: dob.toLocaleDateString('en-GB')
    }

    if (Object.keys(validate(data)).length === 0) {
      setValidateMsg({})
      dispatch(registerAsync(data)).then(res => {
        // if (res.payload.status === 200) {

        // }
        if (res.type === "auth/register/rejected") {
          console.log("Tên đăng nhập hoặc email đã tồn tại");
          setValidateMsg({
            ...validateMsg,
            duplicate: "Tên đăng nhập hoặc email đã tồn tại"
          })
        }
        else {
          navigate('/login')
        }
      })
    }
    else {
      setValidateMsg(validate(data));
    }
    console.log(validate(data));
    console.log(data);

    // navigate('/')
  }

  const handleChangeGender = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >


      <Stack spacing={3}
        sx={{
          flex: 1,
          height: 'auto',
          maxWidth: 1200,
          boxSizing: 'border-box',
          width: '100%',
          margin: '0 auto',
          p: { xs: "48px 12px", md: "48px 64px", },
          bgcolor: '#fff',
          borderRadius: 4,
          boxShadow: 2,
          border: '1px solid #e0e0e0',
        }}>
        <Typography variant='h4' sx={{ fontWeight: 600, width: "100%", color: '#000', textAlign: 'center', fontSize: "1.5rem", mb: 4 }}>
          Sign in to Shoes Shop
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 400, width: "100%", color: '#000', textAlign: 'center', fontSize: "1rem", mb: 4 }}>
          Have an account?
          <Link href="/login" underline="hover" sx={{ color: '#000', fontWeight: 600, ml: 1 }}>
            Go to sign in
          </Link>
        </Typography>
        <Box component='form' noValidate autoComplete="off" onSubmit={onSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            width: '100%',
            gap: 4,
            height: 'auto',
          }}
        >
          <Box sx={{ width: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '12px', mb: 1 }}>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '12px', mb: 1, mt: 2 }}>
              <TextField id="outlined-basic" sx={{ width: "50%", mr: 2 }} label="Tên" variant="outlined" name='firstName' defaultValue={user.firstName} onChange={onChange} />
              <TextField id="outlined-basic" sx={{ width: "50%", }} label="Họ" variant="outlined" name='lastName' defaultValue={user.lastName} onChange={onChange} />
            </Box>

            <Box
              sx={{
                width: '100%',
                height: '40px',
                position: 'relative',
                alignItems: 'center',
                marginBottom: '56px',
                "& label": {
                  paddingLeft: '12px',
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.6)',
                  width: '100px',
                },
                "& .dob": {
                  padding: '12px 16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  width: '100%',
                  height: '56px',
                },
              }}>
              <label htmlFor="dob">Ngày sinh</label>
              <DatePicker
                className='dob'
                format="dd/MM/yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                popperPlacement="bottom-end"
                selected={dob} onChange={(date) => setDob(date)} />
            </Box>
            {/* select gender */}
            <FormControl fullWidth
              sx={{
                mb: 1,
              }}
            >
              <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="gender"
                value={user.gender}
                name="gender"
                label="Giới tính"
                onChange={handleChangeGender}
              >
                <MenuItem value={"true"}>Nam</MenuItem>
                <MenuItem value={"false"}>Nữ</MenuItem>

              </Select>
            </FormControl>

            <TextField id="outlined-basic" sx={{ width: "100%", mb: 2 }} label="Địa chỉ" variant="outlined" name='address' defaultValue={user.address} onChange={onChange} />

          </Box>

          <Box sx={{ width: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '12px', mb: 1 }}>

            <TextField id="outlined-basic" sx={{ width: "100%", m: 2, mb: 1 }} label="Tên đăng nhập" variant="outlined" name='username' defaultValue={user.username} onChange={onChange} />

            <FormControl sx={{ my: 1, mb: 2, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Mật khẩu
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

            <TextField id="outlined-basic" sx={{ width: "100%", mb: 3 }} type="Email" label="Email" variant="outlined" name='email' defaultValue={user.email} onChange={onChange} />
            <TextField id="outlined-basic" sx={{ width: "100%", mb: 3 }} label="Số điện thoại" variant="outlined" name='phone' defaultValue={user.phone} onChange={onChange} />

            {validateMsg &&
              Object.keys(validateMsg).map((key, index) => (
                <Typography key={index} variant='body1' sx={{ fontWeight: 400, width: "100%", color: '#f44336', textAlign: 'start', fontSize: "1rem", mb: 1 }}>
                  {validateMsg[key]}
                </Typography>
              ))
            }
            <Button Button variant="contained"
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

        </Box>
      </Stack >
    </Box >
  )
}


export default RegisterForm






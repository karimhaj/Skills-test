import * as React from 'react';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';


//material UI components
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Box, Typography, Container, InputAdornment, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


//try to use a customized theme 

const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#483d8b',
      },
      secondary: {
        main: '#8a2be2 ',
      }
    },
  };

const theme = createTheme(themeOptions);

export default function SignIn() {

    const {register, 
      handleSubmit, 
      formState: {errors} 
    } = useForm({
      defaultValues:{
        username: '', 
        password: ''
      }
    }); 
    //const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    console.log(errors)


  return (
    (<ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            border: '1px solid rgb(200,200,200)',
            padding: '20px 20px 50px',
            borderRadius: '10px',
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <KeyIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit((data)=>{
            console.log(data)
          })} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              {...register("username", {required: 'this is required'})}
              autoFocus
            />
            <p>{errors.username?.message}</p>
            <TextField
              margin="normal"
              fullWidth
              {...register("password", {required: 'this is required', minLength: {
                value: 8, 
                message:'min length is 8'
              }})}
              label="Password"
              type={showPassword? "text" : "password"}
              id="password"

              InputProps={{ 
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <p>{errors.password?.message}</p>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember"
            /> */}
            <Button
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              Confirm
            </Button>
          </Box>
        </Box>
    </Container>
    </ThemeProvider>));
}
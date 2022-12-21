import { Google } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth )

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo( ()=> status === 'checking', [status])

  const onSubmit = ( event ) =>{
    event.preventDefault();


    dispatch( startLoginWithEmailPassword( {email, password} ) )
    
  };

  const onGoogleSingIn = (  ) =>{

    dispatch( startGoogleSingIn() );
    console.log('onGoogleSingIn');
  };



  return (
    <AuthLayout title="Login">
      <form 
        className=" animate__animated animate__fadeIn animate__faster "
        onSubmit={ onSubmit }
      >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              label="Correo"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label="contraseña"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Escriba su contraseña" 
              fullWidth
            />
          </Grid>
          <Grid
           item 
           xs={12}
           display={ !!errorMessage ? '' : 'none' } 
          >
            <Alert severity="error">
              { errorMessage }
            </Alert>
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                variant="contained" 
                fullWidth 
                type="submit"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={ isAuthenticating }
                variant="contained" 
                fullWidth
                onClick={onGoogleSingIn}
              >
                <Google/>
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

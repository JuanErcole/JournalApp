import { Grid, TextField, Button, Link, Alert } from "@mui/material"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value)=> value.includes('@'), 'El correo no es valido.' ],
  password: [ (value)=> value.length >= 6, 'El password debe tener mas de 6 letras.' ],
  displayName: [ (value)=> value.length >= 1, 'El nombre es obligatorio.' ]
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status])

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { 
    displayName, 
    email, 
    password, 
    onInputChange, 
    formState, 
    isFormValid, 
    displayNameValid, 
    emailValid, 
    passwordValid 
  } = useForm(formData, formValidations);


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ) );
  }

 
  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid { isFormValid ? 'Valido.' : 'Incorrecto' }</h1>
      <form
        className=" animate__animated animate__fadeIn animate__faster"
        onSubmit={ onSubmit }
      >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              label="nombre"
              placeholder="ingrese su nombre"
              fullWidth
              name="displayName"
              type="text"
              value={ displayName }
              onChange={ onInputChange }
              error={ !displayNameValid && formSubmitted }
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label="correo"
              placeholder="Ingrese su correo"
              fullWidth
              name="email"
              type="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label="contraseña"
              placeholder="Escriba su contraseña"
              fullWidth
              name="password"
              type="password"
              value={ password }
              error={ !!passwordValid && formSubmitted }
              onChange={ onInputChange }
              helperText={ passwordValid }
            />
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid
              item 
              xs={12}
              display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity="error">
                  { errorMessage }
                </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                fullWidth type="submit"
                disabled={ isCheckingAuthentication }
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/login">
              Ir al Login 
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

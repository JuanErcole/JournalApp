import { Google } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              label="Correo"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label="contraseña"
              placeholder="Escriba su contraseña"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label="Confirme su contraseña"
              placeholder="Confirme su contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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

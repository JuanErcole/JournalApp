import { Google } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
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
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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

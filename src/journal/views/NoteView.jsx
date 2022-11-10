import { SaveOutlined } from "@mui/icons-material"
import { Grid, Typography, Button, TextField } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {
  return (
    
    <Grid container direction="row" justifyContent="space-between" alignItems='center' sx={{mb: 1}}>

      <Grid item>
        <Typography fontSize={39} fontWeight='light' >28 de agosto, 2023 </Typography>
      </Grid>

      <Grid item>
        <Button sx={{ padding: 2 }}>
          <SaveOutlined sx={{fontSize: 35, fontWeight:'light', mr: 2 }}/>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Titulo"
          placeholder="Ingrese un titulo"
          sx={{ borde: 'none', mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el dia de hoy?"
          minRows={5}
          sx={{ borde: 'none', mb: 1 }}
        />
      </Grid>

      <ImageGallery />

    </Grid>

  )
}

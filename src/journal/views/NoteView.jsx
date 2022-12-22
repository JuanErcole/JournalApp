import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material"
import { useRef } from "react"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useForm } from "../../hooks/useForm"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import { ImageGallery } from "../components"


export const NoteView = () => {

  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal);
  const { body, title, date, onInputChange, formState  } = useForm( note );

  const dateString = useMemo(() =>{

    const newDate = new Date( date );
    return newDate.toUTCString();

  },[date])

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch( setActiveNote(formState) )
  
  }, [formState])

  useEffect(() => {
    
    if(messageSaved.length > 0){
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  
  }, [messageSaved])

  const onFileInputChange = ({ target }) =>{
    
    if( target.files === 0 ) return;

    dispatch( startUploadingFiles( target.files ) )
  }

  const onDelete = () =>{
    dispatch ( startDeletingNote() );
  }

  const onSaveNote = () =>{
    dispatch ( startSaveNote() );
  }

  

  return (
    
    <Grid container direction="row" justifyContent="space-between" alignItems='center' sx={{mb: 1}}>

      <Grid item>
        <Typography fontSize={39} fontWeight='light' >{ dateString } </Typography>
      </Grid>

      <Grid item>
        <input 
          type="file" 
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange } 
          style={{display: 'none'}}
        />

        <IconButton
          color="primary"
          disabled={ isSaving }  
          onClick={ ()=> fileInputRef.current.click() }
        >
          <UploadOutlined/>
        </IconButton>

        <Button sx={{ padding: 2 }} onClick={ onSaveNote } disabled={ isSaving }>
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
          name="title"
          onChange={ onInputChange }
          value={title}
          sx={{ borde: 'none', mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el dia de hoy?"
          name="body"
          value={body}
          onChange={ onInputChange } 
          minRows={5}
          sx={{ borde: 'none', mb: 1 }}
        />
      </Grid>

      <Grid container justifyContent='end'>
        <Button
          onClick={ onDelete }
          sx={{ mt: 2 }}
          color='error'
        >
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>

      <ImageGallery images={ note.imageUrls } />

    </Grid>

  )
}

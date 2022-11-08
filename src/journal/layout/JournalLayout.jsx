import { Box } from "@mui/system"

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex'}}>

        {/* NavBar drawerWidth */}
        
        {/* sideBar drawerWidth */}

        <Box 
          component='main'
          sx={{flexGrow: 1, p: 3}}  
        >
          {/* ToolBar */}

          {children}

        </Box>

    </Box>
  )
}

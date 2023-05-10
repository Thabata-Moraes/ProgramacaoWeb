import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';


export default function FooterBar() {
  return (
    <Toolbar 
        variant="dense" 
        element="footer" 
        sx={{ 
            backgroundColor : 'action.disabledBackground',
            justifyContent: 'center',
            position: 'fixed',
            bottom: 0,
            width: '100vw',
            '& a': {
                color: 'secondary.light'
            }
        }}>
        <Typography variant='caption' sx={{color: 'text.secondary'}}>
            Desenvolvido com café por <a href='mailto:thabatams16@gmail.com'>Thabata Moraes</a>. Todos os direitos reservados.
        </Typography>
    </Toolbar>
      
  );
}

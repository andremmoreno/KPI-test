import * as React from 'react';
import { Avatar, AppBar, Box, Toolbar, Typography } from '@mui/material';
import { UserTypography } from './style';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  const user = {
    name: 'Remy Sharp',
    avatar: "/static/images/avatar/1.jpg"
  }

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', top: 0, 'z-index': 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ textDecoration: 'none', color: '#FFF' }}>
              Key People Insights - KPI
            </Link>
          </Typography>
          <UserTypography>
            {`Olá, ${user.name}`}
          </UserTypography>
          <Avatar alt={ user.name } src={ user.avatar }/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
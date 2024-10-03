import * as React from 'react';
import Grid from './Grid'
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import ChatIcon from '@mui/icons-material/Chat';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsIcon from '@mui/icons-material/Settings';
import EventIcon from '@mui/icons-material/Event';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupsIcon from '@mui/icons-material/Groups';

function SideBar() {
  const icons=[
    <ErrorIcon/>,<AccountCircleRoundedIcon/>,<SupervisorAccountRoundedIcon/>,<GroupsIcon/>,<EventIcon/>
  ]
  const drawer = (
    <div>      
      <Toolbar />
      <Divider />
      <List>
        {['Flagged Items   100+', 'Users', 'Admin Users', 'Dating Events', 'Events'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  {icons[index % 5]} 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['System Settings', 'System Messages'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <ChatIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (   
    <>
      <div style={{ marginTop: '128px' }}>
        <Drawer
          variant="permanent">
          {drawer}
        </Drawer> 
      </div>
      <div style={{ paddingLeft: '230px'}}>
        <Grid/>
      </div>
      </>
  );
}

export default SideBar;

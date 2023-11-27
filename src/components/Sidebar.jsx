import React from 'react';
import { Box} from "@mui/system";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import {Home, Article, Groups, AccountBox, Settings, Storefront, Diversity3, ModeNight} from '@mui/icons-material';


const Sidebar = ({mode,setMode}) => {
  return (
    <Box   p={2} flex={1} sx={{display: {xs:"none", sm:"block"}}}>
<Box position="fixed"> 
<List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
          <ListItemButton component="a" href='#page'>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>  
          <ListItemButton component="a" href='#group'>
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>  
          <ListItemButton component="a" href='#market-place'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>  
          <ListItemButton component="a" href='#goto-friends'>
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>  
          <ListItemButton component="a" href='#goto-Settings'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>  
          <ListItemButton component="a" href='#goto-profile'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>  
          <ListItemButton component="a" href='#goto-profile'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>

          </List>

</Box>

    </Box>
  )
}

export default Sidebar
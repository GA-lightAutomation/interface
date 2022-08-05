import react, { useState } from 'react' 
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, Button  } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material'; 


const drawerWidth = 240
const navItem = [ "Light switch", "How to operate", "Settings"] 

export default function Navbar() {

    const [mobileNav, setMobileNav] = useState(false) 

    const handleMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    const [anchorEl, setAnchorEl] = useState(null) 

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    } 

    const handleClose = (e) => {
        setAnchorEl(null)
    } 

    const drawer = (
        <Box onClick={handleMobileNav} sx={{ textAlign: 'center'}}>
            <Typography variant="h2" sx={{ 
                                           my:'2', 
                                           fontSize:'1rem'
                                        }}>
                Academy light switch
            </Typography>
            <Divider /> 
            <List >
                {
                    navItem.map( (item) => {
                       <ListItem key={item} disablePadding>
                          <ListItemButton sx={{ textAlign:'center'}}>
                               <ListItemText primary={item}/>
                          </ListItemButton>
                       </ListItem>
                    })
                }
            </List>
        </Box>
    )

    return (
        <>
            <AppBar position={"sticky"} sx={{
                background: "#062543"
            }}> 
                <Toolbar>
                    <IconButton 
                    size='medium' 
                    edge='start' 
                    color='inherit'
                    aria-label='menu' 
                    sx={{
                        mr: '2'
                    }}   
                    onClick={handleMobileNav}  
                    >
                    <MenuIcon /> 
                    </IconButton> 
                    <Typography variant='h2' component="div" sx={{ 
                                                                flexGrow: 1, 
                                                                fontSize: '0.8rem', 
                                                                paddingLeft: '1rem' 
                                                            }}>
                        Academy light switch
                    </Typography>
                    <IconButton 
                    size='medium'
                    aria-label='acccount-for-current-user'
                    aria-controls='app-bar'
                    aria-haspopup='true'
                    color='inherit'
                    onClick={handleMenu}
                    >
                    <AccountCircle />
                    </IconButton>
                    <Menu
                        id='app-bar' 
                        anchorEl={anchorEl} 
                        anchorOrigin={{
                            vertical: 'top',  
                            horizontal: 'left'
                        }} 
                        keepMounted
                        transformOrigin={{
                            vertical: 'top', 
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorEl)} 
                        onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>Steve Kimoi</MenuItem> 
                    <MenuItem onClick={handleClose}>Account</MenuItem>
                    <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    { navItem.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                        {item}
                        </Button>
                    ))}
                    </Box>
                </Toolbar>

            </AppBar> 

            {/* <Box component="div">
                <Drawer 
                    container={'container'} 
                    variant='temporary'
                    open={mobileNav} 
                    onClose={handleMobileNav} 
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                  {drawer}
                  <h1>Title</h1>
                </Drawer>
            </Box>  */}
        </> 
    )
}
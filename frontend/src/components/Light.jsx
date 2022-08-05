import React, { useState } from 'react'
import { Button, ButtonGroup, Container, Paper, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import bulbOn from './Images/bulbOn.png' 
import bulbOff from './Images/bulbOff.png'
import { CircularProgress } from '@mui/material'

const BulbComponent = styled('div')(( {theme}) => ({
    padding: '12px', 
    marginTop: theme.spacing(2), 
    margin: 'auto', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
})) 

export default function Light() {
    const [on, setOn] = useState(false) 
    const [loader, setLoader] = useState(false)

    const turnOn = () => {
        setLoader(true) 
        setTimeout( () => {
            setOn(true)
            setLoader(false)
        }, 3000)

    }

    const turnOff = () => {
        setLoader(true) 
        setTimeout( () => {
           setOn(false) 
           setLoader(false)
        }, 3000) 
    }

    return (
        <Container maxWidth={'xl'} sx={theme => ({
            background: theme.palette.background,
            width: '100%', 
            minHeight: '100vh'
        })} component={Paper} 
        >  
            
            {
                loader ?        
                        <Box  sx={{
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            paddingTop: '200px'
                        }}>
                            <CircularProgress /> 
                        </Box> 
                        : 
                        <Container maxWidth={"xl"} sx={theme => ({
                                                        background: theme.palette.background,
                                                        width: "100%",
                                                        minHeight: "100vh",
                                                        paddingTop: '100px'
                        })} component={Paper}
                        >
                            <div style={{
                                paddingTop: "12px"
                            }}>
                            </div>
                            <BulbComponent>
                                {
                                    on? <img src={bulbOn} alt={"bulb-off"} height={240} />
                                        :<img src={bulbOff} alt={"bulb-off"} height={240} />
                                }
                            </BulbComponent>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: "12px"
                            }}>
                            <ButtonGroup size={"large"}>
                                <Button variant={"contained"}
                                        onClick={turnOn}
                                        disabled={on}
                                >On</Button>
                                <Button variant={"contained"}
                                        onClick = {turnOff}
                                        disabled={!on}
                                >Off</Button>
                            </ButtonGroup>
                            </div>
                        </Container>
            }
        </Container>
    )
}
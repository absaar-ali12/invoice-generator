import {React} from 'react'
import '../App.css'
import { Button, Grid, Card, Typography } from '@mui/material'
import { createMuiTheme, ThemeProvider } from '@mui/material'
import logo512 from '../public/logo512.png';

const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#212121'
        } 
    },
    typography:{
        h1:{
            fontSize:'55px',
            fontWeight:'550'
        },
        fontFamily:'Lato'
    }
})

const Home = () =>{
    return(
        <div>
            
            <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <div  id="landingGrid" className="homePage">
                     <br/> 
                    <Typography variant='h1' color='primary' className="textSize">Invoice Generation System<span></span> </Typography>
                     <Typography className="homeAdjust">Major Project 2023, Invoice Generation System created using MERN Stack</Typography> <br></br><br></br>
                    <Button variant='contained' href="/SignIn" className="getStarted" >Get Started </Button></div>
                </Grid>
                
                {/* scrolling bar */}
                <Grid item xs={12} sm={6}>
                    <Card><div className='main-scroll-div'>
                      <main>
                        <div className='scroll-bg'>
                            <div className='scroll-div'>
                                <div className='scroll-object'>                                                                          
                                <div><img className='mainimg' src={logo512} alt="per1"  /></div>                                                                                                                                         
                                    
                                </div>
                            </div>
                        </div>
                                    </main></div>
                    </Card>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
        
    )

}
export default Home

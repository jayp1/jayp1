import React from 'react';
/*import { Grid, Paper } from '@material-ui/core';*/
import './Main.css';
import { Projects } from './Projects/Projects';

export default props => (
  <main className="Main">
    <div id="Summary">
        <h1>Hi, I am Jarryd.</h1>
        <p>I build awesome web experiences with modern technology.</p>
    </div>
{/*
    <Grid container>
      <Grid item xs sm>
        <Paper elevation={3} style={styles.Paper}>
          Left Pane
        </Paper>
      </Grid>
      <Grid item xs sm>
        <Paper elevation={3} style={styles.Paper}>
          Right Pane
            </Paper>
      </Grid>
    </Grid>
*/}
    <Projects />


  </main>

);
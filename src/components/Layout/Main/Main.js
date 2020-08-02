import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import './Main.css';

const styles = {
    Paper: {
      padding:20,
      margin: 20,
      
    }
  }

export default props => (
   <main className="Main">
     <div className="Summary"> 
       <p>I am an technical operations executive </p>
     </div>
     
     {/*<Grid container>
      <Grid item sm>
        <Paper elevation={3} style={styles.Paper}>
            Left Pane
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper elevation={3} style={styles.Paper}>
            Right Pane
            </Paper>
      </Grid>
    </Grid>*/}
   </main>
    
  );
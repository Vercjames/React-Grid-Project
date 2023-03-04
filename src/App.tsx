import React from 'react';
import { useState } from 'react'
import {Box, Card, Grid, Typography} from "@mui/material";


export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Box className="App">
      <section style={{ margin: 10}}>
        <Typography variant="h6" component="h6">
          Fixed Grid Showcasing Column and Row Spacing
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
                8 Units
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
                4 Units
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
                4 Units
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
                8 Units
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </section>

      <section style={{ margin: 10}}>
        <Typography variant="h6" component="h6">
          Reactive Grid that is mobile responsive
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
                3md, 6sm, 12xs
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
                3md, 6sm, 12xs
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
               3md, 6sm, 12xs
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: 1, backgroundColor: "black"}}>
              <Typography variant="body1" component="p" sx={{ textAlign: "center", color: "white"}}>
                3md, 6sm, 12xs
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </section>

    </Box>
  )
}

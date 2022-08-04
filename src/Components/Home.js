import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { CardActionArea } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  backgroundImage: 'url("bg.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  

}));
export function Home() {
  const navigate = useNavigate();
  return (<div style={{
    
  }}>
    <Typography mt="10px" gutterBottom variant="h3" textAlign="center" component="div">
      SHOES STORE
    </Typography>
    <Typography
      variant="h4"
      color="primary"
      align="center"
    >
      streetwear / lifestyle / sports
    </Typography>
    <Grid container spacing={2} my={4}>


      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 'xs', margin: '30px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="https://i.insider.com/5ad60080146e712d008b4ba3?width=1136&format=jpeg"
            onClick={() => navigate("/men")}
          />
          <CardContent>
            <Typography textAlign="center" color="primary" gutterBottom variant="h5" component="div">
              Men
            </Typography>

          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 'xs', margin: '30px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="https://fcity.in/images/products/85920902/m3wrc_512.jpg"
            onClick={() => navigate("/women")}
          />
          <CardContent>
            <Typography textAlign="center" color="primary" gutterBottom variant="h5" component="div">
              Women
            </Typography>

          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 'xs', margin: '30px' }} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="https://m.media-amazon.com/images/I/710vHRPuILL._AC_UL1500_.jpg"
            onClick={() => navigate("/kids")}
          />
          <CardContent >
            <Typography textAlign="center" color="primary" gutterBottom variant="h5" component="div">
              Kids
            </Typography>

          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>

  </div>);
}

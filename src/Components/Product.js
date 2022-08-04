import React, { useContext } from "react";
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
import { GlobalContext } from './Context/GlobalContext';
import { margin } from "@mui/system";
import {useNavigate } from "react-router";
import { CardActionArea } from '@mui/material'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export function Product({ category }) {
  const { products } = useContext(GlobalContext);
  const navigate = useNavigate();
  const allProductsForGender = products.filter(
    (product) => product.gender.toLowerCase() === category.toLowerCase()
  );
  
  // console.log(allProductsForGender)
  return (<>
    <Typography m={3} color="primary" variant="h4" align="center" component="div">
      {category.toUpperCase()} Category
    </Typography>
    <Grid container spacing={2}  >
      {allProductsForGender.map((pro) => {
        // ,flexDirection: { xs: "column", md: "row"}

        return <Grid item xs={12} sm={6} md={4} key={pro.id} >
          <Card sx={{ maxWidth: 'xs', margin: '15px' }}
          >
            <CardActionArea  onClick={()=>{navigate(`/productitem/${pro.slug}`) }}>
            <CardMedia
              component="img"
              height="200"
              image={pro.imageURL}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pro.name}
              </Typography>
              <Typography variant="body2" color="primary">
              <span style={{fontSize:"20px",color:"black"}} > Brand </span> {pro.brand}
              </Typography>
            </CardContent>
            <CardActions style={{justifyContent:'space-around'}}>
              <Typography  size="large" color="primary">Items Left: {pro.items_left}</Typography>
              <Typography size="large" color="primary">Price: ${pro.price}</Typography>
            </CardActions>
            </CardActionArea>
          </Card>

        </Grid>


      })}
    </Grid>
  </>);
}








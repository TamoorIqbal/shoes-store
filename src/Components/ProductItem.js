
import * as React from 'react';
import { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { GlobalContext } from './Context/GlobalContext';
import { Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Rating from '@mui/material/Rating';
import Fab from '@mui/material/Fab';


export function ProductItem() {
  const { products, addCart, } = useContext(GlobalContext);
  const { id } = useParams();
  const [rating] = useState(3.5);
  // console.log(id);

  // const singleProducts = products.filter(
  //   (product) => product.slug.toLowerCase() === id.toLowerCase()
  // );
  // const item =singleProducts[0].items_left
  // const [leftItem, setLeftItem] = useState({item})
  // console.log(singleProducts[0].name);
  // if (products.length < 0) {
  //   return <h1>Loading....</h1>
  // }

  const singleProducts = products.find((product) => product.slug.toLowerCase() === id.toLowerCase());

  if (!singleProducts) return <p>Product not found</p>;


  return (< >
    <Grid container spacing={1}  >
      <Grid item xs={12} md={6} >
        <Card sx={{ maxWidth: 'xs', margin: '30px' }}>

          <CardMedia
            component="img"
            height="350"
            image={singleProducts.imageURL}
            alt="green iguana"

          />
        </Card>



      </Grid>
      <Grid item xs={12} md={6} >
        <Card sx={{ maxWidth: 'xs', margin: '30px', height: "350" }}>

          <CardContent >
            <Typography gutterBottom variant="h4" component="div">
              {singleProducts.name}
            </Typography>
            <Typography variant="body2" color="primary">
              <span style={{ fontSize: "20px", color: "black" }} > Brand Name : </span>
              {singleProducts.brand}
            </Typography>
            <Typography variant="body2" color="primary">
              <span style={{ fontSize: "20px", color: "black" }} > Description </span>
              A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function
            </Typography>
            <Grid
              item
              container
              justify="center"
              spacing={1}
              style={{ marginTop: 30 }}
            >
              <Grid item xs={6}>
                <Typography variant="button">Price</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button"> ${singleProducts.price}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">Items left</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">{singleProducts.items_left}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">Rating</Typography>
              </Grid>
              <Grid item xs={6}>
                <Rating value={rating} precision={0.5} readOnly />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box textAlign='center'>
          <Button variant='contained'
            onClick={() => (addCart(singleProducts))}
            disabled={singleProducts.items_left <= 0}
            size="largr">
            Cart
            <ShoppingCartIcon style={{ margin: '0px 5px' }}
              size="large"
              aria-haspopup="true" >
            </ShoppingCartIcon>
          </Button>
        </Box>
        
      </Grid>
    </Grid>

  </>);
}


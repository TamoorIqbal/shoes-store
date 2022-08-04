import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CancelIcon from '@mui/icons-material/Cancel';
import Fab from '@mui/material/Fab'

import { GlobalContext } from './Context/GlobalContext';
export function Cart() {
  const { cart ,cancelCartItem} = useContext(GlobalContext);

  // console.log(cart);
  
   
    
  
  return (
    <Container >
      <Typography m={3} color="primary" variant="h4" align="center" component="div">
        Your cart
      </Typography>
      <Typography variant="button" component="p">
        {/* Total: <strong>${totalPrice}</strong> */}
      </Typography>
      {cart.map((pro) => {
        return <Grid container spacing={1} mt={10} key={pro.id} >
            <Grid item xs={6} md={6}>
              <Card sx={{ maxWidth: 'xs' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={pro.imageURL}
                  alt="green iguana"
                />
              </Card>
            </Grid >

            <Grid item xs={6} md={6} >
              <Card sx={{ maxWidth: 'xs',height:"250px"}} >
              <Grid
            item
            container
          
            spacing={1}
            style={{ marginTop: 30,marginLeft :2}}
          >
                <Grid item xs={7}>
                  <Typography   variant="button" >{pro.name} </Typography>
                </Grid>
                <Grid item xs={5} >
                  
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      onClick={()=>{cancelCartItem(pro)}}
                    >
                    <CancelIcon />
                  </Fab>
                    
                 
                </Grid>
                <Grid item xs={12} >
                  <Typography  variant="button">{pro.brand}</Typography>
                </Grid>
                
                <Grid item xs={12} >
                  <Typography  variant="button">Price : $ {pro.price}</Typography>
                </Grid>
                <Grid item xs={12} >
                  <Typography  variant="button">Qty : {pro.items}</Typography>
                </Grid>
                </Grid>
              </Card>
            </Grid>
        </Grid>
      })

      }
    </Container>
  );
}


import { withStyles } from '@material-ui/core/styles';
import backgroundImage from 'assets/img/free/pizzaOven.jpg';
import Button from 'components/Button';
import Typography from 'components/Typography';
import PropTypes from 'prop-types';
import React from 'react';

import ProductHeroLayout from './ProductHeroLayout';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Souk is a place to find amazing food in your neighborhood at the lowest
        price possible. We do not take a slice of the profits from your order,
        so both you and your local businesses can afford it.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/login"
      >
        Let&apos;s eat!
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Support independant eateries!
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);

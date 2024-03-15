import React, { useState, useEffect, createRef, Fragment } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/placeDetails.component';

import useStyles from './list.styles';

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, index) => elRefs[index] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant='h5'>
        Restaurantes, Hotéis & Atrações para você
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <Fragment>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value='restaurants'>Restaurantes</MenuItem>
              <MenuItem value='hotels'>Hotéis</MenuItem>
              <MenuItem value='attractions'>Atrações</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Classificação</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>3.0</MenuItem>
              <MenuItem value={4}>4.0</MenuItem>
              <MenuItem value={4.5}>4.5</MenuItem>
            </Select>
          </FormControl>
          <Typography variant='subtitle1' className={classes.marginBottom}>
            {places?.length > 0 ? (
              `Showing ${places.length} results`
            ) : (
              <div className={classes.loading}>
                <CircularProgress size='5rem' />
              </div>
            )}
          </Typography>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, index) => (
              <Grid ref={elRefs[index]} item key={index} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                  refProp={elRefs[index]}
                ></PlaceDetails>
              </Grid>
            ))}
          </Grid>
        </Fragment>
      )}
    </div>
  );
};

export default List;

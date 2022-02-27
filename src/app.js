import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Map from './components/map/map';
import List from './components/list/list';
import Header from './components/header/header';
import PlaceDetails from './components/place-details/place-details';

const app = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </>
    );
};

export default app;

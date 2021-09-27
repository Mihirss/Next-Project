import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { Grid } from '@mui/material';
import Head from 'next/head';



function Feeditem() {
    const [feedData, setFeedsdata] = useState([])
    // const [myData, setMyData] = useState([])

    useEffect(() => {
        async function getDAta() {
            const resource = await axios.get('https://reqres.in/api/users');
            console.log(resource)
            // const myData = resource
            setFeedsdata(resource.data.data)
            console.log(feedData)
        }
        getDAta();
    }, [])
    return (
        <>
            <Head><title>Feed</title></Head>
            <Grid align='center'><h1>Feed Page</h1></Grid>
            <Grid container spacing={2}>
                {feedData.map((item) => (
                    <Card item={item} />
                ))}
            </Grid>
        </>
    )
}

export default Feeditem

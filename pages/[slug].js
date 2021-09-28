import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { Grid } from '@mui/material';
import Head from 'next/head';


function slugs() {
    const [feedData, setFeedsdata] = useState([])
    const router = useRouter(null)
    const slug = router.query

    useEffect(() => {
        async function getDAta() {
            const resource = await axios.get(`https://reqres.in/api/${slug}`);
            console.log(resource)
            // const myData = resource
            setFeedsdata(resource.data)
            console.log(feedData)
        }
        getDAta();
    }, [])
    return (
            <>
            <Head><title>Feed With Slug</title></Head>
            <Grid align='center'><h1>Feed With Slug Page</h1></Grid>
            <Grid container spacing={2}>
                {feedData.map((item) => (
                    <Card item={item} />
                ))}
            </Grid>
        </>
    )
}

export default slugs

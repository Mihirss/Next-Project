import Card from '../Components/Card'
import { Grid } from '@mui/material';
import Head from 'next/head';

function Userlist({ data }) {
    return (
        <>
            <Head><title>ServerSide</title></Head>
            <Grid align='center'><h1>Server Side Props</h1></Grid>
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Card item={item} />
                ))}
            </Grid>
        </>
    )
}

export default Userlist


export async function getServerSideProps() {

    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()

    console.log(data.data)

    return {
        props: {
            data: data.data
        },
    }
}
import Card from '../Components/Card'
import { Grid } from '@mui/material';

function Userlist({ data }) {
    return (
        <>
            <Grid align='center'><h1>static Props</h1></Grid>
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Card item={item} />
                ))}
            </Grid>
        </>
    )
}

export default Userlist


export async function getStaticProps() {

    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()

    console.log(data.data)

    return {
        props: {
            data: data.data
        },
    }
}
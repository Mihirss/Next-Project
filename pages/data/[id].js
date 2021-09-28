import Card from '../../Components/Card'
import { Grid } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router'



function Userlist({ data }) {
    return (
        <>
            <Head><title>Slug Passing</title></Head>
            <Grid align='center'><h1>slug</h1></Grid>
            <Grid container spacing={2}>
                    <Card item={data} />
            </Grid>
        </>
    )
}

export default Userlist


export async function getStaticProps(context) {
    // const router = useRouter();
    // const {slug} = router.query;
    const id = context.params.id;


    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()

    console.log(data.data)

    return {
        props: {
            data: data.data
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://reqres.in/api/users')
    const post = await res.json()
    const posts = post.data

    const paths = posts.map((item) => ({

        params: { id: item.id.toString() },
      }))
      return { paths, fallback: false }
}
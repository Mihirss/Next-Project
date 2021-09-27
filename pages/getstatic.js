
function Userlist({data}) {
    return (
        <ul>
          {/* {data.map((item) => (
            <li>{item.first_name}</li>
          ))} */}
        </ul>
      )
}

export default Userlist

export async function getStaticProps() {
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    console.log(data)

    return{
        props:{
            data,
        },
    }
}
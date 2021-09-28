import React from "react";
import Link from 'next/link'

const Navbar = () => {
    return (
        <>  
            <h1>Welcome To Next.js</h1>
            <h3>Select any below page to see the routing in next js</h3>
            <ul>
                <li><Link href='/TodoListApp'><a>To-Do list</a></Link></li>
                <li><Link href='/Feed'><a>Feed Page</a></Link></li>
                <li><Link href='/getstatic'><a>Get Static Method</a></Link></li>
                <li><Link href='/serverside'><a>Ger Serverside Method</a></Link></li>
                <li><Link href="/data/[id]" as="/data/1"><a>First Feed 1</a></Link></li>
                <li><Link href="/data/[id]" as="/data/2"><a>First Feed 2</a></Link></li>
                <li><Link href="/data/[id]" as="/data/3"><a>First Feed 3</a></Link></li>
                <li><Link href="/data/[id]" as="/data/4"><a>First Feed 4</a></Link></li>
                <li><Link href="/data/[id]" as="/data/5"><a>First Feed 5</a></Link></li>
                <li><Link href="/data/[id]" as="/data/6"><a>First Feed 6</a></Link></li>
                <li><Link href="/data/[id]" as="/data/7"><a>First Feed 7</a></Link></li>
            </ul>
        </>
    )
}

export default Navbar;
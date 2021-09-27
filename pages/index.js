import React from "react";
import Link from 'next/link'

export default function App() {
    return (
        <>
                <ul>
                    <li><Link href='/TodoListApp'><a>To-Do list</a></Link></li>
                    <li><Link href='/Feed'><a>Feed Page</a></Link></li>
                    <li><Link href='/getstatic'><a>Get Static Method</a></Link></li>
                    <li><Link href='/serverside'><a>Ger Serverside Method</a></Link></li>
                </ul>
        </>
    )
}

import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Blog() {
    const router = useRouter();

    // Navigation via button click
    const clickHandler = () => {
        router.push('/blog/title-3');
    }
    return(
        <>
        <h1>
        <Link href='blog/title-1' replace>Title 1</Link>
        </h1>
        <h1>
        <Link href='blog/title-2'>Title 2</Link>
        </h1>
        <h1>
            <button onClick={clickHandler}>Title 3</button>
        {/* <Link href='blog/title-3'>Title 3</Link> */}
        </h1>
        <h1>
        <Link href='blog/title-4'>Title 4</Link>
        </h1>
        <h1>
        <Link href='blog/title-4'>Title 5</Link>
        </h1>
        </>
    )
}
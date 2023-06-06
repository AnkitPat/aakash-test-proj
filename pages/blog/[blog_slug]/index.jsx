import React from "react";
import { useRouter } from 'next/router';

// Dynamic routing
export default function BlogSlug() {
    const router = useRouter();
    console.log(router);
    const slug = router.query.blog_slug
    return(
        <>
        <h1>This is the {slug}</h1>
        </>
    )
}
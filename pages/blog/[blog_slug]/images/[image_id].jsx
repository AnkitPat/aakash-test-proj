import React from "react";
import { useRouter } from 'next/router';

// Nesting of dynamic routes
export default function ImageId() {
    const router = useRouter();
    const {blog_slug, image_id} = router.query;
    return(
        <>
        <h1>this is the {image_id} image of {blog_slug} </h1>
        </>
    )
}
import React from 'react';
import Image from 'next/image';
import { getAllBlogs, getBlog } from '@/services/blogService';
import { describe } from 'node:test';
// export const dynamic = 'force-static'
// export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    const blogs = (await getAllBlogs()).data;
    if (blogs && blogs.length > 0) {
        let final = blogs.map((blog: BlogI) => ({
            slug: blog.id
        }))

        return final;
    } else {
        return [];

    }


}

export default async function Page({ params }: any) {
    let { slug } = params
    console.log("id before", slug)
    // console.log("ID", id.toString())
    // let { id } = params

    // const formattedQueryParams = `?${searchParams.toString()}`;
    // console.log("formattedQueryParams", searchParams);
    let data = (await getBlog(slug)).data;
    // console.log("data", data)
    let blog = data as BlogI ?? null;
    // console.log("blogsss",blogsss)
    // let blog: any = {
    //     title: "dskjj",
    //     thumbnail: "sdjhbfkjws",
    //     description: "skdj",
    //     content: "skdj",
    // };
    // const retrieveBlogData= async()=>{
    //     getBlog(id).then(data => {
    //         blog = data.data as BlogI ?? null;
    //     })
    // }
    //    retrieveBlogData()

    return (
        <div>
            <div className="desktopBlogInnerPage">
                <div className="innerpage_title">{blog?.title}</div>
                {/* <div className="w-full overflow-hidden" style={{display:"flex", justifyContent: "center", maxWidth:"30vh", maxHeight:"30vh"}}>
                <Image src="/blog/thumbnail (3).png" alt='Sample Image' width="200" height="500" layout="responsive" />
            </div> */}
                {/* <div style={{display: "flex",justifyContent: "center", backgroundSize: "cover", paddingTop:"40px"}}>
                    <Image src="/blog/thumbnail (3).png" alt={"sampleImage"} width="700" height="450"/>
                </div> */}
                {/* <div className="relative">
                <Image layout="responsive" width={700} height={200} alt="Alternate Image" src="/blog/thumbnail (3).png" />
            </div> */}
                {/* <div className="image-container"> */}
                <div className="image-container img"><Image src={blog.thumbnail} alt="Description of the image" width={1000} height={667} /></div>
                {/* </div> */}
                <div className="innerpage_content_padding">
                    {blog.content}
                </div>
            </div>

            <div className="mobileBlogInnerPage">
                <div className="innerpage_title">{blog.title}</div>
                <div className="image-container_mobile">
                    <div className="image-container img_mobile"><Image src={blog.thumbnail} alt="Description of the image" width={1000} height={667} /></div>
                </div>
                {/* <div style={{display: "flex", justifyContent:"center", backgroundSize:'contain', paddingTop:"40px"}}><div className="background_img"></div></div> */}
                <div className="innerpage_content_padding">
                    {blog.content}
                </div>
            </div>
        </div>
    )

    // let { id } = params;
    // //same name as name of your file, can be [slug].js; [specialId].js - any name you want
    // console.log("main  " + id);
    // console.log("main  " + (!id.match("[id]")));
    // let blog: any;


    // if (id) {
    //     getBlog(id).then(data => {
    //         blog = data.data as BlogI ?? null;
    //     })
    //     // let blog = (await getBlog(id)).data as BlogI ?? null;

    //     console.log("mainblog");

    //     if (!blog) {
    //         return <></>
    //     }
    //     return (

    //     )
    // }

    // return (
    //     <div>
    //         <p>TEST</p>
    //     </div>
    // )

}


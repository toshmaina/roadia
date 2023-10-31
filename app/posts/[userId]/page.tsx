import getPosts from "@/lib/getPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";


/* export metadata = {
    title:
} */


export const generateMetadata = async ({ params: { userId } }: Post):Promise<Metadata> => {
    const postData:Promise<Person> =  getPosts(userId);
    const post = await postData;
   
    console.log(post);
    
   return {
        title: Boolean(post.id) ?  `Post ${post.id}`: 'Post not found',
        description: `This is the page for post ${post.id}`
    }

    
    
}




interface   Person {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

const page = async ({ params: { userId } }: Post) => {
     const postData:Promise<Person> =  getPosts(userId);
    const post: Person  = await postData;

    
return  <section>
                <h1>{post.name}</h1>
                <p>{post.email}</p>
        </section>
        
    
}

export default page;

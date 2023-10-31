import axios from "axios";
import { Metadata } from "next/types";

 const getUsers = async (): Promise<User> => { 
     const res = await axios("http://localhost:3000/api/users");
    
     return res.data;

}

export const generateMetadata = async ({ params: { userId } }: Post):Promise<Metadata> => {
  const res = await axios("http://localhost:3000/api/user",{
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  const post = res.data;
   
    console.log(post);
    
   return {
        title: Boolean(post.name) ?  `Post ${post.name}`: 'Post not found',
        description: `This is the page for post ${post.id}`
    }

    
    
}
const page = async () => {
   const {name,age} = await getUsers();
  return (
    <div>
          <p>My name is {name}</p>
          <p>My age is {age}</p>
    </div>
  );
}

export default page;

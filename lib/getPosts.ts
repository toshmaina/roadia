interface Props{
    params:
    { userId: string }
}

const getPosts = async (userId:string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
}
export  default getPosts;
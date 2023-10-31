export const GET = () => {
    //create the data object to send to the client
    //or fetch the data from the server
    const users = {
        name: "James Maina",
        age: 20
    }

    //send the data to the client as the response
    return new Response(JSON.stringify(users));
 }
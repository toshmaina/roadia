//This is a file that is used to define all the data types to be used in the application
//It is created inside the app directory to be available globally in the entire application


type User = {
    name: string;
    age: number;

}

type Post = {
    params:
    { userId: string }
}
  type EachPost =  {
    userId: number;
    id: number;
    title: string;
    body: string;
}
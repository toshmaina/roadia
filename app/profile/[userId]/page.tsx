"use client";

type Props = {
    params: {
        userId : string
    }
}
const page = ({params:{userId}}:Props) => {  
  return (
    <div>
          DYNAMIC PROFILE PAGE FOR PROFILE { userId }.     
    </div>
  );
}

export default page;

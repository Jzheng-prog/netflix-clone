import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context)

  if(!session){
    return {
      redirect:{
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props:{}
  }
}
export default function Home() {
  return (
    <div>
      <h1 className="text-green-500">NetFlic Clone</h1>
      <button onClick={()=>signOut()} className="h-10 w-full bg-white">Logout</button>
    </div>
  );
}

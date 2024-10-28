import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

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
  const {data:movie =[]} = useMovieList()

  const {data:favList =['none']} = useFavorites()

  const {isOpen, closeModal} = useInfoModal()

  return (
    <div>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <NavBar/>
      <Billboard/>
      <div className="pb-40">
        <MovieList title="Trending Now" data={movie}/>
        <MovieList title="My List" data={favList}/>

      </div>
    </div>
      
  );
}

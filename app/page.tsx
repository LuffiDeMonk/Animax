import Banner from "@/components/home/Banner";
import CategoryCarousel from "@/components/home/CategoryCarousel";
import Navbar from "@/components/home/Navbar";
import PopularTVCarousel from "@/components/home/PopularTVCarousel";
import TitleContainer from "@/components/home/TitleContainer";
import TopMoviesCarousel from "@/components/home/TopMoviesCarousel";
import TopRatedTVCarousel from "@/components/home/TopRatedTVCarousel";
import { GetUpcomingMovies } from "@/helpers/getUpcomingMovies";

type UpcomingData = {
  results: MovieData[]
}


export default async function Home() {
  const upcoming: Promise<UpcomingData> = GetUpcomingMovies()
  const data = await upcoming
  return (
    <>
      <Banner data={data.results} />
      <TitleContainer
        title="Popular Movies"
        link="/movies/popular"
      />
      <CategoryCarousel />
      <TitleContainer
        title="Top Rated Movies"
        link='/movies/top-rated'
      />
      <TopMoviesCarousel />
      <TitleContainer
        title="Popular TV Shows"
        link="/tv/popular"
      />
      <PopularTVCarousel />
      <TitleContainer
        title="Top Rated TV"
        link="/tv/top-rated"
      />
      <TopRatedTVCarousel />
    </>
  );
}

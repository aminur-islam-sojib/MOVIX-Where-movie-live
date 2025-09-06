// import axios from "axios";
import axios from "axios";
import { useEffect } from "react";
import { setLoading, setRanData } from "./MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { DisplayCard } from "../components/DisplayCard";

const Api = () => {
  const dispatch = useDispatch(null);
  useEffect(() => {
    const keywords = ["batman", "spiderman", "avengers", "matrix", "iron man"];
    const randomKey = keywords[Math.floor(Math.random() * keywords.length)];
    const url = `http://www.omdbapi.com/?s=${randomKey}&apikey=acd989bb`;

    const fetchMovie = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(url);
        const movies = response.data.Search || [];
        dispatch(setRanData(movies));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const datas = useSelector((state) => state.dataR.randomData);
  // console.log(datas);
  return (
    <>
      <section>{<DisplayCard datas={datas} />}</section>
    </>
  );
};

export { Api };

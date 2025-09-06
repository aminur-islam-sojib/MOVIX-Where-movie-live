// import axios from "axios";
import axios from "axios";
import { useEffect } from "react";
import { setLoading, setRanData } from "./MovieSlice";
import { useDispatch } from "react-redux";

const Api = () => {
  const dispatch = useDispatch(null);
  useEffect(() => {
    const keywords = ["batman", "spiderman", "avengers", "matrix", "iron man"];
    const randomKey = keywords[Math.floor(Math.random() * keywords.length)];
    console.log(randomKey);
    const url = `http://www.omdbapi.com/?s=${randomKey}&apikey=acd989bb`;

    const fetchMovie = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(url);
        dispatch(setRanData(response.data.Search));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { Api };

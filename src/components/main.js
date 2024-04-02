import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MovieList } from "../redux/action";

const Main = () => {
  const data = useSelector((state) => state.MovieListReducer);
  const dispatch = useDispatch();
//  console.log(data)
  useEffect(() => {
    dispatch(MovieList());
  }, []);

  return (
    <div className="data">
      <div className="fulldata">
        {data.map((item) => {
            console.log("name",item)
            return(
          <div className="mainData" key={item.id}>
            <Link
            to={`/content/${item.id}`} state={item} 
            >
              <img src={item.img} alt="" />
              <p>Movie: {item.name}</p>
            </Link>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Main;

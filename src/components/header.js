import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../image/logo.png';
import { movieSearch } from "../redux/action";

const Header = () => {
  const result = useSelector((state) => state.MovieListReducer);
    const dispatch = useDispatch();
    console.log("data in header", result);

  return (
    <div className="header">
        <img src={Logo} alt="" width="100" height="80"/>
        <div>
                <input type="text" onChange={(event) => dispatch(movieSearch(event.target.value))} placeholder='Search Movie' /> Search
            </div>
      <div>
        <b><span className="movie">Movie</span><span className="ghor">Ghor</span></b>
      </div>
    </div>
  );
};

export default Header;

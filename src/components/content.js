// import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";

const Content = () => {
  // const data = useSelector((state)=>state.MovieListReducer)
  // const params = useParams()
  // const location = useLocation()
  const { state } = useLocation();
  console.log(state);

  // useEffect(() => {
  //   if(location && location.state){
  //     console.log(location.state)
  //   }
  // }, [location])
  // console.log(location)

  return (
    <div className="content">
      <div className="left-content">
        <p>
          <b>{state?.name}</b>
        </p>
        <img src={state?.img} alt="" />
        {/* <p>Email :{state?.content?.email}</p> */}
      </div>

      <div className="vl"></div>

      <div className="middle">
        <div className="middle-content-1">
          <div>
            <p>
              <b>Movie Trailer</b>
            </p>
            <div className="video">
              <a href={state?.content?.ylink}>
                <div>
                  <img className="img" src={state?.content?.ytheme} alt="" />
                </div>
                <div>
                  <p className="name">{state?.content?.name}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="vl-1"></div>
          <div className="imdb">
            <p>{state?.content?.rating}</p>
            <a href={state?.content?.imdb}>imdb</a>
          </div>
          <div className="vl-1"></div>
          <div className="tomatoes">
            <p>{state?.content?.trating}</p>
            <a href={state?.content?.tomatoes}>Rotten Tomatoes</a>
          </div>
        </div>

        <div className="middle-content-2">
          <a className="download" href={state?.link}>
            <b>Click here to downLoad</b>
          </a>
          <h3>About</h3>
          <p>{state?.content?.about}</p>
          <b>
            Director:{" "}
            <a href={state?.content?.dlink}>{state?.content?.director}</a>
          </b>
          <div>
            <h3>Cast</h3>
            <div className="image">
              <div>
                <img src={state?.content?.image1} alt="" />
                <a href={state?.content?.dlink}>{state?.content?.director}</a>
              </div>
              <div>
                <img src={state?.content?.image2} alt="" />
                <a href={state?.content?.name2link}>{state?.content?.name2}</a>
              </div>
              <div>
                <img src={state?.content?.image3} alt="" />
                <a href={state?.content?.name3link}>{state?.content?.name3}</a>
              </div>
              <div>
                <img src={state?.content?.image4} alt="" />
                <a href={state?.content?.name4link}>{state?.content?.name4}</a>
              </div>
              <div>
                <img src={state?.content?.image5} alt="" />
                <a href={state?.content?.name5link}>{state?.content?.name5}</a>
              </div>
              <div>
                <img src={state?.content?.image6} alt="" />
                <a href={state?.content?.name6link}>{state?.content?.name6}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

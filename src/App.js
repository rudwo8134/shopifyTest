import React, { useState, useEffect } from 'react';
import { getData } from './util/useNasaData';
import * as ContentStyle from './style/contentsStyle.jsx';
import HeaderComponents from './components/HeaderComponents';
import LoadingComponents from './components/LoadingComponents';
import { allText } from './textContents';
import { AiFillHeart } from 'react-icons/ai';
import Noimage from './asset/noimage.png';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [numberData, setNumberData] = useState(10);
  const [userNumber, setUserNumber] = useState(null);
  const [liked, setLiked] = useState([]);

  const handleChange = (e) => {
    setUserNumber(e.target.value);
  };
  const onSubmit = () => {
    setNumberData(userNumber);
  };
  const onLiked = (e, name) => {
    e.preventDefault();
    setLiked([...liked, name]);
  };
  const unLiked = (e, name) => {
    e.preventDefault();
    const undoLikeData = liked.filter((data) => data !== name);
    setLiked(undoLikeData);
  };

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const nasaData = await getData(numberData);
      setLoading(false);
      setData(nasaData);
    };
    fetchdata();
  }, [numberData]);

  // loading screen (while data is fetching)
  if (loading) {
    return <LoadingComponents />;
  }
  // Home screen set up
  return (
    <>
      <HeaderComponents />
      {/* Body Start */}
      <ContentStyle.Wrapper>
        <ContentStyle.DataContainer>
          <input
            name="numberdata"
            onChange={handleChange}
            placeholder={allText.contents.typeNumber}
            type="number"
            min="1"
            max="100"
          />
          <button disabled={userNumber > 100} onClick={onSubmit}>
            {userNumber > 100 ? 'too big' : 'Update'}
          </button>
        </ContentStyle.DataContainer>
        <ContentStyle.ContentsWrapper >
          {data &&
            data?.map((nasa, index) => {
              const Liked =
                liked.filter((data) => data === nasa?.title).length > 0;
              return (
                <ContentStyle.CardWrapper key={index} Liked={Liked}>
                  <h2 className="name">Spacestgram</h2>
                  <span className="APIName">
                    {allText.contents.brought}
                    {nasa?.service_version}
                  </span>
                  <img
                    src={nasa?.url}
                    alt={nasa?.title}
                    className="sourceimg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${Noimage}`;
                    }}
                  />
                  <div className="titleContainer">
                    <span className="title">{nasa?.title}</span>
                    <span className="date">{`(Updated:${nasa?.date})`}</span>
                  </div>
                  <div className="explanation">{nasa?.explanation}</div>
                  <div className="buttoncontainer">
                    {Liked ? (
                      <button onClick={(e) => unLiked(e, nasa?.title)}>
                        <AiFillHeart />
                      </button>
                    ) : (
                      <button onClick={(e) => onLiked(e, nasa?.title)}>
                        like
                      </button>
                    )}
                  </div>
                </ContentStyle.CardWrapper>
              );
            })}
        </ContentStyle.ContentsWrapper>
      </ContentStyle.Wrapper>
    </>
  );
}

export default App;

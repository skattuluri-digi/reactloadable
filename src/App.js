import Loadable from 'react-loadable';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

// import Image from './components/images';

const Image = Loadable({
  loader: () => import('./components/images'),
  loading: "Loading..."
});

const App = () => {

  const [imagesData, setImagesData] = useState([]);

  useEffect(()=>{
    async function getImages(){
      // const data = await axios.get("https://picsum.photos/v2/list?limit=10");
      const data = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10");
      setImagesData(data.data)
    }
    getImages()
  }, [])

  const fetchMoreData = async () => {
    // const data = await axios.get("https://picsum.photos/v2/list?limit=10");
    const data = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10");
    setImagesData(imagesData.concat(data.data))
  }

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={imagesData.length}
        hasMore={true}
        next={fetchMoreData}
        loader={<h4>Loading...</h4>}
      >
        <Image images={imagesData} />
      </InfiniteScroll>
    </div>
  );
}

export default App;

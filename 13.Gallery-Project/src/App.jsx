import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `http://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printuserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printuserData = userData.map(function (elem, idx) {
      return (
        <div>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="grid grid-cols-5 gap-3"> {printuserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className="bg-blue-700 text-sm cursor-pointer active:scale-95 text-white rounded px-4 py-2 font-semibold"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          prev
        </button>

        <h4>Page {index}</h4>

        <button
          className="bg-blue-700 text-sm cursor-pointer active:scale-95 text-white rounded px-4 py-2 font-semibold"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;

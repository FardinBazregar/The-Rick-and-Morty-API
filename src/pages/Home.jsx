/* eslint-disable jsx-a11y/alt-text */
import { clsx } from "clsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Character_List_Api = "https://rickandmortyapi.com/api/character";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // fetch(Character_List_Api)
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setCharacterList(data.results);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    /**
     * OR
     */

    //     const getData = async () => {
    //       try {
    //         setIsLoading(true);
    //         const rawData = await fetch(Character_List_Api);
    //         const data = await rawData.json();
    //         setIsLoading(false);
    //         setCharacterList(data.results);
    //       } catch (e) {
    //         setIsLoading(false);
    //       }
    //     };

    //     getData();
    //   }, []);

    /**
     * OR
     * Axios
     */

    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(Character_List_Api);
        setIsLoading(false);
        setCharacterList(data.results);
      } catch (e) {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {characterList.map(({ name, id, image, status }) => (
        <Link to={`/character/${id}`}>
          <div className="w-[150px] border-gray-700" key={id}>
            <div>
              <img src={image} />
            </div>
            <div className="p-2">
              <h3 className="text-base mb-3">{name}</h3>
              <span
                className={clsx("rounded-full px-4 py-1", {
                  "bg-green-400": status === "Alive",
                  "bg-red-400": status === "Dead",
                  "bg-yellow-400": status === "unknown",
                })}
              >
                {status}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Character_Api = "https://rickandmortyapi.com/api/character";

export const CharacterInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(undefined);

  const { id } = useParams();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${Character_Api}/${id}`);
        setIsLoading(false);
        setUserInfo(data);
      } catch {}
    };
    getUserInfo();
  });
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (!userInfo) {
    return <div> User is not selected ...</div>;
  }
  const { name, image, episode } = userInfo;
  return (
    <div className="p-10">
      <div>
        <img src={image} className="w-[200px] h-[200px] rounded-full mb-4" />
        <h1 className="mb-2">{name}</h1>
        {episode.map((Link) => (
          <a className="text-blue-400  bg-white px-3 " key={Link} href={Link}>
            Episode {Link.split("episode/")[1]}
          </a>
        ))}
      </div>
    </div>
  );
};

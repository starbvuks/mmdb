import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const tokenString = localStorage.getItem("user");
    const userToken = JSON.parse(tokenString);
    const id = userToken.user.id;

    axios
      .get(`http://localhost:451/auth/${id}`)
      .then((res) => {
        setUser(res.data);
        if (user) {
          const fav = user.favorites;
          fav.map((data) => {
            axios
              .get(`http://localhost:451/movies/${data}`)
              .then((res) => {
                setFavorites(res.data);
              })
              .catch((err) => console.error(err));
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col mx-7 mt-7">
      <div className="flex font-poppins font-medium text-lg text-mainGrey">
        <div className="bg-mainGrey w-40 h-40 rounded-lg" />
        <div className="flex flex-col ml-4">
          <span className="text-2xl font-semibold">{user.username}</span>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="mt-9">
        <span className="text-2xl font-poppins font-semibold text-mainGreyDark">
          Favourites
        </span>
        <span className="text-2xl font-poppins font-semibold text-mainGreyDark">
          {favorites.name}
        </span>
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Album = ({ albums, photos, getAlbumPhotos }) => {
  const [getAlbumClicked, setGetAlbumClicked] = useState(false);
  //    get album id
  const { id } = useParams();
  //   find photos for the album
  const album = albums.find((album) => album.id === parseInt(id));

  //  get album photos
  const handleGetAlbumPhotos = () => {
    getAlbumPhotos(album.id);
    setGetAlbumClicked(true);
  };

  //  navigate to photo page
  const navigate = useNavigate();

  //  handle photo click
  const handlePhotoClick = (photo) => {
    navigate(`/photo/${photo.id}`);
  };

  return (
    <div className="p-10 lg:p-20 text-white">
      <h2 className="text-4xl font-extrabold text-white underline mb-10">
        {album.title}
      </h2>
      <button
        onClick={handleGetAlbumPhotos}
        className="bg-sky-500 text-white p-2 rounded-md mb-5"
      >
        Get Album Photos
      </button>
      {/* list the album photos */}
      {photos.length > 0 && getAlbumClicked ? (
        <div>
          <h3 className="font-bold text-white mb-5 italic overline">
            Album No. {album.id} Photos
          </h3>
          <ul
            className="
                flex flex-wrap gap-2 items-center
                "
          >
            {photos.map((photo) => (
              <li key={photo.id} className="text-white cursor-pointer">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-16 lg:w-20"
                  onClick={() => handlePhotoClick(photo)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-white">
          Click the button above to view the Album Photos
        </p>
      )}
    </div>
  );
};

export default Album;

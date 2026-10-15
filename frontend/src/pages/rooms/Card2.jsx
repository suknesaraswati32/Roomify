import { useState,useEffect } from "react";
import Like from "./Like";
import "./card.css";
import axios from "axios";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export default function Card() {
  const [Allrooms, setAllRooms] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8080/rooms").then((res) => {
      setAllRooms(res.data);
    });

    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);

  if (!userLocation) {
    return <p>Getting your location...</p>;
  }

  return Allrooms.map((room, idx) => {

    const [roomLng, roomLat] = room.geometry.coordinates;

    const distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      roomLat,
      roomLng
    );

    const averageRating =
      room.reviews.reduce((sum, rating) => sum + rating, 0) /
      room.reviews.length;

    return (
      <div className="listing-card" key={idx}>

        <div className="card-image">

          <img
            src={room.images[0].url}
            alt="Property"
          />

          <span className="available-badge">
            ● {room.available}
          </span>

          <button className="favorite-btn">
            <Like />
          </button>

          <span className="bhk-badge">
            {room.category}
          </span>

          <span className="distance-badge">
            <i class="fa-solid fa-location-dot"></i>{" "}
            {distance < 1
              ? `${Math.round(distance * 1000)} m away`
              : `${distance.toFixed(1)} km away`}
          </span>

        </div>

        <div className="card-content">

          <h3>{room.title}</h3>

          <p className="location">
            <i class="fa-solid fa-location-dot"></i> {room.location}
          </p>

          <div className="price-row">

            <div className="price">
              {room.rent}
              <span>/ month</span>
            </div>

            <div className="gender">
              👥 {room.gender}
            </div>

          </div>

          <div className="info-row">

            <div>
              <strong>{room.category}</strong>
              <small>Category</small>
            </div>

            <div>
              <strong>{room.facilities.length}</strong>
              <small>Facilities</small>
            </div>

            <div>
              <strong>⭐{averageRating.toFixed(1)}</strong>
              <small>Reviews</small>
            </div>

          </div>

        </div>

      </div>
    );
  });
}


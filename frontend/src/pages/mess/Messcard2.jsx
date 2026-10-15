import { useState,useEffect} from "react";
import { FaStar, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import './Messcard.css'
import Like from '../rooms/Like'
export default function Messcard() {
  let [allMess, setAllMess] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/mess")
      .then((res) => {
        console.log(res.data);
        setAllMess(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return allMess.map((mess) => {
      const averageRating =
      mess.reviews.reduce((sum, rating) => sum + rating, 0) /
      mess.reviews.length;
    return (
       <div className="mess-card">
      <div className="mess-image-container">
        <img
          src={mess.images[0].url}
          alt={mess.title}
          className="mess-image"
        />
        <span
          className={`mess-category ${
            mess.category === "VEG Mess" ? "veg" : "nonveg"
          }`}
        >
          {mess.category}
        </span>

        <span
          className={`availability ${
            mess.Availabel === "Available" ? "available" : "unavailable"
          }`}
        >
          ● {mess.Availabel}
        </span>
        <button>
          <Like />
        </button>

        {mess.images?.length > 1 && (
          <span className="image-count">
            +{mess.images.length - 1}
          </span>
        )}
      </div>

      <div className="mess-content">

        <div className="title-row">
          <h2>{mess.title}</h2>

          <div className="rating">
            <FaStar />
            <span>{averageRating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mess-location">
          <FaMapMarkerAlt />
          <span>{mess.Location}</span>
        </div>

        <div className="mess-info">

          <div className="info-item">
            <span className="info-label">Price</span>
            <strong>₹{mess.Price}</strong>
            <small>/ month</small>
          </div>

          <div className="info-item">
            <span className="info-label">Food</span>
            <strong>
              {mess.category === "VEG Mess" ? "Pure Veg" : "Non-Veg"}
            </strong>
          </div>

        </div>

        {/* Owner */}
        <div className="owner-row">
          <div>
            <span>Owner</span>
            <strong>{mess.ownerDetails?.name}</strong>
          </div>

          <a
            href={`tel:${mess.ownerDetails?.contact}`}
            className="call-btn"
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Footer */}
        <div className="card-footer">

          <div className="reviews">
            <FaStar />
            <span>
              {mess.reviews?.length || 0} Reviews
            </span>
          </div>

          <button className="details-btn">
            View Details →
          </button>

        </div>

      </div>
    </div>
      
    );
  });
}

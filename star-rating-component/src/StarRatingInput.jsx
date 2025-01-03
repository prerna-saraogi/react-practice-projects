import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


export default function StarRatingInput() {
    const [rating, setRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const colors = {
        active: "#FACC15",
        inactive: "#a9a9a9",
      };
    const stars = Array(5).fill(0);
    const messages = {
        1: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
        2: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
        3: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
        4: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
        5: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service."
    }
    
    
    function  handleClickStar(value) {
        setRating(value);
    }

    function handleMouseOverStar(value) {
        setHoverValue(value);
    }

    function handleMouseLeaveStar() {
        setHoverValue(undefined);
    }

    return (
    <div className="container">
        <p>How many stars would you give to our Online Code Editor?</p>
        <div>
            {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={50}
                        className="star"
                        value={rating}
                        onChange={(e)=> setRating(e.target.value)}
                        color={(hoverValue || rating) > index ? colors.active : colors.inactive}
                        onClick={() => handleClickStar(index+1)}
                        onMouseOver={()=> handleMouseOverStar(index+1)}
                        onMouseLeave={handleMouseLeaveStar} />
                )
            })}
        </div>
        {rating > 0 && <p className="rating-msg">{messages[rating]}</p>}
    </div>
    );

    
}
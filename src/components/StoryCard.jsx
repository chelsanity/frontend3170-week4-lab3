import React from 'react';
import '../StoryCard.css'; 

const StoryCard = ({ title, author, description, image, link, onDelete }) => {
    const truncateText = (text, wordLimit) => {
        if (!text) return ''; 
        const words = text.split(' ');
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(' ') + '...' 
          : text;
    };

  return (
    <div className="story-card">
      <div className="story-image">
        <img src={image} alt="IMG" />
      </div>
      <div className="story-content">
        <h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>By: {author || 'Unknown Author'}</p>
        <p>{truncateText( description || 'No description available.', 30)}</p>
      </div>
      <button className="close-btn" onClick={onDelete}>
        x
      </button>
    </div>
  );
};

export default StoryCard;

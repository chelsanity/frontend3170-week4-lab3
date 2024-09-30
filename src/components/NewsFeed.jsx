import React, { useState, useEffect } from 'react';
import StoryCard from './StoryCard'; 
import sampleNews from '../sample_news_stories.json'; 
const NewsFeed = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchedStories = sampleNews.results;
    setStories(fetchedStories);
  }, []);
  
  const handleDeleteStory = (index) => {
    
    const updatedStories = stories.filter((story, i) => i !== index);
    setStories(updatedStories);
  };

  return (
    <div className="news-feed">
      <h1>Random News Feed</h1>
      <div className="story-list">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            author={story.creator ? story.creator[0] : 'Unknown Author'}
            description={story.description}
            image={story.image_url}
            link={story.link}
            onDelete={() => handleDeleteStory(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;

import React, { useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';

const YouTubePlayer = () => {
  const [input, setInput] = useState('');
  const [videoId, setVideoId] = useState('');

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      playVideo();
    }
  };

  const playVideo = () => {
    // Parse the YouTube video ID from the URL
    const url = new URL(input);
    const videoIdFromUrl = url.searchParams.get('v');

    if (videoIdFromUrl) {
      setVideoId(videoIdFromUrl);
    } else {
      // Handle invalid URL or video ID not found
      // You can display an error message or take any other action here
    }
  };

  return (
    <div className="w-auto h-auto rounded-lg px-2 py-2 shadow-2xl bg-gradient-to-r from-gray-800 to-zinc-900 outline outline-white outline-1">
      <div className="flex py-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full rounded px-2 py-2 text-xl text-black outline-none"
          placeholder="Enter your YouTube URL"
        />
        <button
          className="flex items-center justify-center w-20 rounded-md hover:bg-zinc-700 hover:scale-110"
          onClick={playVideo}
        >
          <BsPlayFill />
        </button>
      </div>
      <div className="bg-zinc-700 w-[42rem] h-[20rem] rounded-md">
      {videoId && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video Player"
          ></iframe>
      )}
      </div>
    </div>
  );
};

export default YouTubePlayer;

import AudioPlayer from "react-h5-audio-player";
import React from "react";
const Player = () => (
  <AudioPlayer
    autoPlay
    loop="true"
    src="https://pragmaticcomputing.files.wordpress.com/2017/04/friends_theme_song.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);
export default Player;

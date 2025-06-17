import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Finished = () => {
  useEffect(() => {
    const audio = document.getElementById('finishAudio');
    if (audio) {
      audio.play();
    }
  }, []);

  return (
    <div className="containerimg">
      <img src="/images/Welldoneimg.svg" alt="" />
      <Link to="/public/Path2.html">
        <button className="finishBtn">Next level</button>
      </Link>
      <audio id="finishAudio" src="/word-sounds/correct-answer.mp3" />
    </div>
  );
};

export default Finished;

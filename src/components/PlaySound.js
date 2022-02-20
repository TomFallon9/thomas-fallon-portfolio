import Sound from 'react-sound'; 
import SpaceMusic from '../space-music.mp3';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {

return (
  <div>
    <Sound
    url={SpaceMusic}
    playStatus={Sound.status.PLAYING}
    playFromPosition={300}
    onLoading={handleSongLoading}
    onPlaying={handleSongPlaying}
    onFinishedPlaying={handleSongFinishedPlaying}
    />



  </div>



);

};


export default PlaySound;
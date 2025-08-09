import Song from '../Song';
import '../../styles/pages/Music.css';

export default function Music() {
  const songs = [
    {
      songTitle: 'PILLARS',
      videoUrl: 'https://www.youtube.com/embed/tSu_AKUesY4?si=Zm5cz_u8DxHD8-HO',
      listenUrl: 'https://linktr.ee/lucidhavoc',
    },
  ]

  return (
    <div className="music">
      {songs.map((song, idx) => (
        <Song
          key={idx}
          songTitle={song.songTitle}
          videoUrl={song.videoUrl}
          listenUrl={song.listenUrl}
        />
      ))}
    </div>
  )
}

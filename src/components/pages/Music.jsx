import Song from '../Song';
import '../../styles/pages/Music.css';

export default function Music() {
  const songs = [
    {
      songTitle: 'CHASMS',
      videoUrl: 'https://www.youtube.com/embed/qG54L_h2-iQ?si=-73fQBLYgPjCh1VK',
      listenUrl: 'https://linktr.ee/lucidhavoc',
    },
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

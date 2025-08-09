import '../styles/Song.css';

export default function Song({ songTitle, videoUrl, listenUrl }) {


  return (
    <div className="song">
      <h1>{songTitle}</h1>
      <iframe
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
      <h3>
        <a href={listenUrl}>LISTEN</a>
      </h3>
    </div>
  )
}

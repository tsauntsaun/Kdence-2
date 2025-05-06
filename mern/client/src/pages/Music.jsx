function Music() {
    const tracks = [
      { title: "Skyline", album: "Echoes", length: "3:42", cover: "https://via.placeholder.com/150" },
      { title: "Neon Lights", album: "Echoes", length: "4:10", cover: "https://via.placeholder.com/150" },
    ];
  
    return (
      <div>
        <h1>Music</h1>
        {tracks.map((track, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img src={track.cover} alt={track.title} width={150} />
            <h3>{track.title}</h3>
            <p>Album: {track.album}</p>
            <p>Length: {track.length}</p>
            <audio controls>
              <source src={`https://example.com/audio/${track.title.toLowerCase().replace(" ", "_")}.mp3`} />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    );
  }
  
  export default Music;
  
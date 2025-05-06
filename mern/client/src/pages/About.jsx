function About() {
    const artist = {
      name: "Kdence",
      bio: "Kdence is an independent musician blending soulful lyrics with modern beats.",
      imageUrl: "https://via.placeholder.com/300",
      socialLinks: {
        instagram: "https://instagram.com/kdence",
        twitter: "https://twitter.com/kdence",
      },
    };
  
    return (
      <div>
        <h1>About {artist.name}</h1>
        <p>{artist.bio}</p>
        <img src={artist.imageUrl} alt="Artist" width={300} />
        <div>
          <a href={artist.socialLinks.instagram}>Instagram</a> |{" "}
          <a href={artist.socialLinks.twitter}>Twitter</a>
        </div>
      </div>
    );
  }
  
  export default About;
  
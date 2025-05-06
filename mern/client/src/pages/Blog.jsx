function Blog() {
    const posts = [
      {
        title: "New Album Release!",
        body: "My new album 'Echoes' is dropping next week. Stay tuned!",
      },
      {
        title: "Behind the Scenes",
        body: "Here’s a sneak peek into the studio process for my latest single.",
      },
    ];
  
    return (
      <div>
        <h1>Blog</h1>
        {posts.map((post, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Blog;
  
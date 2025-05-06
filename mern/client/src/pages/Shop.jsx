function Shop() {
    const merch = [
      {
        name: "Kdence T-Shirt",
        price: "$25",
        description: "High-quality cotton shirt with the Kdence logo.",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Signed Poster",
        price: "$15",
        description: "Limited edition signed poster from the latest tour.",
        image: "https://via.placeholder.com/150",
      },
    ];
  
    return (
      <div>
        <h1>Merch Shop</h1>
        {merch.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img src={item.image} alt={item.name} width={150} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default Shop;
  
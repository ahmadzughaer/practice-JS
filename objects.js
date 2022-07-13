// declare object 

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"]
};

// nested objects 

const apartment2 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com"
    }
  };
  

  // retrieve data from object 

  const apartment3 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  const aptRating = apartment3.rating;
  const aptDescr = apartment3.descr;
  const aptPrice = apartment3.price;
  const aptTags = apartment3.tags;
  
  const apartment4 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  const ownerName = apartment4.owner.name;
  const ownerPhone = apartment4.owner.phone;
  const ownerEmail = apartment4.owner.email;
  const numberOfTags = apartment4.tags.length;
  const firstTag = apartment4.tags[0];
  const lastTag = apartment.tags[apartment4.tags.length -1];
  

import React from "react";

const influencers = [
  {
    name: "Cristiano Ronaldo",
    followers: "600M+",
    username: "@cristiano",
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2024-08/240822-Cristiano-Ronaldo-ch-1324-5a0450.jpg",
  },
  {
    name: "Lionel Messi",
    followers: "480M+",
    username: "@leomessi",
    image: "https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750",
  },
  {
    name: "Selena Gomez",
    followers: "430M+",
    username: "@selenagomez",
    image: "https://variety.com/wp-content/uploads/2023/08/Screen-Shot-2023-08-30-at-12.45.59-PM.png?w=1024",
  },
  {
    name: "Kylie Jenner",
    followers: "400M+",
    username: "@kyliejenner",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Kylie_Jenner_in_2021.jpg",
  },
  {
    name: "Dwayne 'The Rock' Johnson",
    followers: "380M+",
    username: "@therock",
    image: "https://imageservice.disco.peacocktv.com/uuid/0b1d8e34-dd1d-3ad6-9a51-96ed1b7de50a/LAND_16_9?language=eng&territory=US&proposition=NBCUOTT&version=b3a7d184-aabd-329c-b98b-051fd847e488",
  },
];

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>Top Instagram Influencers</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {influencers.map((person, index) => (
          <div key={index} style={{ width: "250px", padding: "10px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" }}>
            <img src={person.image} alt={person.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{person.name}</h2>
            <p><strong>{person.followers}</strong> followers</p>
            <p style={{ color: "#888" }}>{person.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

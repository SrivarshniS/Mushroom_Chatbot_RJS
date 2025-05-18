import { useState } from "react";
import "./App.css";
import Chatbot from "./Chatbot";

function App() {
  const mushrooms = [
    {
      src: "https://www.shutterstock.com/image-photo/heap-fresh-whole-champignons-button-600nw-2458910187.jpg",
      name: "Button Mushroom",
      description:
        "A common edible mushroom with a mild flavor and firm texture.",
      link: "https://www.mushroom-corner.com/posts/how-to-grow-button-mushrooms",
    },
    {
      src: "https://img.freepik.com/premium-photo/shiitake-mushrooms_794381-1529.jpg",
      name: "Shiitake",
      description:
        "Popular in Asian cuisine, known for its rich and smoky flavor.",
      link: "https://www.mushroom-corner.com/posts/how-to-grow-shiitake-mushrooms",
    },
    {
      src: "https://nuvedo.com/wp-content/uploads/2023/10/Fair-White.jpg",
      name: "Oyster Mushroom",
      description: "Has a delicate texture and subtle seafood-like flavor.",
      link: "https://www.mushroom-corner.com/posts/how-to-grow-oyster-mushrooms-at-home",
    },
    {
      src: "https://gofresh.com.kw/wp-content/uploads/2023/10/bigstock-Portobello-Mushrooms-And-Slice-241025554-1.jpg",
      name: "Portobello",
      description: "Large mushroom with a meaty texture, great for grilling.",
      link: "https://www.britannica.com/topic/portobello-mushroom",
    },
    {
      src: "https://www.kikkoman.com/en/cookbook/assets/img/GlossaryEnokiMushrooms.jpg",
      name: "Enoki",
      description: "Long, thin white mushrooms often used in soups and salads.",
      link: "https://www.mushroom-corner.com/posts/how-to-grow-enoki-mushrooms",
    },
    {
      src: "https://grocycle.com/wp-content/uploads/2020/02/Morel-mushroom-by-the-river-scaled.jpg",
      name: "Morel",
      description:
        "Distinctive honeycomb appearance, prized for its earthy flavor.",
      link: "https://www.mushroom-corner.com/posts/how-to-grow-morel-mushrooms",
    },
    {
      src: "https://wpcdn.web.wsu.edu/wp-magazine/uploads/sites/902/2020/07/2020fall-gp-chanterelles-1-1188x891.jpg",
      name: "Chanterelle",
      description: "Golden color and fruity aroma, popular in gourmet cooking.",
      link: "https://www.mushroom-corner.com/posts/how-to-grow-chanterelle-mushrooms",
    },
    {
      src: "https://st.depositphotos.com/1010842/2709/i/450/depositphotos_27093413-stock-photo-two-porcini-mushrooms.jpg",
      name: "Porcini",
      description: "Thick and meaty, commonly used in Italian dishes.",
      link: "https://www.masterclass.com/articles/what-are-porcini-mushrooms-a-guide-to-buying-and-using-porcini-mushrooms",
    },
    {
      src: "https://www.naturephoto-cz.com/photos/maly/terracotta-hedgehog-75x_1911.jpg",
      name: "Hedgehog",
      description:
        "A rare edible mushroom with a sweet, nutty flavor and tooth-like spines underneath its cap.",
      link: "https://en.wikipedia.org/wiki/Hydnum_repandum",
    },
    {
      src: "https://www.mushroom-appreciation.com/wp-content/uploads/2023/01/9-cauliflower.jpg",
      name: "Cauliflower",
      description:
        "A rare, brain-like mushroom with a crunchy texture and mild, nutty flavor, often used in stir-fries and soups.",
      link: "https://foragerchef.com/cauliflower-mushrooms-sparassis/",
    },
  ];

  const [showChatbot, setShowChatbot] = useState(false);

  function MushroomCard({ name, src, description, link }) {
    const [showDesc, setShowDesc] = useState(false);

    return (
      <div className="box">
        <div className="image-container">
          <img className="mushroom_img" src={src} alt={name} />
          <div className="overlay">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        </div>
        <h2 className="mushroom_name">{name}</h2>
        <button
          className="description_button"
          onClick={() => setShowDesc(!showDesc)}
        >
          {showDesc ? "Hide" : "Show"} Description
        </button>
        {showDesc && <p className="mushroom_description">{description}</p>}
      </div>
    );
  }

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      <div id="stars5"></div>

      <div
        className="Header"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "black",
          padding: "0 10px",
          height: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="logo"
            src="https://img.freepik.com/premium-photo/cartoon-mushroom-wallpaper-with-lot-different-colored-mushrooms-generative-ai_955884-103696.jpg"
            alt="Mushroom logo"
            style={{
              height: 50,
              width: 50,
              padding: 1,
              borderRadius: 50,
              marginRight: 20,
            }}
          />
          <h1 className="hover-glow" style={{ color: "white" }}>
            Mushrooms
          </h1>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <h4 className="actions" style={{ color: "white", cursor: "pointer" }}>
            About
          </h4>
          <h4
            className="actions"
            style={{ color: "white", cursor: "pointer", padding: 20 }}
          >
            Profile
          </h4>
        </div>
      </div>

      <div
        className="Body"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {mushrooms.map((m, index) => (
          <MushroomCard
            key={index}
            name={m.name}
            src={m.src}
            description={m.description}
            link={m.link}
          />
        ))}
      </div>
      {showChatbot && (
        <div className="chatbot-container">
          <Chatbot />
        </div>
      )}

      <div className="chatbot-icon" onClick={() => setShowChatbot(!showChatbot)}>
        {" "} 🤖{" "}
      </div>
    </>
  );
}

export default App;

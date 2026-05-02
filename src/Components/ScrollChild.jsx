import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import "../Styles/Scroll.css";  

const ScrollChild = () => {
  const data = [
    {
      id: 1,
      name: "Astrid Astrid",
      time: new Date().toLocaleTimeString(),
      image:
        "https://media.istockphoto.com/id/2210411614/photo/young-black-woman-with-braids-posing-in-studio-with-neutral-background.jpg",
      caption: "BLACK IS BEAUTIFUL",
    },
    {
      id: 2,
      name: "Astrid Astrid",
      time: new Date().toLocaleTimeString(),
      image:
        "https://thumbs.dreamstime.com/b/beautiful-african-american-lady-looking-back-6535983.jpg",
      caption: "BLACK IS BEAUTIFUL",
    },
    {
      id: 3,
      name: "Astrid Astrid",
      time: new Date().toLocaleTimeString(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX9SOUncZOV1-B442FZeeUkBopSaRKPbSlw&s",
      caption:
        "Lady Gaga: Why A Star Is Born Was “the Scariest Thing I Have Ever Done",
    },
    {
      id: 4,
      name: "Astrid Astrid",
      time: new Date().toLocaleTimeString(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWQwaBAQqUuiDgsbdJIYJKK7QFOO3GJ2DuQ&s",
      caption:
        "These Sophisticated Black Beauty Looks From Last week Were The Best Of The Week",
    },
    {
      id: 5,
      name: "Astrid Astrid",
      time: new Date().toLocaleTimeString(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnpZ-AGP11TQgiPZJSnPt-eWbxfbGVinTNA&s",
      caption: "Speaking for Women's Art in “Portrait of a Lady on Fire",
    },
    {
      id: 6,
      name: "Astrid Astrid",
      time: new Date().toLocaleTimeString(),
      image:
        "https://www.bellanaija.com/wp-content/uploads/2021/07/Linda-Osifo-2.jpg",
      caption: "BLACK IS BEAUTIFUL",
    },
    {
      id: 7,
      name: "Astrid Astrid",
      time: new Date().toLocaleTimeString(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKkWDe6XhWaWbCK4P8ARGEFnoAX2eoy4iCQ&s",
      caption:
        "First Lady Celebrates African Women and Girls - Voice of Nigeria Broadcasting Service",
    },
  ];



  return (
    <>            
      {data.map((item) => (
        <div className="Card-con" key={item.id}>
          <article className="card">
            <div className="profile">
              <div style={{ display: "flex" }}>
                <CgProfile className="profiles" />
                <p>{item.name}</p>
                <MdVerified className="verify" />
                <p>{item.time}</p>
              </div>

              <p style={{ color: "blue" }}>
                Follow <span>...</span>
              </p>
            </div>

            <article className="images">
              <img src={item.image} alt={item.caption} />
            </article>

            <section
              style={{display: "flex", flexDirection: "column", gap: "10px" }}
            >

              <div className="caption-con">
                <p>{item.name}</p>
                <MdVerified className="verify" />
              </div>
              <p>{item.caption}</p>
              
            </section>
          </article>
        </div>
      ))}
    </>
  );
};

export default ScrollChild;

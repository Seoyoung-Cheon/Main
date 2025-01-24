import React from "react";
import "./Main.css";
import LawInfo from "./Sub";

const Main = () => {
  return (
    <div
      className="main-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="fullscreen-image" style={{ width: "100%" }}>
        <div
          className="logo-menu"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            position: "absolute",
            left: "40px",
            top: "20px",
            zIndex: 2,
          }}
        >
          <div
            className="logo"
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: "200",
              color: "white",
            }}
          >
            Lawmang
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          ></div>
          <video
            src="Main_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 0,
              objectFit: "cover",
              margin: 0,
              padding: 0,
            }}
            onLoadedMetadata={(e) => {
              e.target.playbackRate = 0.7;
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            left: "6rem",
            color: "white",
            fontSize: "25px",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "200",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontWeight: "bold",
            zIndex: 2,
          }}
        >
          <h3 style={{ fontSize: "40px" }}>
            I don't follow the path; I create my own.
          </h3>
          <br />
          Success isn't about what you achieve, it's about who you become.
          <br />
          The greatest risk is not taking one.
          <br />
          Live your life like it's a masterpiece in progress.
          <br />I may not be perfect, but I am always authentic.
        </div>
      </div>
      <div
        style={{
          padding: "2rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <LawInfo />
      </div>
    </div>
  );
};

export default Main;

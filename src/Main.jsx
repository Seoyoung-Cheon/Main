import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import Sub from "./Sub";

const Main = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isFirstSection, setIsFirstSection] = useState(true);

  // 스크롤 이벤트 핸들러 추가
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsFirstSection(scrollPosition < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        margin: 0,
        padding: 0,
        position: "relative",
        overflowX: "hidden",
        overflowY: "visible",
      }}
    >
      {/* 첫 번째 섹션 - 메인 비디오 */}
      <section
        style={{
          margin: 0,
          padding: 0,
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          src="Main_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
          onLoadedMetadata={(e) => {
            e.target.playbackRate = 0.7;
          }}
        />

        {/* 검은색 오버레이 추가 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />

        {/* 로고와 네비게이션 링크 */}
        <div
          style={{
            position: "absolute",
            left: "8rem",
            top: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 200,
              color: "white",
            }}
          >
            Lawmang
          </div>

          <Link
            to="/list"
            style={{
              fontSize: "1.8rem",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 200,
              color: "white",
              textDecoration: "none",
            }}
          >
            판례
          </Link>
        </div>

        {/* 메인 문구 */}
        <div
          style={{
            position: "absolute",
            bottom: "8rem",
            left: "5rem",
            color: "white",
            fontSize: "1.5rem",
            fontFamily: "Oswald, sans-serif",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            zIndex: 2,
          }}
        >
          <h3
            style={{
              fontSize: "2.25rem",
              marginBottom: "1rem",
              fontFamily: "Oswald, sans-serif",
            }}
          >
            I don't follow the path; I create my own.
          </h3>
          Success isn't about what you achieve, it's about who you become.
          <br />
          The greatest risk is not taking one.
          <br />
          Live your life like it's a masterpiece in progress.
          <br />I may not be perfect, but I am always authentic.
        </div>

        {showPopup && isFirstSection && (
          <Popup onClose={() => setShowPopup(false)} />
        )}
      </section>

      {/* Sub 컴포넌트 */}
      <section
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          backgroundColor: "#f9fafb",
        }}
      >
        <Sub />
      </section>
    </div>
  );
};

export default Main;

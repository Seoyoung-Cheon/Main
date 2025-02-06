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
        fontFamily: "Oswald, sans-serif",
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
            e.target.playbackRate = 0.7; // 비디오 재생 속도 조절
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
            left: "5rem",
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
            fontWeight: "lighter",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            zIndex: 2,
            opacity: 0, // 초기에는 투명하게
            animation: "slideUp 1.5s ease-out forwards", // 애니메이션 적용
          }}
        >
          <style>
            {`
              @keyframes slideUp {
                0% {
                  opacity: 0;
                  transform: translateY(70px);
                }
                30% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>
          <h3
            style={{
              fontSize: "2.25rem",
              marginBottom: "1rem",
              fontFamily: "'Gothic A1', sans-serif",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            }}
          >
            법률의 힘을 믿으세요
          </h3>
          <br />
          <div
            style={{
              fontFamily: "'Gothic A1', sans-serif",
              textShadow: "1px 1px 9px rgba(0, 0, 0, 1)",
            }}
          >
            법은 우리가 일상에서 마주치는 여러 어려움을 해결할 수 있는 강력한
            도구입니다.
            <br />
            <br />
            법적 문제에 대해 올바르고 확실한 답을 찾고 싶다면, 로망과
            함께하세요.
          </div>
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
          zIndex: 2,
        }}
      >
        <Sub />
      </section>
    </div>
  );
};

export default Main;

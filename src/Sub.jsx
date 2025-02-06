import React, { useState, useEffect } from "react";

const Sub = () => {
  // 카드뉴스 데이터 (예시)
  const cardNews = [
    { id: 1, title: "카드뉴스 1", image: "card1.jpg" },
    { id: 2, title: "카드뉴스 2", image: "card2.jpg" },
    { id: 3, title: "카드뉴스 3", image: "card3.jpg" },
    { id: 4, title: "카드뉴스 4", image: "card4.jpg" },
    { id: 5, title: "카드뉴스 5", image: "card5.jpg" },
  ];

  // YouTube 영상 데이터 (예시)
  const youtubeVideos = [
    { id: 1, embedId: "video1" },
    { id: 2, embedId: "video2" },
    { id: 3, embedId: "video3" },
    { id: 4, embedId: "video4" },
    { id: 5, embedId: "video5" },
  ];

  // 현재 표시할 시작 인덱스 상태
  const [startIndex, setStartIndex] = useState(0);

  // 자동 롤링 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + 1 >= cardNews.length ? 0 : prevIndex + 1
      );
    }, 5000); // 5초마다 롤링

    return () => clearInterval(interval);
  }, []);

  // 화면에 보여질 4개의 아이템만 선택
  const getVisibleItems = (items) => {
    const visibleItems = [];
    for (let i = 0; i < 4; i++) {
      const index = (startIndex + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    maxWidth: "1800px",
    margin: "0",
    padding: "10px 75px",
    overflow: "hidden",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    width: "400px",
    margin: "0",
    opacity: 1,
    transform: "translateX(0)",
    transition: "all 1.0s cubic-bezier(0.4, 0, 0.2, 1)", // 더 부드러운 움직임
    animation: "slideIn 0.5s ease forwards",
  };

  // 페이지네이션 점 렌더링 함수
  const renderPaginationDots = (totalItems) => {
    const totalPages = totalItems.length;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "2rem",
        }}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setStartIndex(index)}
            style={{
              width: "10px",
              height: "13px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: startIndex === index ? "gray" : "white",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            aria-label={`Page ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      {/* 유튜브 배경색 영역 시작 */}
      <div style={{ backgroundColor: "#E1DFD9", padding: "2rem 0 12rem 0" }}>
        {/* YouTube 영상 섹션 */}
        <div style={{ marginBottom: "8rem" }}>
          <h3
            style={{
              fontSize: "4rem",
              marginBottom: "5rem",
              marginTop: "8rem",
              color: "white",
              textAlign: "center",
              paddingLeft: "0",
              WebkitTextStroke: "1px #c8c8c8",
              textStroke: "1px #dcdcdc",
            }}
          >
            YouTube
          </h3>
          <div style={containerStyle}>
            {getVisibleItems(youtubeVideos).map((video, index) => (
              <div
                key={`${video.id}-${startIndex}-${index}`}
                style={{
                  ...cardStyle,
                  aspectRatio: "16/9",
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title="YouTube video"
                  frameBorder="0" //테두리 없음
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "none",
                  }}
                />
              </div>
            ))}
          </div>
          {renderPaginationDots(youtubeVideos)}
        </div>
      </div>

      {/* 카드뉴스 섹션 */}
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${process.env.PUBLIC_URL}/generated.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "-5rem",
          padding: "2rem 0 12rem 0", // 하단 패딩 증가
        }}
      >
        {/* 오버레이 레이어 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#E1DFD9",
            opacity: 0.5,
          }}
        />

        {/* 컨텐츠 레이어 */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "3rem", // 마진 조정
              color: "#444",
              paddingLeft: "75px",
            }}
          >
            카드 뉴스
          </h3>
          <div style={containerStyle}>
            {getVisibleItems(cardNews).map((card, index) => (
              <div
                key={`${card.id}-${startIndex}-${index}`}
                style={{
                  ...cardStyle,
                  aspectRatio: "4/3",
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
          {renderPaginationDots(cardNews)}
        </div>
      </div>
    </div>
  );
};

export default Sub;

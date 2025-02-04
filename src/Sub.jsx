import React from "react";

const Sub = () => {
  // 카드뉴스 데이터 (예시)
  const cardNews = [
    { id: 1, title: "카드뉴스 1", image: "card1.jpg" },
    { id: 2, title: "카드뉴스 2", image: "card2.jpg" },
    { id: 3, title: "카드뉴스 3", image: "card3.jpg" },
    { id: 4, title: "카드뉴스 4", image: "card4.jpg" },
  ];

  // YouTube 영상 데이터 (예시)
  const youtubeVideos = [
    { id: 1, embedId: "video1" },
    { id: 2, embedId: "video2" },
    { id: 3, embedId: "video3" },
    { id: 4, embedId: "video4" },
  ];

  const containerStyle = {
    // 공통 스타일 추출
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "0 4rem", // 좌우 패딩 증가
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "4rem 2rem",
      }}
    >
      {/* YouTube 영상 섹션 */}
      <div style={{ marginBottom: "8rem" }}>
        <h3
          style={{
            fontSize: "2rem",
            marginBottom: "2rem",
            color: "#444",
            paddingLeft: "4rem", // 제목도 동일한 패딩 적용
          }}
        >
          YouTube
        </h3>
        <div style={containerStyle}>
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                aspectRatio: "16/9", //비율
                width: "400px",
                margin: "0 auto",
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
      </div>

      {/* 카드뉴스 섹션 */}
      <div>
        <h3
          style={{
            fontSize: "2rem",
            marginBottom: "2rem",
            color: "#444",
            paddingLeft: "4rem", // 제목도 동일한 패딩 적용
          }}
        >
          카드 뉴스
        </h3>
        <div style={containerStyle}>
          {cardNews.map((card) => (
            <div
              key={card.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.2s",
                aspectRatio: "4/3",
                width: "400px",
                margin: "0 auto",
                ":hover": {
                  transform: "translateY(-4px)",
                },
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
      </div>
    </div>
  );
};

export default Sub;

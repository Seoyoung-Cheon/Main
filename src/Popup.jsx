import React from "react";

const Popup = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "77%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        width: "600px",
        height: "830px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 헤더 영역 */}
      <div
        style={{
          padding: "15px",
          borderBottom: "1px solid #eee",
          fontWeight: "bold",
          backgroundColor: "#BEA1A5",
          borderRadius: "15px 15px 0 0",
          color: "black",
          fontFamily: "'Oswald', sans-serif",
          fontWeight: "600",
        }}
      >
        L a w C h a t
      </div>

      {/* 메시지 영역 */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* 챗봇 메시지 */}
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "80%",
            alignSelf: "flex-start",
            fontFamily: "'Nanum Gothic Coding', monospace",
            fontWeight: "400",
            fontSize: "15px",
          }}
        >
          안녕하세요! 무엇을 도와드릴까요?
        </div>

        {/* 사용자 메시지 */}
        <div
          style={{
            backgroundColor: "#BEA1A5",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "80%",
            alignSelf: "flex-end",
            fontSize: "15px",
            fontFamily: "'Nanum Gothic Coding', monospace",
            fontWeight: "400",
          }}
        >
          이혼하고 싶어요.
        </div>
      </div>

      {/* 입력 영역 */}
      <div
        style={{
          borderTop: "1px solid #eee",
          padding: "15px",
          display: "flex",
          gap: "10px",
          backgroundColor: "#eee",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <input
          type="text"
          placeholder="메시지를 입력하세요."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <button
          style={{
            padding: "8px 15px",
            backgroundColor: "#BEA1A5",
            color: "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontFamily: "'Nanum Gothic Coding', monospace",
            fontWeight: "400",
          }}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default Popup;

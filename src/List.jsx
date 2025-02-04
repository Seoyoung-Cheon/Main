import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  // 판례 데이터 배열
  const cases = [1, 2, 3, 4]; // 실제로는 API에서 받아올 데이터

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        margin: 0,
        padding: 0,
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* 네비게이션 바 */}
      <nav
        style={{
          backgroundColor: "#948F78",
          height: "8rem",
          margin: 0,
          padding: 0,
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "calc(100% - 80px)",
            maxWidth: "1920px",
            margin: "0 auto",
            paddingTop: "20px",
          }}
        >
          {/* 로고 */}
          <Link
            to="/"
            style={{
              fontSize: "40px",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: "200",
              color: "white",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flex: "0 0 auto",
              marginRight: "100px",
              marginTop: "1rem",
              marginLeft: "40px",
            }}
          >
            Lawmang
          </Link>

          {/* 검색창 컨테이너 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flex: "1 1 auto",
              minWidth: "800px",
              maxWidth: "1000px",
              marginRight: "100px",
              marginTop: "2rem",
            }}
          >
            {/* 검색창 */}
            <input
              type="text"
              placeholder="판례 검색하기"
              style={{
                width: "100%",
                height: "20px",
                borderRadius: "10px",
                backgroundColor: "white",
                border: "2px solid #e5e7eb",
                padding: "8px 12px",
                fontSize: "16px",
                color: "#666",
                transition: "all 0.2s ease",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#1f2937";
                e.target.style.backgroundColor = "#f9fafb";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.backgroundColor = "white";
              }}
            />
            {/* 검색 아이콘 */}
            <button
              className="text-xl text-gray-400 hover:text-gray-600"
              aria-label="검색"
              style={{
                fontSize: "20px",
                flexShrink: 0,
                borderRadius: "10px",
                color: "#666",
                backgroundColor: "white",
                border: "2px solid #e5e7eb",
                cursor: "pointer",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "40px",
                height: "40px",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f9fafb";
                e.target.style.borderColor = "#d1d5db";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.borderColor = "#e5e7eb";
              }}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* 카테고리 버튼들과 판례 리스트를 감싸는 컨테이너 */}
      <div
        style={{
          width: "calc(100% - 240px)",
          maxWidth: "1920px",
          margin: "0 auto",
          marginTop: "180px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {/* 카테고리 버튼들 */}
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          {["민사", "형사", "행정", "특허", "세무"].map((category) => (
            <button
              key={category}
              style={{
                padding: "15px 40px",
                marginTop: "10px",
                fontSize: "15px",
                fontWeight: "500",
                backgroundColor: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#e5e7eb";
                e.target.style.borderColor = "#9ca3af";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#f3f4f6";
                e.target.style.borderColor = "#d1d5db";
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 총 개수 표시 */}
        <div
          style={{
            marginBottom: "20px",
            fontSize: "16px",
            color: "#4b5563",
            fontWeight: "500",
          }}
        >
          Total : {cases.length}건
        </div>

        {/* 판례 리스트 */}
        <div
          style={{
            display: "grid",
            gap: "24px",
            width: "100%",
          }}
        >
          {cases.map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.2s",
                width: "100%",
                cursor: "pointer",
                border: "1px solid #e5e7eb",
              }}
              onMouseOver={(e) => {
                if (e.currentTarget === e.target) {
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#9ca3af";
                }
              }}
              onMouseOut={(e) => {
                if (e.currentTarget === e.target) {
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#d1d5db";
                }
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                  pointerEvents: "none",
                  border: "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#1f2937",
                    margin: 0,
                    padding: 0,
                    border: "none",
                  }}
                >
                  대법원 2024년 제{item}호
                </h3>
                <span
                  style={{
                    padding: "4px 12px",
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                  }}
                >
                  민사
                </span>
              </div>
              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "16px",
                  pointerEvents: "none",
                }}
              >
                채권자가 채무자의 제3채무자에 대한 채권을 가압류한 후 그
                가압류를 본압류로 이전하지 아니한 상태에서...
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  pointerEvents: "none",
                }}
              >
                <span>판결일자: 2024.03.15</span>
                <span
                  style={{
                    color: "#3b82f6",
                    fontWeight: "500",
                  }}
                >
                  자세히 보기 →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;

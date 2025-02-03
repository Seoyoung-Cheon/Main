import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 바 */}
      <nav style={{ backgroundColor: "#948F78", height: "100px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            position: "relative",
            left: "40px",
            top: "20px",
            gap: "40px",
            zIndex: 2,
            width: "98%",
            maxWidth: "1920px",
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
            }}
          >
            {/* 검색창 */}
            <input
              type="text"
              placeholder="판례 검색하기"
              className="w-full px-6 text-lg border-2  rounded-lg focus:outline-none focus:border-gray-400"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "10px",
              }}
            />
            {/* 검색 아이콘 */}
            <button
              className="text-xl text-gray-400 hover:text-gray-600"
              aria-label="검색"
              style={{
                fontSize: "30px",
                flexShrink: 0,
                borderRadius: "10px",
              }}
            >
              🔍
            </button>
          </div>
        </div>
      </nav>

      {/* 카테고리 버튼들 */}
      <div
        style={{
          maxWidth: "1400px", // 최대 너비 설정
          margin: "0 auto", // 가운데 정렬
          padding: "0 40px", // 좌우 패딩
          marginTop: "60px", // 네비게이션 바와의 간격
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center", // 가운데 정렬
            flexWrap: "wrap",
            gap: "30px", // 버튼 간 간격
            marginBottom: "40px",
          }}
        >
          {["민사", "형사", "행정", "특허", "세무"].map((category) => (
            <button
              key={category}
              style={{
                padding: "20px 40px",
                fontSize: "20px",
                fontWeight: "500",
                backgroundColor: "white",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f9fafb";
                e.target.style.borderColor = "#3b82f6";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.borderColor = "#e5e7eb";
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 판례 리스트 */}
        <div className="grid gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  대법원 2024년 제{item}호
                </h3>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  민사
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                채권자가 채무자의 제3채무자에 대한 채권을 가압류한 후 그
                가압류를 본압류로 이전하지 아니한 상태에서...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>판결일자: 2024.03.15</span>
                <button className="text-blue-500 hover:text-blue-600 font-medium">
                  자세히 보기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;

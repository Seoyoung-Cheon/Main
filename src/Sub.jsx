import React, { useState, useEffect } from "react";

function LawInfo() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("백엔드 API 호출 시작");

        const response = await fetch("http://localhost:5000/api/laws");
        console.log("응답 상태:", response.status);

        const data = await response.json();
        console.log("응답 데이터:", data);

        if (!response.ok) {
          throw new Error(data.message || "API 요청 실패");
        }

        setApiData(data);
        setLoading(false);
      } catch (err) {
        console.error("에러 상세:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        데이터를 불러오는 중입니다...
      </div>
    );

  if (error)
    return (
      <div
        style={{
          padding: "20px",
          color: "red",
          textAlign: "center",
          border: "1px solid red",
          borderRadius: "4px",
          margin: "20px",
        }}
      >
        에러: {error}
      </div>
    );

  if (!apiData) return <div>데이터가 없습니다.</div>;

  return (
    <div className="law-info-container" style={{ padding: "20px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h3>첫 번째 API 결과</h3>
        <div
          style={{
            maxHeight: "300px",
            overflow: "auto",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <pre style={{ margin: 0 }}>
            {JSON.stringify(apiData.firstApi, null, 2)}
          </pre>
        </div>
      </div>

      <div>
        <h3>두 번째 API 결과</h3>
        <div
          style={{
            maxHeight: "300px",
            overflow: "auto",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <pre style={{ margin: 0 }}>
            {JSON.stringify(apiData.secondApi, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default LawInfo;

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

// 법제처 API 호출 함수
async function callLawApi(params) {
  try {
    // 법제처 OpenAPI 정확한 URL 사용
    const response = await axios.get(
      "https://open.law.go.kr/LSO/openApi/law/list.do",
      {
        params: {
          ...params,
        },
        headers: {
          Accept: "application/xml",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("법제처 API 에러:", error.response?.data || error.message);
    throw error;
  }
}

app.get("/api/law", async (req, res) => {
  try {
    console.log("API 요청 시작");

    // 첫 번째 API 호출
    const firstApiParams = {
      OC: "gu05087@gmail.com",
      target: "law",
      type: "XML",
      page: "1",
      display: "10",
    };
    console.log("첫 번째 API 파라미터:", firstApiParams);
    const firstResponse = await callLawApi(firstApiParams);

    // 두 번째 API 호출
    const secondApiParams = {
      OC: "aeac4281493b4fbcbfff6ca57fee7497",
      target: "law",
      type: "XML",
      page: "1",
      display: "10",
    };
    console.log("두 번째 API 파라미터:", secondApiParams);
    const secondResponse = await callLawApi(secondApiParams);

    console.log("API 호출 성공");
    res.json({
      firstApi: firstResponse,
      secondApi: secondResponse,
    });
  } catch (error) {
    console.error("서버 에러:", error);
    res.status(500).json({
      error: "서버 에러",
      details:
        "법제처 API 연결에 실패했습니다. API 키와 파라미터를 확인해주세요.",
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log("환경:", process.env.NODE_ENV || "development");
});

// 예기치 않은 에러 처리
process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

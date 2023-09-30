// 결과 페이지에서 query parameter에서 점수를 추출합니다.
const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get("score"));

// 결과 표시
const scoreText = document.getElementById("score");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

scoreText.textContent = `점수: ${score} / ${questions.length}`;

// 점수에 따른 메시지 설정 (원하는 메시지로 수정 가능)
if (score >= 80) {
  message.textContent = "훌륭한 독서 능력입니다!";
} else if (score >= 60) {
  message.textContent = "좋은 독서 능력을 보여주셨어요.";
} else {
  message.textContent = "도서 읽기 습관을 더 개선해보세요.";
}

// 다시 시작 버튼 클릭 이벤트 처리
restartBtn.addEventListener("click", () => {
  // 테스트 페이지로 돌아갑니다.
  window.location.href = "index.html";
});

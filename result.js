// URL에서 전달된 점수 가져오기
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get("score");
const numQuestions = urlParams.get("numQuestions");

// 결과 메시지 생성
const resultMessage = document.createElement("p");
resultMessage.textContent = `점수: ${score} / ${numQuestions}`;
resultMessage.classList.add("result-message");

// 결과를 표시할 요소 선택
const resultContainer = document.getElementById("result");

// 결과 메시지를 결과 페이지에 추가
resultContainer.appendChild(resultMessage);

// 다시 시작 버튼 클릭 시 이벤트 처리
const restartButton = document.getElementById("restartBtn");
restartButton.addEventListener("click", () => {
  // 다시 검사를 시작할 페이지로 이동
  window.location.href = "index.html";
});

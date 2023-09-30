// script.js
const questions = [
  // 100개의 문항 추가 (question, options, correctAnswer)
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "12. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "13. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "14. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "15. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "16. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "17. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "18. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "19. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "20. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "21. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "22. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "23. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "24. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "25. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "26. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "27. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "28. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "29. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "30. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "31. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "32. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "33. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "34. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "35. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "36. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "37. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "38. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "39. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "40. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "41. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "42. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "43. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "44. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "45. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "46. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "47. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "48. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "49. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "50. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "51. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "52. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "53. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "54. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "55. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "56. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "57. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "58. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "59. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "60. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "61. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "62. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "63. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "64. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "65. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "66. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "67. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "68. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "69. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "70. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "71. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "72. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "73. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "74. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "75. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "76. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "77. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "78. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "79. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "80. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "81. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "82. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "83. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "84. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "85. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "86. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "87. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "88. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "89. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "90. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "91. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "92. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "93. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "94. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "95. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "96. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "97. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "98. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "99. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
  {
    question: "100. 문학의 정의는 무엇인가요?",
    options: [
      "a. 예술 작품",
      "b. 소설과 시",
      "c. 상상의 나래",
      "d. 단어의 표현",
    ],
    correctAnswer: "c. 상상의 나래",
  },
];

// 문항을 랜덤으로 섞기 위한 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 문항을 동적으로 생성하는 함수
function createQuestionElement(questionData, questionNumber) {
  const questionContainer = document.getElementById("questions");
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  // 질문 생성
  const questionText = document.createElement("p");
  questionText.textContent = `문항 ${questionNumber + 1}: ${
    questionData.question
  }`;
  questionDiv.appendChild(questionText);

  // 선택지 생성
  for (let i = 0; i < questionData.options.length; i++) {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `<input type="radio" name="q${questionNumber}" value="${questionData.options[i]}"> ${questionData.options[i]}`;
    questionDiv.appendChild(optionLabel);
  }

  questionContainer.appendChild(questionDiv);
}

// 정답 체크 함수
function checkAnswers() {
  const numQuestions = questions.length;
  let score = 0;

  for (let i = 0; i < numQuestions; i++) {
    const selectedOption = document.querySelector(
      `input[name="q${i}"]:checked`
    );

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = questions[i].correctAnswer;
      if (userAnswer === correctAnswer) {
        score++;
      }
    }
  }

  const resultContainer = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `점수: ${score} / ${numQuestions}`;
  resultContainer.style.display = "block";
}

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", () => {
  checkAnswers();
  showResults(); // checkAnswers 다음에 showResults를 호출
});

// 결과 페이지로 이동하는 함수
function showResults() {
  const resultUrl = "result.html"; // 결과 페이지 URL
  window.location.href = resultUrl;
}

// 문항 동적 생성 함수
function createQuestions() {
  shuffleArray(questions);

  const numQuestions = questions.length;
  for (let i = 0; i < numQuestions; i++) {
    createQuestionElement(questions[i], i);
  }
}

// 문항 동적 생성 및 이벤트 처리
document.addEventListener("DOMContentLoaded", () => {
  createQuestions();
  const submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", checkAnswers);
});

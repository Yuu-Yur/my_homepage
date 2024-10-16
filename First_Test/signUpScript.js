function redirectToSignIn(event) {
    event.preventDefault(); // 폼이 실제로 제출되지 않도록 방지
    window.location.href = "signin.html"; // sign-in 페이지로 리다이렉트
};

document.getElementById('signUpForm').addEventListener("submit", redirectToSignIn);
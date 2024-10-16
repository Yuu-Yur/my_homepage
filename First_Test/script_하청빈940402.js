// Event listener for the form submission
document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    window.location.href = "mainpage_하청빈940402.html"; // Redirect to the main page after signing in
});

const topics = document.getElementsByClassName("topic");

for (let i = 0; i < topics.length; i++) {
    topics[i].addEventListener("click", function() {
        // img가 topic안에 종속된 형태기 때문에 this(topics).queryselector가 가능
        const img = this.querySelector(".pic");
        if (img.style.display === "none") {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
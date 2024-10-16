const items = [
    { id: 1, title: 'Title 1', author: 'Author 1', tag: 'Tag 1', rating: 5, img: 'image/image1.jpg'},
    { id: 2, title: 'Title 2', author: 'Author 2', tag: 'Tag 2', rating: 4, img: 'image/image2.jpg' },
    { id: 3, title: 'Title 3', author: 'Author 3', tag: 'Tag 3', rating: 3, img: 'image/image3.jpg' },
    { id: 4, title: 'Title 4', author: 'Author 4', tag: 'Tag 4', rating: 2, img: 'image/image4.jpg' },
    { id: 5, title: 'Title 5', author: 'Author 5', tag: 'Tag 5', rating: 1, img: 'image/image5.jpg' },
    { id: 6, title: 'Title 6', author: 'Author 6', tag: 'Tag 6', rating: 5, img: 'image/image6.jpg' },
    { id: 7, title: 'Title 7', author: 'Author 7', tag: 'Tag 7', rating: 4, img: 'image/image7.jpg' },
    { id: 8, title: 'Title 8', author: 'Author 8', tag: 'Tag 8', rating: 3, img: 'image/image8.jpg' },
    { id: 9, title: 'Title 9', author: 'Author 9', tag: 'Tag 9', rating: 2, img: 'image/image9.jpg' },
    { id: 10, title: 'Title 10', author: 'Author 10', tag: 'Tag 10', rating: 5, img: 'image/image10.jpg' }
];

function loadItemDetails() {
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get('id'));
    const item = items.find(item => item.id === itemId);

    if (item) {
        document.getElementById('detail-title').innerText = item.title;
        document.getElementById('detail-author').innerText = `Author: ${item.author}`;
        document.getElementById('detail-tag').innerText = `Tag: ${item.tag}`;
        document.getElementById('detail-rating').innerText = `Rating: ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}`;
    }
}

function goBack() {
    window.history.back(); // 이전 페이지로 돌아가기
}

// 페이지 로드 시 상세 정보 로드
window.onload = loadItemDetails;

const reviews = []; // 리뷰를 저장할 배열

// 상세 페이지에 정보 표시
function displayDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id')); // URL에서 ID 가져오기
    const item = items.find(i => i.id === itemId); // 해당 ID에 맞는 아이템 찾기

    if (item) {
        document.getElementById('detail-title').innerText = item.title;
        document.getElementById('detail-author').innerText = `Author: ${item.author}`;
        document.getElementById('detail-tag').innerText = `Tag: ${item.tag}`;
        document.getElementById('release-date').innerText = '2024-01-01'; // 발매일 예시
        document.getElementById('detail-rating').innerHTML = `Rating: ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}`;
        document.getElementById('detail-image').src = item.img; // 카드에서 사용된 이미지
    }
}

// 리뷰 추가 함수
function addReview() {
    const reviewText = document.getElementById('review-text').value;
    if (reviewText) {
        reviews.push(reviewText); // 리뷰를 배열에 추가
        document.getElementById('review-text').value = ''; // 입력란 초기화
        displayReviews(); // 리뷰 목록 갱신
    } else {
        alert("Please write a review before submitting.");
    }
}

// 리뷰 목록 표시 함수
function displayReviews() {
    const reviewList = document.getElementById('reviews');
    reviewList.innerHTML = ''; // 기존 리뷰 지우기

    reviews.forEach((review, index) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerText = review;
        reviewDiv.innerText = review;
        reviewList.appendChild(reviewDiv);
    });
}

// 이전 페이지로 돌아가는 함수
function goBack() {
    window.history.back(); // 이전 페이지로 돌아가기
}

// 페이지 로드 시 상세 정보 표시
displayDetails();

// 리뷰 작성 버튼 클릭 이벤트
document.getElementById('submit-review').onclick = addReview;

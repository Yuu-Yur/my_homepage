document.querySelector('.signOut').addEventListener('click', function () {
    window.location.href = 'signin.html'; // 로그인 페이지로 리디렉션
});

// 샘플 데이터 - 실제 데이터로 교체 가능
const items = [
    { id: 1, title: 'Title 1', author: 'Author 1', tag: 'Tag 1', rating: 5, img: 'image/image1.jpg' },
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


const itemsPerPage = 4; // 페이지당 카드 수
let currentPage = 1; // 현재 페이지
const totalPages = Math.ceil(items.length / itemsPerPage); // 총 페이지 수

function displayItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);
    
    const content = document.querySelector('.content');
    content.innerHTML = ''; // 이전 내용을 지움

    paginatedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => goToDetailPage(item.id); // 카드 클릭 시 상세 페이지로 이동
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${item.img}')"></div>
            <div class="card-info">
                <p class="card-title">${item.title}</p>
                <p class="card-author">${item.author}</p>
                <p class="card-tag">${item.tag}</p>
                <div class="card-rating">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div>
            </div>
        `;
        content.appendChild(card);
    });

    updatePagination();
}

function updatePagination() {
    const pageInput = document.getElementById('page-input');
    pageInput.value = currentPage;
}

document.querySelector('.prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
    }
});

document.querySelector('.next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayItems(currentPage);
    }
});

document.getElementById('go-page').addEventListener('click', () => {
    const inputPage = parseInt(document.getElementById('page-input').value);
    if (inputPage >= 1 && inputPage <= totalPages) {
        currentPage = inputPage;
        displayItems(currentPage);
    }
});

// 초기 카드 표시
displayItems(currentPage);

// 상세 페이지로 이동하는 함수
function goToDetailPage(itemId) {
    window.location.href = `detail.html?id=${itemId}`; // 상세 페이지 URL
}
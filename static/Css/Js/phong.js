const backgrounds = [
    './static/Css/Bg/bg-page 1.jpg',
    './static/Css/Bg/p_1.gif',
    './static/Css/Bg/2020.gif',
    './static/Css/Bg/Daydreaming 🌫.gif',
    './static/Css/Bg/After the rain___.gif',
    './static/Css/Bg/bg_1 (2).gif',
    './static/Css/Bg/p_7.gif',
    './static/Css/Bg/p_81.gif',
    './static/Css/Bg/p_9.gif',
    './static/Css/Bg/p_10.gif',
    './static/Css/Bg/bg6.gif',
    './static/Css/Bg/bg7.gif',
    './static/Css/Bg/download (6).gif',
    './static/Css/Bg/download (5).gif',
    './static/Css/Bg/tl6.gif',
    './static/Css/Bg/tl7.gif'
];

const itemsPerSlide = 2;
let currentList = 1;
let selectedBg = 0;
let isAnimating = false;

// Tự động tạo HTML cho các items
function initializeSlides() {
    const totalSlides = Math.ceil(backgrounds.length / itemsPerSlide);
    console.log('=== INITIALIZING SLIDES ===');
    console.log('Total backgrounds:', backgrounds.length);
    console.log('Items per slide:', itemsPerSlide);
    console.log('Total slides:', totalSlides);

    for (let slide = 0; slide < totalSlides; slide++) {
        const listId = slide === 0 ? 'list' : `list${slide + 1}`;
        const listElement = document.getElementById(listId);

        if (!listElement) continue;

        // Xóa inline style display: none
        listElement.style.display = '';
        
        // Thêm class active cho slide đầu tiên
        if (slide === 0) {
            listElement.classList.add('active');
        }

        const startIdx = slide * itemsPerSlide;
        const endIdx = Math.min(startIdx + itemsPerSlide, backgrounds.length);

        console.log(`Slide ${slide + 1}: Creating items from index ${startIdx} to ${endIdx - 1}`);

        for (let i = startIdx; i < endIdx; i++) {
            const item = document.createElement('div');
            item.className = 'item';
            item.style.backgroundImage = `url('${backgrounds[i]}')`;
            item.dataset.bgIndex = i;
            
            // Sử dụng closure để capture đúng giá trị i
            (function(index) {
                item.onclick = function() {
                    console.log('Item clicked! Index:', index);
                    selectBackground(index);
                };
            })(i);

            const checkmark = document.createElement('div');
            checkmark.className = 'checkmark-overlay';
            checkmark.dataset.bgIndex = i;
            if (i === 0) checkmark.classList.add('visible');
            checkmark.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 34 26" fill="none">
                    <path d="M34 2.73378L10.6857 26L0 15.3363L2.73943 12.6025L10.6857 20.5131L31.2606 0L34 2.73378Z" fill="#F8F8F8" />
                </svg>
            `;

            item.appendChild(checkmark);
            listElement.appendChild(item);
            
            console.log(`Created item ${i}: ${backgrounds[i]}`);
        }
    }
}

// Chọn background
function selectBackground(index) {
    console.log('Clicked background index:', index);
    console.log('Background path:', backgrounds[index]);
    
    // Xóa tất cả checkmarks
    document.querySelectorAll('.checkmark-overlay').forEach(el => {
        el.classList.remove('visible');
        console.log('Removed visible from:', el.dataset.bgIndex);
    });

    // Hiện checkmark của item được chọn
    const targetCheckmark = document.querySelector(`.checkmark-overlay[data-bg-index="${index}"]`);
    console.log('Target checkmark found:', targetCheckmark);
    
    if (targetCheckmark) {
        targetCheckmark.classList.add('visible');
        console.log('Added visible to index:', index);
    } else {
        console.error('Could not find checkmark for index:', index);
    }

    // Đổi background
    const wrapper = document.getElementById('wrapper');
    console.log('Wrapper element:', wrapper);
    
    if (wrapper) {
        const newBgUrl = `url('${backgrounds[index]}')`;
        console.log('Setting background to:', newBgUrl);
        wrapper.style.transition = 'background-image 0.4s ease';
        wrapper.style.backgroundImage = newBgUrl;
    } else {
        console.error('Wrapper element not found!');
    }
    
    selectedBg = index;
}

// Cập nhật hiển thị slide với animation
function updateList(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const totalSlides = Math.ceil(backgrounds.length / itemsPerSlide);
    const currentListEl = document.querySelector('.slide-list.active');
    
    // Tính đúng nextListId
    const nextListId = currentList === 1 ? 'list' : `list${currentList}`;
    const nextListEl = document.getElementById(nextListId);

    if (!currentListEl || !nextListEl || currentListEl === nextListEl) {
        isAnimating = false;
        return;
    }

    // Áp dụng animation cho slide hiện tại
    if (direction === 'next') {
        currentListEl.classList.add('slide-out-left');
        nextListEl.classList.add('slide-in-right');
    } else {
        currentListEl.classList.add('slide-out-right');
        nextListEl.classList.add('slide-in-left');
    }

    // Hiện nextListEl ngay lập tức để animation chạy
    nextListEl.style.display = 'flex';

    // Sau khi animation kết thúc
    setTimeout(() => {
        // Xóa class active và animation classes của slide cũ
        currentListEl.classList.remove('active', 'slide-out-left', 'slide-out-right');
        
        // Thêm class active cho slide mới và xóa animation classes
        nextListEl.classList.add('active');
        nextListEl.classList.remove('slide-in-left', 'slide-in-right');
        
        isAnimating = false;
    }, 400);
}

// Điều hướng
function next() {
    const totalSlides = Math.ceil(backgrounds.length / itemsPerSlide);
    const nextPage = currentList === totalSlides ? 1 : currentList + 1;
    
    if (nextPage !== currentList) {
        currentList = nextPage;
        updateList('next');
    }
}

function prev() {
    const totalSlides = Math.ceil(backgrounds.length / itemsPerSlide);
    const prevPage = currentList === 1 ? totalSlides : currentList - 1;
    
    if (prevPage !== currentList) {
        currentList = prevPage;
        updateList('prev');
    }
}

// Khởi tạo khi trang load
initializeSlides();
// ページ切り替え機能
document.addEventListener('DOMContentLoaded', function() {
    const pageDots = document.querySelectorAll('.page-dot');
    const pageTitles = document.querySelectorAll('.page-title');
    const worksPages = document.querySelectorAll('.works-page');
    let currentPage = 0;
    const totalPages = worksPages.length;

    // ページ切り替え関数
    function showPage(pageIndex) {
        // 現在のページを非表示
        worksPages.forEach(page => page.classList.remove('active'));
        pageDots.forEach(dot => dot.classList.remove('active'));
        pageTitles.forEach(title => title.classList.remove('active'));

        // 指定されたページを表示
        worksPages[pageIndex].classList.add('active');
        pageDots[pageIndex].classList.add('active');
        pageTitles[pageIndex].classList.add('active');

        currentPage = pageIndex;
    }

    // ドットクリックイベント
    pageDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showPage(index);
        });
    });

    // タイトルクリックイベント
    pageTitles.forEach((title, index) => {
        title.addEventListener('click', () => {
            showPage(index);
        });
    });

    // // スクロールによるページ切り替え
    // let isScrolling = false;
    // const worksSection = document.getElementById('works');

    // worksSection.addEventListener('wheel', function(e) {
    //     if (isScrolling) return;

    //     isScrolling = true;
    //     setTimeout(() => { isScrolling = false; }, 800);

    //     if (e.deltaY > 0) {
    //         // 下スクロール
    //         if (currentPage < totalPages - 1) {
    //             showPage(currentPage + 1);
    //             e.preventDefault();
    //         }
    //     } else {
    //         // 上スクロール
    //         if (currentPage > 0) {
    //             showPage(currentPage - 1);
    //             e.preventDefault();
    //         }
    //     }
    // });

    // キーボードナビゲーション
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentPage > 0) {
            showPage(currentPage - 1);
        } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
            showPage(currentPage + 1);
        }
    });
});
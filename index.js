//読み込み時上にする
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0.0);

/* op */
const video = document.getElementById('splash-video');
const skipBtn = document.getElementById('skip-btn');

function hideSplash() {
    document.body.classList.add('loaded');
}

if (video) {
    // 1. 動画の終了時、エラー時に隠すイベントを設定
    video.addEventListener('ended', hideSplash);
    video.addEventListener('error', hideSplash);

    // 2. スマホやリロード対策：明示的に再生を開始する処理
    // HTMLのautoplay属性だけに頼らず、JSで制御します
    video.currentTime = 0; // 再生時間を0に戻す（リロード対策）

    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // 自動再生成功
        })
            .catch(error => {
                // 自動再生がブラウザにブロックされた場合などは、
                // スプラッシュ画面を消してサイトを表示させる（真っ暗になるのを防ぐ）
                console.log("Autoplay blocked or failed", error);
                hideSplash();
            });
    }
}

if (skipBtn) {
    skipBtn.onclick = hideSplash;
}

/* op end*/


// アコーディオン
document.querySelectorAll('.qa-accordion dt').forEach(dt => {
    dt.addEventListener('click', () => {
        const dd = dt.nextElementSibling;
        const btnAd = dt.querySelector('.btn');

        dt.classList.toggle('active');
        dd.classList.toggle('open');

        if (btnAd) btnAd.classList.toggle('open');

    });
});



// ハンバーガー
window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    var navLinks = this.document.querySelectorAll('#nav-wrapper a')

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
    navLinks.forEach(function (Link) {
        Link.addEventListener('click', function () {
            nav.classList.remove('open');
        });
    });


};




//スクロール
$(document).ready(function () {
    $('a[href^=#]').click(function () {
        var speed = 1500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});
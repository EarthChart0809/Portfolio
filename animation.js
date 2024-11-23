document.addEventListener("DOMContentLoaded", () => {
    // コンテナを動的に生成して追加
    const container = document.createElement('div');
    container.classList.add('falling-petals-container');
    document.body.appendChild(container);
  
    // 花びらの画像リスト
    const petalImages = [
      'petals-a.png', // 花びら1
      'petals-b.png', // 花びら2
      'petals-c.png', // 花びら3
    
    ];
  
    function createPetal() {
      const petal = document.createElement('div');
      petal.classList.add('petal');
  
      // ランダムに花びら画像を選択
      const randomImage = petalImages[Math.floor(Math.random() * petalImages.length)];
      petal.style.backgroundImage = `url(${randomImage})`;
  
      // ランダムな位置とアニメーション設定
      petal.style.left = `${Math.random() * 100}vw`; // ランダムな開始位置
      petal.style.animationDuration = `${Math.random() * 3 + 3}s`; // ランダムな速度
      petal.style.animationDelay = `${Math.random() * 2}s`; // ランダムな開始時間
  
      container.appendChild(petal);
  
      // 一定時間後に花びらを削除
      setTimeout(() => petal.remove(), 2750);
    }
  
    // 一定間隔で花びらを生成
    setInterval(createPetal, 300);
  });
  
  
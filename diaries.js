// ↓【おまじない】HTMLの読み込みがすべて完了してからJSを実行する命令
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // A. 今日の日付を表示する処理（今のコードのまま）
    // ==========================================
    // 1. パソコンやスマホの時計から今日の日付をゲットする
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月は0から始まるので1を足す
    const date = now.getDate();

    // 2. 「2026年6月15日」という文字の形に組み立てる
    const todayString = year + "年" + month + "月" + date + "日";

    // 3. HTMLの id="current-date" がついた場所に、組み立てた文字をはめ込む
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        currentDateElement.textContent = todayString;
    }


    // ==========================================
    // B. 【追加】共通のサイドバーを読み込む処理
    // ==========================================
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        fetch('sidebar.html') // 共通パーツのファイルを読み込む
            .then(response => {
                if (!response.ok) {
                    throw new Error('ファイルの読み込みに失敗しました');
                }
                return response.text();
            })
            .then(data => {
                // HTMLの id="sidebar-container" の中に中身を流し込む
                sidebarContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('サイドバーの読み込みエラー:', error);
            });
    }

}); // ← おまじないの閉じカッコ
// ↓【おまじない】HTMLの読み込みがすべて完了してからJSを実行する命令
document.addEventListener('DOMContentLoaded', () => {

    // 1. パソコンやスマホの時計から今日の日付をゲットする
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月は0から始まるので1を足す
    const date = now.getDate();

    // 2. 「2026年6月15日」という文字の形に組み立てる
    const todayString = year + "年" + month + "月" + date + "日";

    // 3. HTMLの id="current-date" がついた場所に、組み立てた文字をはめ込む
    document.getElementById('current-date').textContent = todayString;

}); // ← おまじないの閉じカッコ
// お金のカンマ追加
export const formattedMoney = (money) => {
    if (!money) return "";
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
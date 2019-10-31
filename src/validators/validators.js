export const commentValidator = (comment, action) => {
    let date = new Date(),
            arrWithMonth = ['февраля', 'января', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        date = `${date.getDate()} ${arrWithMonth[date.getMonth()]} ${date.getFullYear()}`;
        comment && action({name: 'User', date, comment});
} 
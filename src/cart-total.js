function calculate(price, num, promo) {
    if (promo === undefined) {
        if (num >= 10 && price < 60000) {
            let sale5 = price / 100 * 5;
            price = price - sale5;

        } else if (price > 59999 && num < 10) {
            let difference50 = price - 50000;
            let sale20 = difference50 / 100 * 20;
            price = price - sale20
        } else if (price > 59999 && num >= 10) {
            let sale5 = price / 100 * 5;
            price = price - sale5;
            let difference50 = price - 50000;
            let sale20 = difference50 / 100 * 20;
            price = price - sale20
        } else {
            price
        }
    } else {
        if (promo === 'ДАРИМ300') {
            if (price > 300) {
                price = price - 300;
                if (price > 59999 && num < 10) {
                    let difference50 = price - 50000;
                    let sale20 = difference50 / 100 * 20;
                    price = price - sale20
                } else if (num >= 10 && price < 60000) {
                    let sale5 = price / 100 * 5;
                    price = price - sale5;

                } else if (price > 59999 && num >= 10) {
                    let sale5 = price / 100 * 5;
                    price = price - sale5;
                    let difference50 = price - 50000;
                    let sale20 = difference50 / 100 * 20;
                    price = price - sale20
                }
            } else {
                price = 0
            }
        } else if (promo === 'СКИДКА15') {
            if (price >= 20000 && num < 10) {
                if (price > 59999) {
                    let difference50 = price - 50000;
                    let sale20 = difference50 / 100 * 20;
                    price = price - sale20
                    let sale15 = price / 100 * 15;
                    price = price - sale15;
                } else {
                    let sale15 = price / 100 * 15;
                    price = price - sale15;
                }
            } else if (price >= 20000 && num >= 10) {
                if (price > 59999) {
                    let sale5 = price / 100 * 5;
                    price = price - sale5;
                    let difference50 = price - 50000;
                    let sale20 = difference50 / 100 * 20;
                    price = price - sale20
                    let sale15 = price / 100 * 15;
                    price = price - sale15;
                } else {
                    let sale5 = price / 100 * 5;
                    price = price - sale5;
                }
            }
        }
    }
    return price;
}



export default calculate;
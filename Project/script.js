const data = [
    {
        img: "./Assets/apart1.jpg",
        apartmentName: 'Апартаменты в «башне ОКО»',
        lotNumber: 'Лот № 4536',
        totalPrice: '25 600 000 ₽',
        picePerMater: '365 714 ₽ за м²',
        apartmentArea: 'Площадь 70 м²',
        floor: 'Этаж 52'
    },
    {
        img: "./Assets/apart2.jpg",
        apartmentName: 'Апартаменты в «башне Империя»',
        lotNumber: 'Лот № 4547',
        totalPrice: '27 900 000 ₽',
        picePerMater: '420 000 ₽ за м²',
        apartmentArea: 'Площадь 62 м²',
        floor: 'Этаж 35'
    }
]
const app = document.querySelector('.app')


app.innerHTML = `<div class = "app-wrap">
                    <div class ="app-img-desc">
                        <img src = "${data[0].img}"/>
                        <div class ="app-description">
                            <h3 id = "apart-name">${data[0].apartmentName}</h3>
                            <p id = "lot-number">${data[0].lotNumber}</p>
                            <div class= "app-desc-flex">
                                <div>
                                    <p id = "total-price">${data[0].totalPrice}</p>
                                    <p>${data[0].picePerMater}</p>
                                </div>
                                <div>
                                    <p>${data[0].apartmentArea}</p>
                                    <p>${data[0].floor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input id = "app-see-btn" type = "button" value="Назначить просмотр"></input>
                </div>`
console.log(app);
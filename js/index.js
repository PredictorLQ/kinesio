ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.47353, 84.975137],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([56.47353, 84.975137], {
            balloonContent: 'ООО "КИНЕЗИО+"'
        }));
}

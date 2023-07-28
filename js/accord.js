$('.question__list').accordion({
    active: false,
    collapsible: true,
    header: ".question__item-button",
    heightStyle: "content",
    icons: {
        "header": "question__item-accord",
        "activeHeader": "question__item-accord question__item-accord-active"
    }
});
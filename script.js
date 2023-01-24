const masonry = new Macy({
    container: '.container',
    mobileFirst: 'true',
    columns: 1,
    breakAt: {
        400: 1,
        700: 3,
        1100: 4,
    },
    margin: {
        x: 20,
        y: 20,
    }
});
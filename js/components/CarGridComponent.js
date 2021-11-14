class CarGridComponent { 
    constructor() {
        this.init();
    }

    init = () => {
        this.htmlElement = document.createElement('div');
        this.htmlElement.innerHTML = 'As Testukas tu Tevukas';
    }
}
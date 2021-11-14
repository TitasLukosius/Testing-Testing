class CarCardComponent {
    constructor(props) {
        this.props = props;

        this.init();
    }

    init = () => {
        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card p-3 shadow';
        this.htmlElement.innerHTML = `
        <h2 class="h3">Kortele</h2>
        `;
    }
}
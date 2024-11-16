export interface IPage {
	productsContainer: HTMLElement[]
}

export class Page {
	_productsContainer: HTMLElement

	constructor(protected container: HTMLElement) {
		this._productsContainer = this.container.querySelector('.products__list')
	}

	set productsContainer(products: HTMLElement[]) {
		this._productsContainer.replaceChildren(...products)
	}
}

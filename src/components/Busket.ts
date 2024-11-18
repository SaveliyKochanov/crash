export interface IBusket {
	busketContainer: HTMLElement[]
}

export class Busket {
	_busketContainer: HTMLElement

	constructor(protected container: HTMLElement) {
		this._busketContainer = this.container.querySelector('.busket__products-list')
	}

	set busketContainer(products: HTMLElement[]) {
		this._busketContainer.replaceChildren(...products)
	}
}

export interface IViewBusket {
	busketContainer: HTMLElement
	busketProductsList: HTMLElement[]
	busketTitle: string
	busketSummary: string
}

export class Busket implements IViewBusket {
	_busketElement: HTMLElement
	_busketProductsList: HTMLElement
	_busketTitle: HTMLElement
	_busketSummary: HTMLElement

	constructor(template: HTMLTemplateElement) {
		this._busketElement = template.content.querySelector('.busket__container').cloneNode(true) as HTMLElement
		this._busketProductsList = this._busketElement.querySelector('.busket__products-list')
		this._busketTitle = this._busketElement.querySelector('.busket__title')
		this._busketSummary = this._busketElement.querySelector('.busket__summary')
	}

	set busketProductsList(items: HTMLElement[]) {
		this._busketProductsList.replaceChildren(...items)
	}

	get busketProductsList(): HTMLElement[] {
		return Array.from(this._busketProductsList.children) as HTMLElement[]
	}

	get busketContainer() {
		return this._busketElement
	}

	set busketTitle(value: string) {
		this._busketTitle.textContent = value
	}

	set busketSummary(value: string) {
		this._busketSummary.textContent = value
	}
}

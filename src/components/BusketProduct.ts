import { IBusketProduct } from '../types'

export interface IViewBusketProduct {
	index: string
	id: string
	title: string
	category: string
	price: string
	render(product: IBusketProduct): HTMLElement
	setDeleteHandler(handleDeleteFunction: Function): void
}

export interface IViewBusketProductConstructor {
	new (template: HTMLTemplateElement): IViewBusketProduct
}

export class BusketProduct implements IViewBusketProduct {
	protected productIndex: HTMLElement
	protected _id: string
	protected productElement: HTMLElement
	protected productCategory: HTMLElement
	protected productTitle: HTMLElement
	protected productPrice: HTMLElement
	protected deleteButton: HTMLElement
	protected handleDeleteFunction: Function

	constructor(cardTemplate: HTMLTemplateElement) {
		this.productElement = cardTemplate.content
			.querySelector('.busket-product-item')
			.cloneNode(true) as HTMLElement
		this.productIndex = this.productElement.querySelector(
			'.busket-product__index'
		)
		this.productCategory = this.productElement.querySelector(
			'.busket-product__category'
		) as HTMLElement
		this.productTitle = this.productElement.querySelector(
			'.busket-product__title'
		) as HTMLElement
		this.productPrice = this.productElement.querySelector(
			'.busket-product__price'
		) as HTMLElement
		this.deleteButton = this.productElement.querySelector('.delete-button')
	}

	set index(data: string) {
		this.productIndex.textContent = data
	}

	set id(data: string) {
		this._id = data
	}

	get id() {
		return this._id || ''
	}

	set title(data: string) {
		this.productTitle.textContent = data
	}

	get title() {
		return this.productTitle.textContent || ''
	}

	set category(data: string) {
		this.productCategory.textContent = data
	}

	get category() {
		return this.productCategory.textContent || ''
	}

	set price(data: string) {
		this.productPrice.textContent = data
	}

	get price() {
		return this.productPrice.textContent
	}

	setDeleteHandler(handleDeleteFunction: Function) {
		this.handleDeleteFunction = handleDeleteFunction
		this.deleteButton.addEventListener('click', () => {
			this.handleDeleteFunction(this)
		})
	}

	render(data: IBusketProduct) {
		this.id = data.id
		this.title = data.title
		this.category = data.category
		this.price = data.price + '$'

		return this.productElement
	}
}

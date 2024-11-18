import { IBusketProduct } from '../types'

export interface IViewBusketProduct {
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
	protected _id: string
	protected productElement: HTMLElement
	protected productCategory: HTMLElement
	protected productTitle: HTMLElement
	protected productPrice: HTMLElement
	protected index: HTMLElement
	protected deleteButton: HTMLElement
	protected handleDeleteFunction: Function

	constructor(cardTemplate: HTMLTemplateElement) {
		this.productElement = cardTemplate.content.querySelector('.busket-product-item') as HTMLElement
		this.productCategory = this.productElement.querySelector('.busket-product__category') as HTMLElement
		this.productTitle = this.productElement.querySelector('.busket-product__title') as HTMLElement
		this.productPrice = this.productElement.querySelector('.busket-product__price') as HTMLElement
		this.deleteButton = this.productElement.querySelector('.delete-button')
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
		this.deleteButton.addEventListener('click', evt => {
			this.handleDeleteFunction(this)
		})
	}

	render(data: IBusketProduct) {
		this.productCategory.textContent = data.category
		this.productTitle.textContent = data.title
		this.productPrice.textContent = data.price
		return this.productElement
	}
}

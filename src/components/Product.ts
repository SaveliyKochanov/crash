import { IProduct } from './../types/index'

export interface IViewProduct {
	id: string
	title: string
	category: string
	price: string
	render(product: IProduct): HTMLElement
}

export interface IViewProductConstructor {
	new (template: HTMLTemplateElement): IViewProduct
}

export class Product implements IViewProduct{
	protected _id: string
	protected productElement: HTMLElement
	protected productCategory: HTMLElement
	protected productImage: HTMLImageElement
	protected productTitle: HTMLElement
	protected productPrice: HTMLElement

	constructor(cardTemplate: HTMLTemplateElement) {
		this.productElement = cardTemplate.content.querySelector('.product-item').cloneNode(true) as HTMLElement
		this.productCategory = this.productElement.querySelector('.product__category')
		this.productImage = this.productElement.querySelector('.product__image')
		this.productTitle = this.productElement.querySelector('.product__title')
		this.productPrice = this.productElement.querySelector('.product__price')
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

	render(data: IProduct) {
		this.productCategory.textContent = data.category
		this.productImage.src = data.src
		this.productTitle.textContent = data.title
		this.productPrice.textContent = data.price
		return this.productElement
	}
}

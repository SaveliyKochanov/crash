import { IProduct } from './../types/index'

export class ProductsModel {
	protected _products: IProduct[]

	constructor() {
		this._products = []
	}

	set products(data: IProduct[]) {
		this._products = data
	}

	get products() {
		return this._products
	}

	removeProduct(id: string) {
		this._products = this._products.filter(product => product.id != id)
	}

	addProduct(data: IProduct) {
		const uniqueId: number = Math.max(...this._products.map(product => Number(product.id))) + 1
	}
}

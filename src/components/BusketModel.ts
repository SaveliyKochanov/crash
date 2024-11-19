import { IBusketModel, IBusketProduct } from './../types/index'
export class BusketModel implements IBusketModel {
	protected _products: IBusketProduct[]

	constructor() {
		this._products = []
	}

	set products(data: IBusketProduct[]) {
		this._products = data
	}

	get products() {
		return this._products
	}

	removeProduct(id: string) {
		this._products = this._products.filter(product => product.id != id)
	}

	addProduct(data: IBusketProduct) {
		const uniqueId: number =
			Math.max(...this._products.map(product => Number(product.id)), 0) + 1
		const newProduct = { id: uniqueId.toString(), ...data }
		this._products.push(newProduct)
		return newProduct
	}
}

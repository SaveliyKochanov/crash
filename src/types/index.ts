export interface IProduct {
	id: string
	category: string
	title: string
	src: string
	price: string
}

export interface IBusketProduct {
	id: string
	category: string
	title: string
	price: string
}

export interface IProductsModel {
	products: IProduct[]
	addProduct: (data: IProduct) => IProduct
	removeProduct: (id: string) => void
}

export interface IBusketModel {
	products: IBusketProduct[]
	addProduct: (data: IBusketProduct) => IBusketProduct
	removeProduct: (id: string) => void
	getTotal: () => string
}

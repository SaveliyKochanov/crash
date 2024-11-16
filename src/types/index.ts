export interface IProduct {
	id: string
	category: string
	title: string
	src: string
	price: string
}

export interface IProductsModel {
	products: IProduct[]
	addProduct: (data: string) => IProduct
	removeProduct: (id: string) => void
}

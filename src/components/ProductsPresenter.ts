import { IBusketModel, IProduct, IProductsModel } from './../types/index'
import { IPage } from './Page'
import { IViewProductConstructor } from './Product'
import { IPopup } from './common/Popup'

export class ProductPresenter {
	protected productTemplate: HTMLTemplateElement

	constructor(protected model: IProductsModel, protected busketModel: IBusketModel, protected viewPageContainer: IPage, protected viewProductConstructor: IViewProductConstructor, protected modal: IPopup) {
		this.productTemplate = document.querySelector('#product-item-template') as HTMLTemplateElement
	}

	handleAddItem(product: IProduct) {
		this.busketModel.addProduct({
			id: product.id,
			category: product.category,
			title: product.title,
			price: product.price,
		})
	}

	renderView() {
		const productsList = this.model.products.map(product => {
			const productItem = new this.viewProductConstructor(this.productTemplate)
			const productElement = productItem.render(product)
			productItem.setAddHandler(() => this.handleAddItem(product))
			return productElement
		})
		this.viewPageContainer.productsContainer = productsList
	}
}

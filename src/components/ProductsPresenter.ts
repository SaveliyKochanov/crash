import { IProductsModel } from './../types/index'
import { BusketModel } from './BusketModel'
import { IViewBusketProductConstructor } from './BusketProduct'
import { IPage } from './Page'
import { IViewProduct, IViewProductConstructor } from './Product'
import { IPopup } from './common/Popup'

export class ProductPresenter {
	protected productTemplate: HTMLTemplateElement

	constructor(protected model: IProductsModel, protected viewPageContainer: IPage, protected viewProductConstructor: IViewProductConstructor, protected modal: IPopup) {
		this.productTemplate = document.querySelector('#product-item-template') as HTMLTemplateElement
	}

	handleDeleteItem(product: IViewProduct) {
		this.model.removeProduct(product.id)
		this.renderView()
	}

	renderView() {
		const productsList = this.model.products.map(product => {
			const productItem = new this.viewProductConstructor(this.productTemplate)
			const productElement = productItem.render(product)
			return productElement
		})
		this.viewPageContainer.productsContainer = productsList
	}
}


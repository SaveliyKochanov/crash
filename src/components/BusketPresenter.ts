import { IBusketModel } from './../types/index'
import { IBusket } from './Busket'
import { IViewBusketProductConstructor } from './BusketProduct'

export class BusketPresenter {
	protected busketTemplate: HTMLTemplateElement

	constructor(protected model: IBusketModel, protected viewPageContainer: IBusket, protected viewBusketProductConstructor: IViewBusketProductConstructor) {
		this.busketTemplate = document.querySelector('#busket-product-template') as HTMLTemplateElement
	}

	handleDeleteItem(productId: string) {
		this.model.removeProduct(productId)
		this.renderView()
	}

	renderView() {
		const productsList = this.model.products.map(product => {
			const busketItem = new this.viewBusketProductConstructor(this.busketTemplate)
			const productElement = busketItem.render(product)

			busketItem.setDeleteHandler(() => this.handleDeleteItem(product.id))
			return productElement
		})

		this.viewPageContainer.busketContainer = productsList
	}
}

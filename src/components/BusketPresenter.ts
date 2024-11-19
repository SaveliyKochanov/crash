import { IBusketModel } from './../types/index'
import { IViewBusket } from './Busket'
import { IViewBusketProductConstructor } from './BusketProduct'
import { IPopup } from './common/Popup'

export class BusketPresenter {
	protected busketTemplate: HTMLTemplateElement

	constructor(
		protected model: IBusketModel,
		protected viewPageContainer: IViewBusket,
		protected viewBusketProductConstructor: IViewBusketProductConstructor,
		protected modal: IPopup
	) {
		this.busketTemplate = document.querySelector(
			'#busket-product-template'
		) as HTMLTemplateElement
	}

	handleDeleteItem(productId: string) {
		this.model.removeProduct(productId)
		this.renderView()
	}

	renderView() {
		const productsList = this.model.products.map((product, index) => {
			const busketItem = new this.viewBusketProductConstructor(
				this.busketTemplate
			)
			const productElement = busketItem.render(product)
			busketItem.index = (index + 1).toString()
			busketItem.setDeleteHandler(() => this.handleDeleteItem(product.id))
			return productElement
		})
		this.viewPageContainer.busketProductsList = productsList
		this.modal.content = this.viewPageContainer.busketContainer
		this.modal.open()
	}
}

import { Busket } from './components/Busket'
import { BusketModel } from './components/BusketModel'
import { BusketPresenter } from './components/BusketPresenter'
import { BusketProduct } from './components/BusketProduct'
import { Page } from './components/Page'
import { Product } from './components/Product'
import { ProductsModel } from './components/ProductsModel'
import { ProductPresenter } from './components/ProductsPresenter'
import { Popup } from './components/common/Popup'
import './styles/styles.css'
import { products } from './utils/constants'

const busketButton = document.querySelector('.busket') as HTMLElement
const busketTemplate = document.querySelector(
	'#busket-template'
) as HTMLTemplateElement

const pageContent = document.querySelector('.page__content') as HTMLElement
const popupElement = document.querySelector('.popup') as HTMLElement

const productsContainer = new Page(pageContent)
const busketContainer = new Busket(busketTemplate)

const productsModel = new ProductsModel()
productsModel.products = products
const productsModal = new Popup(popupElement)
const busketModel = new BusketModel()

busketButton.addEventListener('click', () => {
	const busketModal = new Popup(popupElement)

	const busketPresenter = new BusketPresenter(
		busketModel,
		busketContainer,
		BusketProduct,
		busketModal
	)
	busketPresenter.renderView()
})

const itemPresenter = new ProductPresenter(
	productsModel,
	busketModel,
	productsContainer,
	Product,
	productsModal
)
itemPresenter.renderView()

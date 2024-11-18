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

const pageContent = document.querySelector('.page__content') as HTMLElement
const busketContent = document.querySelector('.busket__container') as HTMLElement
const popupElement = document.querySelector('.popup') as HTMLElement

const productsContainer = new Page(pageContent)
const busketContainer = new Busket(busketContent)

const productsModel = new ProductsModel()
productsModel.products = products

const modal = new Popup(popupElement)
busketButton.addEventListener('click', () => {
	const modal = new Popup(popupElement)
	modal.open()
})

const busketModel = new BusketModel()
busketModel.products = products

const busketPresenter = new BusketPresenter(busketModel, busketContainer, BusketProduct)
busketPresenter.renderView()

const itemPresenter = new ProductPresenter(productsModel, productsContainer, Product, modal)
itemPresenter.renderView()

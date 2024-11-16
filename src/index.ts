import { Page } from './components/Page'
import { Product } from './components/Product'
import { ProductsModel } from './components/ProductsModel'
import './styles/styles.css'
import { products } from './utils/constants'

const productTemplate = document.querySelector('#product-item-template') as HTMLTemplateElement

const pageContent = document.querySelector('.page__content') as HTMLElement

const page = new Page(pageContent)

const productsModel = new ProductsModel()
productsModel.products = products

page.productsContainer = productsModel.products.map(product => {
	const productItem = new Product(productTemplate)

	const productElement = productItem.render(product)
	console.log(productElement)
	return productElement
})

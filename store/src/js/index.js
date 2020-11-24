import '../css/style.scss'
import { App } from './view'
import { model } from './model'
import { controller } from './controller'

const app = new App(model, controller)
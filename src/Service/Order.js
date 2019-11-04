import { FakerOrders } from './OrderFaker';
import * as ProductService from './Product';

export async function GetAll(){
	return FakerOrders;
}

export async function GetOrderByUser(Id){
	let orderData = FakerOrders.filter(d => d.userId === Id);
	let arrayData = [];

	for (var i = 0; i < orderData.length; i++) {
		arrayData[i] = {
			product: await ProductService.GetById(orderData[i].productId),
			...orderData[i]
		}
	}

	return arrayData;
}

export async function GetOrderById(Id){
	let orderData = FakerOrders.filter(d => d.id === parseFloat(Id));
	let data = {
		...orderData[0], 
		product: await ProductService.GetById(orderData[0].productId)
	}

	return data;
}	
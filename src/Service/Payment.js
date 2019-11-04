import * as FakerPayment from './PaymentFaker';

// READ
export async function GetAll(){
	return FakerPayment.Payments
}

export async function GetById(Id){
	const arrayData = FakerPayment.Payments.filter(p => p.id === parseFloat(Id));
	return arrayData[0];
}
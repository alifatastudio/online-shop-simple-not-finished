import { FakerProducts, FakerUserProduct } from './ProductFaker';

// READ
export async function GetAll(){
    return FakerProducts;
}

export async function GetById(Id){
    const arrayData = FakerProducts.filter(p => p.id === parseFloat(Id));
    return arrayData[0];
}

export async function GetFavoriteByUser(IdUser){
	const favId = FakerUserProduct.filter(p => p.id === IdUser);
	let data = [];
	for (var i = 0; i < favId[0].favoriteId.length; i++) {
		data[i] = await GetById(favId[0].favoriteId[i]);
	}
	return data;
}
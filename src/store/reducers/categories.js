const initialState = {
	categories: [
		{
			id: 1,
			type: "Верхняя одежда",
			img: "https://static-eu.insales.ru/images/products/1/8055/240820087/Proud_mom_06.08.19_39505.jpg",
		},
		{
			id: 2,
			type: "Верхняя одежда",
			img: "https://static-eu.insales.ru/images/products/1/8055/240820087/Proud_mom_06.08.19_39505.jpg",
		},
		{
			id: 3,
			type: "Верхняя одежда",
			img: "https://static-eu.insales.ru/images/products/1/8055/240820087/Proud_mom_06.08.19_39505.jpg",
		},
		{
			id: 4,
			type: "Верхняя одежда",
			img: "https://static-eu.insales.ru/images/products/1/8055/240820087/Proud_mom_06.08.19_39505.jpg",
		},
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CATEGORY":
			return {
				...state,
				categories: action.payload,
			};
		case "FETCH_CATEGORY":
			return {
				...state,
				categories: action.payload,
			};
		default:
			return state;
	}
};

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			swapiUrl: "https://www.swapi.tech/api/",
			people: JSON.parse(localStorage.getItem("people")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: [],
		},

		actions: {
			getSwapiDataByEndpoint: async (endpoint) => {
				const store = getStore();
				if (store[endpoint].length == 10) return;

				try {
					const response = await fetch(store.swapiUrl + endpoint);
					if (response.ok) {
						const data = await response.json();
						const baseList = data.results;
						baseList.forEach(async (baseItem) => {
							const detailResponse = await fetch(baseItem.url);
							const detailData = await detailResponse.json();
							setStore({
								[endpoint]: [...store[endpoint], detailData.result],
							});
							if (store[endpoint].length == 10) {
								let stringifiedValue = JSON.stringify(store[endpoint]);
								console.log(stringifiedValue);
								localStorage.setItem(endpoint, stringifiedValue);
							}
						});
					}
				} catch (error) {
					alert("Warning Error");
					console.log(error);
				}
			},

			addFavorite: (item) => {
				const store = getStore();
				setStore({ itemList: [...store.itemList, item] });
			},

			deleteFavorite: (id) => {
				const store = getStore();
				const filteredList = store.itemList.filter(
					(item, index) => id !== index
				);
				setStore({
					itemList: filteredList,
				});
			}
		},
	};
};

export default getState;

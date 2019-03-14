const getState = ({ getStore, setStore }) => {
	return {
		store: {
			favorites: [{}]
		},
		actions: {
			addToFavorites: koala => {
				var tempStore = getStore();
				var newFavorite = {
					name: koala
				};
				tempStore.favorites.push(newFavorite);
				setStore({ tempStore });
			}
		}
	};
};

export default getState;

import { isAppleDevice } from "./isAppleDevice"

export const linkTo = (name) => {
	const icaraLocationAppleMaps = "http://maps.apple.com/?address=907,Rua+Altamiro+Guimarães,Icara,Santa+Catarina"
	const icaraLocationGoogleMaps = "https://goo.gl/maps/gw2uB9q42LW7E6gU7"

	const criciumaLocationAppleMaps = "http://maps.apple.com/?address=321,Rua+Valentim+Pizzetti,Criciuma,Santa+Catarina"
	const criciumaLocationGoogleMaps = "https://goo.gl/maps/AWjg9NyQ73zgUv2s6"

	const linksDic = {
		site: "http://localhost:3000",
		instagram: "https://www.instagram.com/drabeatrizdella",
		whatsapp: "https://wa.me/554899468322",
		phone: "tel:4899468322",
		icaraLocation: isAppleDevice() ? icaraLocationAppleMaps : icaraLocationGoogleMaps,
		criciumaLocation: isAppleDevice() ? criciumaLocationAppleMaps : criciumaLocationGoogleMaps
	}

	return linksDic[name]
}
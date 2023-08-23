import axios from "axios"

const API_URL = "http://localhost:8080/"

let apiData = {}
let idEstablishment = -1

class AccommodationService {

    putData(data) {
        apiData = data;
    }

    async registerRestaurant() {
        let info = apiData.info

        let restaurantData = {
            responsiblePerson: {
                id: apiData.responsibleId
            },
            name: info.name.value,
            locationName: info.locationName.value,
            description: info.description.value,
            openingTime: info.openingTime.value + ":00",
            closing_time: info.closingTime.value + ":00",
            cookingKind: info.cookingKind.value,
            priceRestaurant: info.price.value
        }

        // LLamada a API para registro
        try {
            let REQUEST_URL = API_URL + "restaurant";

            await axios.post(REQUEST_URL, restaurantData)
                .then(response => {
                    console.log('Respuesta del servidor:', response.data);
                    idEstablishment = response.data.idEstablishment
                    //this.uploadImages(response.data.idEstablishment)
                })
                .catch(error => {
                    console.error('Error al realizar la solicitud:', error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    async uploadImages() {
        if (idEstablishment !== -1) {
            const imageData = new FormData()
            for (const key of Object.keys(apiData.files)) {
                imageData.append('images', apiData.files[key]);
            }
            imageData.append('id_establishment', idEstablishment)
            try {
                let REQUEST_URL = API_URL + "image/restaurant";
                await axios.post(REQUEST_URL, imageData)
                    .then((response) => {
                        console.log(response.data)
                    })
            } catch (error) {
                console.log(error);
            }
        }else{
            console.log("No se ha creado el establecimiento")
        }
    }
}

export default new AccommodationService();
const{ CityRepository} = require('../repository/index');
///service layer consists all the business logic..

class CityService{

    constructor(){
        this.cityRepository = new  CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("error occured in service layer")
            throw{error}
        }
    }
    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId)
            return response;
        } catch (error) {
            console.log("error occured in service layer")
            throw{error}

        }
    }
    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("error occured in service layer")
            throw{error}

        }
    }
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("error occured in service layer")
            throw{error}

        }
    }
    async getAllCities()
    {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("error occured in service layer")
            throw{error}

        }
    }
    
}

module.exports=CityService;


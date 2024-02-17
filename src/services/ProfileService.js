import axios from "axios";

export class ProfileService {
    //get user profile
    async getProfile() {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/profile"
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    //get products listed by user
    async getProducts() {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/products"
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    //get requests made by user
    async getRequests() {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/requests"
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

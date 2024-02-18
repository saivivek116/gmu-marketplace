import axios from "axios";

export class DiscoverService {
    static async getProducts() {
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/products",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

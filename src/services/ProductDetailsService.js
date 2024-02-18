import axios from "axios";

export class ProductDetailsService {
    static async getProductDetails(id) {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`,
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

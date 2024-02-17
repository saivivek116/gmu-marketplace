import axios from "axios";

export class RequestService {
    async createRequest(request) {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/requests",
                request
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

import axios from "axios";

export class NotificationService {
    async getNotifications() {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/notifications"
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

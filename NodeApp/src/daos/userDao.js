import config from '../config/config.js';

const userDao = {
    baseRoute: "user",
    getAllUsers: async () => {
        const response = await fetch(`${config.api}/${userDao.baseRoute}/getAllUsers`, {
            method: "GET",
            mode: "cors",
        });
        const data = await response.json();
        return data;
    },
    saveUser: async (userData) => {
        const response = await fetch(`${config.api}/${userDao.baseRoute}`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" },
        });
        const saveData = await response.json();
        return saveData;
    }
}

export default userDao;
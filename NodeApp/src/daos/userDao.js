import config from '../config/config.js';

const userDao = {
    baseRoute: "user",
    getAllUsers: async () => {
        const response = await fetch(`${config.api}/${userDao.baseRoute}/getAllUsers`);
        const data = await response.json();
        return data;
    },
}

export default userDao;
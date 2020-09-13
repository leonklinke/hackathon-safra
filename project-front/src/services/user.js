import api from './api';
import { login, logout, getId, getType } from './auth';

const UserService = {}

UserService.listAll = async (data) => {
    try {
        const response = await api.get('/user');
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user list", err);
    }
}
UserService.show = async () => {
    try {
        const response = await api.get('/user');
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user list", err);
    }
}
UserService.getInvestments = async (data) => {
    try {
        const response = await api.get('/interest/1/' + await getId() + '/');
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user list", err);
    }
}
UserService.doLogin = async (data) => {
    try {
        //login User
        const response = await api.post('/userLogin',
            {
                email: data.login,
                password: data.password
            }
        );
        if (response.data.error) {
            return response.data;
        }

        //here we know that the creation is correct
        await login(response.data.token, response.data.user)
        return response.data;
    } catch (err) {
        console.log("error user login", err);
    }
}
UserService.logout = async () => {
    await logout()
    return;
}
UserService.create = async (data) => {
    try {
        const response = await api.post('/user',
            data
        );
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user create", err);
    }
}
UserService.delete = async (id) => {
    try {
        const response = await api.delete('/user/' + id);
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user delete", err);
    }
}

UserService.dashboardInfo = async () => {
    try {
        const response = await api.get('/userDashboard');
        if (response.data == null) {
            return [];
        }
        return response.data;
    } catch (err) {
        console.log("error user dashboard", err);
    }
}

UserService.forgotPassword = async (data) => {
    try {
        const response = await api.post('/user/forgotPassword', {
            email: data.login
        });

        if (response.data.error) {
            return response.data;
        }

        return response.data;

    } catch (err) {
        console.log("error user forgot password", err);
    }
}

export default UserService;
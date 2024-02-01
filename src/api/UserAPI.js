import axios from 'axios';
import { USER_ENDPOINT } from './EndPoint';

export const getRandomNickname = async () => {
    return await axios
        .get(`${USER_ENDPOINT}/nickname`)
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
                return {
                    success: true,
                    data: res.data,
                    error: '',
                };
            } else {
                return {
                    success: false,
                    error: res.data,
                };
            }
        })
        .catch((err) => {
            return {
                success: false,
                error: err.response.data,
            };
        });
};

export const getSchoolName = async (user_id) => {
    return await axios
        .get(`${USER_ENDPOINT}/info/${user_id}/school`)
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
                return {
                    success: true,
                    data: res.data,
                    error: '',
                };
            } else {
                return {
                    success: false,
                    error: res.data,
                };
            }
        })
        .catch((err) => {
            return {
                success: false,
                error: err.response.data,
            };
        });
};

export const updateNickname = async (user_id, nickname) => {
    return await axios
        .post(`${USER_ENDPOINT}/nickname`, {
            user_id: user_id,
            nickname: nickname,
        })
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
                return {
                    success: true,
                    data: res.data,
                    error: '',
                };
            } else {
                return {
                    success: false,
                    error: res.data,
                };
            }
        })
        .catch((err) => {
            return {
                success: false,
                error: err.response.data,
            };
        });
};

export const studentLogin = async (user_id) => {
    return await axios
        .post(`${USER_ENDPOINT}/login/student`, {
            user_id: user_id,
        })
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
                return {
                    success: true,
                    data: res.data,
                    error: '',
                };
            } else {
                return {
                    success: false,
                    error: res.data,
                };
            }
        })
        .catch((err) => {
            return {
                success: false,
                error: err.response.data,
            };
        });
};

export const teacherLogin = async (user_id, password) => {
    return await axios
        .post(`${USER_ENDPOINT}/login/teacher`, {
            user_id: user_id,
            password: password,
        })
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
                return {
                    success: true,
                    data: res.data,
                    error: '',
                };
            } else {
                return {
                    success: false,
                    error: res.data,
                };
            }
        })
        .catch((err) => {
            return {
                success: false,
                error: err.response.data,
            };
        });
};

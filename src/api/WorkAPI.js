import axios from 'axios';
import { WORK_ENDPOINT } from './EndPoint';

export const getUserCreationList = async (user_id, creation_type) => {
    return await axios
        .get(`${WORK_ENDPOINT}/my/${user_id}/${creation_type}`)
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

export const getSchoolCreationList = async (user_id, creation_type) => {
    return await axios
        .get(`${WORK_ENDPOINT}/school/${user_id}/${creation_type}`)
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

export const getSchoolCreationListForLoading = async (user_id) => {
    return await axios
        .get(`${WORK_ENDPOINT}/loading/${user_id}`)
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

export const saveCreation = async (
    creator_user_id,
    creation_type,
    creation_title,
    creation,
    creation_training_id
) => {
    return await axios
        .post(`${WORK_ENDPOINT}/save`, {
            creator_user_id: creator_user_id,
            creation_type: creation_type,
            creation_title: creation_title,
            creation: creation,
            creation_training_id: creation_training_id,
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

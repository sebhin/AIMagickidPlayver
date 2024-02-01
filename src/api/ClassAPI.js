import axios from 'axios';

import { CLASS_ENDPOINT } from './EndPoint';


export const getLessonList = async () => {
    console.log(`url : ${CLASS_ENDPOINT}/lesson`)
          return await axios.get( `${CLASS_ENDPOINT}/lesson`
          ).then( res => {
                    if( res.status === 200 || res.status === 201){
                              return{
                                        success: true,
                                        data: res.data,
                                        error: '',
                              };
                    }else{
                              return{
                                        success: false,
                                        error: res.data,
                              }
                    }
          }).catch( err => {
                    return{
                              success: false,
                              error: err.response.data,
                    };
          });
};

export const getLessonContentJSON = async (lesson_id) => {
          return await axios.get( `${CLASS_ENDPOINT}/lesson/${lesson_id}`
          ).then( res => {
                    if( res.status === 200 || res.status === 201){
                              return{
                                        success: true,
                                        data: res.data,
                                        error: '',
                              };
                    }else{
                              return{
                                        success: false,
                                        error: res.data,
                              }
                    }
          }).catch( err => {
                    return{
                              success: false,
                              error: err.response.data,
                    };
          });
};

export const getTrainingList = async (training_type) => {
    return await axios.get( `${CLASS_ENDPOINT}/training/${training_type}`
    ).then( res => {
              if( res.status === 200 || res.status === 201){
                        return{
                                  success: true,
                                  data: res.data,
                                  error: '',
                        };
              }else{
                        return{
                                  success: false,
                                  error: res.data,
                        }
              }
    }).catch( err => {
              return{
                        success: false,
                        error: err.response.data,
              };
    });
};

export const getTrainingInfo = async (training_type, training_id) => {
    return await axios.get( `${CLASS_ENDPOINT}/training/${training_type}/${training_id}`
    ).then( res => {
              if( res.status === 200 || res.status === 201){
                        return{
                                  success: true,
                                  data: res.data,
                                  error: '',
                        };
              }else{
                        return{
                                  success: false,
                                  error: res.data,
                        }
              }
    }).catch( err => {
              return{
                        success: false,
                        error: err.response.data,
              };
    });
};

export const callChatGPT = async (user_id, training_type, training_id, data) => {
    return await axios.post( `${CLASS_ENDPOINT}/training/${training_type}/${training_id}/chatgpt`, {
        prompt: data?.prompt ?? '',
        user_id: user_id,
    }).then( res => {
              if( res.status === 200 || res.status === 201){
                        return{
                                  success: true,
                                  data: res.data,
                                  error: '',
                        };
              }else{
                        return{
                                  success: false,
                                  error: res.data,
                        }
              }
    }).catch( err => {
              return{
                        success: false,
                        error: err.response.data,
              };
    });
};

export const callFalAI = async (user_id, training_type, training_id, data) => {
    return await axios.post( `${CLASS_ENDPOINT}/training/${training_type}/${training_id}/falai`, {
        prompt: data?.prompt ?? '',
        user_id: user_id,
    }).then( res => {
              if( res.status === 200 || res.status === 201){
                        return{
                                  success: true,
                                  data: res.data,
                                  error: '',
                        };
              }else{
                        return{
                                  success: false,
                                  error: res.data,
                        }
              }
    }).catch( err => {
              return{
                        success: false,
                        error: err.response.data,
              };
    });
};


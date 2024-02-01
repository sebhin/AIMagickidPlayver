import axios from 'axios';
import { MAGICBEAN_ENDPOINT } from './EndPoint';

export const getTotalMagicbean = async (user_id) => {
    return await axios.get( `${MAGICBEAN_ENDPOINT}/total/${user_id}`
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

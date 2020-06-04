import {AsyncStorage,Alert} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { IGNELE,ARAMA_GECMISI_SORGULA } from './types';
import {define} from '../define.json'; 


export const ignelemeChanged = (type) => (dispatch) => {

  dispatch({
    type: IGNELE,
    payload: type
  });
};

 

export const getStorage = async (key) =>{
   try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
          return value;
      }else{
        return '';
      }
    } catch (error) {
      console.log('Hata oluştu',error);
    }
};

export const setStorage = async (key,value) => {
  try {
  await AsyncStorage.setItem(key, value+'');
  } catch (error) {
  console.log('Hata oluştu',error);
  }
};

export const postRequest = async (body,url) => {
  let url2 = define.apiUrl+url;
  NetInfo.isConnected.fetch().then(async (isConnected) => {
    if(!isConnected)
      {
        Alert.alert('Bağlantı hatası','İnternet bağlantısını kontrol ediniz!');
        return false;
      }  

  });

  const data =  await fetch(url2, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( body ),
  }).then(resp => resp.json());
  return data;
     
  }

import Api from "./api";
import { getCookie, eraseCookie } from "utility/functions/storage";
import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

// ** NEED REFACTOR **
export default class CoreBase {

  /* 
    These methods wraps Axios instance so we can make requests and get responses/erros more easily

    That type cast mess was because I couldn't find the correct type for that object.
  */
  public static async get(url:string, headers?:Object){
    let result:any;

    await Api.get(
      url, 
      { 
        headers:{
          Authorization: 'Bearer ' + getCookie('token'),
          ...headers
        } as unknown as AxiosRequestHeaders
      } as AxiosRequestConfig
    )
    .then((response) => {
      result =  response
    })
    .catch((error:any)=>{
      result = this.handleError(error)
    })

    return result;
  }

  public static async post(url:string, data?: any, headers?:Object){
    let result:any;

    await Api.post(
      url, 
      data,
        { 
          headers:{
            Authorization: 'Bearer ' + getCookie('token'),
            ...headers
          } as unknown as AxiosRequestHeaders
        } as AxiosRequestConfig
    )
    .then((response) => {
      result =  response
    })
    .catch((error:any)=>{
      result = this.handleError(error)
    })

    return result;
  }

  private static handleUnauthorized(){
    eraseCookie('token');
  }

  private static handleError(error:any){
    console.log(error)
    if (error.response)
      return error.response

    if (error.request)
      return error.request

    else 
      return error.message
  }
}

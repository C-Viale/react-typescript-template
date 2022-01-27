/**
  * Set a new cookie.
  * 
  * @param {string} name 
  * @param {string} value 
  * @param {number} days How long this cookie will live.
*/
export function setCookie(name:string, value:string, days:number) {
  let expires:string = "";
  
  if (days > 0) {
    let date:Date = new Date();

    date.setTime(date.getTime() + (days*24*60*60*1000));
    date.setHours(0, 0, 0, 0);
    expires = "; expires=" + date.toUTCString();
  }
  
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

/**
  * Get a cookie.
  * 
  * @param {string} name 
*/
export function getCookie(name:string) {
  try {
    let result:string|null = null;
    if(typeof window !== "undefined"){
      let nameEQ = name + "=",
      cookieList = document ? document.cookie.split(';'): ''

      for(let i=0;i < cookieList.length;i++) {
        let cookie = cookieList[i];
        while (cookie.charAt(0)==' ') 
          cookie = cookie.substring(1,cookie.length);
        if (cookie.indexOf(nameEQ) == 0) {
          result = cookie.substring(nameEQ.length, cookie.length);
          break;
        }
      }
    }
    return result;

  } catch(error){
    console.log(error);
    return null;
  }
}

/**
  * Delete a cookie.
  * 
  * @param {string} name 
*/
export function eraseCookie(name:string) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
}

/**
  * Delete all cookies.
*/
export function clearAllCookies(){
  document.cookie.split(";").forEach(function(c) { 
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
  });
}

/**
  * Parse a JSON Web Token and extract the payload. It doesn't verify the signature.
  * @param {string} token
*/
export function parseJwt(token:any) {
  if(!token) return null
  let base64Url:string = token.split('.')[1];
  let base64:string = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};
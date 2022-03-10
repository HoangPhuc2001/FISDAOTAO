

export async function postLogin(user, password) {
        
    const response = await fetch('http://118.69.123.51:5000/fis/api/login', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json'}),
        body: JSON.stringify({
            username: user,
            password: password
        }),

    })
    .then((response) => {
        console.log('response => postLoginApi Success')
        return response.json();
    })
    .catch((error) => {
          console.log('error login',error)
          return {resultCode: -1, message: 'Vui lòng nhập đầy đủ thông tin đăng nhập'};
      });;
    return response
}            

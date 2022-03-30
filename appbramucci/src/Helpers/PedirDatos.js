

export const pedirDatos = (stock) =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(stock)
      },1000)
  });
}
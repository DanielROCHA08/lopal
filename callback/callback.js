function callback(){
    const minhaFunc = (num1, num2, operacao) => {
        return operacao(num1, num2);
    } 

    const calcular = (a, b) => a * b;

    console.log(minhaFunc(num1 = 2, num  = 3,
         operacao = (a, b) => {return "Vai, Curíntia! " + a + b}));

   

    minhaFunc(2, 3, calcular);
}
callback();
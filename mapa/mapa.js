function mapa(){
    const frutas = new Map();

    frutas.set("maçã", 500);
    frutas.set("banana", 300);
    frutas.set("laranja", 200);
    //frutas.set("pera". 400);
    frutas.set("pera", 200);
    frutas.set("pera", 400);

    let preco = frutas.get("pera");

    console.log(preco);

    //size é uma propriedade que armazena o tamanho do mapa
    console.log(frutas.size);

    //O método has() retorna verdadeito ou falso para uma determinada chave
    console.log(frutas.has('banana')); 
    frutas.forEach((valor, chave) => console.log  (`${chave} = R$${valor},00`));

    //O método keys() retorna uma coleção com as chaves do mapa
    //A estrutura de repetição for of itera sobre os valores de 
    //uma coleção
    for (const x of frutas.keys()){
        console.log(x);
    }
    
    //values() é um método que retorna coleção contendo todos valores
    //de um mapa 
    for (const x of frutas.values()){
        console.log(x);
    }

}
mapa();

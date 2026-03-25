async function lagarta(){
    let lagarta = "(_),(_),(_),(:D)";
    let lagarta_espichada = "(_),(__),(_),(:D)";
    let espaco = " ";
     
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    for(let i = 0; i < 30; i++){
        console.log(i % 2 == 0? lagarta = espaco + lagarta:
            lagarta_espichada = espaco + lagarta_espichada);
        await sleep (400);
        console.clear();
         
    }
}
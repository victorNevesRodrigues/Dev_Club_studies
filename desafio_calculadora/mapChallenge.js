const list = [
    {name:"Rodolfo", vip:"true"},
    {name:"Maria", vip:"false"},
    {name:"João", vip:"true"},
    {name:"Bruno", vip:"true"},
    {name:"Carla", vip:"false"},
    {name:"Ana", vip:"true"},
    {name:"Julio", vip:"false"}
]
const greenOrBlack = (banana) => {
    let client;
        if (banana.vip == "true"){
        client = {name:banana.name, vip:banana.vip, sector:"Black"};
        return client;
    } else {
        client = {name:banana.name, vip:banana.vip, sector:"Green"};
        return client;
    }
}
console.log(list.map(greenOrBlack))
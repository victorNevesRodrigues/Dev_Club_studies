/* 
primeiro acrescente 10% no marketValue do array
segundo deixe apenas as empresas que foram fundadas antes do ano 2000
terceiro some o marketValue das empresas que sobraram e retorne esse numero na formatação brasileira(, ao invés de ponto)
*/

const companies = [
    { name:'Samsung',marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft',marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel',marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook',marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify',marketValue: 30, CEO:'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];
const plus10 = companies.map((value) => {
    return {name:value.name, marketValue: value.marketValue*1.10, CEO:value.CEO, foundedOn:value.foundedOn}
})
const justOld = plus10.filter((value) => value.foundedOn < 2000);
const oldSum = justOld.reduce((acc, current) => acc + current.marketValue, 0)
console.log(oldSum.toLocaleString());
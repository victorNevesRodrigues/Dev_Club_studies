const list = [20,3,234,12,17,541,6,87,275,1000];
// retorne os valores do list que sejam divisiveis por 5 e sejam pares
const onlyPar = list.filter((value) => value % 5 == 0 && value % 2 == 0 )
console.log(onlyPar)
const companies = [
{ name:'Samsung',marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
{ name: 'Microsoft',marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
{ name: 'Intel',marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968 },
{ name: 'Facebook',marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004 },
{ name: 'Spotify',marketValue: 30, CEO:'Daniel Ek', foundedOn: 2006 },
{ name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];
// retorne apenas as empresas que foram criadas depois de 1975
const after1975 = companies.filter((company) => company.foundedOn > 1975);
console.log(after1975)



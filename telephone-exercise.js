let telephoneData = [
  {countryCode: '0030', country: 'Greece'},
  {countryCode: '0039', country: 'Italy'},
  {countryCode: '00972', country: 'Israel'},
  {countryCode: '0007', country: 'Russia'},
  {countryCode: '0044', country: 'United Kingdom'},
  {countryCode: '0001', country: 'United States'},
  {countryCode: '00963', country: 'Syria'},
  {countryCode: '0029', country: 'Belgium'},
  {countryCode: '0031', country: 'Holland'},
  {countryCode: '0049', country: 'Germany'}
]

//With FILTER() method
const phoneCountryFilter = phoneCode => telephoneData.filter(x => x.countryCode == phoneCode)[0].country;
//filter() gives an array (here with an object), therefore with bracket notation
console.log(phoneCountryFilter("0007")); //Russia


//With FIND() method
const phoneCountryFind = phoneCodeFind => telephoneData.find(z => z.countryCode == phoneCodeFind).country;
//find() gives an object, therefore only dot notation
console.log(phoneCountryFind(0049)); //Germany


















//Create diamond shape
const diamond = (stars) => {
  let diamondShape = stars;
  for (let i = 1; i < 6; i++) {
    let newDiamond = diamondShape.repeat(i)
    for (let j = 1; j >= 1; j--) {
      // i % 2 === 1 ? console.log(diamondShape += diamondShape) : console.log(diamondShape -= diamondShape);
      i < 4 ? console.log(newDiamond) : console.log(diamondShape.repeat());

      // console.log(diamondShape.repeat(i));
      // i % 2 === 1 ? console.log(diamondShape.repeat(i)) : console.log(diamondShape.repeat(j));
      // j % 2 === 1 ? console.log(diamondShape.repeat(j)) : console.log(diamondShape.repeat(i))
      // console.log(diamondShape.repeat(j));
    }
  }
  return diamondShape;
}

console.log(diamond("*"));

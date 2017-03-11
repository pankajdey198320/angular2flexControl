
var Data=[{index:0,
    fileds:[{fieldName:'Name',filedValue:'Prateek' },
    {fieldName:'salary',filedValue:'2342' },
    {fieldName:'Age',filedValue:'45' }]},
    {index:0,fileds:
        [{fieldName:'Name',filedValue:'Pankaj Dey' },
        {fieldName:'salary',filedValue:'3300' },
        {fieldName:'Age',filedValue:'33' }]},
        {index:0,
        fileds:[{fieldName:'Name',filedValue:'Rahul' },
        {fieldName:'salary',filedValue:'343' },
        {fieldName:'Age',filedValue:'22' }]}]
let data2= [
    {name:'Pankaj',salary:'3000',Age:34},
    {name:'Rahul',salary:'2222',Age:24},
    {name:'Manas',salary:'4422',Age:44},
    {na2me:'ankit',salary:'5000',Age:29}
];
export class DataService{
getData():any[]{
    return  data2;
}
}

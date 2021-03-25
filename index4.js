// array

//const LishNilai =['A','B','C']
//console.log(LishNilai[2])

const dataMahasiswa = [
{
    nama : 'Rofik Husnul Latifah',
    npm : '19421056',
    prodi :'Informatika'
}
]
//console.log(dataMahasiswa[0].npm)
for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama +
     '-' + dataMahasiswa[i].npm +'-' + 
    dataMahasiswa[i].prodi)
}
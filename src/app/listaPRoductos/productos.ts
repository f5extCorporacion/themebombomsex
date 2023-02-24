export interface Productos {
    id:string,
    nameservicio:string,
    precio:Number,
    img:string,
    horas:Number,
    tipo:string
}
export const Servicios =[
    {
    id:'1',
    nameservicio:"Relacion_Sexual",
    precio:150000,
    img:' https://thenounproject.com/api/private/icons/728762/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjxCIBa8kihBbE8q5FL6rQJxwwpVxvvz6NSJiO2dJuo1ToOZJhAjsrXgkZrSM0ZAacY0drtMl_75t36i2MfrPB4eNgKw%3D%3D',
    horas:0,
    tipo:'presencial'
},
{
    id:'2',
    nameservicio:"Dama_de_Compañia",
    precio:200000,
    img:'kis.png',
    horas:1,
    tipo:'presencial'
},
{
    id:'3',
    nameservicio:"Pack de fotos",
    precio:80000,
    img:'pack.png',
    horas:-1,
    tipo:'virtual'
},
{
    id:'4',
    nameservicio:"Videos de 5 min",
    precio:80000,
    img:'pack.png',
    horas:-1,
    tipo:'virtual'
}
];

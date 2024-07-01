const ini_title=document.getElementById("input_tittle");
const ini_price = document.getElementById('input_price');
const ini_taxes = document.getElementById('input_taxes');
const ini_ads = document.getElementById('input_ads');
const ini_discount = document.getElementById('input_discount');
const total = document.getElementById('total');
const btn_create = document.getElementById('btn_create');
const btn_delete = document.getElementById('btn_delete_all');
const adding_list = document.getElementById('adding_list');
const arr=[];

let id = Math.floor(Math.random() *100);
function tot(){
    if(ini_price.value !=""){
    let res=(+ini_price.value+ +ini_ads.value+ +ini_taxes.value)-+ini_discount.value;
    total.innerHTML=`<span class=ms-2> ${res} </span> `;
    total.style.transition="600ms"
    total.style.backgroundColor="green"
    }else{
        total.innerHTML="";
        total.style.backgroundColor="red"
    };
};



class product{
    constructor(title, price, taxes, ads, discount,id){
    this.title=title;
    this.price=price;
    this.taxes=taxes;
    this.ads=ads;
    this.discount=discount;
    this.id=id;
};
// to show data in table 
showdata(){
    let tr = document.createElement("tr");
    tr.innerHTML=`
    <td> ${this.title}</td> 
    <td>${this.price} </td>
    <td>${this.taxes} </td>
    <td>${this.ads}</td>
    <td>${this.discount} </td>
    <td><button class="btn btn-success">Update</button></td>
    <td><button class="btn btn-danger delete" >delete</button></td>
    `
adding_list.appendChild(tr);

// to remove all data , if user need it
btn_delete.addEventListener("click" , (d)=>{
    tr.remove();    
});
};

// to clear all inputs after submit
clr(){
    ini_title.value="";
    ini_price.value="";
    ini_taxes.value="";
    ini_ads.value="";
    ini_discount.value="";
    total.innerHTML="";
    total.style.backgroundColor="red";
};
static show_from_local_storage(){
if(localStorage.getItem("products")){
    JSON.parse(localStorage.getItem("products")).forEach((item) =>{
        let tr = document.createElement("tr");
        tr.innerHTML=`
        <td>${item.title}</td> 
        <td>${item.price} </td>
        <td>${item.taxes} </td>
        <td>${item.ads}</td>
        <td>${item.discount} </td>
        <td><button class="btn btn-success update">Update</button></td>
        <td><button class="btn btn-danger delete" id="${id}" >delete</button></td>
        `;
        adding_list.appendChild(tr);
    }
    )
}
}};
product.show_from_local_storage();

btn_create.addEventListener("click" , (e)=>{
    
    let obj_product=new product(ini_title.value , ini_price.value , ini_taxes.value , ini_ads.value , ini_discount.value, id );
    obj_product.showdata();
    obj_product.clr();
    arr.push(obj_product);
    localStorage.products=JSON.stringify(arr);
})

adding_list.addEventListener("click",(s)=>{
if(s.target.classList.contains("delete")){
s.target.parentElement.parentElement.remove();
}

})



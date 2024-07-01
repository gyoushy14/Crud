


// count

// update
// search
// clean data


const ini_title=document.getElementById("input_tittle"),
ini_price = document.getElementById('input_price'),
ini_taxes = document.getElementById('input_taxes'),
ini_ads = document.getElementById('input_ads'),
ini_discount = document.getElementById('input_discount'),
total = document.getElementById('total'),
ini_count = document.getElementById('input_count'),
ini_category = document.getElementById('input_category'),
btn_create = document.getElementById('btn_create'),
ini_search = document.getElementById('input_search'),
btn_s_t = document.getElementById('btn_search_tittle'),
btn_s_c = document.getElementById('btn_search_category'),
btn_delete = document.getElementById('btn_delete_all'),
adding_list = document.getElementById('adding_list'),
arr=[];

// --------------------------------------------------------------------------------------------------------------

// Get Total method()
// This method calc total for price after taxes , ads , discount .


// --------------------------------------------------------------------------------------------------------------

// Create product
class Create_product{
constructor(title,price,taxes,ads,discount,count,category){
    this.title=title;
    this.price=price;
    this.taxes=taxes;
    this.ads=ads;
    this.discount=discount;
    this.count=count;
    this.category=category;
    this.btn_update=`<button class="btn btn-success text-white"> Update </button>`;
    this.btn_del=`<button class="btn btn-danger text-white delete" id="delprod"> Delete </button>`;

};
// searchmood(id){
//     console.log(id);
// }

// --------------------------------------------------------------------------------------------------------------------

// read 
show(){
    let tr = document.createElement("tr");
    tr.innerHTML=
    `
    <td> ${this.title}</td> 
    <td>${this.price} </td>
    <td>${this.taxes} </td>
    <td>${this.ads} </td>
    <td>${this.discount} </td>
    <td>${this.category} </td>
    <td>${this.btn_update}</td>
    <td>${this.btn_del}</td>
    `
    adding_list.appendChild(tr);

// -------------------------------------------------------------------------------

// delete

btn_delete.addEventListener("click" , (n)=> {
    tr.remove();
    localStorage.removeItem("products")
n.preventDefault();
})
adding_list.addEventListener("click",(s)=>{
    if(s.target.classList.contains("delete")){
    s.target.parentElement.parentElement.remove();
    }
    s.preventDefault();
},)

}
// --------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// clear inputs
clr(){
    ini_price.value="";
    ini_taxes.value="";
    ini_ads.value="";
    ini_category.value="";
    ini_count.value="";
    ini_search.value="";
    ini_discount.value="";
    ini_title.value="";
    total.innerHTML="";
    total.style.backgroundColor="red"
};

};
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
let obj_create = new Create_product(ini_title.value , ini_price.value , ini_taxes.value , ini_ads.value , ini_discount.value , ini_count.value , ini_category.value);

btn_create.addEventListener("click" , (e)=>{
let obj_create = new Create_product(ini_title.value , ini_price.value , ini_taxes.value , ini_ads.value , ini_discount.value , ini_count.value , ini_category.value);
obj_create.show();
obj_create.clr();
// Save local storage
arr.push(obj_create);
localStorage.products=JSON.stringify(arr);
e.preventDefault();
});


function searchmood(id){
    // console.log(id);
    ini_search.focus()
    ini_search.style.scale="1.1";
    if(id == 'btn_search_tittle'){
        ini_search.placeholder="Search By Tittle"
    }else if(id == 'btn_search_category'){
        ini_search.placeholder="Search By Category"
    }
}

function search(value){
    for(let i =0 ; i< arr.length ; i++){
        if(arr[i].title.includes(value)){
            let tr = document.createElement("tr");
            let table = document.getElementById("tab")
    table +=`
            <tr>
            <td>${arr[i].title}</td>
            <td>${arr[i].price}</td>
            <td>${arr[i].taxes}</td>
            <td>${arr[i].ads}</td>
            <td>${arr[i].discount}</td>
            <td>${arr[i].category}</td>
            <td>${arr[i].btn_update}</td>
            <td>${arr[i].btn_del}</td>
            <\tr>
            `
           adding_list.innerHTML=table
           

        }
    }
}


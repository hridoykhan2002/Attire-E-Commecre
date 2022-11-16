
// selecting Document
const buttons = document.querySelectorAll('.btn-js');
const mainRow = document.querySelector('.main-row');

// arrays

const productList = [
	{
		id: 1,
		name: "Gray Trouser",
		price: "$ 75.50",
		img: "img/c1.png",
		catagori: "best seller"
	},
	{
		id: 2,
		name: "Gray T-Shirt",
		price: "$ 45.50",
		img: "img/c2.png",
		catagori: "best seller"
	},
	{
		id: 3,
		name: "White T-shirt",
		price: "$ 65.50",
		img: "img/c3.png",
		catagori: "best seller"
	},
	{
		id: 4,
		name: "Red T-shirt",
		price: "$ 55.50",
		img: "img/c4.png",
		catagori: "arrival"
	},
	{
		id: 5,
		name: "hourseman Hat",
		price: "$ 15.50",
		img: "img/c5.png",
		catagori: "arrival"
	},
	{
		id: 6,
		name: "Woman Black T-shirt",
		price: "$ 55.50",
		img: "img/c6.png",
		catagori: "futered"
	},
	{
		id: 7,
		name: "Ladies Bag",
		price: "$ 55.50",
		img: "img/c7.png",
		catagori: "futered"
	},
	{
		id: 8,
		name: "Ladies Winter Fashion",
		price: "$ 55.50",
		img: "img/c8.png",
		catagori: "futered"
	},
];

const loadWindow = () =>{
	manageWindow(productList)
};

const manageWindow = (list) =>{
	let findEle = list.map((item) =>{
		return `<div class="col-lg-3 col-md-6">
				<div class="collection-box">
				<div class="collection-img-box p-4">
					<img class="img-fluid m-auto d-flex" src=${item.img} style="height: 250px; width:200px">
					<div class="sale-item m-auto text-center ">
					<p class="px-1 d-flex text-white">Sale</p>
					</div>
				</div>
				<div class="collection-text-box m-auto text-center">
					<img src="img/star.png" alt="" class="img-fluid d-flex m-auto" style="height: 50px; width: 100px;">
					<h6>${item.name}</h6>
					<h6 class="collection-price">${item.price}</h6>
				</div>
				</div>
			</div>`
	})
	findEle = findEle.join("");
	mainRow.innerHTML = findEle;
};


const btnFunction = (e) =>{
	const dataSet = e.currentTarget.dataset.id;
	const getBtnValues = productList.filter((item) =>{
		if(item.catagori===dataSet){
			return item;
		}
	})
	if(dataSet=== "all"){
		loadWindow(productList)
	}else{
		loadWindow(getBtnValues)
	}
};

// add Event listener

window.addEventListener('DOMContentLoaded', loadWindow);

buttons.forEach((btn) =>{
	btn.addEventListener('click', btnFunction);
});

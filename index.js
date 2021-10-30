// Tentativa de adicionar a opção de excluir algo da comanda

var inputElement = document.querySelector('#produto');


class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Bill {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem = item => {
    this.items.push(item);
    this.render();
    this.billTotal();
  }

  removeItem = nome => {
    //TODO
  }

  billTotal = () => {
    //TODO
     

    var total = 0;
    for(var i=0; i < this.items.length; i++ ){
      total += this.items[i].price;
    }

    console.log(total);
    document.getElementById('total').innerHTML= 'R$ ' + total;

  }

  render = () => {
    //UNFINISHED
    let billContainer = document.getElementById('items');
    billContainer.innerHTML = '';
    this.items.map(item => {
      let row = document.createElement('tr');
      let foodName = document.createElement('td');
      let foodPrice = document.createElement('td');
      foodName.innerHTML = item.name;
      foodPrice.innerHTML = 'R$ ' + item.price;

      row.append(foodName);
      row.append(foodPrice);
      billContainer.append(row);
    })
  }
}


var bill = new Bill();

function init() {
  
  bill.render();
  document.getElementsByTagName('body')[0].style.display = 'flex';
}

function printBill() {
  window.print();
}

function adicionarItem(){
  bill.addItem(new Item('Água', 1.95));
  bill.addItem(new Item('croissant', 5.99));
  bill.addItem(new Item('café', 2.99));

  if(inputElement.value == ''){
		alert("Digite seu pedido!");
		return false;
	}else{		
	var todoText = inputElement.value;
	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
	salvarDados();
	}

  
  //teste para excluir item da comanda

  /* var linkText = document.createTextNode('Excluir');
  linkElement.appendChild(linkText);

  todoElement.appendChild(addItem);
   */
} 
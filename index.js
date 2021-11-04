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
    console.log(nome);
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == nome) {
        this.items.splice(i, 1)

        // achou!
      }
    } console.log(this.items);
    this.render()
    //TODO

  }


  billTotal = () => {
    //TODO


    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }

    console.log(total);
    document.getElementById('total').innerHTML = 'R$ ' + total;

  }

  render = () => {
    //UNFINISHED
    
    let billContainer = document.getElementById('items');
    billContainer.innerHTML = '';
    this.items.map(item => {
      console.log('@>', item)
      let row = document.createElement('tr');
      let foodName = document.createElement('td');
      let foodPrice = document.createElement('td');
      let deletar = document.createElement('td');
      deletar.innerHTML = 'Excluir'
      deletar.onclick = function () {
        bill.removeItem(item.name);
      }
      foodName.innerHTML = item.name;
      foodPrice.innerHTML = 'R$ ' + item.price;


      row.append(foodName);
      row.append(foodPrice);
      row.append(deletar);
      billContainer.append(row);
    })
  }
}


var bill = new Bill();

function init() {
  bill.addItem(new Item('Café', 1.99))
  bill.addItem(new Item('Pão', 1.55))
  bill.addItem(new Item('Água', 2.55))
  bill.render();
  document.getElementsByTagName('body')[0].style.display = 'flex';
}

function printBill() {
  window.print();
}

function adicionarItem() {


  //alert

  if (inputElement.value == '') {
    alert("Digite seu pedido!");
    return false;
  } else {
    var todoText = inputElement.value;
    bill.addItem(new Item(todoText,))
  }


  //teste para excluir item da comanda

  /* var linkText = document.createTextNode('Excluir');
  linkElement.appendChild(linkText);

  todoElement.appendChild(addItem);
   */
}
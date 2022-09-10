// Parte 2
// Exercício 1 e 2

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const person = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  console.log(`Olá ${person}, entrega para: ${name}, Telefone: ${phone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const name = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const payment = order.payment.total = 50;
  console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${payment},00.`);
}

orderModifier(order);

// Parte 3
// Exercício 1

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (obj, key, value) => obj[key] = value;

addKey(lesson2, 'turno', 'noite');

// Exercício 2

const listKeys = obj => console.log(Object.keys(obj));

listKeys(lesson1);

// Exercício 3

const showSizeObj = obj => console.log(Object.keys(obj).length);

showSizeObj(lesson1);

// Exercício 4

const listValues = obj => console.log(Object.values(obj));

listValues(lesson1);

// Exercício 5

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Exercício 6

const totalStudents = obj => {
  let total = 0;
  const students = Object.keys(obj);
  for (const key in students) {
    total += obj[students[key]].numeroEstudantes;
  }
  return total;
}

console.log(totalStudents(allLessons));
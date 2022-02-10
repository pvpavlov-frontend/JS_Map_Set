'use strict'
// Map

// Пусть дан массив массивов ([[1,"first"], [3,"third"]]).
// Создайте коллекцию Map из этjого массива.
// Получите список ключей и значений отдельно.
// Получите текущее количество элементов.
// Добавьте и удалите элемент
// Произведите поиск по ключу 


let countMap = new Map([
  [1,"first"], 
  [3,"third"]
])

for (let item of countMap.keys()) {
  console.log("key =>",(item)); 
}
for (let amount of countMap.values()) {
  console.log("value =>",(amount)); 
}
console.log(countMap.size); 

countMap.set(2, "two")
console.log('countMap :>> ', countMap);
countMap.delete(3)
console.log('countMap :>> ', countMap);
console.log('countMap.has(3) :>> ', countMap.has(3));
console.log('countMap.has(1) :>> ', countMap.has(1));

// Set
// Создайте коллекцию Set с начальными значениями 1,2,3. 
// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
// Добавите еще несколько элементов.
// С помощью цикла for-of переберите ее значения и выведите в консоль.
// Найдите сумму этих значений.
// Удалите элемент 2.
// Очистите всю коллекцию.

let countSet = new Set();
console.log('countSet :>> ', countSet);
countSet.add(1)
console.log('countSet :>> ', countSet);
countSet.add(2)
console.log('countSet :>> ', countSet);
countSet.add(3)
console.log('countSet :>> ', countSet);
console.log(countSet.has(3));
console.log(countSet.has(4));
countSet.add(4)
countSet.add(4)
countSet.add(6)
console.log('countSet :>> ', countSet);

let sum  = 0
for (let num of countSet) {
  sum += num;
}
console.log('sum :>> ', sum); 

countSet.delete(2)
console.log('countSet :>> ', countSet);

countSet.clear()
console.log('countSet :>> ', countSet);




// Из массива [1,6,9,4,9,1,5,6] получить массив уникальных значений.
// Из массивов [1,6,9,4,9,1,5,6] и [5, 10, 11] получить один массив уникальных значений.


const uniqueValues = new Set([1,6,9,4,9,1,5,6])
console.log('uniqueValues :>> ', Array.from(uniqueValues));

const uniqueValues1 = [1,6,9,4,9,1,5,6]
const uniqueValues2 = [5, 5, 5, 10, 11]
const rezUniqueValues = new Set([...uniqueValues1, ...uniqueValues2])
console.log('rezUniqueValues :>> ', Array.from(rezUniqueValues) );
// MyArray
// * Сделать MyArray итерируемым.
// (Пример: https://github.com/pecourses/pe2021-2-js-intro/blob/main/js/symbol.iterator.js)

//не совсем понял задание ))

let range = {
  from: 1,
  to: 10,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  console.log(num); 
}
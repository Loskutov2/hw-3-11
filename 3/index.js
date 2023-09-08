const randomIntegerFromInterval = (min, max) => {
 
return Math.floor(Math.random() * (max - min + 1) + min);
 
};
 
 
const makeTransaction = (transaction) => {
const delay = randomIntegerFromInterval(200, 500);


const canProcess = Math.random() > 0.3;
return new Promise((resolve, reject)=>{
    setTimeout(() => {
if (canProcess) {return resolve(transaction.id, delay)} 
else {return reject(transaction.id)}
}, delay)}
)} 

const logSuccess = (id, time) => {
console.log(`Транзакція ${id} оброблена за ${time}ms`);
};
 
const logError = id => {
console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`);
};
 
 
makeTransaction({ id: 70, sum: 150 })
.then(logSuccess)
.catch(logError);
 
 
makeTransaction({ id: 71, sum: 230 })
.then(logSuccess)
.catch(logError);
 
 
makeTransaction({ id: 72, sum: 75 })
.then(logSuccess)
.catch(logError);
 
 
makeTransaction({ id: 73, sum: 100 })
.then(logSuccess)
.catch(logError);
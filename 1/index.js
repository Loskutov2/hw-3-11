const delay = ms => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {resolve(ms)},ms)
})};
 
 
const logger = ms => console.log(`Вирішено після ${ms}ms`);
 
 
 
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('Add one')
};

const subOne = () => {
    count--;
    renderCounterApp();
    console.log('Minus one')
};

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('Reset');
};    

let count = 0;


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );    
    
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

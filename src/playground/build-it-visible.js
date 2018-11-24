let showStatus = false;

const changeStatus = () => {
    showStatus = !showStatus;
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1>  
            <button onClick={changeStatus}>{showStatus ? 'Hide details' : 'Show details'}</button>
            {showStatus && <p>Here are some details!</p>}     
        </div>
    );
    ReactDOM.render(template, appRoot);    
};

renderApp();
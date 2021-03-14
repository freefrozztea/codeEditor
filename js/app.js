
const update = () => {

    const text = document.getElementById('text');
    const view = document.getElementById('view');
    
    view.srcdoc = text.value;
};
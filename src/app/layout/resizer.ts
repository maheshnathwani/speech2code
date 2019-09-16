(function () {
    const resizables = document.getElementsByClassName('resizable');
    console.log(resizables);
    for (let x in resizables) {
        const elm: Element = resizables[x];
        console.log(elm);
        //elm.setAttribute('data-check', 'abc');
        //const side = elm.getAttribute('data-resize');

    }
})();

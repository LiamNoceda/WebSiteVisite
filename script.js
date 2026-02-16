// Select elements
let butt = document.querySelector('#b');
let element =document.querySelector('#e');

// add click event listener to the button to toggle the visibility of the information block
if (butt && element) {
    butt.addEventListener('click', () => {
    element.classList.toggle('active');
    console.log('Button clicked, toggling information block visibility');

    if (element.classList.contains('active')) {
        console.log('Information block is now visible');
    } else {
        console.log('Information block is now hidden');
    }
});
};

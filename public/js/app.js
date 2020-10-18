console.log('client side js file')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.getElementById('message-1')
const msg2 = document.getElementById('message-2')

weatherForm.addEventListener('submit',(e)=>{
e.preventDefault();
const  location = search.value;
    fetch('http://localhost:3000/weather?address=' + location)
        .then((res)=>{
            res.json().then( (data)=>{
                if(data.error) {
                    msg1.textContent = data.error;
                    msg2.textContent ='';
                }
                else {
                    msg2.textContent = 'location:' + data.location + ' weather:' + data.msg
                    msg1.textContent =''
                }})
        })
})

async function save(){
    event.preventDefault();
   
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    console.log( name, email);
    let newUser = { name, email}

    let resp = await fetch('/api/users',{
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "Application/json",
            "x-auth": "admin"
        }
    });
    let data = await resp.json();

    console.log(resp);
    console.log(data);
}


async function getProducts() {
    const response = await fetch('https://products-dasw.onrender.com/api/products', {
        method: 'GET',
        headers: {
            'x-expediente': 745729,
        }
    })
    const data = await response.json()

    //You can process data here or return the data and call this function
    return data;
}

async function processData(){
    //Since getProducts is asynchronous, we must use await to wait for it to execute
    //So this function must also be asynchronous
    const data = await getProducts()
    console.log(data)
}

processData();

// Add your code here
let body=document.getElementById("body");
let message = 'Unauthorized Access';
<<<<<<< HEAD
let rando
=======
let rando = Math.ceil( Math.random() * 1000 );
>>>>>>> 7075861e7f192b120552d5a2fe39ceb64c298f4b
function submitData(userName,userEmail){
const formData = {
  name: userName,
  email: userEmail
};

const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
<<<<<<< HEAD
        body.innerHTML = json.id;
            console.log(json);
        })
        .catch(function(error) {
                 body.innerHTML = error.message;
                 console.log(error.message);
             });
=======
    if(formData)
    {json.id=rando;
body.innerText=json.id;
    json+=formData;}
  //  for(let i=0;i<json.length;i++)
  //  {body.innerText=json.id;

  })
   .catch(function(error) {
    alert("Bad things! Pay Attention!");
     error={
      message:message
    }
    body.innerHTML=`<p>${error.message}</p>`;
  //  console.log(error.message);
  });
>>>>>>> 7075861e7f192b120552d5a2fe39ceb64c298f4b
}
submitData();

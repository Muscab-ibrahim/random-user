
const loader = document.querySelector('#loader');
const get = async () => {

  loader.style.display = 'block';
  const request = await fetch("https://randomuser.me/api/");

  const respond = await request.json();
  loader.style.display = 'none';




  console.log(respond.results[0])

  const data = respond.results[0];


  
 
  buildDom(data.name.first, data.gender, data.phone, data.login.password, 
    data.picture.medium ) ;



  

};
get();




const user = document.querySelector('#name');
const phone1 = document.querySelector('#phone');
const gender1 = document.querySelector('#gender');
const password1 = document.querySelector('#password');

const container = document.querySelector('.controller');



const img = document.querySelector('.info');



 const buildDom = (name, gender, phone, password, picture) => {


 
    container.innerHTML = `   
    <div class="info">
      <img src="${picture}" alt="" width="50px">
    </div>
   <div class="text">
    <span id="name">name : ${name}</span>
    <span id="gender">gender : ${gender}</span>
    <span id="phone">phone : ${phone}</span>
    <span id="password">password : ${password}</span>
     </div>
     <img src="/quran project/loader.gif" alt="" id="loader">
    
   <button onclick="get(); ">Find user</button>`;  
 

  //  gender1.innerText = `gender : ${gender}`
  //  phone1.innerText = `phone : ${phone}`
  //  password1.innerText = `password : ${password}`

  //  img.innerHTML = `  <img src="${picture}" alt="">`

 
   

  


  

 }


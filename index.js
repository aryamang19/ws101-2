
let username = document.getElementById("name"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  term = document.getElementById("terms"),
  dob = document.getElementById("dob");
  
  dob.addEventListener('input',(event)=>{
    event.preventDefault();
    let age = new Date().getFullYear() - new Date(dob.value).getFullYear();
    function check(){
        if(age < 18 || age>55){
            return false;
        }else{
            return true;
        }
    }
    
    if(!check()){
       
        dob.setCustomValidity("age shuld be between 18 to 55");
        dob.reportValidity();
    }else{
       
        dob.setCustomValidity('');
    }
    
    });
    email.addEventListener("input", (e) => {
        let format_email = !(email.value.includes("@") && email.value.includes("."));
        if(format_email){
            email.setCustomValidity("please use valid mail");
        email.reportValidity();
        }
        else{
            email.setCustomValidity("");
        }
       
    });


  
term.addEventListener("input", (event) => {
        let ag = !term.checked;
        event.preventDefault();
        if(ag){
            term.setCustomValidity('PLEASE agree term and condition');
            term.reportValidity();
        }else{
           
            term.setCustomValidity('');
        }
    });

    function inner(){
        let check = false;
        if(term.checked){
            check = true;
        }
        let main = {
            name: username.value,
            email: email.value,
            password: password.value,
            dob: dob.value,
            checked: check
        }
        return main;
    }
    
    
    
    
    form.addEventListener("submit", (event) => {
       
        let agree= !term.checked;
        event.preventDefault();
        if (!agree) {
            let main = inner();
            select.push(main);
            localStorage.setItem("select", JSON.stringify(select));
        }
        outcome();
    });
    window.onload = (event) => {
        outcome();
    };
    let select = [];
    
    function inputitem(){
        let main = localStorage.getItem("select");
        if(main){
            select = JSON.parse(main);
        }else{
            select = [];
        }
        return select;
    }
    select = inputitem();
    function outcome(){
      let table =document.getElementById("table")
      let a = select;
      let str = `<tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Dob</th>
                      <th>Accepted terms?</th>
                  </tr>\n`;
      for(let i=0;i<a.length;i++){
          str += `<tr>
                      <td>${a[i].name}</td>
                      <td>${a[i].email}</td>
                      <td>${a[i].password}</td>
                      <td>${a[i].dob}</td>
                      <td>${a[i].checked}</td>
                  </tr>\n`;
      }
      table.innerHTML = str;
    }






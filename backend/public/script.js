let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function booku(e){
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var msg = document.getElementById('msg');

    if(name == '' || email == '' || number == '' || date == '')
    {
        window.alert("Please fill out all the fields");
    }
    else
    {
        if(name.length < 3)
        {
            window.alert('Name must be atleast 3 characters');
        }
        else
        {
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >=email.length)
            {
                window.alert('Please use valid email address');
            }
            else
            {
                if(number.length !=10)
                {
                    window.alert('Please enter a valid phone number');
                }
                else
                {
                    msg.innerHTML = 'You have booked an appointment with the name: ' + name + ', email address: ' + email + ' and phone number: ' + number + ' for the date: ' + date;
                }
            }
        }
    }

}

// document.getElementById('booking').addEventListener('submit', booku, true);
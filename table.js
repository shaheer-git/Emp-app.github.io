if (!sessionStorage.getItem('username')) {
    location.href='index.html'
}
function delStorage() {
let bool = confirm("Do yo really want to logout");

if (bool) {
    location.href='index.html'
    sessionStorage.clear();
}
}
document.body.onload= pullDataToTable = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).then(resp => {

        for (let i = 0; i < resp.length; i++) {
            let row = `<tr>
            <td>${resp[i].id}</td>
            <td>${resp[i].name}</td>
            <td>${resp[i].username}</td>
            <td>${resp[i].phone}</td>
            <td>${resp[i].email}</td>
            <td>${resp[i].address.city}</td>
            </tr>`
            document.querySelector('tbody').innerHTML += row
        }
        for (let i = 0; i < resp.length; i++) {
            let row = `
        <td>
        <div class="emp-name empname" onclick="expandEmpDetails(${i})" id="emp-name${i}">
            <h4 >Employee Name: ${resp[i].name} </h4>
            <p id="downArrow" style="margin-left:auto;">click to see more &darr;</p>
            </div>
            <div class="emp-details" id="emp-details${i}" >
                <p class="emp-item"><b>Employee ID:</b> ${resp[i].id}</p>
                <p class="emp-item"><b>Username:</b>  ${resp[i].username}</p>
                <p class="emp-item" ><b>Phone Number: </b> ${resp[i].phone}</p>
                <p class="emp-item"><b>Email ID: </b> ${resp[i].email}</p>
                <p class="emp-item"><b>Address:</b>  ${resp[i].address.city}</p>
        </div></td>
            `
            document.querySelector('.dropDowm-responsive-div').innerHTML += row
        }
        if (localStorage.getItem('darkTheme')=="dark") {
    
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            document.querySelector('thead').style.backgroundColor = "white"
            document.querySelector('thead').style.color = "black"
            document.querySelector('tbody').style.backgroundColor = "black"
            document.querySelector('tbody').style.color = "white"
            document.querySelector('a').style.color = "white"
            for (let i = 0; i <10; i++) {
                
                
                document.getElementById(`emp-name${i}`).style.backgroundColor = "white"
                document.getElementById(`emp-name${i}`).style.color = "black"
                document.getElementById(`emp-details${i}`).style.backgroundColor = "black"
                document.getElementById(`emp-details${i}`).style.color = "white"
            }
        }else{
            
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            document.querySelector('thead').style.backgroundColor = "black"
            document.querySelector('thead').style.color = "white"
            document.querySelector('tbody').style.backgroundColor = "white"
            document.querySelector('tbody').style.color = "black"
            document.querySelector('a').style.color = "black"
            for (let i = 0; i <10; i++) {
                        document.getElementById(`emp-name${i}`).style.backgroundColor = "black"
                        document.getElementById(`emp-name${i}`).style.color = "white"
                        document.getElementById(`emp-details${i}`).style.backgroundColor = "white"
                        document.getElementById(`emp-details${i}`).style.color = "black"
                    }
        }
    }).catch(err => {
        console.log(err)
    })
    pullDataToTable = null;
}
function expandEmpDetails(num) {
    let checkDisplayProp = document.getElementById(`emp-details${num}`)
    if (checkDisplayProp.style.display == 'block') {
        checkDisplayProp.style.display = 'none'
    } else {
        checkDisplayProp.style.display = 'block'
    }
}

download =  ()=> {
   

        html2canvas(document.querySelector('#table-div')).then((canvas) => {
            let base64image = canvas.toDataURL('image/png');
			// console.log(base64image);
			let pdf = new jsPDF('l', 'px', [1800, 1200]);
			pdf.addImage(base64image, 'PNG', 0,0, 1800, 1000);
			pdf.save('Employee-Table.pdf');
		}); 
    
	};
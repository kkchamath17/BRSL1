function sendEmail() {
	let stuffInCart = localStorage.getItem("productsInCart");
	let fullTotals = localStorage.getItem('totalCost');
	let dateOfOrder = new Date();
	let name = document.getElementById("name").value;
	let number = document.getElementById("phone").value;
	let city = document.getElementById("city").value;
	let province = document.getElementById("province").value;
	let zipcode = document.getElementById("zipcode").value;
	let address = document.getElementById("address").value;
	let email = document.getElementById("email").value;
	if (document.getElementById('COD').checked) {
  payment = document.getElementById('COD').value;
} else if (document.getElementById('BT').checked) {
  payment = document.getElementById('BT').value; 
}
	
	let cartStuff = " Customer Details = " + name + "...." + number + "...." + city + "...." + province + "...." + zipcode + "...." + address + "...." + payment + "...." + ".............................................Date Ordered = " + dateOfOrder + "...................Total is = " + fullTotals + "............................................................Items are" + stuffInCart ;
	if( stuffInCart && name && number && email && payment ) {
	Email.send({
      SecureToken : '41bb8943-096d-4f7a-b3b6-c5f05a3cc2fe',
      To : "info.blackravensl@gmail.com",  
      From: "kkchamath17@gmail.com",
      Subject: "New Order",
      Body :cartStuff,
	
	
    }).then(function(message) {
      if(!alert("Order Sent"))document.location = "thankyoufororder.html"
    });
	localStorage.clear();}
}
async function getData(){
    const response= await fetch('https://www.geeksforgeeks.org/how-to-get-client-ip-address-using-javascript/');
    const mainData= await response.json();
}
let userIpAddress;
// code to get userIpAddress

fetch(`https://ipapi.co/${userIpAddress}/json/`)
  .then(response => response.json())
  .then(data => {
    // store data for later use
    console.log(data);
  })
  .catch(error => console.error('Error fetching user information:', error));
// Assuming 'data' contains the information obtained from the API
const lat = data.latitude;
const lon = data.longitude;

// Initialize Google Map
const map = new google.maps.Map(document.getElementById('map'), {
  center: { lat, lng: lon },
  zoom: 8
});

// Create a marker for the user's location
const marker = new google.maps.Marker({
  position: { lat, lng: lon },
  map: map,
  title: 'User Location'
});
// Assuming 'data' contains the information obtained from the API
const timezone = data.timezone;
const localtime=document.getElementsByClassName("timezone");
localtime.innerHTML=currentTime.toISO();

// Use Luxon library to get current time in user's timezone
const currentTime = luxon.DateTime.now().setZone(timezone);
console.log('Current Time:', currentTime.toISO());
// Assuming 'data' contains the information obtained from the API
const pincode = data.pincode;

fetch(`https://api.postalpincode.in/pincode/${pincode}`)
  .then(response => response.json())
  .then(postalData => {
    // Display list of post offices
    console.log(postalData[0].PostOffice);
  })
  .catch(error => console.error('Error fetching post offices:', error));
// JavaScript
const searchBox = document.getElementById('searchBox');
const postOfficeList = document.getElementById('postOfficeList');

searchBox.addEventListener('input', () => {
  const searchTerm = searchBox.value.toLowerCase();

  // Filter and display post offices
  const filteredPostOffices = postalData[0].PostOffice.filter(postOffice =>
    postOffice.Name.toLowerCase().includes(searchTerm) || postOffice.BranchType.toLowerCase().includes(searchTerm)
  );

  // Display the filtered post offices
  displayPostOffices(filteredPostOffices);
});

function displayPostOffices(postOffices) {
  postOfficeList.innerHTML = '';
  postOffices.forEach(postOffice => {
    const li = document.createElement('li');
    li.textContent = `${postOffice.Name} - ${postOffice.BranchType}`;
    postOfficeList.appendChild(li);
  });
}
const googleMap=document.getElementById("map1");
const newsrc='https://www.google.com/maps?`${data.longitude}`,`${data.latitude}`&output=embed';
googleMap.src= newsrc;
const ipaddress=document.getElementsByClassName("ipadress");
const button1=document.getElementsByClassName("bt1");
button1.addEventListener("onclick",function(){
window.open('http://127.0.0.1:5500/index2.html','_blank');
})

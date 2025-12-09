// Load Donor Data from localStorage
const user = JSON.parse(localStorage.getItem('loggedUser') || '{}');

document.getElementById('donorName').innerText = user.name || 'Donor';
document.getElementById('donorEmail').innerText = user.email || 'Email Not Found';

// Logout
document.getElementById('logoutBtn').onclick = ()=>{
    localStorage.removeItem('loggedUser');
    window.location.href = "index2.html"; // back to login page
}

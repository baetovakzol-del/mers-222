document.getElementById('year').textContent = new Date().getFullYear();


document.getElementById('primaryBtn').addEventListener('click', function(){
const phone = document.getElementById('contact').textContent;
window.location.href = 'tel:' + phone.replace(/\s+/g,'');
});
document.getElementById('secondaryBtn').addEventListener('click', function(){
document.getElementById('extra').scrollIntoView({behavior:'smooth'});
});
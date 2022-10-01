var data = {
    'months': {
        'January' : 31,
        'February' : 28,
        'March' : 31,
        'April' : 30,
        'May' : 31,
        'June' : 30,
        'July' : 31,
        'August' : 31,
        'September' : 30,
        'October' : 31,
        'November' : 30,
        'December' : 31,

    }
}


var date = new Date()

var dotw = date.getDay()
var month = date.getMonth()

var dom = date.getDate()
var year = date.getFullYear()
function showModal(id){
    var modal = document.querySelector('#modal')
    var modalHeader = document.getElementById('modal-header')
    var modalText = document.getElementById('modal-text')
    
    var span = document.getElementsByClassName('close')[0]

    span.addEventListener('click',()=>{
        modal.style.display = 'none'
    })

    window.addEventListener('click',(e)=>{
        if(e.target  === modal){
            modal.style.display = 'none'
            var modalText = document.getElementById('modal-text')
            modalText.innerHTML = ''

        }
    })
    
    
    
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    
    var date = new Date()

    var dotw = date.getDay()
    var month = date.getMonth()
    
    var dom = date.getDate()
    var year = date.getFullYear()
    var f = firebase.firestore().collection('events').doc('event1').get().then(doc => doc.data())
    modalHeader.innerHTML = `Events planned for ${days[dotw]}, ${months[month]} ${id.toString().split('-')[1]}, ${year}: <br>`
    //modalText.innerHTML 
    console.log(months[month])

}

var forwardSpan = document.getElementById('forward')
var backSpan = document.getElementById('back')
forwardSpan.addEventListener('click',()=>{
    month += 1
    var cal_header = document.getElementById('month-name')
    cal_header.setAttribute('class','not-selectable')
    cal_header.innerHTML = `${months[month]} ${year}`
})
backSpan.addEventListener('click',()=>{
    month -= 1
    var cal_header = document.getElementById('month-name')
    cal_header.setAttribute('class','not-selectable')
    cal_header.innerHTML = `${months[month]} ${year}`
})

//for(var i=dom;i < dom + 35;i++){
    for(var i = 1; i < 31; i++){
    var calendarDiv = document.getElementById('calendar')
    var day = document.createElement('div')
    var dateEl = document.createElement('h1')
    dateEl.innerHTML = i
    dateEl.setAttribute('class','not-selectable')
    day.setAttribute('id',`day-${i}`)
    day.setAttribute('class','day')
    day.setAttribute('onclick','showModal(this.id); modal.style.display = "block"; getEventsForDay( id.toString().split("-")[1], months[month], year)')
    day.appendChild(dateEl)
    calendarDiv.appendChild(day)
    if(i === dom){
        day.style.backgroundColor = 'orange'
    }
}

var cal_header = document.getElementById('month-name')
cal_header.setAttribute('class','not-selectable')
cal_header.innerHTML = `${months[month]} ${year}`


function getEventsForDay(day,month,year){
    console.log(day)
    //firebase.firestore().collection('events').get().then((doc)=>{
    //    console.log(doc.where('day','==',29))
    //})
    firebase.firestore().collection('events').get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{

            var modalText = document.getElementById('modal-text')
            
            var data = doc.data()
            
            console.log(doc.id, data)
            console.log(data.date.day, data.date.month, data.date.year, parseInt(day), month, year)
            if(parseInt(data.date.day) === parseInt(day) && data.date.month === month && data.date.year === year){
                modalText.innerHTML = data.description
            }
            

        })
    })
}
function getData(form) {
    var formData = new FormData(form);
    console.log(Object.fromEntries(formData));

    if(Object.fromEntries(formData).name === 'Wise Mystical Tree'){
        var doc = document.querySelector('body')
        var pic = document.createElement('img')
        pic.setAttribute('src','./artworks-EcUsidnDBPcL9XiX-cJz3GA-t500x500.jpg')
        pic.setAttribute('width','100%')
        pic.setAttribute('height','100%')

        doc.appendChild(pic)
    }
}
  
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var f1 = document.getElementById('title').reset()
    getData(event.target);
});

function getDaysInMonth(month){
    if(data.months[month]){
        console.log('hi')
    }
}


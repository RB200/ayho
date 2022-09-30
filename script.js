var mwtod = ['January','March','May','July','August','October','December']
var mwtd = ['April','June','September','November']
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
    console.log(year % 4)
    if(mwtd.includes(months[month])){
        var days_in_current_month = 30
    }
    else if(mwtod.includes(months[month])){
        var days_in_current_month = 31
    }
    else{
        if(year % 4 === 0){
            var days_in_current_month = 29
        }
        else{
            var days_in_current_month = 28
        }
        
    }
}



//for(var i=dom;i < dom + 35;i++){
    for(var i = 1; i < 31; i++){
    var calendarDiv = document.getElementById('calendar')
    var day = document.createElement('div')
    var date = document.createElement('h1')
    date.innerHTML = i
    day.setAttribute('id',`day-${i}`)
    day.setAttribute('class','day')
    day.setAttribute('onclick','showModal(this.id); modal.style.display = "block"; getEventsForDay(months[month], id.toString().split("-")[1])')
    day.appendChild(date)
    calendarDiv.appendChild(day)
   
}

var cal_header = document.getElementById('calendar-header')
cal_header.innerHTML = `${months[month]} ${year}`


function getEventsForDay(month,day){
    console.log(day)
    firebase.firestore().collection('events').get().then((doc)=>{
        console.log(doc.where('day','==',29))
    })
    //firebase.firestore().collection('events').get().then((querySnapshot)=>{
    //    querySnapshot.forEach((doc)=>{
    //        var modalText = document.getElementById('modal-text')
    //        
    //        var data = doc.data()
    //        console.log(data)
    //        modalText.innerHTML = data.description
    //
    //    })
    //})
}
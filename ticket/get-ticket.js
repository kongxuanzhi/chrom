/**
 * Created by faiyer on 2017/9/20.
 */


// function btn_move(el, mouseLeft, mouseTop){
//     var leftRnd = (Math.random()-0.5)*20;
//     var topRnd = (Math.random()-0.5)*20;
//     var btnLeft = mouseLeft+(leftRnd>0?100:-100)+leftRnd;
//     var btnTop = mouseTop+(topRnd>0?30:-30)+topRnd;
//     btnLeft = btnLeft<100?(btnLeft+window.innerWidth-200):(btnLeft>window.innerWidth-100?btnLeft-window.innerWidth+200:btnLeft);
//     btnTop =  btnTop<100?( btnTop+window.innerHeight-200):(btnTop>window.innerHeight-100?btnTop-window.innerHeight+200:btnTop);
//     el.style.position = 'fixed';
//     el.style.left = btnLeft+'px';
//     el.style.top = btnTop+'px';
// }

// function over_btn(e){
//     if(!e){
//         e = window.event;
//     }
//     btn_move(this, e.clientX, e.clientY);
// }

// document.getElementById('s_btn_wr').onmouseover = over_btn;

const LEFTTICKET = "https://kyfw.12306.cn/otn/leftTicket/init"
const CONFIRMPASSENGER = "https://kyfw.12306.cn/otn/confirmPassenger/initDc"

function selectTickets() {
    // document.getElementById('train_date').value = "2018-02-06"
    var refresh = true;
    setInterval(function(){
        if (refresh) {
            document.getElementById('query_ticket').click();
            if (document.getElementById('qd_closeDefaultWarningWindowDialog_iDDd') != null) {
                document.getElementById('qd_closeDefaultWarningWindowDialog_id').click();
            } else if (document.getElementById('ticket_550000355690').lastChild.firstChild.localName === 'a') {
                document.getElementById('ticket_550000355690').lastChild.firstChild.click();
                refresh = false;
            } else if (document.getElementById('ticket_55000K110650').lastChild.firstChild.localName === 'a') {
                document.getElementById('ticket_55000K110650').lastChild.firstChild.click();
                refresh = false;
            } else if (document.getElementById('ticket_550000K46404').lastChild.firstChild.localName === 'a') {
                document.getElementById('ticket_550000K46404').lastChild.firstChild.click();
                refresh = false;
            } else if (document.getElementById('ticket_55000K445800').lastChild.firstChild.localName === 'a') {
                document.getElementById('ticket_55000K445800').lastChild.firstChild.click();
                refresh = false;
            }
        }
    }, 400);
}

// function fillInfo() {
//     alert('fillInfo')
//     document.getElementById('seatType_1').value = 1;
// }
function fillInfo() {
    console.log('fill info');
    var it1 = setInterval(function() {
        console.log('it1')
        if (document.getElementById('passenger_name_1').value != '孔龙飞') {
            document.getElementById('normalPassenger_0').click();
            document.getElementById('normal_passenger_id').firstElementChild.click();
            console.log(1)
        } else if (document.getElementById('passenger_name_1').value === '孔龙飞') {
            document.getElementById('seatType_1').value = 1;
            console.log(2)
            document.getElementById('submitOrder_id').click();
            window.clearInterval(it1);
        }
    }, 200);
    var it = setInterval(function() {
        console.log('it2')
        if (document.getElementById('qr_submit_id').offsetTop > 0) {
            document.getElementById('qr_submit_id').click();
            console.log(3)
        } else if (document.getElementById('iamge_status_id') && document.getElementById('iamge_status_id').offsetTop > 0){
            window.clearInterval(it);
            console.log(4)
        }
    }, 400);
}


window.onload = function () {
    console.log('loaded')
    if (window.location.href === LEFTTICKET) {
        // alert(LEFTTICKET)
        selectTickets()
    } else if (window.location.href === CONFIRMPASSENGER) {
        // alert(CONFIRMPASSENGER)
        console.log('fill loaded')
        fillInfo()
    }
};

// document.ready(function () {
//     alert('ready');
// });

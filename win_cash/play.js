function slotRoller(spd, selector) {

    var speed = 40;
    var firstChild = $("#list li:first-child");
    lastChild = $("#list li:last-child");

    $(selector).animate({
        marginTop: "-500px"
    }, speed + (spd * 30 + spd), "linear", function(){

        firstChild = $("li:first-child", this);
        $(this).append(firstChild);
        $(this).css({ marginTop: "-250px"});

        var symbol_no1 = $('li:nth-child(2)', '#slot_box1').attr('data-roll');
        var symbol_no2 = $('li:nth-child(2)', '#slot_box2').attr('data-roll');
        $('#symbol_no1').html("symbol No: " + symbol_no1);
        $('#symbol_no2').html("symbol No: " + symbol_no2);
    });

}

function Slot_roll(slotName){
    this.min = 12;
    this.max = 18;
    this.dice = function(){
        var dice = Math.round(Math.random() * (this.max - this.min)) + this.min;
        for (var i = 0; i < dice; i++) {
            slotRoller(i, slotName);
        }
        console.log(dice);
    }
}

var slot_roll1 = new Slot_roll('#slot_box1 #list');
var slot_roll2 = new Slot_roll('#slot_box2 #list');

$('#btn_r').on( "click", function(){

    if( $('#slot_box1 #list').is(':not(:animated)') ){
        slot_roll1.dice();
    }
    if( $('#slot_box2 #list').is(':not(:animated)') ){
        slot_roll2.dice();
    }
});
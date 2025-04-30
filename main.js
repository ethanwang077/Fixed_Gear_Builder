var frame_list = [];
var wheelset_list = [];
var crankset_list = [];
var stem_list = [];
var bars_list = [];
//CLASS DECLARATIONS
class Frame {
    constructor(name, material, price, max_tire, headset, wheel_size){
        this.name = name;
        this.material = material;
        this.price = price;
        this.max_tire = max_tire;
        this.headset = headset;
        this.wheel_size = wheel_size;
    }
}

class Wheelset {
    constructor(name, material, price, wheel_size){
        this.name = name;
        this.material = material;
        this.price = price;
        this.wheel_size = wheel_size;
    }
}

class Crankset {
    constructor(name, material, price, BCD){
        this.name = name;
        this.material = material;
        this.price = price;
        this.BCD = BCD;
    }
}

class Stem {
    constructor(name, material, price, length){
        this.name = name;
        this.material = material;
        this.price = price;
        this.length = length;
    }
}

class Bars {
    constructor(name, material, price, type){
        this.name = name;
        this.material = material;
        this.price = price;
        this.type = type;
    }
}

class Bike {
    constructor(frame, wheelset, crankset, stem, bars){
        this.frame = frame;
        this.wheelset = wheelset;
        this.crankset = crankset;
        this.stem = stem;
        this.bars = bars;
    }
}

//Frames declaration (name, material, price, max_tire, headset, wheel_size)
var SBC_4130 = new Frame("SBC 4130 Steel", "Steel", 270, 45, "1 1/8 threadless", "700cc");
frame_list.push(SBC_4130);

var SBC_Black_Label_6061 = new Frame("SBC Black Label 6061", "Aluminum", 475, 35, "1 1/8 threadless", "700cc");
frame_list.push(SBC_Black_Label_6061);

var Wabi_Lightning = new Frame("Wabi Lightning", "Steel", 875, 28, "1 1/8 threadless", "700cc");
frame_list.push(Wabi_Lightning);

var Cinelli_Vigorelli = new Frame("Cinelli Vigorelli", "Aluminum", 1300, 28, "1 1/8 threadless", "700cc");
frame_list.push(Cinelli_Vigorelli);

var Look_895_Vitesse = new Frame("Look 895 Vitesse", "Carbon fiber", 4500, 28, "1 1/8 threadless", "700cc");
frame_list.push(Look_895_Vitesse);


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Wheelset declaration
var SBC_Deep_V = new Wheelset("SBC Deep V 40mm", "Aluminum", 190, "700cc");
wheelset_list.push(SBC_Deep_V);

var DT_T_1800_Classic = new Wheelset("T 1800 Classic", "Aluminum", 688, "700cc");
wheelset_list.push(DT_T_1800_Classic);

var FFWD_RYOT77 = new Wheelset("FFWD RYOT77", "Carbon fiber", 1699, "700cc");
wheelset_list.push(FFWD_RYOT77);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var Sugino_RD2 =  new Crankset("Sugino RD2 Messenger", "Aluminum", 190, "130BCD");
crankset_list.push(Sugino_RD2);

var SRAM_Omnium = new Crankset("SRAM Omnium", "Aluminum", 450, "144BCD");
crankset_list.push(SRAM_Omnium);

var Racketa_Track = new Crankset("Racketa Track", "Aluminum", 749, "144BCD");
crankset_list.push(Racketa_Track);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var Zipp_Service_Course = new Stem("Zipp Service Course", "Aluminum", 49, 31.8);
stem_list.push(Zipp_Service_Course);

var FSA_K_Force =  new Stem("FSA K-Force", "Carbon fiber", 163, 35);
stem_list.push(FSA_K_Force);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var SBC_All_Road = new Bars("SBC_All_Road", "Aluminum", 40, "Drops");
bars_list.push(SBC_All_Road);

var Nitto_B123 = new Bars("Nitto B123", "Steel", 62, "Drops");
bars_list.push(SBC_All_Road);

var Ritchey_Classic_Flat = new Bars("Ritchey Classic Flat", "Steel", 39, "Flat");
bars_list.push(Ritchey_Classic_Flat);

var Enve_Aero_In_Route = new Bars("Enve Aero In-Rout", "Carbon fiber", 400, "Drops");


function retrieve_budget(){
    var budget = document.querySelector('#budget_selector').value;
    return budget;
}

//generate possible bikes
//36% frame, 25% wheelset, 25% crankset 6% stem 5% bars
function build_a_bike(budget){
    if(budget<800){
        document.getElementById("output_text").innerHTML =  "Minimum budget $800";
    }
    var frame = new Frame("", "", 0, "", "", "");
    var wheelset = new Wheelset("", "", 0, "");
    var crankset = new Crankset("", "", 0, "");
    var stem = new Stem("","",0,"");
    var bars = new Bars("","", 0,"");
    
    frame = choose_part(frame, 0.36, budget, frame_list);
    wheelset = choose_part(wheelset, 0.25, budget, wheelset_list);
    crankset = choose_part(crankset, 0.25, budget, crankset_list);
    stem = choose_part(stem, 0.07, budget, stem_list);
    bars = choose_part(bars, 0.25, budget, bars_list);

    var bike = new Bike(frame, wheelset, crankset, stem, bars);  

    document.getElementById("frame_output").innerHTML = "Frame: " + bike.frame.name + " " + bike.frame.price + "$\n";
    document.getElementById("wheelset_output").innerHTML = "Wheelset: " + bike.wheelset.name + " " + bike.wheelset.price + "$\n";
    document.getElementById("crankset_output").innerHTML = "Crankset: " + bike.crankset.name + " " + bike.crankset.price + "$\n";
    document.getElementById("stem_output").innerHTML = "Stem: " + bike.stem.name + " " + bike.stem.price + "$\n";
    document.getElementById("bars_output").innerHTML = "Bars: " + bike.bars.name + " " + bike.bars.price + "$\n";
}

function choose_part(part, percent, budget, list){
    var chosen_part;
    for(var i = 0; i < list.length; i++){
        //check if part is in budget
        if(list[i].price < (percent*budget)){
            if(list[i].price > part.price){
                chosen_part = list[i];
            }
        }
    }
    return chosen_part;
}
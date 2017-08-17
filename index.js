//En javascript modulaire, pour pouvoir utiliser une librairie ou un autre fichier, on doit importer
//celui-ci, soit via import .. from
import $ from 'jquery';

//soit via un require
//const $ = require('jquery');


$(document).ready(function() {
    $('#para').css({
        color: 'red',
        backgroundcolor: 'blue',
        fontsize: 15
    })

});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require skel.min
//= require skel-panels.min
//= require init
//= require_tree .


$(document).ready(function(){
	
		// $("#hide").click(function(){
  //   			$("#service").hide();
  //   			$('#hide').attr('value', 'show');
  //   			$('#hide').attr('id', 'show');
    			
  // 		});

  // 		$("#show").click(function(){
  // 				$("#service").css('display','block');
  //   			$('#service').show();
  //   			$('#show').attr('value', 'hide');
  //   			$('#show').attr('id', 'hide');
    			
    		
  // 		});

  		$('#hide').on('click',function(){
  			$('#service').toggle('hide');
  			$('#show').attr('value', 'hide');
   	   
  		});



});
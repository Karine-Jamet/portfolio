
 $(document).ready(function(){

	// hide .navbar first
	$(".navbar").hide();

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});


	});

			$('.nav a').on('click', function(){
				$('.btn-navbar').click(); //bootstrap 2.x
				$('.navbar-toggle').click() //bootstrap 3.x by Richard
			});

	$('a[href^="#"]').click(function(){
		var the_id = $(this).attr("href");

		$('html, body').animate({
			scrollTop:$(the_id).offset().top-50
		}, 'slow');
		return false;
	});
	

	

	$('.radar-graph').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

		 if (isInView) {

			var options = {
			labelAlign: 'center',
			segmentStrokeColor : "#094D8A",
			//Boolean - If we show the scale above the chart data
			scaleOverlay : false,

			//Boolean - If we want to override with a hard coded scale
			scaleOverride : false,

			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : null,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : null,
			//Number - The centre starting value
			scaleStartValue : null,

			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//String - Colour of the scale line
			scaleLineColor : "#999",

			//Number - Pixel width of the scale line
			scaleLineWidth : 1,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			//Interpolated JS string - can access value
			scaleLabel : "<%=value%>",

			//String - Scale label font declaration for the scale label
			scaleFontFamily : "'Arial'",

			//Number - Scale label font size in pixels
			scaleFontSize : 12,

			//String - Scale label font weight style
			scaleFontStyle : "normal",

			//String - Scale label font colour
			scaleFontColor : "#F7D29E",

			//Boolean - Show a backdrop to the scale label
			scaleShowLabelBackdrop : true,

			//String - The colour of the label backdrop
			scaleBackdropColor : "rgba(255,255,255,0.75)",

			//Number - The backdrop padding above & below the label in pixels
			scaleBackdropPaddingY : 2,

			//Number - The backdrop padding to the side of the label in pixels
			scaleBackdropPaddingX : 2,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(255,255,255,0.3)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 12,

			//String - Point label font colour
			pointLabelFontColor : "#F7D29E",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 1,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//Boolean - Whether to animate the chart
			animation : true,

			//Number - Number of animation steps
			animationSteps : 60,

			//String - Animation easing effect
			animationEasing : "easeOutQuart",

			//Function - Fires when the animation is complete
			onAnimationComplete : null,

			tooltipFontColor: "#F7D29E",

			scaleShowGridLines : true,

			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(255,255,255,0.75)",

			//Number - Width of the grid lines
			scaleGridLineWidth : 1,

			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,

			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: false

		}


			Chart.defaults.global.responsive = true;

			var ctx = document.getElementById("radarChart").getContext("2d");


			var data = {
			labels: ["HTML5", "CSS3", "Javascript", "PHP", "Perl", "R","C#", "Tarte Tatin","Anglais"],
			datasets: [
				{
					label: "Techniques",
					fillColor: "rgba(229,134,1,0.6)",
					strokeColor: "rgba(229,134,1,1)",
					pointColor: "rgba(229,134,1,1)",
					pointStrokeColor: "#E58601",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [85, 80, 73, 50, 83, 65,40, 80,90]
				},

			]
		};

			var myRadarChart = new Chart(ctx).Radar(data, options);



			var ctx = document.getElementById("pieChart").getContext("2d");

			var dataPie = [
			{
				value: 35,
				color:"#E58601",
				highlight: "#F2BB6D",
				label: "Codeur"
			},
				{
				value: 25,
				color: "#F1C53A",
				highlight: "#F2BB6D",
				label: "Scientifique"
			},
			{
				value: 5,
				color: "#F1A63B",
				highlight: "#F2BB6D",
				label: "Artiste"
			},
			{
				value: 25,
				color: "#AE6600",
				highlight: "#F2BB6D",
				label: "Maman"

			},
			{
				value: 10,
				color: "#BE7D21",
				highlight: "#F2BB6D",
				label: "Gamer"
			}
		]

			var myPieChart = new Chart(ctx).Pie(dataPie,options);
			
			var ctx = document.getElementById("pieChartResponsive").getContext("2d");

			var dataPie = [

			{
				value: 35,
				color:"#E58601",
				highlight: "#F2BB6D",
				label: "Codeur"
			},
				{
				value: 25,
				color: "#F1C53A",
				highlight: "#F2BB6D",
				label: "Scientifique"
			},
			{
				value: 5,
				color: "#F1A63B",
				highlight: "#F2BB6D",
				label: "Artiste"
			},
			{
				value: 25,
				color: "#AE6600",
				highlight: "#F2BB6D",
				label: "Maman"

			},
			{
				value: 10,
				color: "#BE7D21",
				highlight: "#F2BB6D",
				label: "Gamer"
			}
		]

			var myPieChart = new Chart(ctx).Pie(dataPie,options);
			document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
			




			var ctx = document.getElementById("barChart").getContext("2d");

			var dataBar = {
				labels: ["Aikido", "Cha no yu", "Lecture", "Jeux video", "Peinture", "Pâtisserie"],
				datasets: [
					{
						label: "My First dataset",
						fillColor: "rgba(229,134,1,0.6)",
						strokeColor: "rgba(229,134,1,1)",
						pointColor: "rgba(229,134,1,1)",
						highlightFill: "rgba(220,220,220,0.75)",
						highlightStroke: "rgba(220,220,220,1)",
						data: [4, 2, 5, 7, 2, 4]
					},]
			};

			var myBarChart = new Chart(ctx).Bar(dataBar, options);
		 }
	  });





	$('a#contact').click(function() {
		// Trigger event on click


		// Store the sub menu element in the 'submenu' var

		if (submenu.is(":visible")){
			// Is the submenu visible?

			submenu.fadeOut();
			// If so, fade it out.

		} else {

			submenu.fadeIn();
			// If not visible, fade it in.




		}
	});

	$("#form").submit(function( event ) {
		event.preventDefault();
		var name = $("#name").val();
		var message = $("#comment").val();
		console.log(message);
		var reply = $("#email").val();
		$("#name").val("");
		$("#comment").val("");
		$("#email").val("");
			$.ajax({
				method: "POST",
				url: "https://formspree.io/karine.jamet203@gmail.com",
				data: { 
				name:name,
				_replyto:reply,
				essage: message
		  },
				dataType: "json"
			})
			.done(function() {
				alert( "Merci pour votre e-mail! J'y répondrais des que possible." );
				submenu.fadeOut();
				
		});
	});

	  
	  




  $('.parcour').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

		 if (isInView) {

       var imageTaille = $(".image-blouse").width();
       var pointOrW = imageTaille/2;

       var imageHaut = $(".image-blouse").height();
        var pointOrH = (imageHaut/100)*8;

       $(".papillon").css({
         'transform-origin': pointOrW  + "px " + pointOrH +"px"
       });
		
		$(".text-parcour-wrapper").css({
			'left':imageTaille
		});
	   
     }
  });


  var imageTaille = $(".image-blouse").width();
  var pointOrW = imageTaille/2;

  var imageHaut = $(".image-blouse").height();
   var pointOrH = (imageHaut/100)*8;

  $(".papillon").css({
    'transform-origin': pointOrW  + "px " + pointOrH +"px"
  });


  $( window ).resize(function() {
       var imageTaille = $(".image-blouse").width();
    var pointOrW = imageTaille/2;

    var imageHaut = $(".image-blouse").height();
    var pointOrH = (imageHaut/100)*8;

  $(".papillon").css({
    'transform-origin': pointOrW  + "px " + pointOrH +"px"
  });

  });

 var submenu = $('div#form-div');
 var contactSize = submenu.height();
 var hauteur = $("footer").height();
 var marge = (hauteur/100)*20;

 submenu.hide();
 if(hauteur < (contactSize + $(".container-droite").height() + marge)){
   var toAdd = contactSize + hauteur;
   $("footer").height(toAdd);
 }



 $('.text-parcour').animate({
     scrollTop: $('.text-parcour').parent().scrollTop() + $('.text-parcour').offset().top - $('.text-parcour').parent().offset().top
 }, {
     duration: 1000,
     specialEasing: {
         width: 'linear',
         height: 'easeOutBounce'
     },
     complete: function (e) {
         console.log("animation completed");
     }
 });



 });

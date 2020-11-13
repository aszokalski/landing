var winHeight = window.innerHeight;
var animDuration = winHeight;
var animationData;

animationData = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://gist.githubusercontent.com/aszokalski/d3b4dd176e510df663087c90cc72c255/raw/eeddccf9ea39f3fe575a29f5dc2dba661c4f9e31/data.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        },
    });
    return json;
})(); 

var animData = {
	container: document.getElementById('container'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	animationData: animationData,
};
border =  -Infinity;
set = true;
var anim = bodymovin.loadAnimation(animData);
window.addEventListener('scroll', function() {
	animatebodymovin(animDuration, anim);
});

animatebodymovin(animDuration, anim);


function animatebodymovin(duration, animObject) {
	var scrollPosition = window.scrollY;
	var maxFrames = animObject.totalFrames;
	var frame = 30+ (maxFrames / 100) * (scrollPosition / (duration / 100));
	animObject.goToAndStop(frame, true);
}

function loadJSON(callback) {   

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'https://gist.githubusercontent.com/aszokalski/d3b4dd176e510df663087c90cc72c255/raw/eeddccf9ea39f3fe575a29f5dc2dba661c4f9e31/data.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
			console.log(xobj.responseText)
		}
	};
	xobj.send(null);  
}

(function() {
	var elements;
	var windowHeight;
  
	function init() {
	  elements = document.querySelectorAll('.hidden');
	  windowHeight = window.innerHeight;
	}
  
	function checkPosition() {
	  for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var positionFromTop = elements[i].getBoundingClientRect().top;
  
		if (positionFromTop - windowHeight <= 0) {
		  element.classList.add('fade-in-element');
		  element.classList.remove('hidden');
		}
	  }
	}
  
	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);
  
	init();
	checkPosition();
  })();
  // the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
	// in the handler, 'this' refers to the box clicked on
	var $box = $(this);
	if ($box.is(":checked")) {
	  // the name of the box is retrieved using the .attr() method
	  // as it is assumed and expected to be immutable
	  var group = "input:checkbox[name='" + $box.attr("name") + "']";
	  // the checked state of the group/box on the other hand will change
	  // and the current value is retrieved using .prop() method
	  $(group).prop("checked", false);
	  $box.prop("checked", true);
	} else {
	  $box.prop("checked", false);
	}
  });


  $(document).ready(function(){
	$(window).scroll(function(){
		$("#fade-out").css("opacity", 1 - $(window).scrollTop() / ($('#fade-out').height() / 3));
	});
});
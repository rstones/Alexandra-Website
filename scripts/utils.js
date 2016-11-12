insertNav = function(currentPage) {
	//document.write(
	return '<nav id="nav-bar"><ul>' +
				
					'<a href="./index.html"><li>' +
						'Home' + 
					'</li></a>' +
					'<a href="./research.html"><li>' +
						'Research' +
					'</li></a>' +
					'<a href="./publications.html"><li>' +
						'Publications' +
					'</li></a>' +
					'<a href="./members.html"><li>' +
						'Members' + 
					'</li></a>' +
					'<a href="./outreach.html#nav-bar"><li>' +
						'Outreach' +
					'</li></a>' +
					'<a href="./aboutAOC.html"><li>' +
						'About AOC' +
					'</li></a>' +
				'</ul>' +
				//'<div id="nav-filler"></div>' + 
				'</nav>';//);
}

insertHeader = function(currentPage) {
	document.write('<header>' +
						'<div id="header-image"></div>' +
						'<div id="header-title-1" class="header-title">Quantum Physics</div>' +
						'<div id="header-title-2" class="header-title">of</div>' +
						'<div id="header-title-3" class="header-title">Biomolecular Processes</div>' +
						'<div id="header-title-4" class="header-subtitle">Department of Physics and Astronomy, University College London</div>' +
					'</header>' +
					'<div id="ucl-bar">' +
						'<div id="central-container">' +
							insertNav(currentPage) +
							'<img src="./media/ucl_logo_small-3.png" id="ucl-logo-small">' +
						'</div>' +
					'</div>');
}

/*
Inserts footer into html document including copyright statement dated from 2013
*/
insertFooter = function() {
	var d = new Date();
	year = d.getFullYear();
	document.write('<footer>Copyright &copy 2013 ' + (year > 2013 ? '- ' + year : '') + 	
									' Alexandra Olaya-Castro | Designed by Richard Stones </footer>');
}

/*
	Allow nav bar to follow page down whilst scrolling
*/
/*
window.onload = function() {

  function getScrollTop() {
    if (typeof window.pageYOffset !== 'undefined' ) {
      // Most browsers
      return window.pageYOffset;
    }

    var d = document.documentElement;
    if (d.clientHeight) {
      // IE in standards mode
      return d.scrollTop;
    }

    // IE in quirks mode
    return document.body.scrollTop;
  }

  window.onscroll = function() {
    var box = document.getElementById('nav-bar'),
        scroll = getScrollTop();

    if (scroll <= 180) {
      box.style.top = "180px";
    }
    else {
      box.style.top = (scroll) + "px";
    }
  };

};
*/

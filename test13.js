var pDir = $('#pDir').val();
var pageClass = $('#pageClass').val();
var ajaxLoc = '/cont/auth.php';
var ajaxCustLoc = '/cont/custom.php';
var ajaxCustLiteLoc = '/cont/customLite.php';
var ajaxGtagLoc = '/cont/gtag.php';
var ajaxCartLoc = '/cont/cart.php';
var ajaxLoginLoc = '/cont/login.php';
var ajaxToken = $('#ajaxToken').val();
var otpIntervalCounter = '';

var carts = [
  'domCart',
  'resellerDomCart',
  'hostingCart',
  'resellerHostingCart',
  'vpsHostingCart',
  'managedHostingCart',
  'sslCart',
  'avCart',
  'pbxCart',
  'upgradeCart'
];

function adjustStyle() {
	var paths = [];
	var path = '/assets/css/media/media-';
  var width = parseInt(viewportSize.getWidth());
  
	var mediaSet = [
		'1920',
		'1880',
		'1760',
		'1700',
		'1640',
		'1600',
		'1550',
		'1440',
		'1366',
		'1280',
		'1230',
		'1104',
		'1024',
		'991',
		'846',
		'800',
		'768',
		'740',
		'692',
		'667',
		'640',
		'598',
		'568',
		'534',
		'480',
		'428',
		'414',
		'375',
		'360',
		'320',
	];
	
	$(mediaSet).each(function(index, elem) {
    if (width <= elem) {
			last = elem;
			paths.push(elem);
		}
  });
  
	var d = new Date();
	var ts = d.getTime();;
  
	if (paths.length > 0) {
		$(paths).each(function(index, elem) {
      if (!$('#dynSheet-'+elem+'').is('*')) {
        $('.dynSheet').last().after('<link id="dynSheet-'+elem+'" class="dynSheet" rel="stylesheet" type="text/css" href="'+path+elem+'.css?'+ts+'" media="screen">');
      }
    });
	}
  
  if ($('.mobMenu').is(':visible')) {
    $('.mobMenu').slideUp();

    if ($('#overlay').is(':visible')) {
      $('#overlay').fadeOut();
    }
  }
}

function initPlaces(elemId) {
  var srchInput = document.getElementById(elemId);
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete((srchInput), {
    types: ['geocode']
  });

  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var near_place = autocomplete.getPlace();
  });

  setTimeout(function() {
    $('#'+elemId).attr('autocomplete', 'new-password');
  }, 100);
}

function formatPlace(elem) {
  if ($('.pac-item').is('*')) {
    var inputAddy = $(elem).val();
    var itemHtml = $('.pac-item').html();
    var firstAddy = itemHtml.replace('<span class="pac-icon pac-icon-marker"></span><span class="pac-item-query">', '').replace('</span><span>', ', ').replace(/<span class="pac-matched">/g, '').replace(/<\/span>/g, '').replace(/<span>/g, '');

    if (inputAddy != firstAddy) {
      $(elem).val(firstAddy);
    }

    return firstAddy;
  } else {
    return $(elem).val();
  }
}

function popAddress(elem, prefix) {
  setTimeout(function() {
    prefix = (typeof(prefix) == 'undefined') ? '' : prefix;
    var address = formatPlace($(elem));

    if (address != $(elem).data('rem')) {
      $(elem).data('rem', address);
      
      $.post(ajaxCustLoc+'?action=getPlaceData', {
        address : address
      }, function(data) {
        var res = $.parseJSON(data);

        if (res.intReturnCode == 1) {
          if (typeof(res.street) != 'undefined') {
            $('#'+prefix+'address1').val(res.street);
          }
          if (typeof(res.suburb) != 'undefined') {
            $('#'+prefix+'address2').val(res.suburb);
          }
          if (typeof(res.city) != 'undefined') {
            $('#'+prefix+'city').val(res.city);
          }
          if (typeof(res.province) != 'undefined') {
            $('#'+prefix+'state').val(res.province);
          }
          if (typeof(res.postCode) != 'undefined') {
            $('#'+prefix+'postcode').val(res.postCode);
          }
          if (typeof(res.country) != 'undefined') {
            $('#'+prefix+'country').countrySelect("setCountry", res.country);
          }
        }
      });
    }
  }, 100);
} 

(function (window) {
	window.viewportSize = {};

	window.viewportSize.getHeight = function () {
		return getSize("Height");
	};

	window.viewportSize.getWidth = function () {
		return getSize("Width");
	};

	var getSize = function (Name) {
		var size;
		var name = Name.toLowerCase();
		var document = window.document;
		var documentElement = document.documentElement;
		if (window["inner" + Name] === undefined) {
			/* IE6 & IE7 don't have window.innerWidth or innerHeight */
			size = documentElement["client" + Name];
		}
		else if (window["inner" + Name] != documentElement["client" + Name]) {
			/* WebKit doesn't include scrollbars while calculating viewport size so we have to get fancy */

			/* Insert markup to test if a media query will match document.doumentElement["client" + Name] */

			var bodyElement = document.createElement("body");
			bodyElement.id = "vpw-test-b";
			bodyElement.style.cssText = "overflow:scroll";
			var divElement = document.createElement("div");
			divElement.id = "vpw-test-d";
			divElement.style.cssText = "position:absolute;top:-1000px";
			/* Getting specific on the CSS selector so it won't get overridden easily */
			divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
			bodyElement.appendChild(divElement);
			documentElement.insertBefore(bodyElement, document.head);

			if (divElement["offset" + Name] == 7) {
				/* Media query matches document.documentElement["client" + Name] */
				size = documentElement["client" + Name];
			}
			else {
				/* Media query didn't match, use window["inner" + Name] */
				size = window["inner" + Name];
			}
			/* Cleanup */
			documentElement.removeChild(bodyElement);
		}
		else {
			/* Default to use window["inner" + Name] */
			size = window["inner" + Name];
		}
		return size;
	};
})(this);

function captureGCLID() {
  var locRef = window.location.href;
  var loggedIn = $('#loggedIn').val();
  
  if (locRef.indexOf('gclid=') >= 0) {
    //gclid ref found
    var locRefSplit = locRef.split('gclid=');
    var gclid = locRefSplit[1];
    var cleanRef = locRef.replace('?gclid='+gclid, '');

    if (gclid != '') {
      $.post(ajaxGtagLoc+'?action=captureGCLID', { 
        url : cleanRef,
        gclid : gclid
      });
    }
  } else {
    // check for gclid against user
    if (loggedIn == 1) {
      $.post(ajaxGtagLoc+'?action=checkGCLID');	
    }
  }
}

// runFunc expects -
// '', [],'',[] 
// (parent function, array of vars for parent function, callback function name [not required], array of vars for callback function [required as per callback function])
// eg: 
//    runFunc('test', [['test1', 'test2'], 'testfunc', ['arg1', 'arg2']]);
//    function test(vars, callback, callbackVars) {
//      try {
//        eval(callback).apply(this, callbackVars);
//      } catch (e) {}
//    }
//    function testfunc(var1, var2) {}
function runFunc(func, args) {
  try {
    eval(func).apply(this, args);
  } catch (e) {
    if (typeof(args[1]) != 'undefined') {
      try {
        eval(args[1]).apply(this, args[2]);
      } catch (e) {}
    }
  }
}

function goTo(url) {
  window.location.href = url;
}
function goToCart() {
  window.location.href = '/cart';
}

$(document).ready(function() {  
  captureGCLID();
  
  ajaxToken = $('#ajaxToken').val();
  
  adjustStyle();
  
  $(window).resize(function() {
    adjustStyle();
  });
  
  if ($('#scrollingPanelContainer').is('*')) {
    var $ordSummaryElem = $("#orderSummary");

    if ($ordSummaryElem.length) {
      var offset = $("#scrollingPanelContainer").parent('.row').offset();
      var maxTopOffset = $("#scrollingPanelContainer").parent('.row').outerHeight() - 35;
      var topPadding = 15;
      $(window).resize(function() {
        offset = $("#scrollingPanelContainer").parent('.row').offset();
        maxTopOffset = $("#scrollingPanelContainer").parent('.row').outerHeight() - 35;
        scrollBlockRepo();
      });
      $(window).scroll(function() {
        scrollBlockRepo();
      });
      scrollBlockRepo();
    }
  }
	
	if ($('[data-toggle="tooltip"]').is('*')) {
		$('[data-toggle="tooltip"]').tooltip();
	}

	function scrollBlockRepo() {
		if ($(window).width() <= 991) {
//      console.log('width', $(window).width());
			$ordSummaryElem.stop().css('margin-top', '0');
			return false;
		}
		var heightOfOrderSummary =  $ordSummaryElem.outerHeight();
		var newTopOffset = $(window).scrollTop() - offset.top + topPadding;
		if (newTopOffset > maxTopOffset - heightOfOrderSummary) {
			newTopOffset = (maxTopOffset - heightOfOrderSummary > 0) ? maxTopOffset - heightOfOrderSummary : 0;
		}
    
		if ($(window).scrollTop() > offset.top) {
			$ordSummaryElem.stop().animate({
				marginTop: newTopOffset
			});
		} else {
			$ordSummaryElem.stop().animate({
				marginTop: 0
			});
		}
	}
	
	function setMenuActive(loc) {
		$('.topMenu .nav-link, .topMenu .menuBlock').removeClass('active');
	
		$('.topMenu .nav-link, .topMenu .menuBlock').each(function(index, elem) {
			var menuLoc = ($(this).prop("tagName") === 'A' ? $(this).attr('href') : $(this).children('a').attr('href'));

			if (loc.indexOf(menuLoc) >= 0) {
				$(this).addClass('active');
				$(this).parents('.mainMenuSubBlock').prev().addClass('active');
			}
		});
	}
	
	function setMobMenuActive(loc) {
		$('.mobMenu .nav-link').removeClass('active');
		$('.mobMenu .menuBlock').removeClass('active');
    
		$('.mobMenu .menuBlock').each(function(index, elem) {
			var menuLoc = $(this).children('a').attr('href');
      
			if (loc.indexOf(menuLoc) >= 0) {
				$(this).addClass('active');
				$(this).parents('.mainMenuSubBlock').prev().addClass('active');
			}
		});
	}
	
	var loc = window.location.href;
	
  if (loc.indexOf('?affLink') >= 0) {
    if ($('#domSrchResAlert').is('*')) {
      showMsg('Affiliate link successfully activated', 'domSrch');
      
      setTimeout(function() {
        window.location.href = '/';
      }, 1200);
    }
  }

	if(loc.indexOf("/logout") > 0) {
		sessionStorage.removeItem('hsdt');
	}
  
	setMenuActive(loc);
	setMobMenuActive(loc);
	
	$('.topMenu .menuBlock').hover(function(){
		 $(this).children('a.link-fx').addClass('hover');
	}, function(){
		 $(this).children('a.link-fx').removeClass('hover');
	});
	
	if ($('#clientLogoSection').is('*')) { 
		$.post(ajaxCustLiteLoc+'?action=getClientLogos', function(data){
			var res = $.parseJSON(data);
			var str = '';
      var altTxt = '';
      
			$.each(res, function(index, element) {
        altTxt = element.replace('.png', '').replace('.svg', '').replace('.webp', '');
				str+= '<div class="col-2 clientLogo"><img src="/assets/media/img/clientLogos/'+element+'" alt="'+altTxt+'" title="'+altTxt+'" loading="lazy" /></div>';
			});
      
			$('#clientLogos').html(str);
		});
	}
	
	if ($('.scrollBttn').is('*')) {
		$(document.body).on('click', '.scrollBttn', function(e) {
      var direction = $(this).data('direction');
      var ctrl = $(this).data('ctrl');
      var elem = $(this).data('elem');
      
      if (direction == 'left') {
        var node = $(ctrl+' '+elem).last().clone();
        $(ctrl+' '+elem).last().fadeOut('fast', function() {
          $(this).parent().prepend(node);
          $(this).remove();
        });
      } else {
        var node = $(ctrl+' '+elem).first().clone();
        $(ctrl+' '+elem).first().fadeOut('fast', function() {
          $(this).parent().append(node);
          $(this).remove();
        });
      }
    });
  }
	
	if ($('.elemLink').is('*')) {
		$(document.body).on('click', '.elemLink', function(e) {
			e.preventDefault();
			
			if (!$(this).parent().hasClass('disabled')) {
				var rel = $(this).attr('rel');
				var loc = $(this).data('loc');
				var link = $(this).data('link');
				var frmType = $(this).data('frmtype');
				var serverType = $('#serverType').val();
				var parentRel = $(this).parent().attr('rel');
				var frm = '#'+parentRel;
				
				if ($(this).hasClass('newWindow')) {
					if ($(this).hasClass('auth')) {
						loading('div[rel="'+parentRel+'"]');
						
						if (serverType == 'domainscpanel' || serverType == 'domainswpcpanel') {							
							switch (frm) {
								case '#softLogin' :
									frm = '#softLoginFrm';
								break;
								case '#fileManLogin' :
									frm = '#fileManLoginFrm';
								break;
								case '#phpMyAdminLogin' :
									frm = '#phpMyAdminLoginFrm';
								break;
							}
						}
						
						submitCredsFrm($('#frmKey').val(), frm, frmType);
					} else {
						window.open(loc);
					}
				} else {
          if (typeof(loc) != 'undefined') {
				    window.location.href = '/client/services/'+loc+'/'+rel;
          } else {
				    window.location.href = link;
          }
				}
			}
		});
	}
	
	if ($('input#domain').is('*')) {
		$(document.body).on('keyup', 'input#domain', function(e) {
			var dom = $(this).val();
			if (dom.indexOf('.') >= 0) {
				var expl = dom.split('.');
				expl.splice(0, 1);
				if (expl[0].length > 1) {
					var domTld = '.'+expl.join('.');
					var domTlds = [];
					$('.domSrchDrop .dropdown-item').each(function(index, elem) {
						var tld = $(this).attr('rel');
						
						if (tld.search(domTld) == 0) {
							domTlds.push(tld);
						}
					});
					domTlds.sort();
					
					$('.domSrchDrop .dropdown-item').removeClass('active');
					
					var srch = '.co.za';
					if (domTlds.length) {
						srch = domTlds[0];
					}
					
					$('#domainTld').val(srch);
					$('#domainTldBttn').html(srch);
					$('.domSrchDrop .dropdown-item[rel="'+srch+'"]').addClass('active');
				}
			}
		});
		
		$(document.body).on('click', '.domSrchDrop a.dropdown-item', function(e) {
			$('.domSrchDrop .dropdown-item').removeClass('active');
			
			var tld = $(this).attr('rel');
			
			$('#domainTld').val(tld);
			$('#domainTldBttn').html(tld);
			$('.domSrchDrop .dropdown-item[rel="'+tld+'"]').addClass('active');
		});
		
		$(document.body).on('blur', 'input#domain', function(e) {
			makeSldOnly('#domain');
		});
		
		$(document.body).on('keypress', 'input#domain', function(e) {   
      if (e.keyCode == 13 || e.which == 13) {
        makeSldOnly('#domain');
      }
		});
	}
  
  if ($('.tabsBlock').is('*')) {
    var locHash = window.location.hash;
    
    if (!(typeof(locHash) == 'undefined' || locHash == '')) {
      var tabInterval = [];
      
      $('.tabsBlock').each(function(index, elem) {
        var rel = $(elem).attr('rel');
        
        tabInterval.push(setInterval(function() {
          if ($('.tabsBlock[rel="'+rel+'"] .nav-link[href="'+locHash+'"]').is('*')) {
            clearInterval(tabInterval[rel]);
            
            $('.tabsBlock[rel="'+rel+'"] .nav-link[href="'+locHash+'"]').click();
          }
        }, 200));
      });
    }
    
    if ($('.specTabs').is('*')) {
      var slider = [];
      
      $('.tabsBlock').each(function(index, elem) {
        var tabIndex = $(elem).attr('rel');
        
        if ($('.tabsBlock[rel="'+tabIndex+'"] .scrollatMax').is('*') && window.devicePixelRatio == 1) {
          setTimeout(function() {
            if ($('.tabsBlock[rel="'+tabIndex+'"] .scrollatMax').is('*')) {
              $(elem).find('.tabScroller .nav-link').each(function(index2, elem2) {            
                $('<input>').attr({
                  type: 'hidden',
                  id: 'tabIndex-'+$(elem2).attr('href').replace('#', ''),
                  value: $(elem2).position().left
                }).appendTo('body');
              });
            }
          }, 0);

          slider[tabIndex] = {
            slider : document.querySelector('.tabsBlock[rel="'+tabIndex+'"] .tabScroller'),
            mouseDown : false,
            dragged : false,
            startX : 0,
            scrollLeft : 0,
            pos : 0
          };
        
          slider[tabIndex].slider.addEventListener('mousedown', function (e) {
            slider[tabIndex].mouseDown = true;
            slider[tabIndex].pos = e.pageX;
            slider[tabIndex].startX = slider[tabIndex].pos - slider[tabIndex].slider.offsetLeft;
            slider[tabIndex].scrollLeft = slider[tabIndex].slider.scrollLeft;
          }, false);
          slider[tabIndex].slider.addEventListener('mouseup', function (e) {
            var tolerance = 7;

            if (slider[tabIndex].pos != e.pageX) {
              if ((e.pageX > slider[tabIndex].pos && e.pageX < (slider[tabIndex].pos + tolerance)) || (e.pageX < slider[tabIndex].pos && e.pageX > (slider[tabIndex].pos - tolerance))) {
                slider[tabIndex].dragged = false;
              } else {
                slider[tabIndex].dragged = true;
              }
            } else {
              slider[tabIndex].dragged = false;  
            }
            
            slider[tabIndex].mouseDown = false;
          }, false);
          slider[tabIndex].slider.addEventListener('mouseleave', function () {
            slider[tabIndex].mouseDown = false;
          }, false);
//          slider[tabIndex].slider.addEventListener('mousemove', (e) => {
//            e.preventDefault();
//            
//            if(!slider[tabIndex].mouseDown) {
//              return; 
//            }
//            const x = e.pageX - slider[tabIndex].slider.offsetLeft;
//            const scroll = x - slider[tabIndex].startX;
//            slider[tabIndex].slider.scrollLeft = slider[tabIndex].scrollLeft - scroll;
//          });
        }
      });

      $(document.body).on('click', '.tabsBlock .nav-link', function(e) {        
        e.preventDefault();
        
        var parent = $(this).parent().parent().parent().parent();
        var tabSetIndex = parent.attr('rel');
        
        var rel = $(this).attr('href').replace('#', '');
        
        if ($('.tabsBlock[rel="'+tabSetIndex+'"] .scrollatMax').is('*') && window.devicePixelRatio == 1) {          
          if (!slider[tabSetIndex].dragged) {
            $('.tabsBlock[rel="'+tabSetIndex+'"] .nav-link').removeClass('active');
            $('.tabsBlock[rel="'+tabSetIndex+'"] .nav-tabs-block').parent().next().next().children('.tab-pane').removeClass('active');

            $(this).addClass('active');

            $('.tabsBlock[rel="'+tabSetIndex+'"] .nav-tabs-block').parent().next().next().children('.tab-pane#'+rel).addClass('active');

            var scrollInterval = setInterval(function() {
              var scrollPos = $('#tabIndex-'+rel).val();

              var newPos = 0;
              if (scrollPos > 0) {
                var margin = $('.tabsBlock[rel="'+tabSetIndex+'"] .tabScroller .nav-item:first-child .nav-link').css('margin-left').replace('px', '')*1;
                var offset = 7;
                                    
                if ($(window).width() <= 1087) {
                  offset = 4;
                }
                
                newPos = (scrollPos - margin + offset).toFixed(0);
              }

              var curScrollPos = $('.tabsBlock[rel="'+tabSetIndex+'"] .tabScroller').scrollLeft();

              if ($('.tabsBlock[rel="'+tabSetIndex+'"] .tabScroller').scrollLeft() != newPos) {
                var scrollAmnt = 0;
                var inc = 1;
                var incStep1 = 1;
                var decStep2 = 2;
                var incStep2 = 4;
                var incStep3 = 8;
                var scrollMax = $('.tabsBlock[rel="'+tabSetIndex+'"] .tabScroller').get(0).scrollWidth - $('.tabsBlock[rel="'+tabSetIndex+'"] .tabScroller').get(0).clientWidth;
                if (curScrollPos < newPos) {
                  inc = incStep3;
                  if (curScrollPos + inc >= newPos) {
                    inc = incStep2;
                  }
                  if (curScrollPos + inc >= newPos) {
                    inc = incStep1;
                  }
                  scrollAmnt = curScrollPos + inc;
                } else if (curScrollPos > newPos) {
                  inc = decStep2;
                  if (curScrollPos - inc <= newPos) {
                    inc = incStep1;
                  }
                  scrollAmnt = curScrollPos - inc;
                }
                if (scrollAmnt >= scrollMax) {
                  clearInterval(scrollInterval);
                }

                $('.tabsBlock[rel="'+tabSetIndex+'"] .tabScroller').scrollLeft(scrollAmnt);
              } else {
                clearInterval(scrollInterval);  
              } 
            }, .05);

            scrollUpToClass('.tabsBlock[rel="'+tabSetIndex+'"]', -90);

            if ($('.tmplSlider').is('*')) {
              $('.tmplSlider').slick('setPosition');
            }
          }
        } else {
          $('.tabsBlock[rel="'+tabSetIndex+'"] .nav-link').removeClass('active');
          $('.tabsBlock[rel="'+tabSetIndex+'"] .nav-tabs-block').parent().next().children('.tab-pane').removeClass('active');

          $(this).addClass('active');

          $('.tabsBlock[rel="'+tabSetIndex+'"] .nav-tabs-block').parent().next().children('.tab-pane#'+rel).addClass('active');
        
          scrollUpToClass('.tabsBlock[rel="'+tabSetIndex+'"]', -90);

          if ($('.tmplSlider').is('*')) {
            $('.tmplSlider').slick('setPosition');
          }
        }
      });
    }
  }
  
  if ($('.termPoint').is('*')) {
    $('.termPoint').each(function(index, elem) {
      $(elem).prepend('<span class="termNum">'+(index + 1)+'</span>');
    });
  }
  
  if ($('.cookiesTabsBlock').is('*')) {    
    $(document.body).on('click', '.cookiesTabsBlock .nav-link', function() {
      var rel = $(this).attr('href').replace('#', '');
      
      $('.cookiesTabsBlock .nav-link').removeClass('active');
      $('.cookiesTabsBlock .tab-pane').removeClass('show active');

      $(this).addClass('active');
      $('.cookiesTabsBlock .tab-pane#'+rel).addClass('show active');
    });
//$('#cookiesModal').modal('show');
    
    $(document.body).on('click', '#detailsBttn', function() {
      $('.nav-link[href="#detailsTab"]').click();
    });
    
    $(document.body).on('click', '#allowBttn', function() {
      var cookies = [
        'necessary',
        'functional',
        'advertising',
        'tracking'
      ];
      $.post(ajaxCustLoc+'?action=setCookieSettings', {
        cookies : cookies
      }, function(data) {
        var res = $.parseJSON(data);
        
        $('#cookiesModal').modal('hide');
      });
    });
  }
  
//  if (loc.indexOf('hosting/wordpress') >= 0 || loc.indexOf('wordpress-hosting') >= 0) {
//    if ($('a[rel="packageAnchor"] .block-content p').is('*')) {
//      $('a[rel="packageAnchor"] .block-content p').each(function(index, elem) {
//        if ($(this).html().indexOf('ToolKit') >= 0) {
//          $(this).append('<i class="fa fa-info-circle packageInfoIcon cursPoint" data-toggle="modal" data-target="#wpInfoModal"></i>');
//        }
//      });
//    }
//  }
  
  $(document.body).on('click', '.seeMoreBlock', function() {
    var rel = $(this).attr('rel');

    if ($('.moreFeaturesBlock[rel="'+rel+'"]').is(':visible')) {
      $('.moreFeaturesBlock').fadeOut();
      $('.closeMoreOuterBlock').fadeOut();
      $('.seeMoreArrow').removeClass('fa-chevron-up');
    } else {
      $('.moreFeaturesBlock').fadeIn();
      $('.closeMoreOuterBlock').fadeIn(function() {
        $('html, body').animate({
          scrollTop: $('.seeMoreBlock').offset().top - 100
        }, 600);

        setTimeout(function() {
          $('html, body').stop(true, true);
        }, 600);
      });
      $('.seeMoreArrow').addClass('fa-chevron-up');
    }
  });
  $(document.body).on('click', '.closeMoreBlock', function() {
    var rel = $(this).attr('rel');

    if ($('.moreFeaturesBlock[rel="'+rel+'"]').is(':visible')) {
      $('.moreFeaturesBlock').fadeOut();
      $('.closeMoreOuterBlock').fadeOut(function() {
        $('html, body').animate({
          scrollTop: $('.seeMoreBlock').offset().top - 100
        }, 600);

        setTimeout(function() {
          $('html, body').stop(true, true);
        }, 600);
      });
    }
  });
  
  if (loc.indexOf('hostingConfiguration') >= 0) {
    var toolkitInterval = setInterval(function() {      
      if ($('div[data-type="WordPress"] a[rel="packageAnchor"] .block-content p').is('*')) {
        clearInterval(toolkitInterval);
        
        $('div[data-type="WordPress"] a[rel="packageAnchor"] .block-content p').each(function(index, elem) {
          if ($(this).html().indexOf('ToolKit') >= 0) {
            $(this).append('<i class="fa fa-info-circle packageInfoIcon cursPoint" data-toggle="modal" data-target="#wpInfoModal"></i>');
          }
        });
      } 
    }, 100);
  }
  
  if ($('.freqQuesContainer').is('*')) {
    $('.faqAnsRow').hide();
    $(document.body).on('click', '.faqQuesRow', function() {
      var rel = $(this).attr('rel');
      
      if ($('.faqAnsRow[rel="'+rel+'"]').is(':visible')) {
        $('.faqAnsRow[rel="'+rel+'"]').slideUp();
        $('.faqArrow[rel="'+rel+'"]').removeClass('fa-chevron-up');
      } else {
        $('.faqAnsRow[rel="'+rel+'"]').slideDown();
        $('.faqArrow[rel="'+rel+'"]').addClass('fa-chevron-up');
      }
    });
  }
  
	$(document.body).on('click', '.checkAllBttn', function() {
    var bttn = $(this);
    var rel = bttn.attr('rel');
    var state = bttn.data('state');
    
    $('#'+rel+' input[type="checkbox"]').each(function(index, elem) {
      if (state == 'unchecked') {
        $(elem).prop('checked', true);
        $(bttn).data('state', 'checked');
        $(bttn).html('Uncheck All');
      } else {
        $(elem).prop('checked', false);
        $(bttn).data('state', 'unchecked');
        $(bttn).html('Check All');
      }
    });
  });
    
  $(document.body).on('click', '.stopVid', function() {
    $('#sbTutVid').remove();
    $('#siteBuilderModal .innerBlockContent .row').append('<iframe id="sbTutVid" width="1280" height="720" src="https://www.youtube.com/embed/dfV1qLBh9xQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
  });

  $(document.body).on('click', '.sbLoginLink', function(e) {
  	e.preventDefault();
    window.open('https://builder.domains.co.za/en/brand/22060/', '_blank');
  });
	
	$(document.body).on('click', '.showPassBttn', function() {
    var parent = $(this).parent();
    var gParElems = 'tr';
    var parElems = 'td';
    
    if (parent.is('div')) {
      gParElems = 'div';
      parElems = 'div';

    }
    
		var grandParents = parent.parent().parent().children(gParElems);
		var slash = $(this).hasClass('fa-eye-slash');
		
		$.each(grandParents, function(index, elem) {
			var parents = $(elem).children(parElems);
			$.each(parents, function(index2, elem2) {
				if (slash) {
					$(elem2).children('input.showPass').attr('type', 'text');
				} else {
					$(elem2).children('input.showPass').attr('type', 'password');
				}
			});
		});
		
		$(this).toggleClass('fa-eye');
		$(this).toggleClass('fa-eye-slash');
	});
	
	$(document.body).on('click', '#loginFrmBttn', function(e) {
		e.preventDefault();

    var alertElem = (typeof($(this).data('alertelem')) != 'undefined') ? $(this).data('alertelem') : 'findOutMore';
    
		$('#loginemail, #loginpw').removeClass('inputError');
		if ($.trim($('#loginemail').val()).length == 0) {
			showErr('Please fill in your email address', alertElem);
			$('#loginemail').addClass('inputError');
		} else if ($.trim($('#loginpw').val()).length == 0) {
			showErr('Please fill in your password', alertElem);
			$('#loginpw').addClass('inputError');
		} else if (!isEmail($('#loginemail').val())) {
			showErr('Invalid email address', alertElem);
			$('#loginemail').addClass('inputError');
		} else {
			var userObj = {
				email : $('#loginemail').val(),
				password2 : $('#loginpw').val(),
        ajaxToken : ajaxToken,
        area : 'custom'
			};
			$.post(ajaxLoc+'?action=loginUser', { 
				userObj : userObj 
			}, function(data) {
				var res = $.parseJSON(data);

				if (res.result == 'success') {
					if (res.twoFactorEnabled) {
						$('#twoFaSignInModal').modal('show');

						bttnDone('#loginFrmBttn');
					} else if (res.otpCheck) {
            $('#otpEmail').html(res.otpEmail);

            $('#loginFrmDiv').slideUp('slow', function() {
              $('#otpSignInBlock').slideDown('slow');

              bttnDone('#loginFrmBttn');
            });
          } else {
						showMsg('Login Successful, Redirecting...', alertElem);

						setTimeout(function() {
							window.location.reload();
						}, 1200);
					}
				} else {				
					if (res.result == 'lockout') {
						showMsg(res.message, alertElem, 'error', 1);

						var mins = $('#secs').html() / 60;
            var flooredMins = Math.floor(mins);
            var secs = (flooredMins < mins) ? 30 : 59;

            $('#secs').html(secs);
            $('#mins').html((flooredMins < mins) ? flooredMins : (flooredMins-1));

            intervalCounter = setInterval(function() {
              if ($('#secs').html() > 0) {
                $('#secs').html($('#secs').html() - 1);
              } else {
                if ($('#mins').html() > 0) {
                  $('#mins').html($('#mins').html() - 1);
                  $('#secs').html(59);
                } else {			
                  bttnDone('#signInBttn');

                  showMsg('Please try again.', 'login');

                  clearInterval(intervalCounter);
                }
              }
            }, 1000);
					} else {
						bttnDone('#loginFrmBttn');

						var msg = (res.message != '') ? res.message : 'Two Factor Authentication failed (general), please try again.';			
						showErr(msg, alertElem);
					}
				}
			});
		}
	});
  
  $(document.body).on('click', '#otpSignInFrmBttn', function() {
    bttnWait(this);

    if (!validInputs('#otpSignInBlock')) {
      var otpPin = $('#otpPin').val();
      var otpEmail = $('#otpEmail').html();

      $.post(ajaxLoginLoc+'?action=verifyOtpAuth', {
        otpPin : otpPin,
        otpEmail : otpEmail
      }, function(data) {
        var res = $.parseJSON(data);

        if (res.result == 'success') {
          showMsg('Login Successful, Redirecting...', 'otpLogin');

          setTimeout(function () {
            window.location.reload();
          }, 1200);
        } else {
          bttnDone('#otpSignInFrmBttn');

          var msg = (res.message != '') ? res.message : 'One Time Pin failed (general), please try again.';
          showErr(msg, 'otpLogin');
        }
      });
    } else {
      showErr('Please complete all input fields.', 'otpLogin');
      bttnDone(this);
    }
  });
  
  $(document.body).on('click', '#resendCodeLink', function() {
    $(this).attr('disabled', true);

    var otpEmail = $('#otpEmail').html();

    if ($('#otpSecs').val() == 0) {
      $.post(ajaxLoginLoc+'?action=resendOtp', {
        otpEmail : otpEmail,
        ajaxToken : ajaxToken
      }, function(data) {
        var res = $.parseJSON(data);

        if (res.result == 'success') {
          showMsg('One-Time PIN resent successfully', 'otpLogin');
        } else {
          var msg = (res.message != '') ? res.message : 'One Time Pin Send failed (general), please try again.';
          showErr(msg, 'otpLogin');
        }

        $('a#resendCodeLink').attr('disabled', false);
      });

      $('#otpSecs').val(30);

      otpIntervalCounter = setInterval(function() {
        if ($('#otpSecs').val() > 0) {
          $('#otpSecs').val($('#otpSecs').val() - 1);
        } else {
          clearInterval(otpIntervalCounter);
        }
      }, 1000);  
    } else {
      showMsg('One-Time PIN resent successfully', 'otpLogin');

      $('a#resendCodeLink').attr('disabled', false);
    }
  });
  
  function makeSldOnly(elem) {
    var domain = $.trim($(elem).val()).toLowerCase().replace(/\ /g, '');
    $(elem).val(domain);

    if (domain.indexOf('.') >= 0) {
      var expl = domain.split('.');
      var sld = expl[0];

      $(elem).val(sld);
    }
  }
	
	function submitForm() {
		if ($.trim($('#g-recaptcha-response').val()).length == 0) {
			showErr('Please complete the form security check', 'findOutMore');
		} else {
			$.post(ajaxCustLoc+'?action=verifyCapture', { 
        response : $('#g-recaptcha-response').val() 
      }, function(data) {
				var res = $.parseJSON(data);
				if (res == 'success') {
					loading('#findOutMoreForm');
				
					$.post(ajaxCustLoc+'?action=openTicket', {
						message : encodeURIComponent(cleanStr('Contact: '+$('#number').val()+' Message: '+$('#inputTxt').val())),
						email : $('#email').val(),
						name : $('#name').val()
					}, function(data) {
            
						var res = $.parseJSON(data);
						loading('#findOutMoreForm', 'done');

						if (res.result == 'success') {
							$('#findOutMoreFormDiv').slideUp('slow', function() {
								var str = ''+
									'<p><strong>Ticket Created <a href="/viewticket/'+res.tid+'/'+res.c+'" style="color:#000000;">#'+res.tid+'</a></strong></p><br><br>'+
									'<p>Your ticket has been successfully created. An email has been sent to your address with the ticket information. If you would like to view this ticket now you can do so by clicking <a href="/viewticket/'+res.tid+'/'+res.c+'">here</a>.</p>';

								showMsg(str, 'findOutMore', 'success', 1);
							});
						} else {
							var msg = (res.message != '') ? res.message : 'Ticket Creation failed (general), please try again.';			
							showErr(msg, 'findOutMore');
						}
					});
				} else {
					showErr('Form security check failed, please retry.', 'findOutMore');
				}
			});
		}	
	}

	$('#findOutMoreBttn').click(function(e) {
		e.preventDefault();
		var inputError = false;
		$('#findOutMoreForm input, #findOutMoreForm textarea, .gRecapBlock').removeClass('inputError');

		$('#findOutMoreForm input').each(function(index, element) {
      if ($(this).attr('id') != 'otpPin') {
        $(this).val($.trim($(this).val()));

        if ($('#loginFrmDiv').css('display') != 'none') {
          if ($(this).val().length == 0) {
            $(this).addClass('inputError');
            inputError = true;
          }		
        } else {
          if (!($(this).attr('id') == 'loginemail' || $(this).attr('id') == 'loginpw')) {					
            if ($(this).val().length == 0) {
              $(this).addClass('inputError');
              inputError = true;
            }
          }
        }
      }
		});

		if ($.trim($('#inputTxt').val()).length == 0) {
			$('#inputTxt').addClass('inputError');
			inputError = true;
		}
		
		if ($.trim($('#g-recaptcha-response').val()).length == 0) {
			$('.gRecapBlock').addClass('inputError');
		}

		$('#inputTxt').val($.trim($('#inputTxt').val()));
		
		if (inputError) {
			showMsg('Please complete all form inputs', 'findOutMore', 'error');
		} else if (!isEmail($('#email').val())) {
			showMsg('Invalid email address', 'findOutMore', 'error');
			$('#email').addClass('inputError');
		} else {			
			$.post(ajaxLoc+'?action=checkEmail', { 
				email : $('#email').val(),
				sessMessage : $('#inputTxt').val(),
				sessName : $('#name').val(),
				sessNumber : $('#number').val()
			}, function(data) {
				var res = $.parseJSON(data);
				if (res.result == 'Existing User') {
					$('#findOutMoreFormDiv').slideUp('slow', function() {
						$('#loginFrmDiv').slideDown('slow');
					});
					
					showMsg('It seems you have an account with us, please login to continue.', 'findOutMore', 'notice', 'remain');
					$('#loginemail').val($('#email').val());
				}	else {
					submitForm();
				}
			});
		}
	});

// *** mobile menu clientarea
	$(document.body).on('click', '#clientNavMobBttn', function() {
    $(this).hide();
  });
	$(document.body).on('click', '#menuCloseBttn', function() {
    $('#clientNavMobBttn').fadeIn();
  });
// *** mobile menu
	$(document.body).on('click', '#navMenuBttn', function() {
//    $('#overlay').fadeIn();    
		$('.mobMenu').removeClass('opened');
    
		$('.mobMenu .nav-link').removeClass('open');
		$('.mobMenu .nav-item').removeClass('open');
    
    if ($('.mobMenu').is(':visible')) {
      $('.mobMenu').slideUp();

      if ($('#overlay').is(':visible')) {
        $('#overlay').fadeOut();
      }
    } else {
      $('.mobMenu').slideDown();
      $('#overlay').fadeIn();
    }
  });
	$(document.body).on('click', '#overlay', function() {
    $('#overlay').fadeOut();
    
    if ($('.mobMenu').is(':visible')) {
      $('.mobMenu').slideUp();
    }
  });
	
	$(document.body).on('click', '.mobMenu .nav-link', function() {
    if (!$('#overlay').is(':visible')) {
      $('#overlay').fadeIn();
    }
		$('.mobMenu .nav-link').removeClass('open');
		$('.mobMenu .nav-link').removeClass('active');
		$('.mobMenu .nav-item').removeClass('open');
		$('.mobMenu .nav-item').removeClass('active');
		$('.mobMenu .mainMenuSubBlock').addClass('disNone');
		
		$(this).addClass('open');
		$(this).parent().addClass('open');
		$(this).parent().parent().addClass('opened');
		
    var rel = $(this).attr('rel');
    
		if (!(rel == 'undefined' || rel == '')) {
			$('.mobMenu .mainMenuSubBlock[rel="'+$(this).attr('rel')+'"]').removeClass('disNone');
			
			$(document).on('click', '*', function(e) {
				var container = $('.mobMenu');

				if (!container.is(e.target) && container.has(e.target).length === 0) {
					$('.mobMenu .nav-link').removeClass('open');
					$('.mobMenu .mainMenuSubBlock').addClass('disNone');

					setMobMenuActive(loc);
				}
			});
		}
	});
	
	$(document.body).on('click', '.mobMenu .menuBlock', function() {
		window.location.href = $(this).children('a').attr('href');
	});
// *** end mobile menu
  
	$(document.body).on('click', '.topMenu .nav-link', function() {
		$('.topMenu .nav-link').removeClass('open');
		$('.topMenu .nav-link').removeClass('active');
		$('.topMenu .mainMenuSubBlock').addClass('disNone');
		
		$(this).addClass('open');
		
		if ($(this).next().hasClass('mainMenuSubBlock')) {
			$(this).next().removeClass('disNone');
			
			$(document).on('click', '*', function(e) {
				var container = $('.topMenu');

				if (!container.is(e.target) && container.has(e.target).length === 0) {
					$('.topMenu .nav-link').removeClass('open');
					$('.topMenu .mainMenuSubBlock').addClass('disNone');

					setMenuActive(loc);
				}
			});
		}
	});
	
	$(document.body).on('click', '.topMenu .menuBlock', function() {
		window.location.href = $(this).children('a').attr('href');
	});
	
	$(document.body).append('<input type="hidden" id="mainMenuHandler" value="0" />');
	
	$('.topMenu').hover(
		function() {
			$('#mainMenuHandler').val('0');
		}, function() {
			$('#mainMenuHandler').val('1');
			setTimeout(function(){
				if ($('#mainMenuHandler').val() == 1) {
					$('.topMenu .nav-link').removeClass('open');
					$('.mainMenuSubBlock').addClass('disNone');
          
					setMenuActive(loc);
				}
			}, 300);
		}
	);
	
	if ($('.gravatarImg').is('*')) {
    var gravInterval = setInterval(function() {
      if ($('#gravImg').is('*')) {
        clearInterval(gravInterval);
        
        $('.gravatarImg').each(function(index, elem) {
          var email = $(this).data('email');
          var rel = $(this).attr('rel');
          var dummyImg = '<img class="img-avatar img-avatar'+rel+'" src="/assets/media/avatars/avatar1.jpg" alt="Avatar" title="Avatar" />';
          var gravStr = '<img class="img-avatar img-avatar'+rel+'" src="'+$('#gravImg').val()+'" alt="Avatar" title="Avatar" />';
          
          $('.gravatarImg[rel="'+rel+'"]').html(gravStr);
        });
      }
    }, 200);
	}
	
	/* sideNav Highlighter */
	var locSplit = loc.substring(loc.indexOf('//')+1).split('/');
	locSplit.splice(0, 2);	
	loc = '/'+locSplit.join('/');
	var defMenuOpen = '';
	
	$('a.nav-main-link[href="/client/dashboard"]').addClass('active');
	
	if (defMenuOpen != '') {
		$('.nav-main-link-submenu .nav-main-link-name').each(function(index, ele) {
			if ($(this).html() == defMenuOpen) {
				$(this).parent().parent().addClass('open');
				$(this).parent().attr('aria-expanded', true);	
			}
		});
	}
	
	$('.nav-main-submenu .nav-main-link').each(function(index, elem) {
		if (loc.indexOf($(elem).attr('href')) >= 0 || loc.indexOf($(elem).data('alt')) >= 0) {
			$('a.nav-main-link[href="/client/dashboard"]').removeClass('active');
			
			if (defMenuOpen != '') {
				$('.nav-main li.nav-main-item').removeClass('open');
				$('.nav-main li.nav-main-item a.nav-main-link-submenu').attr('aria-expanded', false);
			}
			
			$(elem).parent().parent().parent().addClass('open');
			$(elem).addClass('active');
		}
	});
  
  /* sitewide elems for disabling as per permissions */
  $('.permElem').each(function(index, elem) {
    if (!($('#'+$(elem).data('perm')+'Perms').is('*'))) {
      if ($(elem).is('button') || $(elem).is('a')) {
        $(elem).css('cursor', 'not-allowed');
        $(elem).on('click', function(e) {
          e.preventDefault();
        });
      }
      if ($(elem).is('a')) {
        $(elem).attr('href', '');
      }

      $(elem).attr('disabled', true).addClass('permShade');
    }
  });
  
  /* main menu items for hiding as per permissions */
  $('.nav-main-link').each(function(index, elem) {
    var perms = $(elem).data('perms');
    var perm = $(elem).data('perm');
    
    if (typeof(perms) != 'undefined') {
      var splitPerms = perms.split(',');
      var hasPerm = false;
      $(splitPerms).each(function(index2, elem2) {
        if (($('#'+elem2+'Perms').is('*'))) {
          hasPerm = true;
        }
      });
      if (!hasPerm) {
        $(elem).hide();
      }
    } else if (typeof(perm) != 'undefined') {
      if (!($('#'+perm+'Perms').is('*'))) {
        $(elem).hide();
      }
    }
  });
  
  /* user menu items for hiding as per permissions */
  $('#userDropMenu .permElem').each(function(index, elem) {
    if (!($('#'+$(elem).data('perm')+'Perms').is('*'))) {
      if ($(elem).is('a')) {
        $(elem).hide();
      }

      $(elem).attr('disabled', true).addClass('permShade');
    }
  });
  
  setTimeout(function() {
    if ($('.es-review-avatar img').is('*')) {
      $('.es-review-avatar img').each(function(index, elem) {
        var altTxt = $(elem).attr('alt');
        $(elem).attr('title', altTxt); 
      });
    }
  }, 1500);

	document.addEventListener('gistChatReady', function () {
		//gist.chat("close");

		let chatUserString = $('#chatUser').val();
		if (chatUserString) {
			try {
				let chatUser = JSON.parse(chatUserString);
				gist.identify(chatUser.user_id, {
					email: chatUser.email, // Email address
					name: chatUser.nickname,
					whmcs_client_id: chatUser.user_id,
					user_hash: chatUser.chat_signature // HMAC using SHA-256
				});
				sessionStorage.setItem('hsdt', JSON.stringify({
					gravatar: chatUser.gravatar,
					name: chatUser.nickname,
					company: chatUser.company,
				}));
				sessionStorage.setItem('chat_verified',1);
			} catch (e) {
				console.error(e)
			}
		}

		if (!chatUserString) {
			if(sessionStorage.getItem('chat_verified')) {
				gist.chat("shutdown");
				sessionStorage.removeItem('chat_verified');
			}
		}
	});

	/*window.onbeforeunload = function() {
		if(typeof gist !== 'undefined') {
			gist.chat('shutdown');
		}
		sessionStorage.removeItem('chat_verified');
	};*/
});

$(document.body).on('click', '.bttnLink', function() {
  if (typeof($(this).data('loc')) != 'undefined') {
    window.location.href = $(this).data('loc');
  }
});

// bind enter to elements children inputs in form-groups
$(document.body).on('keypress', '.actionBound input', function(e) {
	var bindsTo = $(this).parents('.actionBound').attr('bindsTo');
	if (!(bindsTo == 'undefined' || bindsTo == '')) {
		if (e.keyCode == 13 || e.which == 13) {
			$('#'+bindsTo).click();
		}
	}
});

// bind enter to individual elements
$(document.body).on('keypress', 'input[bound="true"]', function(e) {  
	var bindsTo = $(this).attr('bindsTo');
	if (!(bindsTo == 'undefined' || bindsTo == '')) {    
		if (e.keyCode == 13 || e.which == 13) {      
			$('#'+bindsTo).click();
		}
	}
	var bindsToClosest = $(this).attr('bindsToClosest');
	if (!(bindsToClosest == 'undefined' || bindsToClosest == '')) {
		if (e.keyCode == 13 || e.which == 13) {
			$('button').closest('.'+bindsToClosest).click();
		}
	}
});
	
// check all checkboxes
$(document.body).on('click', '.checkAllSub', function() {
	var rel = $(this).attr('id').replace('chk_', '');
	$('#blk_'+rel+' input[type="checkbox"]').prop('checked', $(this).is(':checked'));
});

// bind sibling elements to checkboxes
$(document.body).on('click', '.siblingCheck', function() {		
	$(this).siblings('input[type="checkbox"]').click();
});

$(document.body).on('click', '.logoutBttn', function() {
	$.post('/cont/logout.php?logout', function(data) {
		if ($.trim(data) == 'done') {
			window.location.href = '/logout';	
		}
	});
	sessionStorage.removeItem('hsdt');
	if(typeof gist !== 'undefined') {
		gist.chat('shutdown');
	}
});

$(document.body).on('click', '.massPayBttn', function() {
	$.post(ajaxCustLoc+'?action=runMassPay', function(data) {
		var res = $.parseJSON(data);
		
		if (res.invoiceid) {
			window.location.href = '/client/billing/view-invoice/'+res.invoiceid+'#massPay';
		} else {
			window.location.href = '/client/billing/my-invoices/massPay';
    }
	});
});

$(document.body).on('click', '.paySelectedBttn', function() {
	bttnWait(this);
	if (!$('#blk_invoices input[type="checkbox"]:checked').length) {
		showErr('Please select at least one invoice to pay', 'invoices');
		bttnDone(this);
	} else if ($('#blk_invoices input[type="checkbox"]:checked').length == 1) {
		window.location.href = '/client/billing/view-invoice/'+$('#blk_invoices input[type="checkbox"]:checked').attr('rel');
	} else {
		var invIds = [];
		
		$('#blk_invoices input[type="checkbox"]:checked').each(function(index, elem) {
			invIds.push($(elem).attr('rel'));
		});
		$.post(ajaxCustLoc+'?action=paySelected', { 
			invIds : invIds 
		}, function(data) {
			var res = $.parseJSON(data);

			if (res.invoiceid) {
				window.location.href = '/client/billing/view-invoice/'+res.invoiceid;
			}
		});
		
		bttnDone(this);
	}
});

$(document.body).on('click', '#sidebarToggle', function() {
	Dashmix.layout('sidebar_style_toggle');
});

$(document.body).on('click', '.navBttn', function() {
	window.location.href = $(this).data('href');
});

$(document.body).on('click', '#domSrchBttn', function(e) {
	e.preventDefault();
	
	var domain = $.trim($('#domain').val()).toLowerCase().replace(/\ /g, '');
	$('#domain').val(domain);
	
  if ($(this).attr('rel') != 'wizard') {
    if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]+$/.test(domain)) {
      $('#domSrchForm').submit();
    } else {
      showErr('Please provide a valid domain name', 'domSrch');
    }
  }
});

(function($) {
	$.ucFirst = function(str) {
		if (!(typeof(str) == 'undefined' || str == '' || str == null) && isNaN(str)) {
			var parts = str.split(' '),
					len = parts.length,
					i, words = [];
			for (i = 0; i < len; i++) {
				var part = parts[i];
				var first = part[0].toUpperCase();
				var rest = part.substring(1, part.length).toLowerCase();
				var word = first + rest;
				words.push(word);
			}

			return words.join(' ');
		} else {
      return str;
    }
	};
	$.ucFirstIfLow = function(str) {
		if (!(typeof(str) == 'undefined' || str == '' || str == null)) {
			var parts = str.split(' '),
					len = parts.length,
					i, words = [];
			for (i = 0; i < len; i++) {
				var part = parts[i];
				var first = part[0].toUpperCase();
				var rest = part.substring(1, part.length);
				var word = first + rest;
				words.push(word);
			}

			return words.join(' ');
		}
	};
	$.lcFirst = function(str) {
		if (!(typeof(str) == 'undefined' || str == '')) {
			var parts = str.split(' '),
					len = parts.length,
					i, words = [];
			for (i = 0; i < len; i++) {
				var part = parts[i];
				var first = part[0].toLowerCase();
				var rest = part.substring(1, part.length);
				var word = first + rest;
				words.push(word);
			}

			return words.join(' ');
		}
	};
	$.deparam = function(str) {
		// remove any preceding url and split
		str = str.substring(str.indexOf('?')+1).split('&');
		var params = {}, pair, d = decodeURIComponent, i;
		// march and parse
		for (i = str.length; i > 0;) {
			pair = str[--i].split('=');
			params[d(pair[0])] = d(pair[1]);
		}

		return params;
	};
})(jQuery);

function getNextCartIndex() {
  var cartObj = {};
  var cartIndices = [];
  
  $(carts).each(function(index, elem) {
    cartObj = getCartVars(elem);
    
    if (objVals(cartObj)) {
      switch (elem) {
        case 'hostingCart' :
        case 'vpsHostingCart' :
        case 'managedHostingCart' :
        case 'resellerHostingCart' :
          for (const obj of cartObj.hosting) {
            cartIndices.push(obj.rowIndex); 
          }
        break;
        case 'domCart' :
          for (const obj of cartObj.domains) {
            cartIndices.push(obj.rowIndex); 
          }          
        break;
        case 'resellerDomCart' :
          for (const obj of cartObj.accounts) {
            cartIndices.push(obj.rowIndex); 
          }          
        break;
        case 'sslCart' :
          for (const obj of cartObj.packages) {
            cartIndices.push(obj.rowIndex); 
          }          
        break;
        case 'avCart' :
          for (const obj of cartObj.accounts) {
            cartIndices.push(obj.rowIndex); 
          }          
        break;
        case 'pbxCart' :
          for (const obj of cartObj.lines) {
            cartIndices.push(obj.rowIndex); 
          }          
        break;
        case 'upgradeCart' :
          for (const obj of cartObj.upgrades) {
            cartIndices.push(obj.rowIndex); 
          }          
        break;
      }
    }  
  });

  var num = 0;
  $(cartIndices).each(function(index, elem) {
    if (num <= elem) {
      num = elem + 1;
    }
  });
  
  return num;
}

function updateNavCartCount() {
  $.post(ajaxCartLoc+'?action=getCartCount', function(data) {
    if ($('.navBttn').is('*')) {
//      $('.navBttn').html('<i class="fa fa-shopping-cart fa-fw mr-1"></i> Shopping Cart ('+data+')');
//      $('.navBttn').html('<img src="/assets/media/img/domains-buy.svg" alt="Add to Cart" title="Add to Cart" class="addToCartImg" /> ('+data+')');
      $('.navBttn').html('<i class="fa fa-shopping-cart fa-fw mr-1 mainCartIcon"><span class="cartIconTxt">'+data+'</span></i>');
    }
  });
}

function submitCredsFrm(frmKey, frmId, frmType, loc) {
	var inputs = [{i: 'loginUser', n: 'user'},{i: 'loginPass', n: 'pass'}];
	var serverType = $('#serverType').val();
  var frmRel;
	var credsObj = {
		frmKey : frmKey
	};
	
	credsObj.dest = frmRel = frmId.replace('#', '');
	
	$.post(ajaxLoc+'&action=getCreds', credsObj, function(data) {
		var res = $.parseJSON(data);
		
		var bRes = [];
		$(res).each(function(index, elem) {
			bRes.push(window.atob(elem));
		})
    
		if (frmType == 'link') {
			if (loc) {
				window.open(bRes[0]);
			} else {
				if (bRes.length) {
					var err = (bRes[0] == 'error') ? true : false;

					if (err) {
						var errMsg = '';
						switch (frmId) {
							case '#spamLogin' :
								errMsg = 'Problem with Spam Experts Login, please try again later';
							break;
							default :
								errMsg = 'Problem with Login, please try again later';
						}
						showErr(errMsg, 'quickManage');
					} else {
						var panelWindow = window.open(bRes[0]);	
					}
          
					if (frmId == '#softLogin' || frmId == '#fileManLogin' || frmId == '#phpMyAdminLogin') {
						loading('div[rel="'+frmRel+'"]', 'done');
						setTimeout(function() {
							panelWindow.close();
							window.open(bRes[1]);
						}, 250);
					}
				}
			}
		}
    
		if ((serverType == 'domainscpanel' || serverType == 'domainswpcpanel') && frmType != 'link') {
			var i = 0;
			for (i; i<2; i++) {
				$('<input>', {
					type: 'hidden',
					id: inputs[i].i,
					name: inputs[i].n,
					value: bRes[i]
				}).appendTo('[rel="'+frmRel+'"]');
			}

      var act = 'http'+((bRes[2] == 'on') ? 's' : '')+'://'+((bRes[3]) ? bRes[3] : bRes[4])+':'+((bRes[2] == 'on') ? '2083' : '2082')+'/login/';
      
      if (frmRel.indexOf('resLoginFrm') >= 0) {
        act = 'http'+((bRes[2] == 'on') ? 's' : '')+'://'+((bRes[3]) ? bRes[3] : bRes[4])+':2087/login/';
        
        $('form[rel="'+frmRel+'"]').attr('action', act);

        $('form[rel="'+frmRel+'"]').submit();

        for (i=0; i<inputs.length; i++) {
          $('#'+inputs[i].i).remove();
        }

        $('form[rel="'+frmId+'"]').attr('action', '');
      } else {
        if (frmRel == 'softLoginFrm') {
          $('<input>', {
            type: 'hidden',
            id: '',
            name: 'goto_uri',
            value: 'frontend/paper_lantern/softaculous/index.live.php'
          }).appendTo('[rel="'+frmRel+'"]');
        }

        if (frmRel == 'fileManLoginFrm') {
          $('<input>', {
            type: 'hidden',
            id: '',
            name: 'goto_uri',
            value: 'frontend/paper_lantern/filemanager/index.html'
          }).appendTo('[rel="'+frmRel+'"]');
        }

        if (frmRel == 'phpMyAdminLoginFrm') {
          $('<input>', {
            type: 'hidden',
            id: '',
            name: 'goto_uri',
            value: 'frontend/paper_lantern/sql/PhpMyAdmin.html'
          }).appendTo('[rel="'+frmRel+'"]');
        }
        
        $('[rel="'+frmRel+'"]').attr('action', act);

        $('[rel="'+frmRel+'"]').submit();

        for (i=0; i<inputs.length; i++) {
          $('#'+inputs[i].i).remove();
        }

        $('[rel="'+frmId+'"]').attr('action', '');
      }
		}
    
		if ($('[rel="'+frmRel+'"]'+' button').is('*')) {
			bttnDone('#'+$('[rel="'+frmRel+'"]'+' button').attr('id'));
		} else if ($('[rel="'+frmRel+'"]'+' a').is('*')) {
			bttnDone($('[rel="'+frmRel+'"]'+' a'));
		} else {
			loading('[rel="'+frmRel+'"]'.replace('Frm', ''), 'done');
		}
	});
} 

function splitDom(domain) {
	var splitElem = domain.split('.');
	var sld = splitElem[0];
	splitElem.splice(0, 1);
	var tld = splitElem.join('.');
	
	return {
		sld: sld,
		tld: tld
	};
}

function clearStates(eleId) {
	$('#'+eleId+'ResAlert').removeClass('alert-danger').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-success');
	$('#'+eleId+'ResIcon').removeClass('fa-times').removeClass('fa-info-circle').removeClass('fa-exclamation-circle').removeClass('fa-check');
}

function showMsg(msg, eleId, type, remain, scrollPoint) {
	clearStates(eleId);
	
	if (scrollPoint == '' || typeof(scrollPoint) == 'undefined') {
		scrollPoint = eleId+'ResAlert';
	}
	
	/* success is default */
	if (type == 'error') {
		$('#'+eleId+'ResMsg').html(msg);
		$('#'+eleId+'ResStatus').html('Error!');
		$('#'+eleId+'ResAlert').addClass('alert-danger');
		$('#'+eleId+'ResIcon').addClass('fa-times');
	} else if (type == 'info') {
		$('#'+eleId+'ResMsg').html(msg);
		$('#'+eleId+'ResStatus').html('Info!');
		$('#'+eleId+'ResAlert').addClass('alert-info');
		$('#'+eleId+'ResIcon').addClass('fa-info-circle');
	} else if (type == 'notice') {
		$('#'+eleId+'ResMsg').html(msg);
		$('#'+eleId+'ResStatus').html('Notice!');
		$('#'+eleId+'ResAlert').addClass('alert-warning');
		$('#'+eleId+'ResIcon').addClass('fa-info-circle');
	} else if (type == 'warning') {
		$('#'+eleId+'ResMsg').html(msg);
		$('#'+eleId+'ResStatus').html('Warning!');
		$('#'+eleId+'ResAlert').addClass('alert-warning');
		$('#'+eleId+'ResIcon').addClass('fa-exclamation-circle');
	} else {
		$('#'+eleId+'ResMsg').html(msg);
		$('#'+eleId+'ResStatus').html('Success!');
		$('#'+eleId+'ResAlert').addClass('alert-success');
		$('#'+eleId+'ResIcon').addClass('fa-check');
	}
	
	$('#'+eleId+'ResAlert').fadeIn('slow');

	if ($('.scrollDiv').is('*')) {
		$('.scrollDiv').scrollLeft(0);
	}
	
	if (remain == '' || typeof(remain) == 'undefined') {
    $('#'+eleId+'ResAlert').data('remain', false);
    
		setTimeout(function() {

      if (!$('#'+eleId+'ResAlert').data('remain')) {
        $('#'+eleId+'ResAlert').fadeOut('slow');
      }
    }, 3500);		
	} else {
    $('#'+eleId+'ResAlert').data('remain', true);
  }
  
	if (!(scrollPoint == '' || typeof(scrollPoint) == 'undefined' || scrollPoint == 'none')) {
		scrollUpTo(scrollPoint);
	}
}

function scrollUpTo(elem, offset) {
  offset = (typeof(offset) == 'undefined') ? -85 : offset;
  
  $('html, body').animate({
    scrollTop: $("#"+elem).offset().top + offset
  }, 800);
}

function scrollUpToClass(elem, offset) {
  offset = (typeof(offset) == 'undefined') ? -85 : offset;
  
  var curPos = $('html, body').scrollTop() - offset;
  var newPos = Math.floor($(elem).offset().top);
  
  if (curPos != newPos) {
    $('html, body').animate({
      scrollTop: $(elem).offset().top + offset
    }, 800);
  }
}

function showErr(errMsg, alert, scrollPoint, remain) {
  remain = (typeof(remain) != 'undefined') ? remain : false;
  
	if (scrollPoint == '') {
		scrollPoint = alert+'ResAlert';
	}
	
	showMsg(errMsg, alert, 'error', remain, scrollPoint);
}

function scrollToPoint(offset, delay) {
	if (delay == '') {
		delay = 800
	}
	$('html, body').animate({
		scrollTop: offset - 20
	}, delay);
}

function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

function randString(len){
  var possible = '';
	possible+= 'abcdefghijklmnopqrstuvwxyz';

	possible+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	possible+= '0123456789';
	possible+= '![]{}()%&*$#^~@|';
	
	while (!(atLeastChars(txt, len, 2) && atLeastNum(txt, len, 1))) {
		var txt = '';
		for(var i=0; i<len; i++) {
			txt+= possible.charAt(Math.floor(Math.random() * possible.length));
		}
	}
	
	txt = setCase(txt, len);
	
  return txt;
}

function genPassAction(prefix, elem, len) {
	prefix = (typeof(prefix) != 'undefined') ? prefix+'I' : 'i';
	elem = (typeof(elem) != 'undefined') ? elem : 'databaseCreate';
	len = (typeof(len) != 'undefined') ? len : 12;
	
	var pass = randString(12);
	$('#'+prefix+'nputPass1, #'+prefix+'nputPass2').removeClass('inputErr').val(pass);

  var changed = false;
  if ($('#'+prefix+'nputPass1').attr('type') == 'password') {
    $('#'+prefix+'nputPass1').attr('type', 'text');
    changed = true;
  }
	var copyText = document.getElementById(prefix+'nputPass1');
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
  
  if (changed) {
    $('#'+prefix+'nputPass1').attr('type', 'password');
  }
	
	$('#'+prefix+'nputPass1').trigger('keyup');

	showMsg('Password Copied to Clipboard', elem);
}

function copyElem(elem, msgElem, noAlert, ret) {
  var changed = false;
  if ($('#'+elem).attr('type') == 'password') {
    $('#'+elem).attr('type', 'text');
    changed = true;
  }
  
  var copyText = document.getElementById(elem);
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
  
  if (changed) {
    $('#'+elem).attr('type', 'password');
  }
  
  var msg = 'Copied to Clipboard';
  
  if ($(msgElem+'ResAlert').is('*')) {
    showMsg(msg, elem);
  } else {
    if (typeof(noalert) == 'undefined' || noAlert == '') {
      alert(msg);
    }
  }
  
  return (ret);
}

function isLetter(str) {
  return str.match(/[a-z]/i);
}

function setCase(txt, len) {
	var casedStr = '';
	var setCasingCount = 0;
	for (var i=0; i<len; i++) {
		if (isLetter(txt[i])) {
			if (setCasingCount < 2) {
				casedStr+= (setCasingCount) ? txt[i].toUpperCase() : txt[i].toLowerCase();
				setCasingCount++;
			} else {
				casedStr+= txt[i];
			}
		} else {
			casedStr+= txt[i];
		}
	}
	
	return casedStr;
}

function atLeastChars(txt, len, minChars) {
	var charCount = 0;
	var atLeastChars = false;
	
	if (typeof(txt) != 'undefined') {
		for (var i=0; i<len; i++) {
			if (isLetter(txt[i])) {
				charCount++;
			}
			if (charCount == minChars) {
				atLeastChars = true;
				break;
			}
		}
	}
	
	return atLeastChars;
}

function atLeastNum(txt, len, minChars) {
	var numCount = 0;
	var atLeastNum = false;
	
	if (typeof(txt) != 'undefined') {
		for (var i=0; i<len; i++) {
			if (!isNaN(txt[i])) {
				numCount++;
			}
			if (numCount == minChars) {
				atLeastNum = true;
				break;
			}
		}
	}
	
	return atLeastNum;
}

function drawDtTbl(tblClass, opts, destroy, callback, dest) {	
	if (destroy) {	
		$('.'+tblClass).dataTable().fnDestroy();		
	}
	
	var dtOpts = {
		pageLength: 25,
		lengthMenu: [10, 25, 50, 100],
		autoWidth: !1,
		sWrapper:"dataTables_wrapper dt-bootstrap4",
		sFilterInput:"form-control",
		sLengthSelect:"form-control",
		language:{
			lengthMenu:"_MENU_",
			search:"_INPUT_",
			searchPlaceholder:"Search..",
			info:"Page <strong>_PAGE_</strong> of <strong>_PAGES_</strong>",
			paginate:{
				first:'<i class="fa fa-angle-double-left"></i>',
				previous:'<i class="fa fa-angle-left"></i>',
				next:'<i class="fa fa-angle-right"></i>',
				last:'<i class="fa fa-angle-double-right"></i>'
			}
		},
		oLanguage: {
			oAria: {
				"sSortAscending": ": activate to sort column ascending",
				"sSortDescending": ": activate to sort column descending"
			},
			oPaginate: {
				"sFirst": "First",
				"sLast": "Last",
				"sNext": "Next",
				"sPrevious": "Previous"
			},
			sEmptyTable: "No data available in table",
			sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
			sInfoEmpty: "Showing 0 to 0 of 0 entries",
			sInfoFiltered: "(filtered from _MAX_ total entries)",
			sLoadingRecords: "Loading...",
			sProcessing: "Processing...",
			sZeroRecords: "No matching records found"
		},
		processing: false,
		serverSide: false,
	};
	
	var domStr = "";
	
	if (tblClass == 'js-dataTable-buttons') {
		domStr = "<'row'<'col-sm-12'<'text-center bg-body-light py-2 mb-2'B>>>";
	}
	
	domStr+= "<'row'<'col-xs-6 col-sm-6 col-md-6'l><'col-xs-6 col-sm-6 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>";
	
	dtOpts.dom = domStr;
	
	if (typeof(opts.data) != 'undefined') {		
		dtOpts.data = opts.data;
	}

	$.each(opts, function(index, elem) {
		if (index != 'type' && index != 'cnt') {			
			if (typeof(opts[index]) != 'undefined') {
				dtOpts[index] = opts[index];
			}
		}
	});
	
	if (typeof(callback) != 'undefined') {
		dtOpts.fnInitComplete = function () {			
			var cbData = [];
			$(dtOpts.data).each(function(index, elem) {
				$(elem).each(function(index2, elem2) {
					if (typeof($(elem2).data('dropname')) != 'undefined') {
						cbData.push($(elem2).data('dropname'));
					}
				});
			});
			callback(dest, cbData);
    }
	}
	
	if (!$.fn.DataTable.isDataTable('.'+tblClass)) {
		$('.'+tblClass).dataTable(dtOpts);
	}
}
	
$(document.body).on('click', '.innerTab', function(e) {
  $('.innerTab').removeClass('active');
  $(this).addClass('active');
});

$(document.body).on('click', '.dropdown-menu.selectable .dropdown-item', function() {
	var parent = $(this).parent();
	var grandParent = parent.parent();
	var itemVal = $(this).html();
  
	parent.children('.dropdown-item').removeClass('active');
	$(this).addClass('active');
	
	grandParent.children('.bttnTxt').html('\n\t\t\t\t\t\t\t\t\t\t'+itemVal+'\n\t\t\t\t\t\t\t\t\t');
	
  if (typeof($(this).parent().data('identifier')) != 'undefined') {
    grandParent.children('.selectInput').val($(this).data($(this).parent().data('identifier')));
  } else {
    grandParent.children('.selectInput').val(itemVal);
  }
});

$(document.body).on('click', '.js-wizard-simple #nextBttn', function() {
  if ($('.js-wizard-simple .nav-link.active').parent().next().children('.nav-link').is('*')) {
    $('.js-wizard-simple .nav-link.active').parent().next().children('.nav-link').click();
  }
});
$(document.body).on('click', '.js-wizard-simple #prevBttn', function() {
  if ($('.js-wizard-simple .nav-link.active').parent().prev().children('.nav-link').is('*')) {
    $('.js-wizard-simple .nav-link.active').parent().prev().children('.nav-link').click(); 
  }
});

function setWizStep(wizType, step, arg) {
  var cartObj = getCartVars(wizType);
  
  if (typeof(step) == 'undefined' || step == '') {
    if (cartObj != null) {
      switch (wizType) {
        case 'domRegisterCart' :
          step = cartObj.step;
        break;
        default :
          step = 1;
      }
    } else {
      var cartObj = {
        step : 1
      };
      
      step = 1;
    }
  } 
  
  if (typeof(setTabData) == 'function') {
    setTabData(cartObj, step);
  }
  
  $('.nav-link[data-step="'+step+'"]').attr('href', $('.nav-link[data-step="'+step+'"]').data('href'));
//  cartObj[cartObjType].step = step;
  $('#curStep').val(step);

  $('.tab-pane').removeClass('active');
  $('.nav-link[data-step="'+step+'"]').trigger('click', arg);

  $('.tab-pane[data-step="'+step+'"]').addClass('active');
}

function genDynamicDrop(dest, src) {
	var str = '';
	if (typeof(src) == 'object') {
		$(src).each(function(index, elem) {
			str+= '<option value="'+elem+'">'+elem+'</option>';
		});
	} else {
		$(src).each(function(index, elem) {
			var dropName = $(elem).data('dropname');

			str+= '<option value="'+dropName+'">'+dropName+'</option>';
		});
	}
	$(dest).html(str);
}

function validInputs(block) {
	$(block+' input').removeClass('inputErr');
	
	var inputErr = false;
	$(block+' input:not(.validExc)').each(function(index, elem) {
		var elemVal = $.trim($(elem).val());
		$(elem).val(elemVal);
		
		if (elemVal.length == 0) {
			$(elem).addClass('inputErr');
			inputErr = true;
		}
	});
	
	return inputErr;
}

function loading(elem, type) {
	if (type == '' || typeof(type) == 'undefined') {
		$(elem).addClass('block-mode-loading');
	} else {
		$(elem).removeClass('block-mode-loading');
	}
}

function loader(elem, html) {
	if (html == '' || typeof(html) == 'undefined') {
		$(elem).html('<i class="fa fa-1_5x fa-circle-notch fa-spin text-info"></i>');
	} else {
		$(elem).html(html);
	}
}

function bttnWait(bttn) {
	$(bttn).attr('disabled', true).html('Please Wait...').css('cursor', 'wait');
}

function bttnDone(bttn, txt) {
	var bttnTxt = (typeof(txt) == 'undefined') ? ((typeof($(bttn).data('html')) == 'undefined') ? 'Confirm' : $(bttn).data('html')) : txt;
	$(bttn).attr('disabled', false).html(bttnTxt).css('cursor', 'pointer');
}

function selWait(sel) {
	$(sel).attr('disabled', true).css('cursor', 'wait');
}

function selDone(sel) {
	$(sel).attr('disabled', false).css('cursor', 'default');
}

function scrollUp() {
	$('body,html').animate({
		scrollTop: 400
	}, 800);	
}

function isEmail($email) {
  var emailReg = /^([\w-+\.]+@([\w-+]+\.)+[\w-]{2,10})?$/;
  return emailReg.test($email);
}

function isDomain($dom) {
//  var domReg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
  var domReg = /\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/gm;
  return domReg.test($dom);
}

function isSubDomain($dom) {
  var domReg = /^[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?$/;
  return domReg.test($dom);
}

function isHostName($name) {
  var nameReg = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])*$/;
  return nameReg.test($name);
}

function isIPAddress(ipaddress) {
	return (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress));
}

function isDbName($name) {
  var nameReg = /^([a-zA-Z0-9-]{1,55})+$/;
  return nameReg.test($name);
}

function isDbUserName($name) {
  var nameReg = /^([a-zA-Z0-9_]{1,55})+$/;
  return nameReg.test($name);
}

function isEmpty(obj) {
  for(var prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

function cleanTitle(str){
  return $.trim(domsOnly(stripTags(str)));
}
function cleanStr(str){
  return $.trim(stripTags(str));
}

function domsOnly(str){
	if (typeof(str) != 'undefined') {
  	return str.replace(/[^a-z0-9 .-]/gi, '');
	}
}

function stripTags(input, allowed) {
	if (typeof(input) != 'undefined') {
		var sqlArr = [
			'SELECT TOP 1',
			'@@version',
			'information_schema.',
			'database()',
			'sleep\\(',
			'load_file\\(',
			'current_user()',
			'UNION SELECT',
			'1=1',
			'and 1=',
			"'1'='1'",
			"and '1'=",
		];
	
		$.each(sqlArr, function(index, value){
			var regex = new RegExp(value, 'gi');
			input = input.replace(regex, '');	
		});
	
		// making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
		allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); 

		var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
		var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
		return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
			return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
		});
	}
}

function stripForId(str) {
	return str.replace(/[^\w\s]/gi, '').replace(/\ /g, '').toLowerCase();
}

function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function htmlSpecialChars(str) {
	return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
}

//function createCookie(name, value, days) {
//	var expires;
//
//	if (days) {
//		var date = new Date();
//		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//		expires = "; expires=" + date.toGMTString();
//	} else {
//		expires = "";
//	}
//	document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
//}
//
//function readCookie(name) {
//	var nameEQ = encodeURIComponent(name) + "=";
//	var ca = document.cookie.split(';');
//	for (var i = 0; i < ca.length; i++) {
//		var c = ca[i];
//		while (c.charAt(0) === ' ')
//			c = c.substring(1, c.length);
//		if (c.indexOf(nameEQ) === 0)
//			return decodeURIComponent(c.substring(nameEQ.length, c.length));
//	}
//	return null;
//}
//
//function getCookie(cname) {
//  let name = cname + "=";
//  let decodedCookie = decodeURIComponent(document.cookie);
//  let ca = decodedCookie.split(';');
//  for(let i = 0; i <ca.length; i++) {
//    let c = ca[i];
//    while (c.charAt(0) == ' ') {
//      c = c.substring(1);
//    }
//    if (c.indexOf(name) == 0) {
//      return c.substring(name.length, c.length);
//    }
//  }
//  return "";
//}
//
//function eraseCookie(name) {
//	createCookie(name, "", -1);
//}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCartVar(cname, obj, exdays) {
  var cartVar = getCartVar(cname);
  
  if (cartVar != null) {
    $.each(obj, function(index, elem) {    
      cartVar[index] = elem;    
    });
  } else {
    cartVar = obj;
  }
  
  cvalue = JSON.stringify(cartVar);
  
  exdays = (typeof(exdays) == 'undefined') ? 1 : exdays;
  
  setCookie(cname, cvalue, exdays);  
}

function setCartVars(cname, obj) {
  var cartVars = getCartVars(cname);
  
  if (cartVars == null) {
    cartVars = {};
  }
  
  $.each(obj, function(index, elem) {
    cartVars[index] = elem;
  });
  
  cvalue = JSON.stringify(cartVars);
  
  setCookie(cname, cvalue, 1);  
}

function getCartVars(cname) {
  var cObj = getCookie(cname);
  
  return (cObj != '') ? $.parseJSON(cObj) : null;
}

function checkCart(wizType, value, type) {
  var cartObj = getCartVars(wizType); 
  
  var inCart = '';
  
  switch(wizType) {
    case 'domCart' :
      if (!(typeof(cartObj) == 'undefined' || cartObj == null)) {
        for (const obj of cartObj.domains) {
          if (obj.domain === value && obj.type === type) {
            inCart = obj.rowIndex;

            break;
          }
        }
      } 
    break;
  }
  
  return inCart;
}

function checkCartDomEpp(wizType, value) {
  var cartObj = getCartVars(wizType);      
  var eppCode = false;
  
  if (!(typeof(cartObj) == 'undefined' || cartObj == null)) {
    for (const obj of cartObj.domains) {
      if (obj.domain === value && obj.eppCode != '') {
        eppCode = obj.eppCode;

        break;
      }
    }
  }
  
  return eppCode;
}

function getCartVar(cname) {
  var cObj = getCookie(cname);
  
  return (cObj != '') ? $.parseJSON(cObj) : null;
}

function clrCartVar(cname, value, key1, key2) {
  var cartVars = getCartVars(cname);
  
  if (!objVals(cartVars)) {
    cartVars = {};
  }
  
  var arr = [];
  if (typeof(cartVars[key1]) != 'undefined') {
    $.each(cartVars[key1], function(index, elem) {
      if (elem[key2] != value) {
        arr.push(cartVars[key1][index]);
      }
    });
  }
  
  cartVars[key1] = arr;

  cvalue = JSON.stringify(cartVars);
  
  setCookie(cname, cvalue, 1);  
}

function updateNavCartBttn(eq) {
  var cartBttnHtml = $('.navBttn').html();
  var splCartBttnHtml = cartBttnHtml.split('(');
  var spl2CartBttnHtml = splCartBttnHtml[1].split(')');
  var cartCount = spl2CartBttnHtml[0]*1;
  var newCount = cartCount + eq;
  
//  $('.navBttn').html('\n\t\t\t\t\t\t<i class="fa fa-shopping-cart fa-fw mr-1"></i> Shopping Cart ('+newCount+')\n\t\t\t\t\t');
  $('.navBttn').html('\n\t\t\t\t\t\t<img src="/assets/media/img/domains-buy.svg" alt="Add to Cart" title="Add to Cart" class="addToCartImg" /> ('+newCount+')\n\t\t\t\t\t');
}

function clrCartVars(cname) {
  setCookie(cname, '');
}

function clrCarts(cname) {
  $(carts).each(function(index, elem) {
    clrCartVars(elem);
  });
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  let cookie = getCookie(cname);
  if (cookie != "") {
    return true;
  }
}

function reloadWindow(interval) {
  if (typeof(interval) != 'undefined') {
    setTimeout(function() {
      window.location.reload();
    }, interval);
  } else {
    window.location.reload();
  }
}

function getDefNs() {
  $.post(ajaxCustLoc+'?action=getDefaultNameservers', function(data) {
    var res = $.parseJSON(data);

    var i = 1;
    for(i; i<=5; i++) {
      $('#defNs'+i).val(res[i]);
    }
  });
}

function refreshCart(wizType, area) {
  $.post('/cont/domainRegistration.php?action=getCartDoms', function(data) {
    var res = $.parseJSON(data);
    
    if (!objVals(res)) {
      clrCartVars(wizType);
    }
  });
}
function htmlEncode(s) {
  var el = document.createElement("div");
  el.innerText = el.textContent = s;
  s = el.innerHTML;
  return s;
}
function htmlDecode(text) {
  return $("<textarea/>")
    .html(text)
    .text();
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function genCheckHelper() {  
  $('.domain-selection-options').find('input').iCheck({
    inheritID: true,
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%'
  });

  if ($('.iradio_square-blue.checked').is('*')) {
    var rel = $('.iradio_square-blue.checked').parents('.option').attr('rel');
    
    fireOptClick(rel);
  }
}

function fireOptClick(rel) {
  if (!$('#'+rel).is(':visible')) {
    var checker = $('#'+rel).parent().children().find('.iradio_square-blue');
    if (!checker.hasClass('checked')) {
      $('.iradio_square-blue').removeClass('checked');
      checker.addClass('checked');
    }

    $('.domain-input-group').fadeOut('fast');

    setTimeout(function() {
      $('#'+rel).slideDown('slow');
    }, 200);
  }
}

function objVals(obj) {
  if (!(typeof(obj) == 'undefined' || obj == null)) {
    if (typeof(obj) == 'object') {
      if (Object.keys(obj).length) {
        return true;
      }
    } else {
      if (obj.length) {
        return true;
      }
    }
    return false;
  }
  
  return false;
}

function animElem(elem, style, start, end, inc, duration, identifier, step) {
  var dur = (typeof(duration) != 'undefined') ? duration : 10;
  var step = (typeof(step) != 'undefined') ? step*1 : 1;
  var cssMod = (typeof(identifier) != 'undefined') ? identifier : 'px';
  var change = (typeof(start) != 'undefined') ? start*1 : 0;
  
  var animInterval = setInterval(function() {
    var curState = $(elem).css(style).replace(cssMod, '')*1;
    if (inc) {
      if (change >= end) {
        clearInterval(animInterval);
      } else {
        if ((change + step) > end) {
          change = end;
        } else {
          change+= step;
        }
        
        $(elem).css(style, change+cssMod);
      }  
    } else {      
      if (change <= end) {
        clearInterval(animInterval);
      } else {
        if ((change - step) < end) {
          change = end;
        } else {
          change-= step;
        }
        
        $(elem).css(style, change+cssMod);
      }  
    }
  }, dur);
}

function initTinyMce(selector, toolbar) {
  var selector = (selector||'.jsEditor');
  var toolbar = (toolbar||'undo redo');
  
  tinymce.init({
    base_url : '/assets/js/plugins/tinymce/',
    suffix: '.min',
    selector: selector,
    menubar: false,
    toolbar: toolbar
  });
  
  var linkInterval1 = setInterval(function() {
    if ($('.tox-promotion-link').is('*')) {
      $('.tox-promotion-link').hide();
      
      clearInterval(linkInterval1);
    }    
  }, 200);
  
  var linkInterval2 = setInterval(function() {
    if ($('.tox-statusbar').is('*')) {
      $('.tox-statusbar').hide();
      
      clearInterval(linkInterval2);
    }    
  }, 200);
}

function getTinyMceValue(elem) {  
  var elem = (elem||'#jsEditor');
  
  tinyMCE.triggerSave();
  
  return cleanStr($(elem).val())
}

jQuery.fn.extend({
	getUrlParam: function(strParamName, lastValue = true){
		strParamName = decodeURIComponent(strParamName);
		
		var returnVal = new Array();
		var qString = null;
		
		if ($(this).attr("nodeName") == "#document") {
			//document-handler
			if (window.location.search.search(strParamName) > -1 ){
				qString = window.location.search.substr(1, window.location.search.length).split("&");
			}
		} else if ($(this).attr("src") !== undefined) {
			var strHref = $(this).attr("src");
			if ( strHref.indexOf("?") > -1 ){
				var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
				qString = strQueryString.split("&");
			}
		} else if ($(this).attr("href") !== undefined) {
			var strHref = $(this).attr("href");
			if ( strHref.indexOf("?") > -1 ){
				var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
				qString = strQueryString.split("&");
			}
		} else {
			return null;
		}
		
		if (qString == null) return null;
		
		for (var i = 0; i < qString.length; i++){
			var args = qString[i].split("=");
			if (decodeURIComponent(args[0]) == strParamName){
				returnVal.push(args[1] === undefined ? null : decodeURIComponent(args[1]));
			}
		}
		
		return returnVal.length == 0 ? null : returnVal.length == 1 ? returnVal[0] : lastValue ? returnVal[returnVal.length - 1] : returnVal;
	}
});
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

var ajaxLoc = '/cont/login.php';
var intervalCounter = '';
var ajaxToken = $('#ajaxToken').val();

function genLoc() {
	var loc = 'dashboard';
	
	if (!(typeof($('#area').val()) == 'undefined' || typeof($('#file').val()) == 'undefined')) {
		loc = ($('#file').val() != '') ? $('#area').val()+'/'+(($('#subarea').val() != '') ? $('#subarea').val()+'/' : '')+$('#file').val() : loc;
	}
	loc+= ((!(typeof($('#rel').val()) == 'undefined' || $('#rel').val() == '')) ? '/'+$('#rel').val() : ''); 
	
	return loc;
}

$(document.body).on('click', '#forgotBttn', function() {
	bttnWait(this);
	
	if (!validInputs('#signInBlock')) {
		$.post(ajaxLoc+'?action=resetPass', {
			email : $('#inputUser').val()
		}, function(data) {
			var res = $.parseJSON(data);

      if (res.result == 'success') {				
        showMsg('An email has been sent to '+res.email+' with further instructions', 'login', '', 'remain');
      } else if (typeof(res.email) != 'undefined') {			
        showErr(res.email, 'login');
      } else {			
        showErr(res.message, 'login');
      }
      
      bttnDone('#forgotBttn');
      $('#forgotBttn').attr('disabled', true);
		});
	} else {
		showErr('Please complete all input fields.', 'login');
		bttnDone(this);
	}
});

$(document.body).on('click', '#signInBttn', function() {
	bttnWait(this);
  clearInterval(intervalCounter);
  
	if (!validInputs('#signInBlock')) {
    var area = (window.location.href.indexOf('logout') >= 0) ? 'logout' : 'login';
    
		var userObj = {
			email : $('#inputUser').val(),
			password2 : encodeURIComponent($('#inputPass').val()),
			ajaxToken : ajaxToken,
      area : area
		};
		$.post(ajaxLoc+'?action=loginUser', {
			userObj : userObj
		}, function(data) {
			var res = $.parseJSON(data);
			
			if (res.result == 'success') {
        if (res.tokenKey) {
          showMsg('Login Successful, Redirecting...', 'login');

          setTimeout(function() {
            window.location.href = '/account?rp=/invite/'+res.tokenKey;
          }, 1000);
        } else {
          if (res.twoFactorEnabled) {
            $('#signInBlock').slideUp('slow', function() {
              $('#twoFaSignInBlock').slideDown('slow');

              bttnDone('#signInBttn');
            });
          } else if (res.otpCheck) {
            $('#otpEmail').html(res.otpEmail);
            
            $('#signInBlock').slideUp('slow', function() {
              $('#otpSignInBlock').slideDown('slow');

              bttnDone('#signInBttn');
            });
          } else {
            showMsg('Login Successful, Redirecting...', 'login');

            var loc = genLoc();

            setTimeout(function() {
              window.location.href = '/client/'+loc;
            }, 1000);
          }
        }
			} else {				
				if (res.result == 'lockout') {
					showMsg(res.message, 'login', 'error', 1);
          
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
					bttnDone('#signInBttn');
					
					var msg = (res.message != '') ? res.message : 'Login Unsuccessful ('+area+'), please try again.';			
					showErr(msg, 'login');
				}
			}
		});
	} else {
		showErr('Please complete all input fields.', 'login');
		bttnDone(this);
	}

});

$(document.body).on('click', '#otpSignInBttn', function() {
	bttnWait(this);
  
	if (!validInputs('#otpSignInBlock')) {
		var otpPin = $('#otpPin').val();
		var otpEmail = $('#otpEmail').html();
		
		$.post(ajaxLoc+'?action=verifyOtpAuth', {
			otpPin : otpPin,
			otpEmail : otpEmail
		}, function(data) {
			var res = $.parseJSON(data);
			
			if (res.result == 'success') {
				showMsg('Login Successful, Redirecting...', 'otpLogin');

				var loc = genLoc();

				setTimeout(function() {
					window.location.href = '/client/'+loc;
				}, 1000);
			} else {
				bttnDone('#otpSignInBttn');
        
        var msg = (res.message != '') ? res.message : 'One Time Pin failed (login), please try again.';
        showErr(msg, 'otpLogin');
			}
		});
	} else {
		showErr('Please complete all input fields.', 'otpLogin');
		bttnDone(this);
	}
});

$(document.body).on('click', '#twoFaSignInBttn', function() {
	bttnWait(this);
	
	if (!validInputs('#twoFaSignInBlock')) {
		var authCode = $('#authCode').val();
		
		$.post(ajaxLoc+'?action=verifyTwoFaAuth', {
			authCode : authCode
		}, function(data) {
			var res = $.parseJSON(data);
			
			if (res.result == 'success') {
				showMsg('Login Successful, Redirecting...', 'twoFaLogin');

				var loc = genLoc();

				setTimeout(function() {
					window.location.href = '/client/'+loc;
				}, 1000);
			} else {
				bttnDone('#twoFaSignInBttn');
				
				if (res.message == 'TwoFa Inactive') {
					$('#twoFaSignInBlock').slideUp('slow', function() {
						$('#signInBlock').slideDown('slow');
					});
				} else {
					var msg = (res.message != '') ? res.message : 'Two Factor Authentication failed (login), please try again.';
					showErr(msg, 'twoFaLogin');
				}
			}
		});
	} else {
		showErr('Please complete all input fields.', 'twoFaLogin');
		bttnDone(this);
	}
});

$(document.body).on('click', 'a#backupCodeLink', function() {
	$(this).attr('disabled', true);
	
	$('#twoFaSignInBlock').slideUp('slow', function() {
		$('#twoFaBackupCodeBlock').slideDown('slow');
		$('a#backupCodeLink').attr('disabled', false);
	});
});

$(document.body).on('click', '#twoFaBackupCodeBttn', function() {
	bttnWait(this);
	
	if (!validInputs('#twoFaBackupCodeBlock')) {
		var backupCode = $('#backupCode').val();
		
		$.post(ajaxLoc+'?action=verifyTwoFaAuthBackupCode', {
			backupCode : backupCode
		}, function(data) {
			var res = $.parseJSON(data);
			
			if (res.result == 'success') {
				showMsg('Login Successful, Redirecting...', 'twoFaBackupCode');

				var loc = genLoc();

				setTimeout(function() {
					window.location.href = '/client/'+loc;
				}, 1000);
			} else {
				bttnDone('#twoFaBackupCodeBttn');
				
				if (res.message == 'TwoFa Inactive') {
					$('#twoFaBackupCodeBlock').slideUp('slow', function() {
						$('#signInBlock').slideDown('slow');
					});
				} else {
					var msg = (res.message != '') ? res.message : 'Two Factor backup code failed (login), please try again.';
					showErr(msg, 'twoFaBackupCode');
				}
			}
		});
	} else {
		showErr('Please complete all input fields.', 'twoFaBackupCode');
		bttnDone(this);
	}
});

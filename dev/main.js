"use strict";
document.addEventListener("DOMContentLoaded", function() {

    var input = document.getElementById('js-input'),
		history = document.getElementById('js-history'),
		help = '<ul class="list h-list">' +
					'<li><span class="orange">clear</span> <i>-</i> Clear previous commands.</li>' +
					'<li><span class="orange">contact</span> <i>-</i> Send me an email if you want to chat.</li>' +
					'<li><span class="orange">hello</span> <i>-</i> A few words about me.</li>' +
					'<li><span class="orange">help</span> <i>-</i> Show these commands.</li>' +
					//'<li><span class="orange">konami</span> <i>-</i> ???</li>' +
					'<li><span class="orange">skills</span> <i>-</i> See what I can do.</li>' +
					'<li><span class="orange">social</span> <i>-</i> Where I am on the web.</li>' +
				'</ul>',
		skills = '<ul>' +
					'<li>HTML5,</li>' +
					'<li>CSS3,</li>' +
					'<li>SASS/Compass,</li>' +
					'<li>Javascript/Jquery,</li>' +
					'<li>AngularJS,</li>' +
					'<li>Twig templating,</li>' +
					'<li>Version and dependancy control,</li>' +
					'<li>and some sound design too.</li>' +
				'</ul>',
		social = '<ul class="list s-list">' +
					'<li><span>Instagram</span> <i>-</i> <a href="https://instagram.com/h4ydouken/" target="_blank">https://instagram.com/h4ydouken/</a></li>' +
					'<li><span>Twitter</span> <i>-</i> <a href="https://twitter.com/HaydenCleary" target="_blank">https://twitter.com/HaydenCleary</a></li>' +
					'<li><span>Soundcloud</span> <i>-</i> <a href="https://soundcloud.com/haydencleary" target="_blank">https://soundcloud.com/haydencleary</a></li>' +
					'<li><span>Linkedin</span> <i>-</i> <a href="https://www.linkedin.com/in/haydencleary" target="_blank">https://www.linkedin.com/in/haydencleary</a></li>' +
				'</ul>';

	var terminal = {
		update: function(msg) {
            var oldCmd = document.createElement('p');
                oldCmd.className = 'old-cmd';
                oldCmd.innerText = input.innerText.trim();

            var msgText = document.createElement('p');
                msgText.innerHTML = msg;

            history.appendChild(oldCmd);
            history.appendChild(msgText);

            while (input.hasChildNodes()) {
                input.removeChild(input.firstChild);
            }
		},
		check: function(cmd) {

            cmd = cmd.trim();

			switch(cmd){
				case 'help':
					terminal.update(help);
					break;
				case 'clear':
                    while (history.hasChildNodes()) {
                        history.removeChild(history.firstChild);
                    }
                    while (input.hasChildNodes()) {
                        input.removeChild(input.firstChild);
                    }
					break;
				case 'contact':
					terminal.update('contact[at]haydencleary[dot]fr');
					break;
				case 'hello':
					terminal.update(
                        "My name is Hayden Cleary, front end developer at <a href='http://www.iconosquare.com' target='_blank'>Iconosquare</a> in Limoges, France.<br>" +
                        "I'm an amateur game developer, aspiring musician and professional wizard."
                    );
					break;
				//case 'konami':
				//	terminal.update("You've heard of the <a href='http://lmgtfy.com/?q=konami+code' target='_blank'>Konami Code</a>, right?");
				//	break;
				case 'skills':
					terminal.update(skills);
					break;
				case 'social':
					terminal.update(social);
					break;
				default:
					terminal.update('Unrecognized command. Type "<span class="orange">help</span>" for documentation.');
					break;
			}
		}
	};

	// Always focus on input, no matter where user clicks
    document.addEventListener('click', function(){
        input.focus();
    });

    input.focus();

    input.addEventListener('keyup', function(e){
        var code = e.keyCode || e.which;
        if(code == 13) {// Enter
            terminal.check(input.innerText);
            window.scrollTo(0, document.body.scrollHeight);
        }
    });

	//Konami
	/*var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
	    n = 0;
	$(document).keydown(function (e) {
	    if (e.keyCode === k[n++]) {
	        if (n === k.length) {
				$('body').toggleClass('js-konami');
	            n = 0;
	            return false;
	        }
	    }
	    else {
	        n = 0;	
	    }
	});

    var konami = {
        createCanvas: function() {
            this.canvas = document.createElement('canvas');
            this.canvas.width = 580;
            this.canvas.height = 338;
            this.canvas.ctx = this.canvas.getContext('2d');

            var id = this.canvas.ctx.createImageData(1,1); // only do this once per page
            var d  = id.data;                        // only do this once per page

            var x = 0, y = 0, r = 255, g = 255, b = 255, a = 255;

            d[0]   = r;
            d[1]   = g;
            d[2]   = b;
            d[3]   = a;

            document.getElementById('canvas-wrapper').appendChild(this.canvas);

            this.canvas.ctx.putImageData( id, x, y );

            this.canvas.ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
            this.canvas.ctx.fillRect( x, y, 2, 2 );
        }
    };

    konami.createCanvas();*/
});
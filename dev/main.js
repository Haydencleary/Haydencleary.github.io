document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById('js-input');
	const history = document.getElementById('js-history');

    const commands = [
        {
            'name': 'clear',
            'desc': 'Clear previous commands.'
        },
        {
            'name': 'contact',
            'desc': 'Send me an email if you want to chat.'
        },
        {
            'name': 'hello',
            'desc': 'A few words about me.'
        },
        {
            'name': 'help',
            'desc': 'Show these commands.'
        },
        {
            'name': 'skills',
            'desc': 'See what I can do.'
        },
        {
            'name': 'social',
            'desc': 'Where I am on the web.'
        }
    ];

    const skills = [
        'HTML5',
        'CSS3',
        'SASS/Compass',
        'Javascript/Jquery (currently interested in ES6)',
        'Experience with AngularJS',
        'Symfony/Twig templating',
        'Familiar with version and dependancy control',
        'and I do some sound design too'
    ];

    const networks = [
        {
            'name': 'Instagram',
            'url': 'https://instagram.com/h4ydouken'
        },
        {
            'name': 'Twitter',
            'url': 'https://twitter.com/HaydenCleary'
        },
        {
            'name': 'Soundcloud',
            'url': 'https://soundcloud.com/haydencleary'
        },
        {
            'name': 'Linkedin',
            'url': 'https://www.linkedin.com/in/haydencleary'
        }
    ];

	const terminal = {
        makeList: function(cmd) {
            let listClass = '';
            let listArray = [];
            let listItem = '';

            switch(cmd) {
                case 'help':
                    listClass = 'list h-list';
                    listArray = commands;
                    break;
                case 'skills':
                    listArray = skills;
                    break;
                case 'social':
                    listClass = 'list h-list';
                    listArray = networks;
                    break;
            }

            let template = '<ul class="'+listClass+'">';

            function _listTemplate(element) {
                switch(cmd) {
                    case 'help':
                        return '<li><span class="orange">'+element.name+'</span> <i>-</i> '+element.desc+'</li>';
                        break;
                    case 'skills':
                        return '<li>'+element+'</li>';
                        break;
                    case 'social':
                        return '<li><span>'+element.name+'</span> <i>-</i> <a href="'+element.url+'" target="_blank">'+element.url+'</a></li>';
                        break;
                }
            }

            for (let index in listArray) {
                template += _listTemplate(listArray[index]);
            }

            template += '</ul>';

            return template;
        },
		update: function(msg) {
            let oldCmd = document.createElement('p');
            oldCmd.className = 'old-cmd';
            oldCmd.innerText = input.innerText.trim();

            history.appendChild(oldCmd);

            let msgText = document.createElement('p');
            msgText.innerHTML = msg;

            history.appendChild(msgText);

            if (input.hasChildNodes()) {
                input.innerHTML = '';
            }

            window.scrollTo(0, document.body.scrollHeight);
		},
		check: function(cmd) {
            cmd = cmd.trim();

			switch(cmd){
				case 'help':
                    this.update(this.makeList(cmd));
					break;
				case 'clear':
                    if (history.hasChildNodes()) {
                        history.removeChild(history.firstChild);
                    }
                    if (input.hasChildNodes()) {
                        input.removeChild(input.firstChild);
                    }
					break;
				case 'contact':
					this.update('contact[at]haydencleary[dot]fr');
					break;
				case 'hello':
					this.update(
                        "My name is Hayden Cleary, front end developer at <a href='https://pro.iconosquare.com' target='_blank'>Iconosquare</a> in Limoges, France.<br>" +
                        "I'm an amateur game designer/developer, aspiring musician and professional wizard."
                    );
					break;
				case 'skills':
					this.update(this.makeList(cmd));
					break;
				case 'social':
					this.update(this.makeList(cmd));
					break;
				default:
					this.update('Unrecognized command. Type "<span class="orange">help</span>" for documentation.');
					break;
			}
		}
	};

	// Always focus on input, no matter where user clicks
    document.addEventListener('click', () => input.focus());

    input.focus();

    input.addEventListener('keyup', function(e){
        var code = e.keyCode || e.which;
        // Enter key
        if (code == 13) {
            terminal.check(input.innerText);
        }
    });
});

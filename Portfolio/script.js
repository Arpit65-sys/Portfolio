
        // JavaScript to handle smooth scrolling
        document.querySelectorAll('#navbar a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                const offset = targetElement.getBoundingClientRect().top;

                window.scrollBy({
                    top: offset,
                    behavior: 'smooth',
                });
            });
        });
        
        
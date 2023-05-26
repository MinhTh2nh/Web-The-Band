const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')

            
            function showBuyTicket(){
                modal.classList.add('open');
            }

            function hideBuyTicket(){
                modal.classList.remove('open')
            }
        
            for(const buyBtn of buyBtns){
                buyBtn.addEventListener('click', showBuyTicket)
            }
            //Nghe hanh vi click vao buttion Close
            modalClose.addEventListener('click',hideBuyTicket)
            modal.addEventListener('click',hideBuyTicket);

            modalContainer.addEventListener('click', function(){
                event.stopPropagation();
            })

        // Moblie-Menu
        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobileMenu');
        var headerClientHeight = header.clientHeight;
        // Dong/mo menuMobile
        mobileMenu.onclick = function(){
            var isClose = header.clientHeight === headerClientHeight;   
            if(isClose) {
                header.style.height = 'auto' ;
            }
            else {
                header.style.height = null ;
            }
        }
        var menuItems = document.querySelectorAll('ul li a[href*="#"]')
        for(var i = 0; i < menuItems.length;i++){
            var menuItem = menuItems[i];
            menuItem.onclick = function(){
                header.style.height = null;
            }

        }
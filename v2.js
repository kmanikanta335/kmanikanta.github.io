const modalviews = document.querySelectorAll('.serv-modal'),
      modalbts = document.querySelectorAll('.seemore'),
      modalcolse = document.querySelectorAll('.modalx');

      let modal = function(modalClick){
        modalviews[modalClick].classList.add('active-modal')
      }
      modalbts.forEach((mb,i)=> {
        mb.addEventListener('click', () =>{
            modal(i)
            modalviews.forEach((mv) =>{
             mv.classList.remove('serv-modal')
            })
        })
       
      });
      modalcolse.forEach((mc)=>{
        mc.addEventListener('click',() =>{
          modalviews.forEach((mv) =>{
            mv.classList.remove('active-modal')
            mv.classList.add('serv-modal')
           })
        })
      })

      let portmixer = mixitup('.work-items-cont', {
        selectors: {
            target: '.work-item'
        },
        animation: {
            duration: 300
        }
    });

    const linkwork = document.querySelectorAll('.work-name')

    function activework(){
      linkwork.forEach(l=> l.classList.remove('active-work'))
      this.classList.add('active-work')
    }

    linkwork.forEach(l=> l.addEventListener('click', activework))

    const nav = document.querySelectorAll('.nav_link')

    function navwork(){
      nav.forEach(u=> u.classList.remove('active_link'))
      this.classList.add('active_link')
    }
    nav.forEach(u=> u.addEventListener('click',navwork))

    // let sections = document.querySelectorAll('section[id]')

    // function scrollActive(){
    //   const scrollY = window.pageYOffset

    //   sections.forEach(current =>{
    //     const secctionHeight = current.offsetHeight,
    //     sectionTop = current.offseTop - 58,
    //     sectionId = current.getAttribute('id')

    //     if(scrollY > sectionTop && scrollY<= sectionTop+secctionHeight){
    //       document.querySelectorAll('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')

    //     }else {
    //       document.querySelectorAll('.nav_menu a[href*='+ sectionId +']').classList.remove('active_link')
    //     }
    //   })
    // }
    // window.addEventListener('scroll',scrollActive)

    const themeButton = document.getElementById('theme')
    const lightTheme = 'light-theme'
    const iconTheme = 'fa-sun'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = ()=> document.body.classList.contains(lightTheme)? 'dark':'light'
    const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon':'fa-regular fa-sun'

    if(selectedTheme){
      document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](lightTheme)
      themeButton.classList[selectedIcon === 'fa-regular fa-moon'? 'add':'remove'](iconTheme)
    }

    themeButton.addEventListener('click',()=>{
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)

      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon',getCurrentIcon())
    })

    
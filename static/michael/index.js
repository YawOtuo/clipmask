window.onload = (event) => {
    console.log('window loaded')


    // animation("homepic")
    wow = new WOW(
        {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
          }
        }
      );
      wow.init();


}

const animation = (class_) => {
    $(`.${class_}`).css('display', 'none')
    $(`.${class_}`).slideDown(1000)
    console.log('here')
}

const onmouseenter_animate = (class1,class2) => {
    $(`.${class2}`).css('display', 'none')

    // $(`.${enter}`).css('display', 'none')
    $(`.${class1}`).mouseover(
        
        () => $(`.${animate}`).slideDown(1000)
    )

   
}

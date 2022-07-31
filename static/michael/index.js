window.onload = (event) => {
    console.log('window loaded')


    // animation("homepic")
    // var wow = new WOW(
    //     {
    //       boxClass:     'wow',      // animated element css class (default is wow)
    //       animateClass: 'animated', // animation css class (default is animated)
    //       offset:       0,          // distance to the element when triggering the animation (default is 0)
    //       mobile:       true,       // trigger animations on mobile devices (default is true)
    //       live:         true,       // act on asynchronously loaded content (default is true)
    //       callback:     function(box) {
    //         // the callback is fired every time an animation is started
    //         // the argument that is passed in is the DOM node being animated
    //       },
    //       scrollContainer: null // optional scroll container selector, otherwise use window
    //     }
    //   );
    //   wow.init();


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

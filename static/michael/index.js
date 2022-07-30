window.onload = (event) => {
    console.log('window loaded')


    // animation("homepic")
    // onmouseenter_animate('clipmask', 'offer_container')
    
}

const animation = (class_) => {
    $(`.${class_}`).css('display', 'none')
    $(`.${class_}`).slideDown(1000)
    console.log('here')
}

const onmouseenter_animate = (enter,animate) => {
    $(`.${animate}`).css('display', 'none')

    // $(`.${enter}`).css('display', 'none')
    $(`.${enter}`).mouseover(
        
        () => $(`.${animate}`).slideDown(1000)
    )

   
}

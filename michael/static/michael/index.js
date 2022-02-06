window.onload = (event) => {
    console.log('window loaded')

    getWavePosition();
    getClipMaskBlobPosition()
    shiftClipBlob()
}

    clip_blob= document.clip_blob

function getWavePosition(){
    wave = document.querySelector('.wave')
    console.log('wave', wave)
    window.wave_rect = wave.getBoundingClientRect()
    console.log(wave_rect)
}


function getClipMaskBlobPosition(){
    clip_blob = document.querySelector('.clipmask_blob')
    window.clip_blob_rect = clip_blob.getBoundingClientRect()
    console.log(clip_blob_rect)
}

function shiftClipBlob(){
    let top = window.wave_rect.y + window.wave_rect.height / 2
    console.log('newtio', top)
    clip_blob.style.y = top.toString() + 'px'
    clip_blob.style.color = 'red'
    console.log(window.wave_rect.y.toString())
    console.log('clipbob style',clip_blob.style.y)
}
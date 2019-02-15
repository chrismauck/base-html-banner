const ua = navigator.userAgent,
    thisClick = (ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) ? 'touchend' : 'click';

const banner = {

    el: {},

    init: function init() {
        banner.setupDom();
        (Enabler.isInitialized()) ? banner.checkVisibility() : Enabler.addEventListener( studio.events.StudioEvent.INIT, banner.checkVisibility);
    },

    setupDom: function setupDom() {
        banner.el.default  =  document.getElementById('container');
        banner.el.cta =  document.getElementById('ctaExit');
    },

    checkVisibility: function checkVisibility() {
        banner.setupListeners();
        (Enabler.isVisible()) ? animation.init() : Enabler.addEventListener( studio.events.StudioEvent.VISIBLE, animation.init);
    },

    setupListeners: function setupListeners() {
        var el = banner.el;
        el.default.addEventListener(thisClick, defaultClickHandler, false);
        el.cta.addEventListener(thisClick, ctaClickHandler, false);
    }    
};

const animation = {

    init: function init() {
        animation.scene1();
    },

    scene1: function scene1() {
        // Insert animations when complete call -
        // onComplete: animation.cta
    },

    cta: function cta() {
        TweenMax.to(banner.el.cta, 0, { css: { display: 'block' }, delay: 0});
        TweenMax.to(banner.el.cta, 2.5, { css: { autoAlpha: 1 }, delay: 0});
    }
};

function defaultClickHandler(event){
    event.stopPropagation();
    Enabler.exit('Global Frame Exit');
}

function ctaClickHandler(event){
    event.stopPropagation();
    Enabler.exit('CTA Banner Exit');
}

document.onreadystatechange = function () {

    if (document.readyState === 'complete') banner.init();

}

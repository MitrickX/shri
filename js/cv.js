$(function() {

makeCollapsibleCV();
makeFloatingToolbar();

function makeCollapsibleCV() {
    $('.collapsible .collapse-handler').click(function() {
        var self = $(this),
            li = self.parents('li:first'),
            content = li.find('.collapse-content');

        if (self.hasClass('darr')) {
            self.removeClass('darr').addClass('rarr');
            content.hide();
        } else {
            self.removeClass('rarr').addClass('darr');
            content.show();
        }
    });
}

function makeFloatingToolbar() {
    var container = $('.body'),
        top_offset = container.position()['top'];
    function handler(e) {
        var toolbar = $('.toolbar');
        if (!toolbar.length) {
            return;
        }
        if (typeof handler.top === 'undefined') {
            handler.top = toolbar.position()['top'];
        }
        if ($(document).scrollTop() - top_offset > handler.top) {
            toolbar.addClass('fixed');
        } else {
            toolbar.removeClass('fixed');
        }
    };
    // check right now (maybe document is scrolled)
    handler();
    // bind handler
    $(document).bind('scroll', handler);
}

});

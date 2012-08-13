$(function() {

makeCollapsibleCV();

initToolbar();
makeFloatingToolbar();

initTabsWidget();

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

function initToolbar() {
    $('.toolbar-print').click(function() {
        window.print();
        return false;
    });
}

function makeFloatingToolbar() {
    function handler(e) {
        var toolbar = $('.toolbar');
        if (!toolbar.length) {
            return;
        }
        if (typeof handler.top === 'undefined') {
            handler.top = toolbar.position()['top'];
        }
        if ($(document).scrollTop() > handler.top) {
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

function initTabsWidget() {
    $('.tabs a').click(function() {
        var li = $(this).parents('li:first'),
            id_suffix = li.attr('id').replace('tab-', '');
        if (id_suffix) {
            var tab = $('#tab-content-'+id_suffix);
            if (tab.hasClass('tab-content')) {
                $('.tab-content').removeClass('selected');
                tab.addClass('selected');
                $('.tabs .selected').removeClass('selected');
                li.addClass('selected');
            }
        }
        return false;
    });
}

});

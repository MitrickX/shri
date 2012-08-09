$(function() {

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

});

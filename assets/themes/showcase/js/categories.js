jQuery(function() {
    jQuery.fn.sortList = function() {
    var mylist = jQuery(this);
    var listitems = jQuery('li', mylist).get();
    listitems.sort(function(a, b) {
        var compA = jQuery(a).text().toUpperCase();
        var compB = jQuery(b).text().toUpperCase();
        return (compA < compB) ? -1 : 1;
    });
    jQuery.each(listitems, function(i, itm) {
        mylist.append(itm);
    });
   }

    jQuery("ul.option-set").sortList();

});
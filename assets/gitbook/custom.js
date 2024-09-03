// Enable footnote link support for pages with width < 1240.
function bind_footnote_links() {
    if ($(document).width() > 1240) {
        return;
    }
    let footnotes = $("div.footnotes").find("ol > li > p > a.reversefootnote");
    for (let i = 0; i < footnotes.length; i++) {
        let footnote = footnotes[i];
        footnote.addEventListener('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            if (target.length) {
                $('div.body-inner').animate({
                    scrollTop: target.get(0).offsetTop,
                });
            }
        });
    }
}
if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", bind_footnote_links);
} else {
    // `DOMContentLoaded` has already fired
    bind_footnote_links();
}



// Checklists
window.addEventListener('page.change', function (e) {
    $(".task-list-item-checkbox").removeAttr('disabled')

    $(".task-list-item").on("click", function (e) {
        e.stopPropagation()
        var $checkbox = $(this).children().first()
          , $parentList = $(this).parents(".task-list-item")
          , $checkboxTextSpan = $('<span>').addClass('task-list-item-text').text($(this).text())

        $(this).contents().filter(function() {
            return this.nodeType == Node.TEXT_NODE
        }).each(function(){
            this.textContent = this.textContent.replace($checkboxTextSpan)
        })

        $checkbox.prop("checked", !$checkbox.prop("checked"))

        if ($parentList.length) {
            var listItemsCompleted = 0
              , $listItems = $parentList.find(".task-list-item-checkbox").slice(1)

            $listItems.each(function (){
                ($(this).prop("checked")) ? listItemsCompleted++ : null
            })

            var isListComplete = (listItemsCompleted === $listItems.length)
            $parentList.children(".task-list-item-checkbox").first().prop("checked", isListComplete)
        }
    })
})

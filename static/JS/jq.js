$("button").click(
    function fn() {
        if ($("button").text() === "hide") {
            $("li").addClass("hidden");
            $("button").text("unhide");
        } else {
            $("li").removeClass("hidden");
            $("button").text("hide");
        }
    }
)

$(document).on(
    "keypress",
    function fn(e){
        $(".userInput").text(e.key);
    }
)

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

$(".userInput").on(
    "pointerenter",
    function fn(){
        $(".userInput").css("backgroundColor", "red");
        $(".userInput").css("color", "yellow");
    }
)

$(".userInput").on(
    "pointerleave",
    function fn(){
        $(".userInput").css("backgroundColor", "yellow");
        $(".userInput").css("color", "red");
    }
)
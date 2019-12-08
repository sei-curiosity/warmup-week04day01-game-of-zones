let clickCount = 0;
$(".zone").on("click mouseover mouseleave", function({type, target}){
    if(type === "mouseover"){
        $(target).addClass("green");
    }
    else if(type === "mouseleave"){
        $(target).removeClass("green");
    }
    else if(type === "click"){
        $(target).addClass("green").off();
        clickCount++;
    }

    if(clickCount === 4){
        console.log("green")
    }
})
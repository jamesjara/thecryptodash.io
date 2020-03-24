var svgPath = "../inlineExamples/html/svg/";

isc.Img.create({
    ID: "circle",
    left:20, top:75,
    width:100, height:100,
    overflow: "hidden",
    imageType: "normal",
    src: svgPath + "circle.svg"
})

isc.Img.create({
    ID: "square",
    left:145, top: 75,
    width:100, height:100,
    overflow: "hidden",
    imageType: "normal",
    src: svgPath + "square.svg"
})

isc.Img.create({
    ID: "bouncyText",
    left:270, top: 80,
    width:150, height:90,
    overflow: "hidden",
    border:"1px solid gray",
    imageType: "normal",
    src: svgPath + "bouncyText.svg"
})

var images = [circle, square, bouncyText];

isc.DynamicForm.create({
    ID: "form",
    left: 22, top: 15, width: 400, 
    items: [{
        wrapTitle: false,
        title: "Select Image Color Scheme",
        type: "select", width: 155, align: "right",
        defaultValue: 0, shouldSaveValue: false,
        valueMap: {0 : "Green", 1 : "Red"},
        changed : function (form, item, value) {
            for (var i = 0; i < images.length; i++) {
                var src = svgPath + images[i].ID;
                if (value > 0) src += "-" + "red";
                images[i].setSrc(src + ".svg");
            }
        }
    }]
});

isc.ImgButton.create({
    left: 75, top: 225,
    height:200, width: 300,
    canFocus: false,
    src: svgPath + "ellipse.svg",

    click : function () {
        isc.ask("Are you sure you want to click on this button?");
    }
});





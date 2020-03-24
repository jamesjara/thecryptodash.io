isc.defineClass("CustomImgButton", "ImgButton").addProperties(
    {width:16,height:14,layoutAlign:"center",showDown:false,showRollOver:true,
     click:function () {
         isc.say("Control " + this.src + " clicked");
         return false;
     }
    }
);

var arrowDown = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/arrow_down.png"}),
     arrowLeft = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/arrow_left.png"}),
     arrowRight = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/arrow_right.png"}),
     arrowUp = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/arrow_up.png"}),
     calculator = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/calculator.png"}),
     cart = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/cart.png"}),
     cascade = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/cascade.png"}),
     clipboard = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/clipboard.png"}),
     clock = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/clock.png"}),
     close = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/close.png"}),
     comment = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/comment.png"}),
     document = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/document.png"}),
     doubleArrowDown = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/double_arrow_down.png"}),
     doubleArrowLeft = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/double_arrow_left.png"}),
     doubleArrowRight = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/double_arrow_right.png"}),
     doubleArrowUp = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/double_arrow_up.png"}),
     favourite = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/favourite.png"}),
     find = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/find.png"}),
     help = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/help.png"}),
     home = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/home.png"}),
     mail = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/mail.png"}),
     maximize = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/maximize.png"}),
     minimize = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/minimize.png"}),
     minus = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/minus.png"}),
     person = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/person.png"}),
     pinDown = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/pin_down.png"}),
     pinLeft = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/pin_left.png"}),
     plus = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/plus.png"}),
     print = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/print.png"}),
     refresh = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/refresh.png"}),
     refreshThin = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/refresh_thin.png"}),
     save = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/save.png"}),
     settings = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/settings.png"}),
     transfer = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/transfer.png"}),
     trash = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/trash.png"}),
     zoom = isc.CustomImgButton.create({src:"[SKIN]/headerIcons/zoom.png"});

var TileLayout = isc.TileLayout.create({
    tileWidth:200,
    tileHeight:150,
    width:"100%",height:"100%",
    tilesPerLine:3,
    tiles: [
        isc.Window.create({
            width: 200, height: 150, title: "Title",
            headerControls : ["headerLabel", arrowDown, arrowLeft, arrowRight, arrowUp, calculator, cart]
        }),
        isc.Window.create({
            width: 200, height: 150, title: "Title",
            headerControls : ["headerLabel", cascade, clipboard, clock, close, comment, document]
        }),
        isc.Window.create({
            width: 200, height: 150, title: "Title",
            headerControls : ["headerLabel", doubleArrowDown, doubleArrowLeft,  
                                  doubleArrowRight, doubleArrowUp, favourite, find]
        }),
        isc.Window.create({
            width: 200, height: 150, title: "Title",
            headerControls : ["headerLabel", home, mail, minus, plus, maximize, minimize]
        }),
        isc.Window.create({
            width: 200, height: 150, title: "Title",
            headerControls : ["headerLabel", person, pinDown, pinLeft, print, refresh, help]
        }),
        isc.Window.create({
            width: 200, height: 150, title: "Title",
            headerControls : ["headerLabel", refreshThin, save, settings, transfer, trash, zoom]
        })
    ]
});





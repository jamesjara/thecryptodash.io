isc.TabSet.create({
    ID: "topTabSet",
    tabBarPosition: "top",
    tabBarAlign:"left",
    width: 400,
    height: 200,
    tabs: [
        {title: "Status", 
         pane: isc.Canvas.create({autoDraw: false, ID:"statusPane"})
        }
    ],
    tabBarControls:[
        "tabScroller", "tabPicker",
        isc.DynamicForm.create({
            autoDraw: false,
            ID:"form",
            padding:0,
            margin:0,
            cellPadding:1,
            numCols:1,
            fields:[
                {name:"select", editorType:"SelectItem", 
                 valueMap:["Development","Staging","Production"],
                 showTitle:false, defaultValue:"Development",
                 changed:function (form, item, value) {
                     statusPane.setContents(value + ": <span style='color:green;font-weight:bold'>Normal</span><br>");
                 }
                }
            ]
        })
    ]
});
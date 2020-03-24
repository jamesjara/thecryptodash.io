isc.defineClass("DragHandlesGrid", "ListGrid").addProperties({
    canReorderRecords: true,
    canDragRecordsOut: true,
    canAcceptDroppedRecords: true,
    showInitialDragHandles: true,    
    dragDataAction: "move",
    
    showDragHandles : function () {
        this.setFieldProperties("countryCode", {align: "center"});
        this.Super("showDragHandles");
    },
    hideDragHandles : function () {
        this.setFieldProperties("countryCode", {align: null});
        this.Super("hideDragHandles");
    }
});
    
isc.HStack.create({membersMargin:10, height:160, left:20, members:[
    isc.DragHandlesGrid.create({
        ID: "countryList1",
        width:325, height:224, alternateRecordStyles:true,
        data: countryData,
        fields:[
            {name:"countryCode", title:"Flag", width:50, type:"image", align:"center",
             imageURLPrefix:"flags/16/", imageURLSuffix:".png"},
            {name:"countryName", title:"Country"},
            {name:"capital", title:"Capital"}
        ]
    }),
    isc.VStack.create({width:32, height:74, layoutAlign:"center", membersMargin:10, members:[
        isc.Img.create({src:"icons/32/arrow_right.png", width:32, height:32,
            click:"countryList2.transferSelectedData(countryList1)"
        }),
        isc.Img.create({src:"icons/32/arrow_left.png", width:32, height:32,
            click:"countryList1.transferSelectedData(countryList2)"
        })
    ]}),
    isc.DragHandlesGrid.create({
        ID: "countryList2",
        width:225, height:224, alternateRecordStyles:true, showAllRecords:true,
        fields:[
            {name:"countryCode", title:"Flag", width:40, type:"image", align:"center",
             imageURLPrefix:"flags/16/", imageURLSuffix:".png"},
            {name:"countryName", title:"Country"}
        ],
        emptyMessage: "drop rows here"
    })
]})

isc.Button.create({
    top: 250, left: 20, autoFit: true,
    title: "Hide Drag Handles",
    click : function() {
        var hidden = this.hidden;
        if (hidden) {
            countryList1.showDragHandles();
            countryList2.showDragHandles();
            this.setTitle("Hide Drag Handles");
        } else {
            countryList1.hideDragHandles();
            countryList2.hideDragHandles();
            this.setTitle("Show Drag Handles");
        }
        this.hidden = !hidden;
    }
});

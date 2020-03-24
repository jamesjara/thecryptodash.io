
isc.ListGrid.create({
    ID: "companyList",
    width:600, height:525,
    alternateRecordStyles:true,
    autoFetchData:true,
    dataSource:orderItemLocalDS,
    canEdit:true, editEvent:"click",
    showAllRecords:true,

    groupByField: ["category", "shipDate"],
    groupStartOpen:"all",
    canMultiGroup: true,

    sortField: "shipDate",
    sortDirection: "ascending",

    fields: [
        {name: "orderID", includeInRecordSummary: false}, 
        {name: "itemDescription"}, 
        {name: "category"}, 
        {name: "shipDate"},
        {name: "quantity"}, 
        {name: "unitPrice"},
        {name: "total", title: "Total", align: "right",
         type:"summary", recordSummaryFunction: "multiplier",
         formatCellValue:function (value) {
             if (isc.isA.Number(value)) {
                return isc.NumberUtil.format(value, "$#,##0.00");
             }
             return value;
         }
        }
    ]
});

isc.Button.create({
    top: 550, width: 150,
    title: "Configure Grouping",
    click: function() { companyList.configureGrouping(); }
});


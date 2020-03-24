isc.DynamicForm.create({
    width:500,
    fields: [
        {   
            name: "manager", 
            title: "Choose Manager", 
            editorType: "SelectItem", 
            wrapTitle: false,
            optionDataSource: "employees", 
            valueField: "Name", 
            dataSetType: "tree",
            pickListWidth: 350, 
            pickListProperties: { autoFitFieldWidths: true },
            pickListFields: [
                { name: "Name" },
                { name: "Email" }
            ],
            autoOpenTree: "all"
        }
    ]
});
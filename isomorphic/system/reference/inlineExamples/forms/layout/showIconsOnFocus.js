var valueMap = {
    "US" : "United States",
    "CH" : "China",
    "JA" : "Japan",
    "IN" : "India",
    "GM" : "Germany",
    "FR" : "France",
    "IT" : "Italy",
    "RS" : "Russia",
    "BR" : "Brazil",
    "CA" : "Canada",
    "MX" : "Mexico",
    "SP" : "Spain"
}

isc.DynamicForm.create({
    ID:"showIconsOnFocusForm",
    isGroup:true, groupTitle:"Show Icons On Focus",
    width:350, padding:5, canTabToIcons:false,
   
    items:[
   
        {type:"BlurbItem", value:"Picker Icons"},
       
        {name:"comboBoxItem", editorType:"ComboBoxItem",
            title:"Combo Box", valueMap:valueMap,
            showPickerIconOnFocus:true
        },
        {name:"dateItem", editorType:"DateItem", useTextField:true,
            title:"Date Item",
            showPickerIconOnFocus:true},
        {name: "colorItem", editorType:"ColorItem",
            title:"Color Item",
            showPickerIconOnFocus:true},
           
        {type:"RowSpacerItem"},
        {type:"BlurbItem", value:"Custom Icons"},

        // Show custom icons on focus
        {name:"customIcon", editorType:"SelectItem",
            title:"External Icon",
            showIconsOnFocus:true,
            value:2,
            valueMap:{
                1:"Severity 1",
                2:"Severity 2",
                3:"Severity 3"
            },
            helpText: "<br><b>Severity 1</b> - Critical problem<br>System is unavailable in production or " +
                       "is corrupting data, and the error severely impacts the user's operations." +
                       "<br><br><b>Severity 2</b> - Major problem<br>An important function of the system " +
                       "is not available in production, and the user's operations are restricted." +
                       "<br><br><b>Severity 3</b> - Minor problem<br>Inability to use a function of the " +
                       "system occurs, but it does not seriously affect the user's operations.",
             icons: [{
                src: "other/help.png",
                click: "isc.say(item.helpText)"
             }]
        },
        {name:"inclineIcons", editorType:"TextItem",
            title:"Inline Icons",
            suppressBrowserClearIcon:true,
            showIconsOnFocus:true,
            icons: [{
                name: "view",
                src: "[SKINIMG]actions/view.png",
                hspace: 5,
                inline: true,
                baseStyle: "roundedTextItemIcon",
                showRTL: true
            }, {
                name: "clear",
                src: "[SKINIMG]actions/close.png",
                width: 10,
                height: 10,
                inline: true,
                prompt: "Clear this field",

                click : function (form, item, icon) {
                    item.clearValue();
                    item.focusInItem();
                }
            }],
           
            iconWidth: 16,
            iconHeight: 16
        }       
    ]
});
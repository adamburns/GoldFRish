document.getElementById("FileLeafRef_8553196d-ec8d-4564-9861-3dbe931050c8_$onetidIOFile").value = localStorage.getItem("FR Name");

var list = document.getElementById("ReportType_ad17dae0-b5b6-4308-a494-ce06b25a8275_$DropDownChoice");
var opts = list.options.length;
for (var i = 0; i < opts; i++) {
   if (list.opts[i].value == localStorage.getItem("FR ProjectType")) {
      list.opts[i].selected = true;
      break;
   }
}


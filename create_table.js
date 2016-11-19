/*  带input的table  */
function createTable(box,linehead,columnhead) {
	var table = $('<table>');
	for (var i = 0; i < size.length; i++) {
		var tr = $('<tr>');
		if (i == 0) {
			for (var j = 0; j <= color.length; j++) {
				var th;
				if (j == 0) {
					th = "<th></th>";
				} else {
					th = "<th>" + color[j - 1] + "</th>";
				}
				tr.append(th);
			}
		}else{
			for(var j=0;j<=color.length;j++){
				if(j==0){
					var th = "<th>"+size[i]+"</th>";
					tr.append(th);
				}else{
					var td="<td><input type='text'></td>"
					tr.append(td);
				}
			}
		}
		table.append(tr);
	}
	box.append(table);
}

/*  行头表格  */
function lineheadTable(box,linehead,value){
	var table = $("<table>");
	for(var i=0;i<=value.length;i++){
		var tr = $("<tr>")
		if(i==0){
			for(var j=0;j<linehead.length;j++){
				var th = "<th>"+linehead[j]+"</td>";
				tr.append(th);
			}
		}else{
			for(var item in value[i-1]){
				var td = "<td>"+value[i-1][item]+"</td>";
				tr.append(td);
			}
		}
		table.append(tr);
	}
	box.append(table);
}

/*  列头表格  */
function columnheadTable(box,columnhead,value){
	var table = $("<table>");
	for( i=0;i<columnhead.length;i++){
		var tr = $("<tr>");
		var th = $("<th>");
		th.html(columnhead[i]);
		tr.append(th);
		for(var item in value[i]){
			var td = "<td>"+value[i][item]+"</td>";
			tr.append(td);
		}
		table.append(tr);
	}
	box.append(table);
}

/*  行列表格  */
function linecolumnTable(box,linehead,columnhead,value){
	var table = $("<table>");
	for(var i=0;i<=columnhead.length;i++){
		var tr = $("<tr>");
		if(i==0){
			for(var j=0;j<=linehead.length;j++){
				if(j==0){
					tr.append("<th></th>");
				}else{
					tr.append("<th>"+linehead[j-1]+"</th>");
				}
			}
		}else{
			tr.append("<th>"+columnhead[i-1]+"</tr>");
			for(var item in value[i-1]){
				tr.append("<td>"+value[i-1][item]+"</td>");
			}
		}
		table.append(tr);
	}
	box.append(table);
}

$(document).ready(function() {
	var color = ['红', '橙', '黄'];
	var size = ['S', 'M', 'L', 'XL'];
	var box = $("#box")
	createTable(box,color,size) 
})

function createTable(box,color,size) {
	var table = $('<table>');
	alert(size.length);
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
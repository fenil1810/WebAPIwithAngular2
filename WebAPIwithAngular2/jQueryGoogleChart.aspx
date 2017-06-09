<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="jQueryGoogleChart.aspx.cs" Inherits="WebAPIwithAngular2.jQueryGoogleChart" %>  
  
<!DOCTYPE html>  
<html xmlns="http://www.w3.org/1999/xhtml">  
<head runat="server">  
    <title></title>  
    <script src="http://code.jquery.com/jquery-1.8.2.js"></script>  
    <script src="http://www.google.com/jsapi" type="text/javascript"></script>  
    <script type="text/javascript">           
        google.load('visualization', '1', { packages: ['corechart'] });  
    </script>  
    <script type="text/javascript">  
        $(function () {  
            $.ajax({  
                type: 'GET',  
                dataType: 'json',  
                contentType: 'application/json',  
                url: 'api/GetChartData',
                
                success:  
                function (response) {
                    console.log("success");
                    drawsectionchart(response);  
                },  
  
                error: function (error) {
                    console.log(error);
                    alert("Error loading data!");  
                }  
            });  
        })  
        function drawsectionchart(dataValues) {  
            var data = new google.visualization.DataTable();  
            data.addColumn('string', 'Column Name');  
            data.addColumn('number', 'Column Value');  
            for (var i = 0; i < dataValues.length; i++) {  
                data.addRow([dataValues[i].Section, dataValues[i].Total]);  
            }  
            new google.visualization.PieChart(document.getElementById('myChartDiv')).  
            draw(data, { title: "Sections" });  
        }  
        $(function () {  
            $.ajax({  
                type: 'GET',  
                dataType: 'json',  
                contentType: 'application/json',  
                url: 'api/StandardData',
                
                success:  
                function (response) {
                    console.log("success");
                    drawstandardchart(response);  
                },  
  
                error: function (error) {
                    console.log(error);
                    alert("Error loading data!");  
                }  
            });  
        })  
        function drawstandardchart(dataValues) {  
            var data2 = new google.visualization.DataTable();  
            data2.addColumn('string', 'Standard');  
            data2.addColumn('number', 'Number of Students');  
            for (var i = 0; i < dataValues.length; i++) {  
                data2.addRow([dataValues[i].Standard, dataValues[i].Total]);  
            }  
            new google.visualization.PieChart(document.getElementById('myChartDiv2')).  
            draw(data2, { title: "Standards" });  
        }  
        $(function () {
            $.ajax({
                type: 'GET',
                datatype: 'json',
                contentType: 'application/json',
                url: 'api/GetChartData',
                success:
                    function (response) {
                        console.log("success");
                        drawSectionBarChart(response);
                    },
                error:
                    function (error) {
                        console.log(error);
                        alert("Error Loading Data");
                    }
            });
        })
        function drawSectionBarChart(dataValues) {
            var data3 = new google.visualization.DataTable();
            data3.addColumn('string', 'Section');
            data3.addColumn('number', 'Number of students');
            for (var i = 0; i < dataValues.length; i++) {
                data3.addRow([dataValues[i].Section, dataValues[i].Total]);
            }
            new google.visualization.ColumnChart(document.getElementById('myChartDiv4')).
            draw(data3, { title: "Section" });
        } $(function () {
            $.ajax({  
                type: 'GET',  
                dataType: 'json',  
                contentType: 'application/json',  
                url: 'api/StandardData',
                
                success:  
                function (response) {
                    console.log("success");
                    drawbarchart(response);  
                },  
  
                error: function (error) {
                    console.log(error);
                    alert("Error loading data!");  
                }  
            });  
        })  
        function drawbarchart(dataValues) {  
            var data2 = new google.visualization.DataTable();  
            data2.addColumn('string', 'Standard');  
            data2.addColumn('number', 'Number of Students');  
            for (var i = 0; i < dataValues.length; i++) {  
                data2.addRow([dataValues[i].Standard, dataValues[i].Total]);  
            }  
            new google.visualization.ColumnChart(document.getElementById('myChartDiv3')).  
            draw(data2, { title: "Standards" });  
        }
        $(function () {
            $.ajax({  
                type: 'GET',  
                dataType: 'json',  
                contentType: 'application/json',  
                url: 'api/MarksData',
                
                success:  
                function (response) {
                    console.log("success");
                    drawmarkchart(response);  
                },  
  
                error:
                    function (error) {
                    console.log(error);
                    alert("Error loading data!");  
                }  
            });  
        })  
        function drawmarkchart(dataValues) {  
            var data2 = new google.visualization.DataTable();  
            data2.addColumn('string', 'Subject');  
            data2.addColumn('number', 'Marks');  
            for (var i = 0; i < dataValues.length; i++) {  
                data2.addRow([dataValues[i].SubjectName, dataValues[i].MarkofSubject]);  
            }  
            new google.visualization.ColumnChart(document.getElementById('myChartDiv5')).  
            draw(data2, { title: "Marks" });  
        }
    </script>  
    
</head>  
<body>  
    <table>
    <tr>
        <td><div id="myChartDiv" style="width: 700px; height: 450px;"></div></td>  
        <td><div id="myChartDiv2" style="width: 700px; height: 450px;"></div></td>  
    </tr>
      <tr>
        <td><div id="myChartDiv4" style="width: 600px; height: 450px;"></div></td>  
        <td><div id="myChartDiv3" style="width: 600px; height: 450px;"></div></td>  

    </tr>
    <tr>
        <td><div id="myChartDiv5" style="width: 600px; height: 450px;"></div></td>  

    </tr>
    </table>     
</body>  
</html>  
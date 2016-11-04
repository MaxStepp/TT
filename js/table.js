/**
 * Created by Max on 02.11.2016.
 */
var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "json/seriea.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

for (var i = 0; i < json["teams"].length; i++){
  console.log(json["teams"][i].name);
 for (var key in json["teams"][i]){
 //document.writeln(json["teams"][i][key]);
 }
}
$(document).ready(function(){
    $("body").append("<table id='main'></table>");
    $("#main").append("<tr><td></td><td class='name'>Команда</td><td class='matches'>M</td><td class='win'>B</td><td class='draw'>H</td><td class='lose'>П</td><td class='goals'>Заб</td><td class='conceded_goals'>Проп</td><td class='score'>О</td></tr>");
    for (var i = 0; i < json["teams"].length; i++){
        $("#main").append("<tr>");
        /*for (var key in json["teams"][i]){
            $("tr").last().append("<td>" + json['teams'][i][key] + "</td>")
        }*/
        $("tr").last().append("<td class='place'>" + json["teams"][i].place + "</td>");
        $("tr").last().append("<td class='name'>" + "<img src = 'img/flag.jpg' alt='italy"+ json["teams"][i].flag_country + "' title='" + json["teams"][i].flag_country + "'>" + "<a href=" + json["teams"][i].tag_url + "></a>" + "</td>");
        $("a").last().text(json["teams"][i].name);// ADD FLAG
        $("tr").last().append("<td class='matches'>" + json["teams"][i].matches + "</td>");
        $("tr").last().append("<td class='win'>" + json["teams"][i].win + "</td>");
        $("tr").last().append("<td class='draw'>" + json["teams"][i].draw + "</td>");
        $("tr").last().append("<td class='lose'>" + json["teams"][i].lose + "</td>");
        $("tr").last().append("<td class='goals'>" + json["teams"][i].goals + "</td>");
        $("tr").last().append("<td class='conceded_goals'>" + json["teams"][i].conceded_goals + "</td>");
        $("tr").last().append("<td class='score'>" + json["teams"][i].score + "</td>");
        if(json["teams"][i].color == "1"){
            $(".place").last().css("background-color", "#7fd498");
        }
        else if(json["teams"][i].color == "2"){
            $(".place").last().css("background-color", "#cceed6");
        }
        else if(json["teams"][i].color == "4"){
            $(".place").last().css("background-color", "#ff99b1");
        }
        else{
            $(".place").last().css("background-color", " ");
        }
        $("#main").append("</tr>");
    }

})
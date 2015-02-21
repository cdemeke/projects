var Ids = new Array();
var Names = new Array();
var Start_dates = new Array();
var End_dates = new Array();
var Start_times = new Array();
var End_times = new Array();
var Start_dates = new Array();
var Rages = new Array();
var Briefs = new Array();
var Websites = new Array();
var Facebooks = new Array();
var Maps = new Array();
var Images = new Array();
var Users = new Array();

var user;
var id;
var name;
var start_date;
var end_date;
var start_time;
var end_time;
var rage;
var brief;
var website;
var facebook;
var google;
var image;
var min_value = 1;
var max_value = 10;

id = 1;
name = 'nieuw';
start_date = '2014-06-01';
end_date = '2014-06-05';
start_time = '09:00';
end_time = '17:00';
rage = 4;
brief = 'nada';
website = 'website';
facebook = "facebook";
google = "google_map";
image = "image";
user = "Peter";

function get_events_user(){
    $.ajax({
        url: 'db/get_events_user.php',
        data: {'user':user,'min_value':min_value,'max_value':max_value},
        cache: false,
        async: false,
        dataType: 'json',
        type: 'POST',
        success: function(data){
            console.log(data);
            for(var i in data){
                Ids.push(data[i].Id);
                Names.push(data[i].Event_name);
                Start_dates.push(data[i].Start_date);
                End_dates.push(data[i].End_date);
                Start_times.push(data[i].Start_time);
                End_times.push(data[i].End_time);
                Rages.push(data[i].Rage_ranking);
                Briefs.push(data[i].Brief);
                Websites.push(data[i].Website);
                Facebooks.push(data[i].Facebook);
                Maps.push(data[i].Google_map);
                Images.push(data[i].Image);
                Users.push(data[i].User);
            }
        }
    });
}

function update(){
    $.ajax({
        url: 'db/update.php',
        data: {'user':user,'id':id,'name':name,'start_date':start_date,'end_date':end_date,'start_time':start_time,'end_time':end_time,'rage':rage,'brief':brief,'website':website,'facebook':facebook,'google':google,'image':image},
        cache: false,
        async: false,
        type: 'POST',
        success: function(data){}
    });
}

function insert(){
    $.ajax({
        url: 'db/insert.php',
        data: {'user':user,'id':id,'name':name,'start_date':start_date,'end_date':end_date,'start_time':start_time,'end_time':end_time,'rage':rage,'brief':brief,'website':website,'facebook':facebook,'google':google,'image':image},
        cache: false,
        async: false,
        type: 'POST',
        success: function(data){}
    });
}

function record_delete(){
    $.ajax({
        url: 'db/delete.php',
        data: {'id':id},
        cache: false,
        async: false,
        type: 'POST',
        success: function(data){}
    });
}
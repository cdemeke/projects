var min_value = 3;
        var max_value = 7;
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
        var Imgz = new Array();


        function display_table(){
            for(i=0;i<Ids.length;i++){                
                var date_temp = Start_dates[i].slice(0,10);

                //day of week funtion
                var date_event =Date.parse(date_temp).toString("ddd, MMMM dd");

                var date_res = date_temp.replace('-','/');

                temp_temp = +Start_times[i].substr(0, 2);
                temp_rest = temp_temp % 12 || 12;
                ampm = temp_temp < 12 ? "am" : "pm";
                var start_time_strip = temp_rest + Start_times[i].substr(2, 3) + ampm;
                temp_temp = +End_times[i].substr(0, 2);
                temp_rest = temp_temp % 12 || 12;
                ampm = temp_temp < 12 ? "am" : "pm";
                var end_time_strip = temp_rest + End_times[i].substr(2, 3) + ampm;

                $("tbody").append('<tr><td style="vertical-align: middle; width: 50%;"><a href="#" onclick="return false;" class="drop" id="drop'+i+'"  style="text-decoration:none; color:#fff; text-align:center;"><b style="text-align:center;font-size:16px">'+Names[i]+'</b></br><span style="padding-left:15px;">Start: '+start_time_strip+'</span></br><span style="padding-left:15px;"> End: '+end_time_strip+'</span></a></td>'+
                '<td style="vertical-align:middle; text-align:center">'+date_event+'</td>'+
                '<td class="tBuzz" style="vertical-align:middle; display: none;"></td><!--<td class="text-center" style="vertical-align:middle; text-align:center">'+Rages[i]+'</td>-->'+
                '<td style="vertical-align:middle; text-align:center"><button class="drop" id="drop'+i+'" type="button" class="btn btn-default btn-sm" style="color:#E79E20">'+
                '<span class="glyphicon glyphicon-circle-arrow-down"></span></button></td></tr>');
                $("tbody").append('<tr id="row'+i+'" style="display:none;">'+
                '<td id="drop_space'+i+'" colspan="5">'+
                '<div style="height:100%; float: left;margin-bottom: 15px;padding: 10px; background: rgb(111, 111, 111);"><img src="'+Imgz[i]+'" height="" width="400px" /></div>'+
                '<div style=""><p style="min-height:0px;">'+Briefs[i]+'</p><br/><div class="row"style="margin:0; clear:both;"><a id="google-icon'+[i]+'" style="" target="_blank" href="'+Maps[i]+'"><div class="  col-sm-4 col-xs-4 columncolor"><img src="img/Google-Maps-icon.png" height="44" width="44" /></div></a><a id="websites-icon'+[i]+'" style="" href="'+Websites[i]+'"><div class="  col-sm-4 col-xs-4 columncolor"style="padding-top: 10px;">Website</div></a><a id="facebook-icon'+[i]+'" style="" target="_blank" href="'+Facebooks[i]+'"><div class=" col-sm-4 col-xs-4 columncolor"><img src="img/social_facebook_box_blue.png" height="44" width="44" /></div></a></div>'+'</td></tr></div></div></div></div>');
                if(Maps[i] == ''){$("#google-icon"+[i]).hide();}
                if(Websites[i] == ''){$("#websites-icon"+[i]).hide();}
                if(Facebooks[i] == ''){$("#facebook-icon"+[i]).hide();}
                
            }
                
            
            $(".drop").click(function(){
                var image;
                var cnt = $(this).attr('id').slice(4);
                var id = Ids[cnt];
                if($("#row"+cnt).css("display") == "none"){
                    $("#row"+cnt).css("display","table-row");
                    $.ajax({
                        url: 'get_file_name.php',
                        data: {'id':id},
                        async: false,
                        type: 'POST',
                        success: function(data){
                            image = data;
                        }
                    })
                    var src = id+"/uploads/"+image;
                    $("#img"+id).attr("src",src);
                }
                else{$("#row"+cnt).css("display","none");}
            });
        }

        $(document).ready(function(){
            $("#login_button").css("color","white").click(function(){
                $("body").load("login.html");
            });
            $(function(){
                $("#slider-range").slider({
                    range: true,
                    min: 0,
                    max: 10,
                    values: [3,7],
                    slide: function(event,ui){
                        min_value = ui.values[0];
                        max_value = ui.values[1];
                    }
                });
                $("#btnSubmit_Relax").click(function(){
                    $("#no_events").hide();
                    $("#spinner").show();
                    $.ajax({
                        url: 'db/get_events.php',
                        data: {'user':'%','min_value':0,'max_value':5},
                        dataType: 'json',
                        type: 'POST',
                        success: function(data){
                          if(data.length == 0){
                            $("#no_events").show();  
                          }
                          Ids = [];
                          Names = [];
                          Start_dates = [];
                          End_dates = [];
                          Start_times = [];
                          End_times = [];
                          Start_dates = [];
                          Rages = [];
                          Briefs = [];
                          Websites = [];
                          Facebooks = [];
                          Maps = [];
                          Images = [];
                          Users = [];
                          Imgz = [];
                          $("tbody").empty();
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
                              Imgz.push(data[i].Img)
                          }
                          display_table();
                        }
                    });
                    $("#spinner").hide();
                    $("#table").show();
                });
                 $("#btnSubmit_Rage").click(function(){
                    $("#no_events").hide();
                    $("#spinner").show();
                    $.ajax({
                        url: 'db/get_events.php',
                        data: {'user':'%','min_value':6,'max_value':10},
                        dataType: 'json',
                        type: 'POST',
                        success: function(data){
                          if(data.length == 0){
                            $("#no_events").show();  
                          }
                          Ids = [];
                          Names = [];
                          Start_dates = [];
                          End_dates = [];
                          Start_times = [];
                          End_times = [];
                          Start_dates = [];
                          Rages = [];
                          Briefs = [];
                          Websites = [];
                          Facebooks = [];
                          Maps = [];
                          Images = [];
                          Users = [];
                          Imgz = [];
                          $("tbody").empty();
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
                              Imgz.push(data[i].Img)
                          }
                          display_table();
                        }
                    });
                    $("#spinner").hide();
                    $("#table").show();
                });
            });
        });




(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50166995-1', 'buzzvents.com');
  ga('send', 'pageview');

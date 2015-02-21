var filnam = '';

var uploader = new plupload.Uploader({
  browse_button: 'browse',
  url: 'upload.php',
  filters: {
    mime_types : [
      { title : "Image files", extensions : "jpg,gif,png,jpeg,bmp" }
    ]
  }
});
 
uploader.init();

uploader.bind('FilesAdded', function(up, files) {
  var html = '';
  plupload.each(files, function(file) {
    //html += '<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></li>';
    filnam = file.name;
  });
  $('#filelist').val(filnam);
});
 
uploader.bind('FileUploaded', function(up, err) {
  $("#filelist").val('Done');
});
 
$('#start-upload').click(function(event){
  event.preventDefault();
  var r=confirm("This cannot be undone");
  if (r==true){
    $("#filelist").val(filnam);
    $.ajax({
      url: 'set_dir.php',
      data: {'id':sessionStorage.id},
      cache: false,
      async: false,
      type: 'POST',
      success: function(data){}
    });
    uploader.start();
  }
  else{
    x="Upload canceled";
  }
});

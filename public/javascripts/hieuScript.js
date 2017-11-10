function getCropList(){
    $.ajax({
        url: "http://quantrac.com:8001/webservice/farmer",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "GET",
        success: function(data){
            console.log('ok');
            html = '';
            console.log(JSON.stringify(data));
            var user = data.message.ds_fammer;
            user.forEach(function(item) {
                html += '<tr>'
                html +=	'<td>'+ item.USER_FULLNAME +'</td>'
                html +=	'<td>'+ item.USER_USERNAME +'</td>'
                html +=	'<td>'+ item.USER_PHONE +'</td>'
                html +=	'<td>'+ item.USER_EMAIL +'</td>'
                html +=	'<td>'+ item.USER_ADDRESS +'</td>'
                html +=	'<td>'+ item.USER_BIRTHDAY  +'</td>'
                html +=	'</tr>';
            });
            $('#listCroping').html(html);
        },
        error: function(){
            console.log('loi');
        }
    });
}

/*Hàm đổi mật khẩu*/
function changePassWord(conf,token,userId,callback){
    var request = $.ajax({
            url: "http://quantrac.com:8001/webservice/farmer" + userId,
            method : 'PUT',
            contentType: 'application/json; charset=utf-8',
            headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    
            },
            data:{
                oldPassword : $("#oldPassword").val(),
                newPassword : $("#newPassword").val(),
                comparePassword : $("#comparePassword").val()
            }
    });
    request.done(function(rs){
            if(rs.Error){
                    callback(true,null);
            }else{
                    callback(false,rs.data);
            }
    });
    request.fail(function(jqXHR, textStatus){
            callback(true,null);
    });
}

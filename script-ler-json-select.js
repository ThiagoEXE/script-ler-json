$("#funcoes").focusin(function(){
        var urlStr = "url aqui do local que tem o aruivo .json";
        $.ajax({
          url : urlStr,
          type : "get",
          dataType : "json",
          success : function(data){
            console.log(data);
            if (data.length > 0){
                 var option = '';
                 $('#funcoes').empty();
                 $.each(data, function(i, obj){
                       option += '<option value="'+obj.funcao+'">'+obj.funcao+'</option>';
                 })
               $('#funcoes').html(option).show();
            }else{
                 $('#funcoes').empty();
                  $('#funcoes').html("<option>sem funções no momento</optinon>");
                 $('#mensagem_select').html('<span>Funções não encontradas!</span>').show();
            }
          },
          error : function(erro){
            console.log(erro);
          }
        });
       });
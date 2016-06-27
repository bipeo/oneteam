

$(document).ready(function(){
    
    
        $("#resetpswd").validate({

       rules:{
           
            phoneemail: {
                minlength: 4,
                maxlength: 50,
		required: true,
	    },
            verify: {
                required:true,
                minlength: 6,
                maxlength: 50,
               
            },
       },

    });
        $("#regform").validate({

       rules:{
            email: {
		required: true,
	    },
            gender_male:{
              required: true,  
            },
            lastname: {
                required:true,
                minlength: 3,
                maxlength: 50,
               
            },
            firstname: {
                required:true,
                minlength: 3,
                maxlength: 50,
               
            },
            phonenum: {
                required:true,
                minlength: 12,
                maxlength: 16,
            },
             pswd: {
                required:true,
                minlength: 6,
                maxlength: 50,
               
            },
             pswd_2: {
                required:true,
                minlength: 6,
                maxlength: 50,
            },
            nletter:{
              //  required:true,
            },
            agree:{
               // required:true,
            },
             birthday: {
                required:true,
                minlength: 8,
                maxlength: 12,
            },
       },

    });
        $("#enterTosite").validate({
       errorPlacement: function(error, element) { },     
       rules:{
           
            email: {
                required: true,
                email: true,
                minlength: 4,
                maxlength: 50,
	    },
            pswd:{
                required: true,
                minlength: 6,
                maxlength: 50,
            },
       },

    });
    
     $("#BuyOneclick").validate({
       errorPlacement: function(error, element) { },     
       rules:{
           
           firstname:{
                required: true,
                minlength: 3,
                maxlength: 50,
            },
            
            phonenum: {
                required:true,
                minlength: 11,
                maxlength: 16,
            },

            mess:{
                minlength: 20,
                maxlength: 100,
            },
       },

    });
    
     $("#Searchbox").validate({
       errorPlacement: function(error, element) { },     
       rules:{
           
           search:{
                required: true,
                minlength: 10,
                maxlength: 150,
            },
            
          
       },

    });
    

    $("#contactForm").validate({
    errorPlacement: function(error, element) { },     
       rules:{

//            verify:{
//                required: true,
//                minlength: 2,
//                maxlength: 16,
//            },
            
            firstname:{
                required: true,
                minlength: 3,
                maxlength: 50,
            },
            
            phonenum: {
                required:true,
                minlength: 11,
                maxlength: 16,
            },

            mess:{
//                required: true,
                minlength: 20,
                maxlength: 100,
            },
       },

       messages:{

           /* login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },

            pswd:{
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            }, */

       }

    });

});
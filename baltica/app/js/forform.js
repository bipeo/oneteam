

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
                maxlength: 17,
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

       rules:{
           
            nameemail: {
                minlength: 4,
                maxlength: 50,
		required: true,
	    },
            pswd:{
                required: true,
                minlength: 6,
                maxlength: 50,
            },
       },

    });
    

    $("#contactForm").validate({

       rules:{

            verify:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
            namelastname:{
                required: true,
                minlength: 3,
                maxlength: 50,
            },
            
            email: {
		required: true,
	    },

            mess:{
                required: true,
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
$(window).on('load',function() {

types = ["Workshops-logo","Events-logo","Lectures-logo","Proshows-logo","Blitzkreig-logo","Wheels-logo","Login-logo","Adizya-logo"];
var posx = ['36%','22%','26%','22%','54%','67%','74%','72%'];
var posy = ['4%','60%','17%','38%','3%','17%','37%','59%'];
var posxmob = ['43%','17%','16%','7%','68%','73%','67%','43%']
var posymob = ['18%','52%','23%','38%','23%','38%','52%','57%']
    console.log('icon load script loaded');
    for(var i = 0;i<types.length;i++){

        $('#'+types[i]).css({'top':'50%','left':'45%','opacity':'0'});
    }






   $('#t-logo').on('click',function(){
       for(var i = 0;i<types.length;i++){

                $('#'+types[i]).css({'animate': 'spin 1s'});
       }
   });


    $('#icon-trigger').on('mouseover',function(){
        var mob = ''
        if($('#mobile-test').css('display')=='none')
        mob = 'mob';
        console.log('icons back to positions');
        setpos(mob);

     //  custom notifications


console.log('inside');
var types = ["Workshops-logo","Events-logo","Lectures-logo","Proshows-logo","Blitzkreig-logo","Wheels-logo","Login-logo","Adizya-logo"];
for(var i = 0;i<types.length;i++){
    x = '#'+types[i];
    $(x).on('mouseenter',function(e){
        var y = e.target;
        y = y.getAttribute('id');

        $('#'+y).notify({title: y.split('-')[0]},{style:'notifications',autoHide: true, autoHideDelay: '2000',arrowShow: false});;
     });

}


        setTimeout(function(){


            $('#Workshops-logo').notify({title: 'Workshops'},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown'

            });


        },1900);

        setTimeout(function(){


            $('#Events-logo').notify({title: 'Events'},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown'

            });


        },1000);

             setTimeout(function(){


            $('#Proshows-logo').notify({title: 'Proshows'},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown',

            });


        },1300);

         setTimeout(function(){


            $('#Lectures-logo').notify({title: 'Lectures'},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown',

            });


        },1600);


        setTimeout(function(){


            $('#Blitzkreig-logo').notify({title: 'Blitzkreig'},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown',

            });


        },2200);

         setTimeout(function(){


            $('#Wheels-logo').notify({title: 'Wheels'},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown',

            });


        },2500);

        setTimeout(function(){

            var titleval = 'Login';
            if(firebase.auth().currentUser)
                titleval = 'Profile';

            $('#Login-logo').notify({title: titleval},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown',

            });



        },2800);

        setTimeout(function(){


            $('#Adizya-logo').notify({title: 'Adizya'},{
                style:'notifications',autoHide: true, autoHideDelay: '1000',arrowShow: false, showAnimation: 'slideDown',

            });


        },3100);





    });


    function setpos(mob){
        if(mob == ''){
        for(var i = 0;i<types.length;i++){
            console.log('almost there');
            var styl = {'top': posy[i],'left': posx[i],'opacity': '1'};
            $('#'+types[i]).css(styl)
        }

        }
        else{
            for(var i = 0;i<types.length;i++){
            console.log('almost there');
            var styl = {'top': posymob[i],'left': posxmob[i],'opacity': '1'};
            $('#'+types[i]).css(styl)
            }

        }
          $('#tathva-man-container').css('opacity','1');
        $('#icon-trigger').css('z-index','-10001');

    }
});



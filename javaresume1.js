
let resume= 

    {
        name:"V.Ranjith",
        EmailId: "vranjith677@gmail.com",
        Mobile : 877816659,
         educationalqualification:{
            Bachelorengineering :"Mechatronics 65%",
            diploma: "mechanical 73",
            sslc:75,
         },
         techanicalskill:{

             SoftwarestoOperate :'AutoCAD,Solid Works, AutomationStudio,Creo,Ansys'
         },
          AREASOFINTEREST:
                        { 
                          no1:'Machine Learning',
                          no2:'Hydraulics and Pneumatic',
                          no3:'PLC and CNC Programming',
                          no4: 'Automobile'

                                },
         PERSONALTRAITS : 
          {   
            a :'Self Motivated and Self Learner',
            b :'Effective Time Management and Punctual',
            c :'Flexible Person',
               },
         personalinfo:{
            personaladdress:{
                       street:"Thirukumaran Nagar 2nd street",
                        doorn:'1-45-6', 
                         area:'Palayampattai', 
                         city:'aruppukottai' , 
                     district:'virudhunagar',
                     Pincode :626112
                    },
                         Dob : "23/06/1996",
                 FathersName : 'Mr.S.Veluchamy',
                      Gender : 'Male',
                 Nationality : 'Indian',
          LinguisticAbility :'Tamil  English Telugu ',   
                     Hobbies : 'Playing cricket and Listening Music',

         }
         







         
        

         }
                                    








    
{
    let resumeJSON = JSON.stringify(resume);// object to JSON CONVERSION 
    console.log(resumeJSON);

//let resumeobj  =JSON.parse(resumeJSON);
//console.log(resumeobj);
 





};

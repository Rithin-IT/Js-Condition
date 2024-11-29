
let details= {
    name:"agaram",
    age:1,
    skills:["python","React","mysql"],
    batches:[
     {
       name:"batch1",
             year:2023,
             students:[
               {
                 name:"bhuvana",
                age:22,
                skills:["python","aws"]
                
              },
                {
                 name:"renisha",
                age:22,
                skills:["python","aws"]
                
              },
                {
                 name:"beena",
                age:22,
                skills:["python","aws"]
                
              }
           ],
         },
      {
       name:"batch2",
             year:2023,
             students:[
               {
                 name:"sira",
                age:22,
                skills:["python","aws"]
                
              },
            ],
         },
      ]
  }
  
  
  details.batches.push({name:"batch3",year:2023,students:[{name:"jose",age:22,skills:["python","aws"]}]})
  
  console.log(details)
  
  let marks={
    tamil:90,
    english:89,
    computer_science:60,
    physics:70,
    maths:95,
    chemistry:70,
  }
  
  if(marks.maths>90||marks.computer_science>90){
    console.log("You are eligible for engineering college")
  }else if(marks.physics>70&&marks.chemistry>70){
    console.log("You are eligible for law college")
  }
  else{
    console.log("you are not eligible")
  }
  
  let mar={
    maths:85,
    physics:80,
    chemistry:60,
    computer_science:89,
  }
  
  if((marks.maths>70&&marks.physics>70&&marks.chemistry>70)||(marks.maths>80&&marks.computer_science>80)){
    console.log("You are eligible")
  }
  else{
    console.log("You are not eligible")
  }
  
          let mark={
              chemistry:90,
              biology:89,
              computer_science:60,
              physics:70,
              maths:95,
                  }
          
     let total=marks.chemistry+marks.biology+marks.computer_science+marks.physics+marks.maths
     let value=total/5
       
         if(value>=90){
           console.log("Grade A")
         }
         else if(value>=80){
           console.log("Grade B")
         }
         else if(value>=70){
           console.log("Grade C")
         }
         else if(value>=60){
           console.log("Grade D")
         }
         else if(value>=50){
           console.log("Grade E")
         }
         else if(value<40){
           console.log("Grade F")
         }
         
  
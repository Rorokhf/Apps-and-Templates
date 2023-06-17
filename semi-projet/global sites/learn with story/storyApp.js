function splitString(stringToSplit, separator,lang) {

    const arrayOfStrings = stringToSplit.split(separator);
  
    // console.log("The original string is:", stringToSplit);
    console.log("The separator is:", separator);
    console.log(
      "The array has",
      arrayOfStrings.length,
      "elements:",
     
    );
    const storyP=document.querySelector('.story-p');

    arrayOfStrings.forEach((element,index) => {
        let elementDiv=document.createElement('p');
       
       let classLang=elementDiv.className=lang;
         let text=document.createTextNode(element)
        let getId=elementDiv.setAttribute('id',index)
       elementDiv.appendChild(text)
         console.log(elementDiv)
        if(classLang === 'En'){
        
          storyP.append(elementDiv);
       
         }
        // else{
        //   let artext=arrayOfStrings;
        // }
        
          // arrayOfStrings.map(x => {

          // } )
          // console.log(artext)
            // console.log(
            // tippy('p', {
            //   content: item,
                 
            //   }))
          
          
        
        
        
      
    })
    
  }
  

  // ////////////////////////////////////
  
  // function text(){
  //   return "hellllo"
  // }
  // function transion(stringToSplit, separator) {
  //   const arrayOfStrings = stringToSplit.split(separator);
  
  //   // console.log("The original string is:", stringToSplit);
  //   console.log("The separator is:", separator);
  //   console.log(
  //     "The array has",
  //     arrayOfStrings.length,
  //     "elements:",
     
  //   );
   
    
  // }
  
//   const tempestString = "Oh brave new world that has such people in it.";
  const monthString = `
  An awful woman lived with her daughter and stepdaughter in her household. 
  She possessed feelings of hate for her stepdaughter, Anna. Anna worked 
  while her stepsister did nothing. On a cold January night, Anna’s stepmother 
  remarked, “Your stepsister desires flowers. Go and find some.”
  Anna wasn’t anxious to walk through the chilled landscape. The cold air made 
  her lungs burn. She walked at a slow pace because of the snow. Soon she saw a 
  group of people. It consisted of twelve men. Anna told them about the flowers.
  One of the man said they were the twelve months and that they would help 
  Anna. January walked to her and made a motion with his hand. The days of 
  the month passed rapidly until it was February’s turn. February also made the 
  month speed up. Then March made the sun shine and flowers grew in the field.
  Anna loaded her basket with so many flowers that she could hardly lift it.
  Then she gave a quick but polite “thank you” to the twelve men and returned 
  home. She was very eager to show her stepmother all the flowers. Back at the 
  house, she spilled the flowers onto the table. Then she told her stepmother
  about the twelve men. Anna’s stepmother and stepsister went 
  to seek the twelve months. Their intent was to ask for 
  gifts. They looked and looked. They became very los
  `;

  const translat=`
  عاشت امرأة فظيعة مع ابنتها وابنتها في منزلها.
   كانت لديها مشاعر الكراهية تجاه ابنتها آنا. عملت آنا
   بينما أختها لم تفعل شيئًا. في إحدى ليالي يناير الباردة ، زوجة أبي آنا
   قال ، "أختك غير الشقيقة ترغب في الزهور. اذهب واعثر على البعض ".
   لم تكن آنا متلهفة للسير في المناظر الطبيعية الباردة. صنع الهواء البارد
   رئتيها تحترقان. سارت بخطى بطيئة بسبب الثلج. سرعان ما رأت أ
   مجموعة من الناس. كانت تتألف من اثني عشر رجلاً. أخبرتهم آنا عن الزهور.
   قال أحد الرجال إنهم كانوا الاثني عشر شهرًا وأنهم سيساعدون
   آنا. سار عليها يناير وقام بحركة بيده. أيام
   مر الشهر بسرعة حتى جاء دور فبراير. فبراير أيضا جعل
   تسريع الشهر. ثم جعل شهر مارس الشمس تشرق ونمت الأزهار في الحقل.
   حملت آنا سلالتها بالعديد من الزهور لدرجة أنها بالكاد تستطيع رفعها.
   ثم أعطت "شكراً" سريعًا ولكن مهذبًا إلى الاثني عشر رجلاً وعادت
   بيت. كانت متحمسة جدا لتظهر لزوجة أبيها كل الزهور. مرة أخرى في
   في المنزل ، سكبت الزهور على الطاولة. ثم أخبرت زوجة أبيها
   عن الاثني عشر رجلاً. ذهبت زوجة أبي وأخت آنا
   للحصول على الاثني عشر شهرًا. كان قصدهم أن يطلبوا
   الهدايا. نظروا ونظروا. أصبحوا خاسرين جدا
  `;
// const monthString=document.querySelector('.story-p').textContent;
  const space = " ";
  const comma = ".";

//   splitString(tempestString, space);
//   splitString(tempestString);
 splitString(monthString, comma ,'En');
 splitString(translat, comma,'Ar');
  
// .forEach(element => {
//     console.log(element)
// }),

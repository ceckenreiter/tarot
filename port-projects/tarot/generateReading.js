class major {
    constructor(name, description,  majorWords, revWords, majorMeaning, revMeaning) {
      this._name = name; 
      this._description = description;
      this._upright = ' = ' + majorWords + majorMeaning 
      this._reverse = ' in reverse = ' + revWords + revMeaning
    }
    get name() {
      return this._name
    };
    get upright() {
      return this._upright
    };
    get reverse() {
      return this._reverse
    };
    get description() {
      return this._description;
    };
    }; 
  
  //creating class instances of all major arcana//
  
  const theFool = new major ("The Fool", "The Fool is often depicted mid step carrying a bag for the long journey ahead of them. Their head is held high and they look ready to take on any challenge that comes their way.", "The Fool is considered to be a blank slate with endless possibilities. They are the epitome of innocence and beginnings. The Fool symbolizes a new journey filled with adventure and opportunity. While they may not see what lies ahead of them, they still move forward with fearlessness.", "beginnings, freedom, innocence', 'reckless,  careless, gullible", "This card serves as a reminder that risk-taking is part of what makes life exciting, and to do so with an open-mind and a curious heart.", "If The Fool appears in reverse, it serves as a reminder that all of our actions have consequences. While taking risks are important, a reversed Fool symbolizes the price paid when we are too naive and gullible. Remember that some things may be too good to be true, and sometimes we don’t realize how dangerous of a position we have put ourselves in before it’s too late.");
  const theMagician = new major ("The Magician", "The Magician is often depicted behind a table that has a symbol of each tarot suit rested upon it. The Magician themself will have one hand raised to the sky and one hand pointed towards the earth.", "manifestation, willpower, desire", "manipulation, trickery, illusion", "The Magician card represents our ability to reach our full potential through the power of desire. This card is a reminder that each of us are powerful, and that our outer world is simply a reflection of the inner world that we create within ourselves. The magician is often an indication that we have not reached our full potential. By harnessing the power of The Magician, we remind ourselves that we can take the innate power of the universe and channel it to create the future that we desire the most.", "When the Magician is reversed, they are a symbol of the deception and trickery that lies in too much power. There may be someone out there who does not have your best interest at heart, but have convinced you otherwise. Perhaps, the deception is coming from within and you need to re-evaluate what is important to you in your future. Regardless of the questions being asked, a reversed Magician warns that it may be time for some changes in your life.");
  const theHighPriestess = new major ("The High Priestess", "The High Priestess is often depicted as a beautiful woman who sits on a throne between two large pillars. Many consider the High Priestess a symbol of the balance between duality(masculine and feminine, yin and yang, good and evil).", "intuition, spirituality, higher power", "confusion, hidden motives, superficiality", "The High Priestess is tied to our inner knowledge. Seeing the High Priestess in a reading can indicate that its time to be honest and listen to our gut and intuition rather than rationalizing our way through problems. You may know the answers to the questions you are asking already, if only you would listen to yourself.", "The High Priestess in reverse is a sign that you may have found yourself in a situation where you are not being your genuine self. Perhaps it is time to re-evaluate who you are and the things that you want. Never be afraid to ask yourself questions because that is how we truly find ourselves. Maybe you need more information or maybe you are being ingenuine with a new partner. Either way, the High Priestess warns that not listening to your inner voice and intuition may be leading you down the wrong path."); 
  const theEmpress = new major ("The Empress", "The Empress is often depicted as a beautiful woman who is surrounded by an abundance of nature and life.", "divine feminine, fertility, creativity", "smothering, overbearing, negligence", "The Empress card can hold many different meanings. While this card is often strongly tied to pregnancy, it may be a sign of growth and success in other parts of your life as well such as your career or love life. Seeing The Empress in a reading may be a reminder to take care of yourself and relax, especially by stepping toward nature.", "The Empress in reverse may be an indication that you are giving too much. While taking care of others is beautiful, we cannot fill other cups if ours is empty. It may also be pointing towards your dependence on others. You must build confidence in yourself and know that at the end of the day the only person who knows what you truly want and need is you."); 
  const theEmperor = new major ("The Emperor", "The Emperor is often depicted as a stoic gentlemen who sits on a throne with one hand tightly fisted around a scepter. He is the picture of control and power.", "stability, protection, practicality", "domineering, stubborn, recklessness", "The Emperor is a symbol of authoritative power. He is a good leader who rules with both authority and the wisdom of his experience. The Emperor in a reading could be a sign of an upcoming opportunity where you get to show off your leadership skills. It could also be a sign that you need to be thinking more practically about a big decision, be the leader that you always knew you could be. The Emperor does not rule with his emotions, but with the sheer strength and authority.", "Seeing the Emperor in reverse could be sign that someone is abusing the power that they have. Perhaps it is a partner or coworker who is consistently overstepping your boundaries. This card appearing in reverse could also indicate a loss of control, whether that be within yourself or someone within your circle. The world does not need a leader for every single moment, perhaps it’s time to take a step back from power and just breathe."); 


  const theHierophant = new major ("The Hierophant", "description of the hierophant card", "tradition, conformity, knowledge", "rebellion, unconventionality, ignorance", "embrace the conventional. Stay within conventional bounds. Follow traditions etc.", "feeling restricted and constrained. Loss of flexibility in life. Tells you to questions certain traditions and make sure whatever works for you in the right moment questions traditions "); 
  const theLovers = new major ("The Lovers", 'blank', "love, union, balance, partnership, romance", "disharmony, imbalance, detachment,", "blank", "harmony and attractiveness and perfection in a relationship. Concept of choice — choosing between two things that are both opposing and mutually excessive. Making up your mind about what is important and unimportant in life - being genuine", "points towards inner and outer conflicts. Make sure you are aligning with your personal belief system. Break in communication might be needed. Might be avoiding responsibility of your actions. Make amends or let go of the past and make better decisions in future."); 
  const theChariot = new major ("The Chariot", 'blank', "success, ambition, control, willpower", "orcefully, no control, powerless, aggression, obstacles", "blank", "about overcoming challenges and gaining victory through maintaining control of surroundings. Use of strength and willpower to overcome obstacles. Makes us stronger. Must painting focus confidence and determination", "help to make ys aware of aggression or lack of willpower — lack of focus motivation or direction or possible being warped by your obsession with goals. You may need to come to terms that you cant always be in control. Indication of a lack of control or direction over life. Serves as wake call to remind you to tighten some loose ends and take charge of destiny"); 
  const strength = new major ("Strength", 'blank', "courage, bravery, compassion, self-confidence, inner power", "self-doubt, weakness, low confidence, inadequacy, cowardice, forcefulness", "you have inner strength and fortitude during moments of danger and distress. You are compassionate and will always have time for other people even at your own expense. You are a patient individual who will accomplish anything you put your mind to. Compassion will always be reward with having a lot of stability now or soon ", "warning of intense fear or anger in your life. Lack the inner strength the card normally represents. Maybe you forgot your passions and joy about live. Perhaps you are experiencing depression or withdrawing from society. Indicates you need to0 gain confidence in order to re-harnes your inner strength."); 
  const theHermit = new major ("The Hermit", "blank","self-reflection, contemplation, withdrawal, solitude", "loneliness, isolation, recluse, rejection",  "hermit is a seeker of knowledge that comes from within. The hermit must disconnect from crowds to listen to his  inner voice. It seems like you are contemplating the need to be alone and reflect. You may be searching fro inner soil for guidance on what is right and what your next steps are. Hermit could also represent a someone who will be your mentor.", "you’d like to be alone but your seclusion might be bad for your. It’s noble to seek for inner truth but it may also be dangerous and lead to madness. Dont get stuck alone and trapped in your own mind. Balance need for truth and need for human connection. May meed you need to get to the bottom of something that has been troubling you so its time to ask some questions"); 
  const theWheelOfFortune = new major ("The Wheel of Fortune","blank", "changes, cycles, luck, fortune, unexpected events", "bad luck, lack of control, delays, unwelcome changes", "reminder that good and bad come in a cycle and that without one we cannot have the other. When the good moments come you must make sure that you enjoy them to the fullest and in bad situations — remember that the cycle must end at some point. Forces outside of human control are at work. The wheel is always turning. ", " luck has not been on your side and misfortune has been following you. These are external uncontrollable forces but remember the wheel will always turn. Do not cling to illusion of control, perhaps the lesson here is to let go and release. When we dont let go, it can only bring more suffering. Let the cycle continue so you can start fresh."); 
  const justice = new major ("Justice", "blank","justice, karma, consequence, accountability, integrity, honestly", "injustice, dishonestly, corruption", "decisions you make now have long term affects for all in your life. Everyone comes to be judged at some point and seeing this reading indicates that it will be done fairly and accordingly. Your decisions that reign your past will be carefully weighed with fairness. If you have been wronged, the card may bring you relief. But if you have wronged others, the card serves as a warning. Time to account for your actions. Another meaning could be tied to truth which is based entirely on facts. You must know the truth before you can pass judgement. Could also symbolize attention is needed in some spot of your life.", "you are living in denial and unwilling to accept the sonsequences of your actions or the actions of others. You may be running from guilt. Take action to change and stop judging yourself. Could represent an unfair outcome that you will have a hard time accepting.");
  const theHangedMan = new major ("The Hanged Man", "blank", "sacrifice, uncertainty, contemplation", "stalling, stagnation, apathy, disinterest", "represents sacrifice needed to progress forward. This sacrifice could be a calculated risk forward or a step backward to rethink some things. You see things differently when upside down. Some might not agree with you sacrifice, which is why it may need to be walked along. Might represent period of uncertainty and indecision. It would be a good idea to stall certain actions to make sure you have spent enough time considering all your options. Taking action is not always best.", "refers to a specific time in your life where you sacrificed a lot but got not a lot in return. You are putting in too much effort — serves as a reminder that sacrifice is good but may be too much right now — take some time to breathe");
  const death = new major ("Death", "blank", "transformation, change, letting go, release", "fear of change, stagnancy, decay", "signals a major phase in your life is ending a new one is going to be starting. Past needs to be placed behind you and you need to give all your energy to what is in front of you. Another meaning is you are going through a major change — to create a new you. Welcome change and let go of any unhealthy attachments.", "you have been resisting change. Death does not have to be regret but it is a warning of what resisting change can do. You may be holding yourself back or preventing from becoming a new version of yourself."); 
  const temperance = new major ("Temperance", "blank", "balance, peace, patience, harmony, serenity, tranquility", "imbalance, excess, recklessness", "blank", "you have maintained control in times of anxiety and great stress. You dont let things get to you . Card warns that you may need patience in an upcoming situation. You have clear vision and you know exactly what you want to achieve. Higher learning. You have found peace. But it may be an indication you need to re-evaluate and re-examine your priorities.", "reflection of something out of balance causing stress and anxiety. Could be a warning of turbulence and excess. Lack of a long term plan and a lack of purpose within yourself. All good things occur in moderation and balance is important."); 
  const theDevil = new major ("The Devil", "blank", "addiction, obsession, powerlessness, limitations", "independence, freedoms, release, reclaim control/power", "you are feeling trapped and empty with a lack of fulfillment in your life. You may be a slave to materialism and opulence and you cant stop indulging in a luxiruios life. Could be a sign of addition.", "moment when individual becomes self-aware and breaks additions and poor habits. Breaking chains is never easy. Call for self-assessmen of priorities and wha you need to get rid of as well as a a symbol of setting off on self-improvement journey.")
  const theTower = new major ("The Tower", "blank", "disaster, destruction, trauma, chaos", "resisting change, delaying inevitable, averting disaster", "represents change in most radical and momentous sense. May incite fear but it shouldn’t Something inevitable is about to happen and you need to stay in control and check yourself.", "you feel some crisis and are trying to avoid it. This can be a good thing though and you shouldn’t try to avoid it. What you relied on will no longer be there and you may need to become more self-reliant.")
  const theStar = new major ("The Star", "blank", "hope, inspiration, positivity, faith, healing", "hopelessness, despair, negativity, despondent", "brings hope, renewed power and strength to carry on. Follows trauma of tower card but it is a renewed hope. You have gone and passed through terrible life challenge and managed through with your hope in tact. In is not that you can appreciate all the you have.", "you feel as though everything has turned against you. You have lost your faith. Without it how do you find motivation to move forward. Nurture your sense of hope and positive energy tot propel your actions with joy instead of fear.");
  const theMoon = new major ("The Moon", "blank", "illusion , intuition, complexity, unconscious, secrets", "ear, anxiety, misunderstanding, clarity, understanding, misinterpretation", "can symbolize that imagination is taking the best of you. You are taking a path that you are unsure of and there could be danger lurking inside. You should let your intuition guide you through the darkness. Be aware of what situations are causing you fear and anxiety. Must be let go and turned into something constructive. Could also mean existence of illusion where some hidden truth must be discovered. What you are seeing now might be a trick of light", "indicate darker and negative aspects are present in your life. Could represent confusion and unhappiness but you want to make progress. Just not sure. You need to believe in yourself and that you are in an intuitive period. You have been misinterpreting what you feel but you are getting through. Could also mean that the forces that are bringing you confusion are starting to dissipate. You are beginning to manage your anxiety."); 
  const theSun = new major ("The Sun", "blank", "happiness, success, vitality", "pessimism, not genuine happiness, unrealistic expectations",  " sign of much joy and happiness coming your way. You are a ray of sunshine to others and you are cable of sharing these qualities and achievements with other people. You radiate love. Significant sense of confidence. ", "you may have significant difficulties finding the positives in your life. Clouds may be blocking out the warmth nd light you need. This might be preventing you from feeling your most confidence and powerful. Could be a sign that you are being unrealistic. You are overly optimistic perception. There are things need to take into account to be on the right tract. "); 
  const judgement = new major ("Judgement", "blank", "completion, achievement, fulfillment ", " lack of closure, feeling incomplete, emptiness ", "gives a sense of unity and wholeness. Symbolizes when inner and outer worlds become a single entity. Alignment or Nirvana or enlightenment. All efforts you have put in place are starting to pay off. You have completed a major milestone with resilience. May indicate completion of a long-term project or major event in your life. Maybe birth of a child, marriage, graduation, etc. Shows desire to give back to community. ", "You are coming to the close of some era of your life. You have many accomplishments but you feel empty as if not everything is completed. What alienates you from feeling complete. Re-evaluate what your goals are and make adjustments as necessary."); 
  const theWorld = new major ("The World", "blank", "completion, achievement, fulfillment", "lack of closure, feeling incomplete, emptiness", "gives a sense of unity and wholeness. Symbolizes when inner and outer worlds become a single entity. Alignment or Nirvana or enlightenment. All efforts you have put in place are starting to pay off. You have completed a major milestone with resilience. May indicate completion of a long-term project or major event in your life. Maybe birth of a child, marriage, graduation, etc. Shows desire to give back to community.", "You are coming to the close of some era of your life. You have many accomplishments but you feel empty as if not everything is completed. What alienates you from feeling complete. Re-evaluate what your goals are and make adjustments as necessary.");
  
  //creating individual objects of each number and suit//
  
  const ace = {
    name: 'Ace', 
    upright: "The Ace represents new beginings with quick actions",
    reverse: 'The Ace in reverse represents the end of something',
  }
  
  const two = {
    name: 'Two',
    upright: "The two represents pairing and choices -- balance.",
    reverse: "The two in reverse represents an imbalance somewhere.",
  }
  const three = {
    name: 'Three',
    upright: "The three represents creating and connecting relationships with others. It also represents change",
    reverse: 'The three in reverse represents stagnancy, especially in relationships',
  }
  
  const four = {
    name: 'Four',
    upright: "The four represents stability and security.",
    reverse: 'The four in reverse represents a lack of stability or security',
  }
  
  const five = {
    name: 'Five', 
    upright: "The five represents instability and crisis. It indicates conflict, damages, and struggles",
    reverse: 'The five in reverse represents an end to a period of instability and crisis. You are slowly coming back from a difficult time.',
  }
  
  const six = {
    name: 'Six', 
    upright: "The six represents community and the new normal while problem solving in community and hope and support",
    reverse: 'The six in reverse represents solitude and feeling overwhelmed by the problems on your shoulders. Maybe reach out for some help',
  }
  
  const seven = {
    name: 'Seven', 
    upright: " The sevens represent reflection and assessment - warn against trying to justifying your actions and also solutions",
    reverse: 'The sevens in reverse represent an ending to a period of reflection and assesement. Its time to take what you learned and apply it to your life.',
  }
  const eight = {
    name: 'Eight', 
    upright:"The eights represent speed, personal power, and justice. Just remember that sometimes justice isn't what we think it is.",
    reverse: 'The eight in reverse represents a lack of justice. Perhaps not what you perceive to be justice but justice for others.',
  }
  
  const nine = {
    name: 'Nine', 
    upright: "The nines represent independence and solitude. A period of individual experience climax and momentum.",
    reverse: 'The nines in reverse represent and end to a period of independence and solitude. Hopefully you learned something from your time alone',
  }
  
  const ten = {
    name: 'Ten', 
    upright: "The tens represent completion, endings, closures, and exits etc",
    reverse: 'The tens in reverse represent that perhaps you just completed a time of lots of endings and closures. Not all good things come to an end though. ',
  }
  
  const page = {
    name: 'Page', 
    upright:" The page represents newness and promise",
    reverse: 'The page in reverse represents a lack of newness. ',
  }
  
  const knight = {
    name: 'Knight', 
    upright: "The knight is someone who acts rashly and decisively — ready to fight",
    reverse: 'The knight in reverse is someone who may be rushing into somethiing too fast. ',
  }
  
  const queen = {
    name: 'Queen', 
    upright: "The Queen is the caregiver of court - could indicate somewhere needs more attention and support or be pointing your towards someone who needs that",
    reverse: 'The Queen in the reverse indicates that you are smothering one portion of your life and ignoring the other.',
  }
  
  const king = {
    name: 'King', 
    upright: "The king represents control and authority",
    reverse: 'The king in reverse represents a lack of control or authority. Perhaps a touch of controlling behavior that represents a lack of REAL control.',
  }
  
  const cups = {
    name: 'Cups',
    upright: "The Cups rules over all that is associated with emotions, the unconscious, creativity, and intuition. They frequently talk about relationships, whether romantic or otherwise, and one's imagination and inner world. They are associated with the element of water, which becomes a frequent visual theme within this suit.",
    reverse: "At their worst, the cups suit is fret with uncontrolled feelings, fantasy, and a disconnect with one's inner voice.",
  }
  
  const pentacles = {
    name: 'Pentacles',
    upright: "The pentacles is the suit of all things worldly and material. Though we will immediately think of the pentacles as relating to financial matters, we also can understand them as being associated with security, stability, nature, health, and prosperity. The pentacles are of earth element. When we see pentacles show up in a reading, they are usually concerned with your long term future, career, generosity, your household, business investments and your feelings of sensuality.",
    reverse: "The negative side of the pentacles show up as greed, jealousy, miserliness, and unbridled ambition at the cost of all else.",
  }
  const swords =  {
    name: 'Swords',
    upright: "The swords are the suit of intelligence, logic, truth, ambition, conflict and communication. It is associated with the element of air. In readings, these cards focus on the faculty and power of intellect, which like the swords themselves, are double-edged. This can be used for both good or evil, to help and to harm, and our greatest conflicts usually come from this delicate balance.",
    reverse: "At their worst, the swords can be abusive, harsh, and lack empathy.",
  }
  
  const wands = {
    name: 'Wands',
    upright: "The Wands are associated with the element of fire, the suit of wands represents passion, inspiration and willpower. The wands imbue their users with primal energy, for it is through them that the cycle of creation can begin. Because of their ability to bring energy into any situation, they are also associated with action, ambition and making plans.",
    reverse: "At their worst, the wands can refer to situations that are filled with recklessness and lack of direction. As you follow the journey within the wands, you'll come across these themes again and again.",
  }
  
  // creating class to create minor arcana cards 
  
  class minor {
    constructor(suit, num) {
      this._name = num.name + ' of ' + suit.name; 
      this._upright = ' = ' + suit.upright + num.upright;
      this._reverse = ' in reverse = ' + suit.reverse + num.reverse; 
    }
    get name() {
      return this._name
    };
    get upright() {
      return this._upright
    }
    get reverse() {
      return this._reverse
    }
  }; 
  
  //arrays//
  
  const majorArcana = [theFool, theMagician, theHighPriestess, theEmpress, theEmperor, theHierophant, theLovers, theChariot, strength, theHermit, theWheelOfFortune, justice, theHangedMan, death, temperance, theDevil, theTower, theStar, theMoon, theSun, judgement, theWorld];
  
  
  const minorNumbers = [ace, two, three, four, five, six, seven, eight, nine, ten, page, knight, queen, king]; 
  
  const minorSuits = [cups, swords, wands, pentacles]; 
  
  //too many minorArcana cards to actually create so we will iterate through//
  
  let minorArcana = []; 
  
  for (m=0; m<minorSuits.length; m++) {
    for (n=0; n<minorNumbers.length; n++) {
      let test = new minor (minorSuits[m], minorNumbers[n]); 
      minorArcana.push(test);
    }
  };  
  
  // now we play our games //
  
  const tarotReading = (spread, level, typeCards) => {
  
    //typeCards work and level work
  
    let cardChoices = []; 
  
    if (typeCards==='major' && level==='basic') {
      for (r=0; r<majorArcana.length; r++) {
          cardChoices.push(majorArcana[r].name + majorArcana[r].upright); }
    } else if (typeCards === 'major' && level==='advanced') {
      for (r=0; r<majorArcana.length; r++) {
          cardChoices.push(majorArcana[r].name + majorArcana[r].upright); 
          cardChoices.push(majorArcana[r].name + majorArcana[r].reverse); }
    } else if (typeCards === 'all' && level==='basic') {
      for (r=0; r<majorArcana.length; r++) {
          cardChoices.push(majorArcana[r].name + majorArcana[r].upright); }
      for (p=0; p<minorArcana.length; p++) {
          cardChoices.push(minorArcana[p].name + minorArcana[p].upright); }
    } else if (typeCards === 'all' && level==='advanced') {
      for (r=0; r<majorArcana.length; r++) {
          cardChoices.push(majorArcana[r].name + majorArcana[r].upright);
          cardChoices.push(majorArcana[r].name + majorArcana[r].reverse); }
      for (p=0; p<minorArcana.length; p++) {
          cardChoices.push(minorArcana[p].name + minorArcana[p].upright); 
          cardChoices.push(minorArcana[p].name + minorArcana[p].reverse); }
    } else {
      console.log('Not a valid level and/or card choice'); 
    }
  
    //spread work 
      let numberOfCards = 0; 
      let thisReading = []
  
      if (spread ==='celtic cross') {
          do {
            numberOfCards += 1; 
            let x = Math.floor(Math.random()*cardChoices.length); 
            thisReading.push(cardChoices[x]);
            if (cardChoices.indexOf(cardChoices[x]) >= 0) {
               cardChoices.splice(x, 1) }
          } while (numberOfCards < 10); 
          
      } else if (spread === 'horseshoe') {
          do {
            numberOfCards += 1; 
            let x = Math.floor(Math.random()*cardChoices.length);
            thisReading.push(cardChoices[x]);
            if (cardChoices.indexOf(cardChoices[x]) >= 0) {
               cardChoices.splice(x, 1) }
          } while (numberOfCards < 7); 
      } else if (spread === 'seven day') {
          do {
            numberOfCards += 1; 
            let x = Math.floor(Math.random()*cardChoices.length); 
            thisReading.push(cardChoices[x]);
            if (cardChoices.indexOf(cardChoices[x]) >= 0) {
               cardChoices.splice(x, 1) }
          } while (numberOfCards < 8); 
      } else if (spread === 'three card') {
          do {
            numberOfCards += 1; 
            let x = Math.floor(Math.random()*cardChoices.length); 
            thisReading.push(cardChoices[x]);
            if (cardChoices.indexOf(cardChoices[x]) >= 0) {
               cardChoices.splice(x, 1) }
          } while (numberOfCards < 3); 
      } else {
          console.log('Not A Valid Spread'); 
      };

    // how I want everythign to be displayed based on the spread //

    let officialReading = [];
    if (thisReading.length === 10) {
      let counter = 0
      do {
        let spreadMeaning = ['The Present', 'The Challenge', 'The Past', 'The Future', 'Above', 'Below', 'Advice', 'External Influences', 'Hopes and/or Fears', 'The Outcome']; 
        counter += 1
        officialReading.push('Card ' + counter + ' represents: ' + spreadMeaning[counter-1] + ' '); 
        officialReading.push(thisReading[counter-1]);


      } while (counter<10)

    } else if (thisReading.length === 7) {
      let counter = 0
      do {
        counter += 1
        officialReading.push('Card ' + counter + ' represents .....')
        officialReading.push(thisReading[counter-1]);

      } while (counter<7);

    } else if (thisReading.length === 8) {
      let counter = 0
      do {
        counter += 1
        officialReading.push('Card ' + counter + ' represents .....')
        officialReading.push(thisReading[counter-1]);

      } while (counter<8);

    } else if (thisReading.length === 3) {
      let counter = 0
      do {
        counter += 1
        officialReading.push('Card ' + counter + ' represents .....')
        officialReading.push(thisReading[counter-1]);

      } while (counter<3) 

    }
   return officialReading

    }; 


// coding it into the page //
let startButton = document.getElementById('start-button'); 
let descriptionResult = document.getElementById('readingDescription'); 

function pressStart() {

let ans1 = document.getElementById('q1response').value;
let ans2 = document.getElementById('q2response').value;
let ans3 = document.getElementById('q3response').value;
let result = tarotReading(ans1, ans2, ans3); 

descriptionResult.innerText = result; 
startButton.innerHTML = 'Get New Reading'; 

}

startButton.onclick = pressStart; 

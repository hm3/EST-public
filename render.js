/* Defines variables for sample full conversation. */
//let [x75] = greet alice bob [x73, [x3, []]];
var greet_bob_alice = 
  { command : {rulename: "greet", args: ["alice", "bob"]},
    removed: [],
    added: []
  }

var greet_alice_bob = 
  { command : {rulename: "greet", args: ["bob", "alice"]},
    removed: [],
    added: []
  }

var small_talk_weekend = { command : {rulename: "make_small_talk", args: ["alice", "0", "bob", "the_weekend", "positive"]},
    removed: [],
    added: []
  }
var small_talk_weather = { command : {rulename: "make_small_talk", args: ["alice", "0", "bob", "the_weather", "positive"]},
    removed: [],
    added: []
  }
//like_from_agreement (subject the_weekend) bob alice positive typical
var like_from_agreement = { command : {rulename: "like_from_agreement", args: ["(subject the_weekend)", "bob", "alice", "positive", "typical"]},
    removed: [],
    added: []
  }
//dislike_from_strong_disagreement (genre country_music) alice bob negative positive
var dislike_from_disagreement_alice = { command : {rulename: "dislike_from_strong_disagreement", args: ["(genre country_music)", "alice", "bob", "negative", "positive"]},
    removed: [],
    added: []
  }
//dislike_from_strong_disagreement (genre country_music) bob alice positive negative
var dislike_from_disagreement_bob = { command : {rulename: "dislike_from_strong_disagreement", args: ["(genre country_music)", "bob", "alice", "positive", "negative"]},
    removed: [],
    added: []
  }
//continue_talking (subject the_weekend) alice 1 positive typical positive bob
var continue_talking_weekend = { command : {rulename: "continue_talking", args: ["(subject the_weekend)", "alice", "1", "positive", "typical", "positive", "bob"]},
    removed: [],
    added: []
  }
//alice bob 2 (subject the_weekend) positive typical (genre pop_music)
var change_topic_weekend_pop = { command : {rulename: "change_topic", args: ["alice", "bob", "2",  "(subject the_weekend)", "positive", 
    "typical", "(genre pop_music)"]},
    removed: [],
    added: []
  }
//change_topic bob alice 1 (subject the_weekend) positive typical (genre country_music)
var change_topic_weekend_country = { command : {rulename: "change_topic", args: ["bob", "alice", "2",  "(subject the_weekend)", "positive", 
    "typical", "(genre country_music)"]},
    removed: [],
    added: []
  }
var change_topic_weather_baseball = { command : {rulename: "change_topic", args: ["alice", "bob", "2",  "(subject the_weather)", "positive", 
    "typical", "(activity playing_baseball)"]},
    removed: [],
    added: []
  }
//change_topic alice bob 2 (genre country_music) negative strong (genre pop_music)
var change_topic_country_pop = { command : {rulename: "change_topic", args: ["alice", "bob", "2",  "(genre country_music)", "negative", 
    "strong", "(genre pop_music)"]},
    removed: [],
    added: []
  }
//make_topic_talk (genre pop_music) bob 0 neutral alice
var topic_talk_pop = { command : {rulename: "make_topic_talk", args: ["(genre pop_music)", "bob", "0", "neutral", "alice"]},
    removed: [],
    added: []
  }
//make_topic_talk (genre country_music) bob 0 positive alice
var topic_talk_country = { command : {rulename: "make_topic_talk", args: ["(genre country_music)", "bob", "0", "positive", "alice"]},
    removed: [],
    added: []
  }
var topic_talk_baseball = { command : {rulename: "make_topic_talk", args: ["(activity playing_baseball)", "bob", "0", "positive", "alice"]},
    removed: [],
    added: []
  }
var continue_talking_baseball = { command : {rulename: "continue_talking", args: ["(activity playing_baseball)", "bob", "1", "neutral", "positive", "neutral", "alice"]},
    removed: [],
    added: []
  }
  var question_baseball = { command : {rulename: "question", args: ["(activity playing_baseball)", "bob", "neutral", "alice"]},
    removed: [],
    added: []
  }
  var respond_baseball = { command : {rulename: "respond", args: ["(activity playing_baseball)", "bob", "alice", "positive", "positive"]},
    removed: [],
    added: []
  }
  var reciprocate_baseball = { command : {rulename: "reciprocate_question", args: ["(activity playing_baseball)", "bob", "alice", "positive"]},
    removed: [],
    added: []
  }
  var enthusiastic_respond_baseball = { command : {rulename: "enthusiastic_respond", args: ["(activity playing_baseball)", "alice", "bob", "positive", "neutral"]},
    removed: [],
    added: []
  }
  //enthusiastic_respond (genre country_music) bob alice positive positive
 var enthusiastic_respond_country_bob = { command : {rulename: "enthusiastic_respond", args: ["(genre country_music)", "bob", "alice", "positive", "positive"]},
    removed: [],
    added: []
  }
//enthusiastic_respond (genre country_music) alice bob positive negative
 var enthusiastic_respond_country_alice = { command : {rulename: "enthusiastic_respond", args: ["(genre country_music)", "alice", "bob", "positive", "negative"]},
    removed: [],
    added: []
  }
//question (genre pop_music) bob neutral alice
var question_pop = { command : {rulename: "question", args: ["(genre pop_music)", "bob", "neutral", "alice"]},
    removed: [],
    added: []
  }
//question (genre country_music) bob positive alice
var question_country = { command : {rulename: "question", args: ["(genre country_music)", "bob", "positive", "alice"]},
    removed: [],
    added: []
  }
//respond (genre pop_music) bob alice neutral neutral
var respond_pop = { command : {rulename: "respond", args: ["(genre pop_music)", "bob", "alice", "neutral", "neutral"]},
    removed: [],
    added: []
  }
//reciprocate_question (genre pop_music) bob alice neutral
var reciprocate_pop = { command : {rulename: "reciprocate_question", args: ["(genre pop_music)", "bob", "alice", "neutral"]},
    removed: [],
    added: []
  }
//reciprocate_question (genre country_music) bob alice positive
var reciprocate_country = { command : {rulename: "reciprocate_question", args: ["(genre country_music)", "bob", "alice", "positive"]},
    removed: [],
    added: []
  }
//enthusiastic_respond (genre pop_music) alice bob neutral neutral
var enthusiastic_respond_pop = { command : {rulename: "enthusiastic_respond", args: ["(genre pop_music)", "alice", "bob", "neutral", "positive"]},
    removed: [],
    added: []
  }
//continue_talking (genre pop_music) bob 1 neutral typical neutral alice
var continue_talking_pop = { command : {rulename: "continue_talking", args: ["(genre pop_music)", "bob", "1", "neutral", "typical", "neutral", "alice"]},
    removed: [],
    added: []
  }
//say_goodbye bob alice 
var goodbye = { command : {rulename: "say_goodbye", args: ["bob", "alice"]},
    removed: [],
    added: []
  }
//change_topic alice bob 1 (subject the_weekend) positive typical (subject the_weather)
var change_topic_weekend_weather = toJSON("change_topic", ["alice", "bob", "1", "(subject the_weekend)", "positive", "typical", "(subject the_weather)"]);
//question (subject the_weekend) alice positive bob
var question_weekend = toJSON("question", ["(subject the_weekend)", "alice", "positive",  "bob"]);
//respond respond (subject the_weekend) alice bob positive positive
var respond_weekend_alice = toJSON("respond", ["(subject the_weekend)", "alice", "bob", "positive", "positive"]);
//reciprocate_question (subject the_weekend) alice bob positive
var reciprocate_weekend = toJSON("reciprocate_question", ["(subject the_weekend)", "alice", "bob", "positive"]);
//respond (subject the_weekend) bob alice positive positive
var respond_weekend_bob = toJSON("respond", ["(subject the_weekend)", "bob", "alice", "positive", "positive"]);
//change_topic bob alice 0 (subject the_weekend) positive typical (genre rock_music)
var change_topic_weekend_rock = toJSON("change_topic", ["bob", "alice", "0", "(subject the_weekend)", "positive", "typical", "(genre rock_music)"]);
//make_topic_talk (genre rock_music) alice 1 positive bob
var topic_talk_rock = toJSON("make_topic_talk", ["(genre rock_music)", "alice", "1", "positive", "bob"]);
//question (genre rock_music) alice positive bob
var question_rock = toJSON("question", ["(genre rock_music)", "alice", "positive", "bob"]);
//respond (genre rock_music) alice bob positive positive
var respond_rock = toJSON("respond", ["(genre rock_music)", "alice", "bob", "positive", "positive"]);
//annoyed_from_unfair_participation bob alice [x5, [x102, [x168, []]]];
var annoyed = toJSON("annoyed_from_unfair_participation", ["alice", "bob"]);
//terminate_conversation bob 3 
var terminate = toJSON("terminate_conversation", ["alice", "3"]);

var conversationBaseball = [greet_bob_alice, greet_alice_bob, small_talk_weather, change_topic_weather_baseball, topic_talk_baseball, continue_talking_baseball,
                           question_baseball, respond_baseball, reciprocate_baseball, enthusiastic_respond_baseball, continue_talking_baseball, goodbye];
var conversationPop = [greet_bob_alice, greet_alice_bob, small_talk_weekend, continue_talking_weekend, like_from_agreement, change_topic_weekend_pop, 
                      topic_talk_pop, question_pop, respond_pop, reciprocate_pop, enthusiastic_respond_pop, continue_talking_pop, goodbye];
var conversationCountry = [greet_alice_bob, greet_bob_alice, small_talk_weekend, like_from_agreement, change_topic_weekend_country, 
                          topic_talk_country, question_country, enthusiastic_respond_country_bob, dislike_from_disagreement_alice, 
                          reciprocate_country, enthusiastic_respond_country_alice, dislike_from_disagreement_bob, topic_talk_country, 
                          change_topic_country_pop, goodbye];
var conversationRock = [greet_alice_bob, greet_bob_alice, small_talk_weekend, question_weekend, respond_weekend_alice, reciprocate_weekend, 
                        respond_weekend_bob, change_topic_weekend_rock, topic_talk_rock, question_rock, respond_rock, goodbye];
var conversationPopTwo = [greet_alice_bob, greet_bob_alice, small_talk_weekend, question_weekend, respond_weekend_alice, reciprocate_weekend, 
                          respond_weekend_bob, change_topic_weekend_pop, topic_talk_pop, question_pop, respond_pop, goodbye];
var conversationBaseballTwo = [greet_alice_bob, greet_bob_alice, small_talk_weekend, question_weekend, respond_weekend_alice, reciprocate_weekend, 
                               respond_weekend_bob, change_topic_weekend_weather, small_talk_weather, change_topic_weather_baseball, goodbye];
var conversationImproper = [greet_bob_alice, greet_alice_bob, small_talk_weather, change_topic_weather_baseball, topic_talk_baseball, continue_talking_baseball,
                            continue_talking_baseball, continue_talking_baseball, continue_talking_baseball, continue_talking_baseball,
                            annoyed, terminate];

//pre-generated hard-coded conversations for "watching" option
var conversations = [conversationBaseball, conversationBaseballTwo, conversationPop, conversationPopTwo, conversationCountry, conversationRock, 
                    conversationImproper];
//Now an array of JSON objects 
var default_input = conversations[Math.floor(Math.random() * conversations.length)];

function toJSON(rule, arr){
  return {command : {rulename: rule, args: arr}, removed: [], added: []};
}

function display (transition) {
  var rendered = render(transition);
  document.getElementById("rendered").innerHTML += "<pre>"+rendered+"</pre>";
  var rule = renderRule(transition);
  document.getElementById("rule").innerHTML += "<pre>"+rule+"</pre>";
  }

// UI stuff
window.onload = function() {

var renderButton = document.getElementById("renderButton");
  renderButton.addEventListener("click", function () {
  var source =  conversations[Math.floor(Math.random() * conversations.length)] //document.getElementById('input').value; //put random list and take one here 
  //display(JSON.parse(source));
  display((source));
}); 

// Get rid of quotes introduced by JSON.stringify
var input_string = JSON.stringify(default_input);
// input_string = input_string.replace(/\"([^(\")"]+)\":/g,"$1:");
document.getElementById('input').innerHTML = input_string;
//document.getElementById("renderButton").click(); //generates conversation on load
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateDialogue(action, args) {

  switch(action) {
    case "greet" :
      var speaker = capitalize(args[0]);
      var other = capitalize(args[1]);
      return speaker + ": Good morning, " + other + ".";
    //make_small_talk alice 0 bob the_weekend positive
    case "make_small_talk" :
      var speaker = capitalize(args[0]);
      var weekendSmallTalkOne = "I love time at home listening to my music. Wish the weekend didn't go by so quickly.";
      var weekendSmallTalkTwo = "I went to a great concert this weekend. I can't\nbelieve it's Monday already. ";
      var weekendSmallTalk = [weekendSmallTalkOne, weekendSmallTalkTwo];
      var randomNumber = Math.floor(Math.random() * weekendSmallTalk.length); 
      if(args[3] == ("the_weather")){
        return speaker + ": This weather is nice. Good for playing sports.";
      }
      else if (args[3] == ("the_weekend")){
        return speaker + ": " + weekendSmallTalk[randomNumber];
      }
      return speaker + ": ";
    //make_topic_talk (genre pop_music) bob 0 neutral alice [x128, [x72, [x134, [x34, [x124, [x123, []]]]]
    case "make_topic_talk" :
      var speaker = capitalize(args[1]);
      var topicArray = args[0].split(" ");
      var topic = topicArray[1];
      if (args[3] == "positive"){
        var genericPositiveOne = "I think " + topic + " is a lot more interesting than people give it credit for.";
        var genericPositiveTwo = "I think " + topic  + " is cool, especially now. ";
        var genericPositiveThree = "I think more people should pay attention to " + topic + ".";
        var genericPositive = [genericPositiveOne, genericPositiveTwo, genericPositiveThree];
        return speaker + ": " + genericPositive[Math.floor(Math.random() * genericPositive.length)].replace("_", " ").replace(")", "");
      }
      else if (args[3] == "negative"){
        var genericNegativeOne = "Personally, I think " + topic + " is overrated.";
        var genericNegativeTwo = "I think people care too much about " + topic + ", but that's just me.";
        var genericNegativeThree = "I think " + topic + " is annoying, myself, but I can see why other people like it.";
        var genericNegative = [genericNegativeOne, genericNegativeTwo, genericNegativeThree];
        return speaker + ": " + genericNegative[Math.floor(Math.random() * genericNegative.length)].replace("_", " ").replace(")", "");
      }
      else{
        return speaker + ": Honestly, I don't know that much about " + topic.replace("_", " ").replace(")", "") + ".";
      }
      //continue_talking (subject the_weekend) alice 1 positive typical positive bob
      case "continue_talking" :
        var speaker = capitalize(args[1]);
        //get rid of "subject" in "subject the_weekend"
        var topicArray = args[0].split(" ");
        var topic = topicArray[1];
        var genericOne = "Some of the people I know like " + topic + ".";
        var genericTwo = "There's a lot of information out there about " + topic + ".";
        var genericThree = "It seems like " + topic + " is always changing.";
        var generic = [genericOne, genericTwo, genericThree];
        var randomNumber = Math.floor(Math.random() * generic.length); 
        if (args[0].indexOf("genre") !== -1){
          if (args[3] == "positive"){
            var musicPosOne = "I wish more people listened to " + topic + ".";
            var musicPos = [musicPosOne, genericOne, genericTwo, genericThree];
            return speaker + ": " + musicPos[Math.floor(Math.random() * musicPos.length)].replace("_", " ").replace(")", "");
          }
          else if (args[3] == "negative"){
            var musicNegOne = "I think they play too much " + topic + " on the radio.";
            var musicNeg = [musicNegOne, genericOne, genericTwo, genericThree];
            return speaker + ": " + musicNeg[Math.floor(Math.random() * musicNeg.length)].replace("_", " ").replace(")", "");
          }
          else{
            return speaker +" : I hear " + topic.replace("_", " ").replace("(", "").replace(")", "") + 
            " is pretty good but I'm not\nvery familiar with any of the singers."
          }
        }
      else if (args[0].indexOf("activity") !== -1){
          var activityOne = capitalize(topic) + " is a lot of work.";
          var activityTwo = "You have to practice a lot to be good at " + topic + ".";
          var activityThree = "I think " + topic + " is a lot more fun when you have a lot of people.";
          var activity = [activityOne, activityTwo, activityThree, genericOne, genericTwo, genericThree];
          return speaker + ": " + activity[Math.floor(Math.random() * activity.length)].replace("_", " ").replace(")", "");
        }
      else if(topic.contains("weekend")){
        return speaker + ": Doesn't the weekend always go by way too fast?";
      }
      else{
        return speaker + ": " + generic[randomNumber].replace("_", " ").replace("(", "").replace(")", "");
      }
    //change_topic alice bob 2 (subject the_weekend) positive typical (genre pop_music) 
    case "change_topic" :
      var speaker = capitalize(args[0]);
      //get rid of "subject" in "subject the_weekend"
      var oldTopicArray = args[3].split(" ");
      var oldTopic = oldTopicArray[1];
      var newTopicArray = args[6].split(" ");
      var newTopic = newTopicArray[1];
      //TODO: Add "Speaking of X..."
      var startOfSentence = speaker + ": Talking about " + oldTopic + " reminds me of " + newTopic;
      if(newTopic.indexOf("music") !== -1){
        var transitionToMusicOne = startOfSentence.split(")").join("").split("_").join(" ") + "; I listened\nto a lot of music this weekend.";
        var transitionToMusicTwo = startOfSentence.split(")").join("").split("_").join(" ") + "; I heard it on the radio \nall weekend.";
        transitionToMusic = [transitionToMusicOne, transitionToMusicTwo];
        return transitionToMusic[(Math.floor(Math.random() * transitionToMusic.length))];
      }
      else if(newTopicArray[0].indexOf("activity") !== -1){
        var transitionToActivityOne = "; I did a lot of\n" + newTopic.replace("_", " ").replace("(", "").replace(")", "") + 
            "on Saturday. It was nice outside, just like today.";
        var transitionToActivityTwo = "; I think this weather is \ngreat for " + newTopic.replace("_", " ").replace("(", "").replace(")", "") + ".";
        var transitionToActivity = [transitionToActivityOne, transitionToActivityTwo];
        return startOfSentence.split(")").join("").split("_").join(" ") + " " + transitionToActivity[Math.floor(Math.random() * transitionToActivity.length)];
      }
      else if((newTopic.indexOf("the_weather") !== -1) && (oldTopic.indexOf("the_weekend") !== -1)){
        return startOfSentence.split(")").join("").split("_").join(" ") + ": it sure was nice this weekend.";
      }
      else if ((newTopic.indexOf("the_weekend") !== -1) && (oldTopic.indexOf("the_weather") !== -1)){
        return startOfSentence.split(")").join("").split("_").join(" ") + "; it sure was nice this weekend.";
      }
      else{
        return startOfSentence.split(")").join("").split("_").join(" ") + ".";
      }
    //question (genre pop_music) bob neutral alice [x145, [x152, [x148, [x139, [x138, []]]]]];
    case "question" :
      var speaker = capitalize(args[3]);
      var spoken_to = capitalize(args[1]);
      var topicArray = args[0].split(" ");
      var topic = topicArray[1];
      var questionOne = "Can you tell me more about ";
      var questionTwo = "What do you think about "; 
      var questionThree = "What do you know about ";
      if (topic.contains("weekend")){
        return speaker + ": How was your weekend, " + spoken_to + "?";
      }
      var questions = [questionOne, questionTwo, questionThree];
      return speaker + ": " + questions[Math.floor(Math.random() * questions.length)] + topic.replace("_", " ").replace("(", "").replace(")", "") + ", " + 
             spoken_to + "?";
    //reciprocate_question (genre pop_music) bob alice neutral
    case "reciprocate_question" :
      var speaker = capitalize(args[1]);
      var spoken_to = capitalize(args[2]);
      return speaker + ": What about you, " + spoken_to + "?";
    //respond (genre pop_music) bob alice neutral neutral
    case "respond" :
      var speaker = capitalize(args[1]);
      var topicArray = args[0].split(" ");
      var topic = topicArray[1];
      if (topic.contains("weekend")){
        var weekendOne = ": It wasn't bad.";
        var weekendTwo = ": I didn't do much.";
        var weekendThree = ": Fine. I got a lot of homework done.";
        var weekendFour = ": It was fine.";
        var weekendFive = ": It was alright.";
        var weekend = [weekendOne, weekendTwo, weekendThree, weekendFour, weekendFive];
        return speaker + weekend[Math.floor(Math.random() * weekend.length)];
      }
      if (args[4] == "positive"){
        return speaker + ": Well, I like " + topic.replace("_", " ").replace("(", "").replace(")", "") + ". I think it's cool.";
      }
      else if (args[4] == "negative"){
        return speaker + ": I don't really like " + topic.replace("_", " ").replace("(", "").replace(")", "") + ". It's not my favorite.";
      }
      else {
        return speaker + ": I don't know that much about it.";
      }
    //enthusiastic_respond (genre pop_music) alice bob neutral neutral
    case "enthusiastic_respond" :
      var speaker = capitalize(args[1]);
      var topicArray = args[0].split(" ");
      var topic = topicArray[1];
      if (args[4] == "positive"){
        return speaker + ": I love it. It's so interesting.";
      }
      else if (args[4] == "negative"){
        return speaker + ": I hate it. I think it's so boring.";
      }
      else {
        return speaker + ": I really don't know anything about it.";
      }
    //say_goodbye bob alice
    case "say_goodbye" :
      var speaker = capitalize(args[0]);
      var spoken_to = capitalize(args[1]);
      var goodbyeOne = "I have to get going. Talk to you later, ";
      var goodbyeTwo = "I have to go to class, but it was nice talking to you, ";
      var goodbyeThree = "I have to go now, but take care, ";
      var goodbyeFour = "I have to go, but I'll catch you later, ";
      var goodbyeFive = "Well, I have to leave. See you later, ";
      var goodbyeSix = "I've got to go. See you around, ";
      var goodbyes = [goodbyeOne, goodbyeTwo, goodbyeThree, goodbyeFour, goodbyeFive];
      return speaker + ": " + goodbyes[Math.floor(Math.random() * goodbyes.length)] + spoken_to + "." +
             "\n" + spoken_to + ": Goodbye, " + speaker + "."; 
    case "terminate_conversation" : 
      var speaker = capitalize(args[0]);
      return speaker + ": I have to go now. Goodbye."
    //like_from_agreement (subject the_weekend) bob alice positive typical
    case "like_from_agreement" :
      var liking = capitalize(args[1]);
      var liked = capitalize(args[2]);
      var topicArray = args[0].split(" ");
      var topic = topicArray[1];
      var likingOne = ": I feel the same way.";
      var likingTwo = ": I completely agree!";
      var likingThree = ": I'm with you.";
      var likingArr = [likingOne, likingTwo, likingThree];
      return liking + likingArr[Math.floor(Math.random() * likingArr.length)];
    //dislike_from_strong_disagreement (genre country_music) bob alice positive negative
    case "dislike_from_strong_disagreement" :
      var disliking = capitalize(args[1]);
      var disliked = capitalize(args[2]);
      var topicArray = args[0].split(" ");
      var topic = topicArray[1];
      var dislikeOne = disliking + ": Oh, really? I feel the opposite.";
      var dislikeTwo = disliking + ": Yeah? Wow, we have completely different opinions about that.";
      var dislikeThree = disliking + ": Oh, I feel totally differently.";
      var dislikingStatements = [dislikeOne, dislikeTwo, dislikeThree];
      return dislikingStatements[Math.floor(Math.random() * dislikingStatements.length)];
    //annoyed_from_unfair_participation bob alice
    case "annoyed_from_unfair_participation" :
      var annoyed = capitalize(args[0]);
      var catalyst = capitalize(args[1]);
      return annoyed + ": Uh-huh, well...";

  }
  console.log("No rendering rule for "+action);
  return "";

}

function generateRule(action, args) {

  switch(action) {
    case "greet" :
      var greetFactOne = "Greeting someone acknowledges them and lets them know you are open to conversation.";
      var greetFactTwo = "A good time to start a conversation is before class starts.";
      var greetFactThree = "Good places to start conversation: waiting in a line, a club meeting, on the bus.";
      var greetFacts = [greetFactOne, greetFactTwo, greetFactThree];
      return greetFacts[Math.floor(Math.random() * greetFacts.length)];
    case "make_small_talk" :
      return "Small talk makes people more comfortable around each other."
    case "make_topic_talk" : 
    case "continue_talking" :
      var tFactOne = "Getting past small talk makes people more comfortable around each other.";
      var tFactTwo = "An integral part of conversation is motivating someone else to speak; you can do this by sharing your own thoughts.";
      var tFactThree = "Sharing more about yourself at a similar rate as your conversational partner will keep your partner comfortable.";
      var tFactFour = "Good topics for casual conversation include: TV shows, classes you're taking, or plans for the weekend.";
      var tFactFive = "Make it a goal to find topics that interest both of you: this will make you both enjoy the conversation more.";
      var tFactSix = "Don't be repetitive; try to talk about a variety of topics.";
      var talkingFacts = [tFactOne, tFactTwo, tFactThree, tFactFour, tFactFive, tFactSix];
      if (args[3] == "neutral"){
        var neutralOne = "If neither of you have much to say about the current topic, change topics\nin order to keep conversation going smoothly.";
        var neutralTwo = "If conversation is becoming repetitive, change topics in order to\nkeep the conversation running smoothly.";
        var neutralThree = "If your conversation partner hasn't contributed to the conversation in a while, \nyou should try talking about something else.";
        var neutralFacts = [neutralOne, neutralTwo, neutralThree];
        return neutralFacts[Math.floor(Math.random() * neutralFacts.length)];
      }
      else{
        return talkingFacts[Math.floor(Math.random() * talkingFacts.length)];
      } 
    case "question" :
    case "reciprocate_question" :
    case "respond" :
    case "enthusiastic_respond" :
      var qFactOne = "Asking questions shows the other person that you are interested in what they are saying.";
      var qFactTwo = "Asking a question clearly shows the other person it's their turn to speak.";
      var qFactThree = "Questions keep conversation going.";
      var qFactFour = "Open-ended questions, that can't be answered with yes or no, are more conducive to conversation than Y/N questions.";
      var qFactFive = "Avoid only asking questions and never giving information about yourself; this makes the conversation one-sided.";
      var questionFacts = [qFactOne, qFactTwo, qFactThree, qFactFour, qFactFive];
      return questionFacts[Math.floor(Math.random() * questionFacts.length)]; 
    case "change_topic" :
      return "When changing a topic, it should relate to the current topic, otherwise your\nconversation partner might become confused."
    case "like_from_agreement" :
      var lFactOne = "If you and your conversation partner agree, you might be more comfortable around each other.";
      var lFactTwo = "If you and your conversation partner have something in common, you will like talking to each other more.";
      var likeFacts = [lFactOne, lFactTwo];
      return likeFacts[Math.floor(Math.random() * likeFacts.length)];
    case "dislike_from_strong_disagreement" :
      return "If you and your conversation partner strongly disagree, your partner might feel uncomfortable.";
    case "annoyed_from_unfair_participation" :
      return "If one person dominates the conversation, the other will become annoyed and not want to talk anymore. \n" + 
      "Generally, you and your conversational partner should spend similar amounts of time speaking.\n" + 
      "An exception to this is if one person asks another to explain something, but that did not happen in this scenario.";
    case "terminate_conversation" :
      return "";
    case "say_goodbye" :
      return "When a conversation is over, you should not simply walk away, but acknowledge that it took place.";
  }
  console.log("No rendering rule.");
  return action+(JSON.stringify(args));
}
var fontSize = 4;
var transition;

function render (t) {
  transition = t;
  var dialogue = "";
  //console.log(Object.keys(transition));
  console.log(transition.length);
  //console.log(transition[0].command);
  for (var i = 0; i < transition.length; i++){
  var line = transition[i].command;
  console.log(line);
  var action = line.rulename;
  //var dialogue = generateDialogue(action, line.args);
  dialogue += "\n" + generateDialogue(action, line.args);
}
  console.log(transition);
  return dialogue.fontsize(fontSize);

}

var ruleTransition;

function renderRule(t){
  ruleTransition = t;
  var rule = "";
  for (var i = 0; i < ruleTransition.length; i++){
  var line = ruleTransition[i].command;
  var action = line.rulename;
  rule += "\n" + generateRule(action, line.args);
}
  return rule.fontsize(fontSize);
}




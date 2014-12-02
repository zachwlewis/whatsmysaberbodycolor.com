$( "#main-form" ).submit(function() {
  

  getSaberbody($( "#alignment" ).val(), $( "#level" ).val(), $( "#location" ).val());


  return false;
});

function getSaberbody(alignment, level, location) {
  var sbImage = ["brown", "cyan", "green", "navy", "purple", "red", "salmon"];
  var sbColor = ["#a17031", "#15b5d7", "#74d700", "#4186db", "#7f4fff", "#ff0000", "#ff5686"];
  var sbTitle = ["Bronzium Brown", "Cortosis Cyan", "Wildstar Red", "Novice Navy", "Royalty Hue", "Sabersith Red", "Sabersith Salmon"];
  var sbDescription = [
    "Your saberbody is finely tuned to earthen material, such as sands, clays and dusts. You're a natural Force user, able to literally grab ample handfuls of the fabled \"back side\" of the Force and bend it to your will. By making use of the environment and the Force, you are both silent <i>and</i> deadly. This marriage of strength and stealth allows you to surprise all but the most learned of Force users, since this side of the Force was lost \"a long <b>long</b> time ago.\"",
    "As powerful as it is paradoxical, your saberbody has the ability to short circuit any lightsaber beam it touches. Your attunement with the light side of the Force gives you a mental acuity that allows you to dive headlong into any saberfray, making sure you're struck by opponents' lightsabers while never touching your own saberself. This aggressive-yet-cautious fighting style often catches your enemies off-guard, giving you the upper-hand.",
    "The first of the evolved, your saberbody pulses with unbridled Force. When Wildstar Solo realized the potential your saberspecies contained, he brazenly named it after himself. Unfortunately, Han Solo's evolution caused several unexpected side-effects, protanopia being one of them. This mutation in Han's 46XY was passed down to Wildstar, ultimately leading to your saberbody's unfortunate misnomer.",
    "Although not as Force-full as other saberbodied individuals, your connection with the light side of the Force still provides you with many saber-like qualities, you saberbody being one of them. Although you still crackle and hiss when you touch another lightsaber, you are unable to hum or woosh as you move, making you appear foolish and laughable to your foes; however, this \"flaw\" provides you with the ability to move silently. This clever adaptation is why many think &mdash; although incorrectly &mdash; that your saberspecies is able to apparate. <i>Editor's note: There have been two reported cases of saberbodied individuals being born to muggle parents. It is unknown if they ever received an apparation license.",
    "The most pompous of all saberbodies, you hold great contempt for those beneath you. This isn't always viewed as negative, as you see it your responsibility to make sure those less fortunate than yourself are taken care of. It is for this reason that your type often rises to positions of power through bigoted charity. Since you rarely speak with those lower than yourself, you are viewed as a very generous and caring saberperson and are very well respected in the non-saberbodied community.",
    "Hateful and powerful, your saberbody glows and hums with the pure power of the dark side of the Force. Few have stood in your way and even fewer have lived to tell their tales. Reviled by those of the light side, your life is constantly in danger; however, that danger is exactly what you live for, as you seek to destroy anyone &mdash; or anything &mdash; that stands in your saberway.",
    "While the dark side of the Force guides your actions, it makes a mockery of your incompetence with a cuddly, pinkish hue. Your insistence that you are \"actually <b>salmon</b> in color\" usually falls on deaf ears, for the owners of those ears can't hear you because they are laughing at you. This disrespect can drive you into a saberfury, causing you to strike suddenly and without restraint, in addition to a slightly brighter and fiercer maroon hue."
  ];
  var sbIndex = 0;
  
  if ( alignment == "light") {
    if (level == "average" ) {
      sbIndex = 3;
    } else {
      if ( location == "hoth" ) {
        sbIndex = 1;
      } else if ( location == "bespin" ) {
        sbIndex = 4;
      } else {
        sbIndex = 2;
      }
    }
  } else if ( alignment == "dark" ) {
    if ( level == "evolved" ) {
      sbIndex = 5;
    } else {
      sbIndex = 6;
    }
  }

  // Update Tweet button to have new data.
  $( "#tweet-button" ).attr( "data-text", "My #saberbody color is " + sbTitle[sbIndex] + "! What's yours?" );
  window.twttr=(function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs"));

  $( "#main-form" ).fadeOut( function() {
    $( "#page-title" ).html( sbTitle[sbIndex] );
    $( "#page-title" ).attr( "style", "font-weight: bold; color: " + sbColor[sbIndex] );
    $( "#page-description" ).html( sbDescription[sbIndex] );
    $( "#result-image" ).attr( "src", "img/" + sbImage[sbIndex] + "-body.png" );
    $( "#result" ).fadeIn();
  });
};
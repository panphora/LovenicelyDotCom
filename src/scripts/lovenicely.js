var subtitles = [
	"Stories about that time you got trapped in your parents' basement.",
	"Stories about that time you waited, with every breath, for a meteorite to crash into the earth.",
	"Stories about that time you forgot you had a body.",
	"Stories about that time you got lost in a maze and realized it was a maze.",
	"Stories about that time you left with them even though they weren't your friends any more.",
	"Stories about that time everyone in the room was laughing except the person you had been a moment ago.",
	"Stories about that time the night sky fell down all around you and it tasted like a new memory.",
	"Stories about that time an adult taught you how to completely ignore a child.",
	"Stories about that time you could feel the rotation of the earth.",
	"Stories about that time you forgave everyone.",
	"Stories about that time you understood someone that no one else understood.",
	"Stories about that time you recognized that the players on the stage weren't the ones creating the play.",
	"Stories about that time you noticed your parents didn't see something because they didn't want to.",
	"Stories about that time your heart felt like it was burning.",
	"Stories about that time you licked the tears off every face in the room.",
	"Stories about that time you heard the ticking of his heart.",
	"Stories about that time you rode an oversized duckling into the sunset.",
	"Stories about that time you went sailing and forgot the shore.",
	"Stories about that time you saw true darkness, loved it, and were surprised when it took hold of you.",
	"Stories about that time you tied a knot just so you could try to get it undone again.",
	"Stories about that time you wished upon a star and believed in the wish more than the star.",
	"Stories about that time you went swimming with wild animals and the air smelled like blood.",
	"Stories about that time you fell in love with a princess who was actually a wise old woman in disguise.",
	"Stories about that time you fled from ghosts who couldn't touch you and sat on a throne of thorns for weeks.",
	"Stories about that time you wanted to crawl under your feelings, but you knew they would give you away.",
	"Stories about that time you weren't afraid of anything, and then you were afraid of that.",
	"Stories about that time you pretended to be a tree and lost all your leaves when autumn came.",
	"Stories about that time you built a palace and ruled over it with kind devotion.",
	"Stories about that time you learned magic and forgot everyone's names.",
	"Stories about that time you opened three doors in a row and each one revealed a brand new world.",
	"Stories about that time you walked through a botanical garden and pretended like you had designed it.",
	"Stories about that time you stepped from a neighbor's yard into your own without tripping over the fence."
	]


var subtitleCache = [];

function addSubtitleToCache (subtitle) {
	if (subtitleCache.length > 10) {
		subtitleCache.shift();
	}

	subtitleCache.push(subtitle);
}

function addARandomSubtitle () {
	var subtitle = subtitles[Math.floor(subtitles.length * Math.random())];

	if (subtitleCache.indexOf(subtitle) === -1) {
		$('.subtitle-text').text(subtitle);
		addSubtitleToCache(subtitle);
	} else {
		addARandomSubtitle();
	}
}


$(function () {
  var isMobile = $(document).width() < 800;

	$('.refresh-icon').hover(function () {
		$(this).addClass('animate-spin');
	}, function () {
		$(this).removeClass('animate-spin');
	});

	addARandomSubtitle();

	$('.refresh-icon').click(function () {
		addARandomSubtitle();
	});

  addAbilityToEditParagraphs(isMobile);
});



function generateFormHtml (pId, originalText) {
  var formHtmlArr = [];
  formHtmlArr.push('<form class="edit-p-form clearfix" action="/paragraph-edit" method="POST">');
  formHtmlArr.push('<input name="pageTitle" type="hidden" value="' + document.title + '">');
  formHtmlArr.push('<input name="pId" type="hidden" value="' + pId + '">');
  formHtmlArr.push('<h4>Send me your suggested changes</h4>');
  formHtmlArr.push('<textarea class="edit-p-textarea" name="changes">');
  formHtmlArr.push(originalText);
  formHtmlArr.push('</textarea>');
  formHtmlArr.push('<button type="submit" class="left white">');
  formHtmlArr.push('Submit');
  formHtmlArr.push('</button>');
  formHtmlArr.push('<button class="left cancel white">');
  formHtmlArr.push('Cancel');
  formHtmlArr.push('</button>');
  formHtmlArr.push('<form>');
  return formHtmlArr.join('');
}

function addAbilityToEditParagraphs (isMobile) {

  $('body').on('click', '.main-text-container p button.cancel', function (event) {
    event.preventDefault();

    var $formElem = $(this).closest('form').eq(0);
    var $originalP = $formElem.data('originalP');

    $formElem.closest('p').eq(0).replaceWith($originalP);

  });

  if (!isMobile) {
    $('body').on('click', '.main-text-container p .edit-paragraph', function (event) {
      event.preventDefault();
      
      $elem = $(this);
      $pElem = $(this).parent();
      $pCopy = $pElem.clone();

      var pId = $elem.data('p-id');
      var originalText = $.trim($pElem.text());

      var $form = $(generateFormHtml(pId, originalText));
      $form.data('originalP', $pCopy);

      $pElem.html('').append($form);

    });

    $('.main-text-container p').not('.divider').each(function (index, elem) {
      $(elem).append('<a href="#" class="edit-paragraph" data-p-id="' + index + '"><i class="fa fa-pencil"></i></a>');
    });
  }
}
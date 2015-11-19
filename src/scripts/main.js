$(function () {

	if ($("#jplayer_lumberjack_graves").length) {
		$("#jplayer_lumberjack_graves").jPlayer({
			ready: function(event) {
				$(this).jPlayer("setMedia", {
					title: "Lumberjack Graves Dug Deep in the Ocean Floor",
					mp3: "/audio/lumberjack-graves.mp3",
					oga: "/audio/lumberjack-graves.ogg"
				});
			},
			play: function() { // Avoid multiple jPlayers playing together.
				$(this).jPlayer("pauseOthers");
			},
			timeFormat: {
				padMin: false
			},
			swfPath: "js",
			supplied: "mp3,oga",
			cssSelectorAncestor: "#jplayer_lumberjack_graves_container",
			smoothPlayBar: false,
			remainingDuration: true,
			keyEnabled: true,
			keyBindings: {
				// Disable some of the default key controls
				muted: null,
				volumeUp: null,
				volumeDown: null
			},
			wmode: "window"
		});
	}

	if ($("#jplayer_save_your_heart").length) {
		$("#jplayer_save_your_heart").jPlayer({
			ready: function(event) {
				$(this).jPlayer("setMedia", {
					title: "Save Your Heart",
					mp3: "/audio/save-your-heart.mp3",
					oga: "/audio/save-your-heart.ogg"
				});
			},
			play: function() { // Avoid multiple jPlayers playing together.
				$(this).jPlayer("pauseOthers");
			},
			timeFormat: {
				padMin: false
			},
			swfPath: "js",
			supplied: "mp3,oga",
			cssSelectorAncestor: "#jplayer_save_your_heart_container",
			smoothPlayBar: false,
			remainingDuration: true,
			keyEnabled: true,
			keyBindings: {
				// Disable some of the default key controls
				muted: null,
				volumeUp: null,
				volumeDown: null
			},
			wmode: "window"
		});
	}

  if ($("#jplayer_abmad_chap1").length) {
    $("#jplayer_abmad_chap1").jPlayer({
      ready: function(event) {
        $(this).jPlayer("setMedia", {
          title: "Meetings and Wanderers",
          mp3: "/audio/a-boy-meets-a-dragon/chapter-1/a-boy-meets-a-dragon-chapter-1.mp3",
          oga: "/audio/a-boy-meets-a-dragon/chapter-1/a-boy-meets-a-dragon-chapter-1.ogg"
        });
      },
      play: function() { // Avoid multiple jPlayers playing together.
        $(this).jPlayer("pauseOthers");
      },
      timeFormat: {
        padMin: false
      },
      swfPath: "js",
      supplied: "mp3,oga",
      cssSelectorAncestor: "#jplayer_abmad_chap1_container",
      smoothPlayBar: false,
      remainingDuration: true,
      keyEnabled: true,
      keyBindings: {
        // Disable some of the default key controls
        muted: null,
        volumeUp: null,
        volumeDown: null
      },
      wmode: "window"
    });
  }

  if ($("#jplayer_abmad_chap2").length) {
    $("#jplayer_abmad_chap2").jPlayer({
      ready: function(event) {
        $(this).jPlayer("setMedia", {
          title: "Where is the flood?",
          mp3: "/audio/a-boy-meets-a-dragon/chapter-2/a-boy-meets-a-dragon-chapter-2.mp3",
          oga: "/audio/a-boy-meets-a-dragon/chapter-2/a-boy-meets-a-dragon-chapter-2.ogg"
        });
      },
      play: function() { // Avoid multiple jPlayers playing together.
        $(this).jPlayer("pauseOthers");
      },
      timeFormat: {
        padMin: false
      },
      swfPath: "js",
      supplied: "mp3,oga",
      cssSelectorAncestor: "#jplayer_abmad_chap2_container",
      smoothPlayBar: false,
      remainingDuration: true,
      keyEnabled: true,
      keyBindings: {
        // Disable some of the default key controls
        muted: null,
        volumeUp: null,
        volumeDown: null
      },
      wmode: "window"
    });
  }

  if ($("#jplayer_abmad_chap3").length) {
    $("#jplayer_abmad_chap3").jPlayer({
      ready: function(event) {
        $(this).jPlayer("setMedia", {
          title: "Searching for scraps",
          mp3: "/audio/a-boy-meets-a-dragon/chapter-3/a-boy-meets-a-dragon-chapter-3.mp3",
          oga: "/audio/a-boy-meets-a-dragon/chapter-3/a-boy-meets-a-dragon-chapter-3.ogg"
        });
      },
      play: function() { // Avoid multiple jPlayers playing together.
        $(this).jPlayer("pauseOthers");
      },
      timeFormat: {
        padMin: false
      },
      swfPath: "js",
      supplied: "mp3,oga",
      cssSelectorAncestor: "#jplayer_abmad_chap3_container",
      smoothPlayBar: false,
      remainingDuration: true,
      keyEnabled: true,
      keyBindings: {
        // Disable some of the default key controls
        muted: null,
        volumeUp: null,
        volumeDown: null
      },
      wmode: "window"
    });
  }

  if ($("#jplayer_abmad_chap4").length) {
    $("#jplayer_abmad_chap4").jPlayer({
      ready: function(event) {
        $(this).jPlayer("setMedia", {
          title: "Gather your popcorn",
          mp3: "/audio/a-boy-meets-a-dragon/chapter-4/a-boy-meets-a-dragon-chapter-4.mp3",
          oga: "/audio/a-boy-meets-a-dragon/chapter-4/a-boy-meets-a-dragon-chapter-4.ogg"
        });
      },
      play: function() { // Avoid multiple jPlayers playing together.
        $(this).jPlayer("pauseOthers");
      },
      timeFormat: {
        padMin: false
      },
      swfPath: "js",
      supplied: "mp3,oga",
      cssSelectorAncestor: "#jplayer_abmad_chap4_container",
      smoothPlayBar: false,
      remainingDuration: true,
      keyEnabled: true,
      keyBindings: {
        // Disable some of the default key controls
        muted: null,
        volumeUp: null,
        volumeDown: null
      },
      wmode: "window"
    });
  }

  if ($("#jplayer_abmad_chap5").length) {
    $("#jplayer_abmad_chap5").jPlayer({
      ready: function(event) {
        $(this).jPlayer("setMedia", {
          title: "In which Mr. Scrummy returns from the brink",
          mp3: "/audio/a-boy-meets-a-dragon/chapter-5/a-boy-meets-a-dragon-chapter-5.mp3",
          oga: "/audio/a-boy-meets-a-dragon/chapter-5/a-boy-meets-a-dragon-chapter-5.ogg"
        });
      },
      play: function() { // Avoid multiple jPlayers playing together.
        $(this).jPlayer("pauseOthers");
      },
      timeFormat: {
        padMin: false
      },
      swfPath: "js",
      supplied: "mp3,oga",
      cssSelectorAncestor: "#jplayer_abmad_chap5_container",
      smoothPlayBar: false,
      remainingDuration: true,
      keyEnabled: true,
      keyBindings: {
        // Disable some of the default key controls
        muted: null,
        volumeUp: null,
        volumeDown: null
      },
      wmode: "window"
    });
  }

	$('.main-contact-me-link').click(function (event) {
		event.preventDefault();

		if (!$('.main-contact-form').is(':visible')) {
			$('.main-contact-form').slideDown();
		} else {
			$('.main-contact-form').slideUp();
		}
	});
});
$(document).ready(function () {
    $('body').hide();
    $(window).on('load', function() {
        $('body').show();

        // get the vw & vh used in css, in js
        const vw = (coef) => window.innerWidth * (coef/100);
        const vh = (coef) => window.innerHeight * (coef/100);

        //Registering GSAP's plugins
        // gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin);

        // //Initialize GSAP timeline
        // const preloadAnim = gsap.timeline({onComplete: hidePreloader});

        // // // Uncomment for preloader
        // // Prepare text for animation by putting it in spans
        // let titleArr = $('#rectangle h1').text().split("");
        // let artNameArr = $('#artworkName').text().split("");
        // let artistArr =  $('#artist').text().split("");
        // $('#rectangle h1').empty();
        // $('#artworkName').empty();
        // $('#artist').empty();
        // titleArr.forEach(letter => {
        //     $('#rectangle h1').append("<span>" + letter + "</span>");
        // });
        // artNameArr.forEach(letter => {
        //     $('#artworkName').append("<span>" + letter + "</span>");
        // });
        // artistArr.forEach(letter => {
        //     $('#artist').append("<span>" + letter + "</span>");
        // });

        // // Create particle effect
        // let particleNo = 70;
        // let particleCounter = 0;
       
        // while (particleCounter < particleNo) {
        //     let particle = $('<span class="particle">');
        //     let particleDimension = parseInt(Math.random() * 7 + 1).toString() + 'px';
        //     let blurDimension = parseFloat(Math.random() * 4).toString() + 'px';
        //     particle.css({
        //         'top': parseInt(Math.random() * 100 + 1).toString() + 'vh',
        //         'left': parseInt(Math.random() * 100 + 1).toString() + 'vw',
        //         'width': particleDimension,
        //         'height': particleDimension,
        //         'filter': 'blur(' + blurDimension +')',
        //     });
        //     $('#preloader').append(particle);
        //     particleCounter++;
        // }

        // const particleAnim = gsap.to($('.particle'), {
        //     x: "random(-200, 200)",
        //     y: "random(-200, 200)",
        //     duration: 10,
        //     ease: Power1.easeInOut,
        //     repeat: -1,
        //     repeatRefresh: true,
        // })
        // const particleFlash = gsap.to($('.particle'), {
        //     autoAlpha: "random(0, 1)",
        //     ease: Power1.easeInOut,
        //     repeat: -1,
        //     duration: 2,
        //     repeatRefresh: true
        // });


        // // Animate pictures and rectangle
        // // Make preloader responsive
        // let width = $(window).width();
        // // Get updated width
        // $(window).resize(function() {
        //     width = $(window).width();
        // });

        // if (width >= 1400) {
        //     // Add hand animations
        //     preloadAnim.fromTo($('#rightHand'), 2, {
        //         autoAlpha: 0,
        //     }, {
        //         autoAlpha: 1,
        //         ease: 'power1.inOut'
        //     })
        //     .to($('#rightHand'), 2, {
        //         xPercent: 225,
        //         scaleX: 2.5001,
        //         scaleY: 2.5001,
        //         fill: '#FFCE3B',
        //         force3D: true,
        //         rotationZ: 0.001,
        //         ease: 'power1.inOut', 
        //     })
        //     .fromTo($('#leftHand'), 2, {
        //         autoAlpha: 0,
        //     }, {
        //         autoAlpha: 1,
        //         ease: 'power1.inOut'
        //     },'-=4')
        //     .to($('#leftHand'), 2, {
        //         xPercent: -195,
        //         scaleX: 2.5001,
        //         scaleY: 2.5001,
        //         fill: '#FFCE3B',
        //         force3D: true,
        //         rotationZ: 0.001,
        //         ease: 'power1.inOut', 
        //     }, '-=2')
        // }
        // // preloadAnim.fromTo($('#rightHand'), 2, {
        // //     autoAlpha: 0,
        // // }, {
        // //     autoAlpha: 1,
        // //     ease: 'power1.inOut'
        // // })
        // // .to($('#rightHand'), 2, {
        // //     xPercent: 225,
        // //     scaleX: 2.5001,
        // //     scaleY: 2.5001,
        // //     fill: '#FFCE3B',
        // //     force3D: true,
        // //     rotationZ: 0.001,
        // //     ease: 'power1.inOut', 
        // // })
        // // .fromTo($('#leftHand'), 2, {
        // //     autoAlpha: 0,
        // // }, {
        // //     autoAlpha: 1,
        // //     ease: 'power1.inOut'
        // // },'-=4')
        // // .to($('#leftHand'), 2, {
        // //     xPercent: -195,
        // //     scaleX: 2.5001,
        // //     scaleY: 2.5001,
        // //     fill: '#FFCE3B',
        // //     force3D: true,
        // //     rotationZ: 0.001,
        // //     ease: 'power1.inOut', 
        // // }, '-=2')
        // preloadAnim.fromTo($('#left'), 1, {
        //     height: vh(0),
        //     background: "rgb(23, 23, 23)",
        //     ease: "slow(0.7, 0.7, false)"
        // }, {
        //     height: vh(70),
        //     background: "rgb(23, 23, 23)"
        // }, "-=2")
        // .to($('#left'), 0, {css: {top: 0}}, '-=1')
        // .fromTo($('#top'), 1, {
        //     width: vw(0),
        //     background: "rgb(23, 23, 23)",
        //     ease: "slow(0.7, 0.7, false)"
        // }, {
        //     width: vw(75),
        //     background: "rgb(23, 23, 23)"
        // }, '-=1')
        // .to($('#top'), 0,  {css: {right: 0}})
        // .to($('#left'), 1, {
        //     height: 0,
        //     ease: "slow(0.7, 0.7, false)"
        // }, '-=1')
        // .to($('#left'), 0, {css: {autoAlpha: 0,}})
        // .to($('#top'), 1, {
        //     width: 0,
        //     ease: "slow(0.7, 0.7, false)"
        // })
        // .to($('#top'), {css: {autoAlpha: 0,}})
        // .fromTo($('#right'), 1, {
        //     height: vh(0),
        //     background: "rgb(23, 23, 23)",
        //     ease: "slow(0.7, 0.7, false)"
        // }, {
        //     height: vh(70),
        //     background: "rgb(23, 23, 23)"
        // }, '-=3.5')
        // .to($('#right'), 0, {css: {bottom: 0}}, '-=2.5')
        // .to($('#right'), 1, {
        //     height: 0,
        //     ease: "slow(0.7, 0.7, false)"
        // }, '-=2.5')
        // .to($('#right'), {css: {autoAlpha: 0,}})
        // .fromTo($('#bottom'), 1, {
        //     width: vw(0),
        //     background: "rgb(23, 23, 23)",
        //     ease: "slow(0.7, 0.7, false)"
        // }, {
        //     width: vw(75),
        //     background: "rgb(23, 23, 23)"
        // }, '-=3')
        // .to($('#bottom'), 0, {css: {left: 0}}, '-=2')
        // .to($('#bottom'), 1, {
        //     width: 0,
        //     ease: "slow(0.7, 0.7, false)"
        // },'-=2')
        // .to($('#bottom'), 0, {css: {autoAlpha: 0,}}, '-=1')
        // if (width >= 1400) {
        //     preloadAnim.to($('#preloader h1').children('span'), 1, { // Animate title
        //         top: 0,
        //         opacity: 1,
        //         ease: "power4.out",
        //         stagger: 0.1
        //     }, '-=3')
        //     .to($('#artworkName').children('span'), .1, { // Animate artwork name
        //         top: 0,
        //         opacity: 0.5,
        //         ease: "power4.out",
        //         stagger: 0.1
        //     }, '-=4')
        //     .to($('#artist').children('span'), .1, { // Animate artist
        //         top: 0,
        //         opacity: 0.5,
        //         ease: "power4.out",
        //         stagger: 0.1
        //     },'-=4');
        // }


        function hidePreloader() {
            // const hidePreAnim = gsap.timeline({onComplete: revealHomePage})
            // hidePreAnim.to($('#preloader'), 1, {
            //     height: 0,
            //     ease: 'power3.int'
            // })
            // .to([$('#leftHand'), $('#rightHand'), $('#preloader h1')] , 1, {
            //     y: -vh(80),
            //     ease: 'power3.int'
            // },'-=1');
        }

        function revealHomePage() {
            // gsap.timeline().set([$('header'), $('main'), $('footer')], {css: {'display':'block'}})
            // .to([$('header'), $('main'), $('footer')], 1, {
            //     autoAlpha: 1,
            //     ease: 'power1.intOut',
            //     delay: .7
            // });
        }

        // Temporary array for image links 
        const linkArray = ['./Pictures/Home/1.jpg', './Pictures/Home/7.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/7.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/7.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/7.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg', './Pictures/Home/6.jpg', './Pictures/Home/1.jpg', './Pictures/Home/2.jpg', './Pictures/Home/3.jpg', './Pictures/Home/4.jpg', './Pictures/Home/5.jpg', './Pictures/Home/6.jpg'];


        // Temporary array for poems
        let poems = [
            {
                "lines": [
                    "In pious times, ere priest-craft did begin,",
                    "Before polygamy was made a sin;",
                    "When man, on many, multipli'd his kind,",
                    "Ere one to one was cursedly confin'd:",
                    "When Nature prompted, and no Law deni'd",
                    "Promiscuous use of concubine and bride;",
                    "Then, Israel's monarch, after Heaven's own heart,",
                    "His vigorous warmth did variously impart",
                    "To wives and slaves: and, wide as his command,",
                    "Plots, true or false, are necessary things,",
                    "To raise up common-wealths, and ruin kings.",
                    "Salut au monde!",
                    "What cities the light or warmth penetrates, I penetrate those cities myself;",
                    "All islands to which birds wing their way, I wing my way myself.",
                    "",
                    "Toward all,",
                    "I raise high the perpendicular hand—I make the signal,",
                    "To remain after me in sight forever,",
                    "For all the haunts and homes of men."
                ]
            },
            {
                "lines": [
                    "My love is as a fever longing still,",
                    "For that which longer nurseth the disease;",
                    "Feeding on that which doth preserve the ill,",
                    "The uncertain sickly appetite to please.",
                    "My reason, the physician to my love,",
                    "Angry that his prescriptions are not kept,",
                    "Hath left me, and I desperate now approve",
                    "Desire is death, which physic did except.",
                    "Past cure I am, now Reason is past care,",
                    "And frantic-mad with evermore unrest;",
                    "My thoughts and my discourse as madmen's are,",
                    "At random from the truth vainly express'd;",
                    "  For I have sworn thee fair, and thought thee bright,",
                    "  Who art as black as hell, as dark as night."
                ]
            },
            {
                "lines": [
                    "IMMITATION OF ENGLISH POETS. WALLER",
                    "",
                    "'Come, gentle Air!' the Aeolian shepherd said,",
                    "While Procris panted in the secret shade;",
                    "'Come, gentle Air!' the fairer Delia cries,",
                    "While at her feet her swain expiring lies.",
                    "Lo! the glad gales o'er all her beauties stray,",
                    "Breathe on her lips, and in her bosom play!",
                    "In Delia's hand this toy is fatal found,",
                    "Nor could that fabled dart more surely wound:",
                    "Both gifts destructive to the givers prove;",
                    "Alike both lovers fall by those they love.",
                    "Yet guiltless too this bright destroyer lives,",
                    "At random wounds, nor knows the wound she gives:",
                    "She views the story with attentive eyes,",
                    "While Procris panted in the secret shade;",
                    "'Come, gentle Air!' the fairer Delia cries,",
                    "While at her feet her swain expiring lies.",
                    "Lo! the glad gales o'er all her beauties stray,",
                    "Breathe on her lips, and in her bosom play!",
                    "In Delia's hand this toy is fatal found,",
                    "Nor could that fabled dart more surely wound:",
                    "Both gifts destructive to the givers prove;",
                    "Alike both lovers fall by those they love.",
                    "Yet guiltless too this bright destroyer lives,",
                    "At random wounds, nor knows the wound she gives:",
                    "She views the story with attentive eyes,",
                    "And pities Procris, while her lover dies."
                ]
            },
            {
                "lines": [
                    "IMMITATION OF ENGLISH POETS. WALLER",
                    "",
                    "'Come, gentle Air!' the Aeolian shepherd said,",
                    "While Procris panted in the secret shade;",
                    "'Come, gentle Air!' the fairer Delia cries,",
                    "While at her feet her swain expiring lies.",
                    "Lo! the glad gales o'er all her beauties stray,",
                    "Breathe on her lips, and in her bosom play!",
                    "In Delia's hand this toy is fatal found,",
                    "Nor could that fabled dart more surely wound:",
                    "Both gifts destructive to the givers prove;",
                    "Alike both lovers fall by those they love.",
                    "Yet guiltless too this bright destroyer lives,",
                    "At random wounds, nor knows the wound she gives:",
                    "She views the story with attentive eyes,",
                    "And pities Procris, while her lover dies."
                ]
            },
            {
                "lines": [
                    "IMMITATION OF ENGLISH POETS. WALLER",
                    "",
                    "'Come, gentle Air!' the Aeolian shepherd said,",
                    "While Procris panted in the secret shade;",
                    "'Come, gentle Air!' the fairer Delia cries,",
                    "While at her feet her swain expiring lies.",
                    "Lo! the glad gales o'er all her beauties stray,",
                    "Breathe on her lips, and in her bosom play!",
                    "In Delia's hand this toy is fatal found,",
                    "Nor could that fabled dart more surely wound:",
                    "Both gifts destructive to the givers prove;",
                    "Alike both lovers fall by those they love.",
                    "Yet guiltless too this bright destroyer lives,",
                    "At random wounds, nor knows the wound she gives:",
                    "She views the story with attentive eyes,",
                    "And pities Procris, while her lover dies."
                ]
            },
            {
                "lines": [
                    "IMMITATION OF ENGLISH POETS. WALLER",
                    "",
                    "'Come, gentle Air!' the Aeolian shepherd said,",
                    "While Procris panted in the secret shade;",
                    "'Come, gentle Air!' the fairer Delia cries,",
                    "While at her feet her swain expiring lies.",
                    "Lo! the glad gales o'er all her beauties stray,",
                    "Breathe on her lips, and in her bosom play!",
                    "In Delia's hand this toy is fatal found,",
                    "Nor could that fabled dart more surely wound:",
                    "Both gifts destructive to the givers prove;",
                    "Alike both lovers fall by those they love.",
                    "Yet guiltless too this bright destroyer lives,",
                    "At random wounds, nor knows the wound she gives:",
                    "She views the story with attentive eyes,",
                    "And pities Procris, while her lover dies."
                ]
            },
            {
                "lines": [
                    "IN TWO DIALOGUES.",
                    "",
                    "DIALOGUE I.",
                    "",
                    "Sweet to the world, and grateful to the skies:",
                    "Truth guards the poet, sanctifies the line,",
                    "And makes immortal verse as mean as mine.",
                    "",
                    "Yes, the last pen for freedom let me draw,",
                    "When truth stands trembling on the edge of law;",
                    "Here, last of Britons! let your names be read;",
                    "Are none, none living? let me praise the dead,",
                    "And for that cause which made your fathers shine,",
                    "Fall by the votes of their degenerate line.",
                    "",
                    "_F_. Alas! alas! pray end what you began,",
                    "And write next winter more 'Essays on Man.'"
                ]
            }
        ]

        // Patterns specifications 
        const patterns = {
            'patternI': {
                'type':'A', 
                'amount': 6,
                'minHeight': [true, false, false, false, false, true],
                'poem': [false, true, false, false, false, true]
            }, 
            'patternII': {
                'type':'B', 
                'amount': 6,
                'minHeight': [true, false, false, false, false, true],
                'poem': [true, false, false, true, false, false]
            },
            'patternIII': {
                'type':'C', 
                'amount': 7,
                'minHeight': [false, false, true, true, true, false, false],
                'poem': [false, false, true, false, true, false]
            }
        };

        let totalArtworkCounter = 1;
        // Create rows by cycling the patterns dictionary 
        function createArtRows(amount) {
            let startPoint;
            while (amount > 0) {
                // Get the last pattern name or choose to start from the first one if none exist
                let lastPattern;
                try { 
                    lastPattern = $('main').children('.layoutSettings').last().attr('class').split(' ')[1];
                } catch {
                    lastPattern = 'patternIII';
                }
                
                // Decide startPoint to avoid repeating the same pattern
                switch (lastPattern) {
                    case 'patternI': startPoint = 1; break;
                    case 'patternII': startPoint = 2; break;
                    case 'patternIII': startPoint = 0; break;
                }
                let patternName = Object.keys(patterns)[startPoint];
                let curentPattern = patterns[patternName];
                let rowArtCounter = 0;
                $('main').append('<div class="layoutSettings ' + patternName + '">'); 
                let currentRow = $('.layoutSettings').last();

                // Generate the each row depending on the current patern
                while (rowArtCounter < curentPattern.amount) {
                    let container = currentRow.append('<div class="container ' + curentPattern.type + (rowArtCounter + 1).toString() + '">');  
                     $('.container').last().append('<div class="artwork" id="art-' + totalArtworkCounter.toString() + '">');
            
                     // Insert poem or artwork depending on the design
                    if (curentPattern.poem[rowArtCounter]) {
                        let currentPoem = poems[rowArtCounter].lines;
                        $('#art-' + totalArtworkCounter.toString()).append('<h1>Poem title</h1>');
                        $('#art-' + totalArtworkCounter.toString()).append('<div class="poemLines">')
                        currentPoem.forEach(function(line) {
                            $('.poemLines').append('<p>' + line + '</p>');
                        })
                    } else {
                        $('#art-' + totalArtworkCounter.toString()).css({
                            'background': 'url("' + linkArray[totalArtworkCounter - 1] + '")',
                            'background-size': 'cover'
                        })
                    }
                    
                    // Add min-height if required
                    if (curentPattern.minHeight[rowArtCounter]) {
                        $('#art-' + totalArtworkCounter.toString()).css('min-height', '61vh');
                    }
                    totalArtworkCounter++;
                    rowArtCounter++;
                    }
                amount--;
            }  
        }

        // Generate amount of rows
        createArtRows(30);

        // Animate if hover
        let borderAnim = gsap.timeline();
        let expansionAnim = gsap.timeline();
        let leaveArtAnim = gsap.timeline();
        $('.container').hover(function() {  
            if (!artIsClicked) {
                let divHover = $(this).append('<div class="containerHover">');
                $('.containerHover').append('<span class="topBorder">')
                                    .append('<span class="rightBorder">')
                                    .append('<span class="bottomBorder">')
                                    .append('<span class="leftBorder">');
    
                // Animate border
                // console.log(borderAnim);
                borderAnim.fromTo($('.leftBorder'), 0.5, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    height: $(this).height()
                })
                .fromTo($('.topBorder'), 0.5, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    width: $(this).width() * 0.99
                })
                .fromTo($('.rightBorder'), 0.5, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    height: $(this).height()
                }, '-=1')
                .fromTo($('.bottomBorder'), 0.5, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    width: $(this).width()
                }, '-=0.5')
                // Reverse border
                .to($('.leftBorder'), 0.5, {
                    y: -$(this).height() + 1,
                    height: 0
                }, '-=0.5')
                .to($('.leftBorder'), {
                    borderTop: 0,
                    borderBottom: 0
                }, '-=0.5')
                .to($('.leftBorder'), {
                    autoAlpha: 0
                })
                .to($('.topBorder'), 0.5, {
                    x: $(this).width() - 1,
                    width: 0,
                }, '-=.5')
                .to($('.topBorder'), {
                    borderLeft: 0,
                    borderRight: 0
                }, '-=0.5')
                .to($('.topBorder'), {
                    autoAlpha: 0
                }, '-=.0')
                .to($('.rightBorder'), 0.5, {
                    y: $(this).height() - 1,
                    height: 0
                }, '-=1.5')
                .to($('.rightBorder'), {
                    borderTop: 0,
                    borderBottom: 0
                }, '-=1.5')
                .to($('.rightBorder'), {
                    autoAlpha: 0
                }, '-=0.5')
                .to($('.bottomBorder'), 0.5, {
                    x: -$(this).width(),
                    width: 0,
                }, '-=1')
                .to($('.bottomBorder'), {
                    borderLeft: 0,
                    borderRight: 0
                }, '-=1')
                .to($('.bottomBorder'), {
                    autoAlpha: 0
                }, '-=.0');
            }
            
        }, function() {
            borderAnim.progress(1);
            $('.containerHover').remove();
        });
        
        // Animate if clicking
        let artIsClicked = false; 
        let restoreArt = false;
        $('.container').click(function(event) {
            // Prevent multiple clicks
            if (!artIsClicked) { 
                artIsClicked = true;
                // Fast forward border anim if still running
                if (borderAnim.isActive()) {
                    borderAnim.progress(1);
                    $('.containerHover').remove();
                }

                // Blur all the other containers
                $('.container').css({
                    'filter': 'blur(5px)',
                    'z-index': -100
                })
                $(this).css({
                    'filter': 'blur(0px)',
                    'z-index': 1
                })
                // Rescale the artwork by modifying the templetate-areas
                let currentHeight = $(this).height();  
                let currentWidth = $(this).width();

                // Update current values if window gets resized
                $(window).resize(() => {
                    currentHeight = $(this).height();
                    currentWidth = $(this).width();
                });
                
                // Set the container's style before animating
                setStyleProperties($(this));

    
                let resizeArtAnim = gsap.timeline({onComplete: animateExtension, onCompleteParams:[$(this)]});
                
                $(this).append('<div class="extension">');
                resizeArtAnim.fromTo($(this), 1, {
                    height: currentHeight,
                }, {
                    width: vw(46), 
                    height: vh(61),
                    ease: 'power1.inOut'
                })
                .fromTo($('.artwork', this), 1, {
                    height: currentHeight,
                    width: '100%'
                }, {
                    height: vh(61),
                    ease: 'power1.inOut'
                }, '-=1');
                
                
                function animateExtension(element) {
                    // Prevent animating the extension if leaveArtAnim is running
                    if (!leaveArtAnim.isActive()) {
                        // Add text to the extension 
                        $('.extension').append('<div class="artText">');
                        $('.artText').append('<p class="titleArt">');
                        // Remove the text below and get the actual title
                        $('.titleArt').text('I want everything we do to be beautiful.');
                        $('.artText').append('<p class="descriptionArt">');
                        // Remove the text below and get the actual description
                        $('.descriptionArt').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula odio, facilisis quis varius in, viverra vitae dui. Integer sagittis maximus lectus a condimentum. Nam faucibus, est sed volutpat mattis, dui magna tristique nulla, vel vestibulum justo metus nec erat. Nam pellentesque, lorem nec hendrerit tincidunt, tortor mi lacinia ante, ac commodo magna quam vestibulum sapien. Morbi ac pulvinar neque. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula odio, facilisis quis varius in, viverra vitae dui. Integer sagittis maximus lectus a condimentum. Nam faucibus, est sed volutpat mattis, dui magna tristique nulla, vel vestibulum justo metus nec erat. Nam pellentesque, lorem nec hendrerit tincidunt, tortor mi lacinia ante, ac commodo magna quam vestibulum sapien. Morbi ac pulvinar neque. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula odio, facilisis quis varius in, viverra vitae dui. Integer sagittis maximus lectus a condimentum. Nam faucibus, est sed volutpat mattis, dui magna tristique nulla, vel vestibulum justo metus nec erat. Nam pellentesque, lorem nec hendrerit tincidunt, tortor mi lacinia ante, ac commodo magna quam vestibulum sapien. Morbi ac pulvinar neque. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula odio, facilisis quis varius in, viverra vitae dui. Integer sagittis maximus lectus a condimentum. Nam faucibus, est sed volutpat mattis, dui magna tristique nulla, vel vestibulum justo metus nec erat. Nam pellentesque, lorem nec hendrerit tincidunt, tortor mi lacinia ante, ac commodo magna quam vestibulum sapien. Morbi ac pulvinar neque. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula odio, facilisis quis varius in, viverra vitae dui. Integer sagittis maximus lectus a condimentum. Nam faucibus, est sed volutpat mattis, dui magna tristique nulla, vel vestibulum justo metus nec erat. Nam pellentesque, lorem nec hendrerit tincidunt, tortor mi lacinia ante, ac commodo magna quam vestibulum sapien. Morbi ac pulvinar neque.');

                        $('.extension', element).css({
                            'width': element.width(),
                            'background-color': '#131313' 
                        })
        
                        // Add
                        $('.artwork', element).css('overflow-y','auto'); // auto
                         // Animate extension
                         expansionAnim.to($('.extension'), 1, {
                                height: vh(50),
                                y: vh(50),
                                ease: 'power1.inOut'
                            })
                            // Animate to size "cover" only if it's not a poem
                            if ($('.artwork', element).children('p').length == 0) {
                                expansionAnim.to($('.artwork', element), 0.5, {
                                    backgroundSize: 'cover',
                                    ease: 'power1.inOut',
                                }, '-=1')
                            } 
                            expansionAnim.to($('.titleArt'), 1, {
                                autoAlpha: 1,
                                display: 'block'
                            })
                            .to($('.descriptionArt'), 1, {
                                autoAlpha: 1,
                                display: 'block'
                            }, '-=1')
                         
                        
                    }
                    
                }
                
                // Restore artwork to its original position
                $(this).mouseleave(function() {
                    // Don't run sequence if the artwork is clicked or if the .mouseleave sequence is already running
                    if (artIsClicked && !restoreArt) {
                        restoreArt = true;
                        leaveArtAnim = gsap.timeline({onComplete : revertContainerChanges, onCompleteParams:[$(this)]});
                        

                        leaveArtAnim
                        .to($('.extension'), 0.5, {
                            height: 0,
                            y: 0,
                            ease: 'power1.inOut'
                        })
                        .to($('.titleArt'), 0.5, {
                            autoAlpha: 0
                        }, '-=.5')
                        .to($('.descriptionArt'), 0.5, {
                            autoAlpha: 0
                        }, '-=.5')
                        .call(() => $('.artText').remove())

                        // Stop extension from displaying as the artwork is resized
                        .to($('.extension'), 0, {
                            css: {
                                'height': 0,
                                'width': 0
                            }
                        })

                        // Resize artwork
                        // Add background size if painting, otherwise scroll poem to the top
                        if ($(this).find('.poemLines').length == 0) {
                            leaveArtAnim.to($('.artwork', this), 0, {backgroundSize: 'cover'})
                        } else {
                            leaveArtAnim.to($('.artwork', this), 0.5, {scrollTop: 0, ease: 'power1.inOut'})
                        }
                        leaveArtAnim.to($('.artwork', this), 1, { 
                            height: vh(30),
                            width: '100%',
                            ease: 'power1.inOut'
                        })
                        .to($(this), 1, { 
                            height: currentHeight,
                            width: currentWidth,
                            ease: 'power1.inOut'
                        }, '-=1')
                    }
                    
                });
                
                function revertContainerChanges(container) {
                    let currentBackground = $('.artwork', container).css('background');
                    let artworkPosition = $(container).attr('class').split(' ')[1];
                    let artworkNumber = artworkPosition.split('')[1]; 
                    let artworkType = artworkPosition.split('')[0];
                    let artworkMinHeight;
                    let isPoem;
                    
                    // Find the the position of the artwork and check if it needs a minimum height
                    $.each(patterns, function(key, value) {
                        if(value.type == artworkType) {
                            isPoem = value.poem[artworkNumber - 1];
                            artworkMinHeight = value.minHeight[artworkNumber - 1];
                        }
                    });

                    // Remove blur from the other containers
                    $('.container').css({
                        'filter': 'blur(0px)',
                        'z-index': 1
                    })
                    $('.extension').remove();

                    // Restore style properties
                    container.removeAttr('style');
                    $('.artwork', container).removeAttr('style');
                    $('.arwtork', container).css({
                        'height':'30vh',
                        'width':'100%',
                    });

                    if (!isPoem) {
                        $('#' + container.children().attr('id')).css({
                            'background': currentBackground,
                        })
                    }

                    // Assign minimum height if required
                    if (artworkMinHeight) {
                        $('#' + container.children().attr('id')).css({
                            'min-height': '61vh',
                        })
                    }
                    restoreArt = false;
                    artIsClicked = false;
                }
            }
            
        });

        // Set unique css properties for each artwork, making it position:absolute
        function setStyleProperties(container) {
            let artPosition = container.attr('class');
            let currentParent = container.parent();
            let currentWidth = container.width();
            let currentHeight = container.height();
            
            // ###################################################################################
            // TODO Create a 4th layout
            // TODO Create the design for the extension
            // ###################################################################################
            let containerTop = $(container).position().top;
            let containerLeft = $(container).position().left;
            let containerBottom = $(window).height() - $(container).position().top - currentHeight;
            let containerRight = $(window).width() - $(container).position().left - currentWidth;
            let properties = {
                'patternI': [
                    {
                        'top': containerTop,
                        'left': containerLeft
                    },
                    {
                        'top': containerTop,
                        'left': containerLeft
                    },
                    {
                        'bottom': containerBottom,
                        'left': containerLeft
                    },
                    {
                        'top': containerTop,
                        'right': containerRight
                    },
                    {
                        'bottom': containerBottom,
                        'right': containerRight
                    },
                    {
                        'top': containerTop,
                        'right': containerRight
                    }
                ],
                'patternII': [
                    {
                        'top': containerTop,
                        'left': containerLeft
                    },
                    {
                        'top': containerTop,
                        'left': containerLeft
                    },
                    {
                        'bottom': containerBottom,
                        'left': containerLeft
                    }, 
                    {
                        'top': containerTop,
                        'right': containerRight
                    },
                    {
                        'bottom': containerBottom,
                        'right': containerRight
                    },
                    {
                        'top': containerTop,
                        'right': containerRight
                    }
                ],
                'patternIII': [
                    {
                        'top': containerTop,
                        'left': containerLeft
                    },
                    {
                        'bottom': containerBottom,
                        'left': containerLeft
                    },
                    {
                        'top': containerTop,
                        'left': containerLeft
                    },
                    {
                        'top': containerTop,
                        'left': containerLeft
                    },
                    {
                        'top': containerTop,
                        'right': containerRight
                    },
                    {
                        'top': containerTop,
                        'right': containerRight
                    },
                    {
                        'bottom': containerBottom,
                        'right': containerRight
                    }
                ]
            }

            for (let config in properties) {
                if (config == currentParent.attr('class').split(' ')[1]) {
                    // Get configuration
                    let configurationNumber = parseInt(artPosition.slice(-1)) - 1;
                    let currentConfig = properties[config][configurationNumber];
                    // Apply the generic css properties
                    container.css({
                        'position':'absolute',
                        'width': currentWidth,
                        'height': currentHeight
                    })
                    // Apply the unique css properties
                    for (let property in currentConfig) {
                        container.css(property, currentConfig[property]);
                    }
                }
            }


        }


    }); // end page is loaded
}); // end of js
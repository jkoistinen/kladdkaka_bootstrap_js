function replaceIntegers(){
              var integers = document.querySelectorAll("span[data-defaultinteger]");
              //Provides the multiplier based on amount of kladdkaka! 0.5, 1, 1.5, 2
              var multiplier = document.getElementById("portioner");
              //console.log('multiplier',multiplier)
              var current_multiplier = multiplier.options[multiplier.selectedIndex].value;
              //console.log('current_multiplier',current_multiplier)
                for(var i=0; i<integers.length; i++)
                {
                  //console.log('SPANS:',integers[i].getElementsByTagName('span')[0])
                  integers[i].getElementsByTagName('span')[0].innerHTML = integers[i].getAttribute("data-defaultinteger") * current_multiplier;
                }
            }

function replaceFractions(){
              var fractions = document.querySelectorAll("span[data-defaultfraction]");
              //Provides the multiplier based on amount of kladdkaka! 0.5, 1, 1.5, 2
              var multiplier = document.getElementById("portioner");
              var current_multiplier = multiplier.options[multiplier.selectedIndex].value;
                for(var i=0; i<fractions.length; i++)
                {
                  //console.log(integers[i].getAttribute("data-defaultfraction"));
                  var x = new Fraction(fractions[i].getAttribute("data-defaultfraction"));
                  var y = new Fraction(current_multiplier);

                  //This returns results as 5/3 etc, need some more work before it can be activated for recipe calculations.
                  //var result = (new Fraction(x).mul(y)).toFraction();

                  //Temp solution for the above problem
                  var result = (new Fraction(x).mul(y));

                  //console.log(new Fraction(x).mul(y));
                  //console.log(result)
                  //BUG FOR FUTURE ME: this does not work as i want, it might sometime return for example "5/4" which is correct but "1 1/4" would be nicer.
                  //fractions[i].innerHTML = result;
                  console.log('X is:',x,'Y is:',y)
                  console.log('RESULT:',result)
                  fractions[i].getElementsByTagName('span')[0].innerHTML = result;
                }
            }
function setRating(clickedRating){

              //BUG FOR FUTURE ME: UPDATE: BUG SQUISHED! use "onmouseenter" instead of 'onmouseover' ---- you can not click the star itself, you have to click on the border. can probably be fixed by applying the same rules to child elements.
              //BUG FOR FUTURE ME: the star rating system needs some sort of margin/padding on the row, because when the button gets resized to a larger button there is a small 'jump' in the webpage, it does not look too nice.

              //Set the rating to static when a star is clicked, all stars 'lower' than selected star should be marked aswell
              //USES onclick event!

              var buttons = document.getElementsByClassName("btn btn-rating btn-sm");
              for(var i=0; i<=4; i++){
                // This will deactivate the JS on the rating system.
                buttons[i].removeAttribute("onclick");
                buttons[i].removeAttribute("onmouseenter");
                buttons[i].removeAttribute("onmouseleave");
              }
              //sets larger btn on selected rating
              buttons[clickedRating - 1].className = "btn btn-rating btn-lg";
            }

function slideRating(hoveredRating){
              //Mark the star as active, make nice gold color, all stars 'lower' than selected star should be marked aswell
              //USES onmouseover event!
              var buttons = document.getElementsByClassName("btn btn-rating btn-sm");

              if (hoveredRating == "clear") {
                  for(var i=0; i<=4; i++){
                    buttons[i].innerHTML = '<span class="glyphicon glyphicon-star-empty"></span>';
                  }
              }
              for(var i=0; i<hoveredRating; i++){
                //console.log(i);
                buttons[i].innerHTML = '<span class="glyphicon glyphicon-star" style="color:gold"></span>';
              }
            }

function crossOutFromShoppingList(hovering, itemNumberInList){
            //BUG FOR FUTURE ME: UPDATE: BUG SQUISHED! (different type of list solved the issue) styling/font is not preserved when hovering over item.
            //BUG FOR FUTURE ME: UPDATE: BUG SQUISHED! (different type of list solved the issue) location of close symbol is wrong. the shoppinglist needs somekind of box to surround it.
            if (hovering == "hover") {
              //do hover stuff! give it a cross upper right corner
              //console.log(item)
              console.log(itemNumberInList)
              var item = document.getElementsByClassName("glyph")[itemNumberInList].classList.add("glyphicon", "glyphicon-remove");
              //console.log(item);
            }
            if (hovering == "hoverout"){
              var item = document.getElementsByClassName("glyph")[itemNumberInList].classList.remove("glyphicon", "glyphicon-remove");
            }
            // :) hovering == click :D
            else if (hovering == "click") {
              //the item has been clicked, cross it out
              var item =  document.querySelectorAll("ul.grocerylist li")
              org_html = item[itemNumberInList].innerHTML;
              new_html = "<del>" + org_html + "</del>";
              item[itemNumberInList].innerHTML = new_html;
              //console.log(item[itemNumberInList])
            }
}

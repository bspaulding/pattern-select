var patternSelectKeyUpHandler = (function() {
  var makeHandler = function(source, shadow, initialShadow) {
    return function() {
      if ( source.value.length === 0 ) {
        return;
      }
      var newShadow = source.value;
      var remainingShadow = initialShadow.slice(newShadow.length);
      var nextCharacter = remainingShadow.slice(0,1);
      while ( !/[A-Za-z0-9]/.test(nextCharacter) ) {
        source.value += nextCharacter;
        newShadow += nextCharacter;
        remainingShadow = remainingShadow.slice(1);
        nextCharacter = remainingShadow.slice(0,1);
      }
      shadow.value = newShadow.concat(remainingShadow);
    };
  };

  // var source = document.querySelector('input[name=atimestamp]');
  // var shadow = document.querySelector('input[name=shadow]');
  // source.addEventListener('keyup', makeHandler(source, shadow, shadow.value));

  return makeHandler;
}());


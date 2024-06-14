$('input[type="submit"]').click( function () {
    var answer = retrieveInput();
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var splitAnswer = answer.text.split("");
    for (letter of splitAnswer) {
        var newIndex = splitAnswer.indexOf(letter);
        alert(newIndex);
    }

});

function retrieveInput() {
    var text = $('input[name="text"]').val();
    var key = $('input[name="key"]').val();
    var task = $("#function").val();
    return {
        text: text,
        key: key,
        task: task,
    };
}
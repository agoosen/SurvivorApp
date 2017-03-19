function confessional(scoreId) {
	var currentScore = $("#"+scoreId).html();
	currentScore++;
	$("#"+scoreId).html(currentScore);
}

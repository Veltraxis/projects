var board = null;
var game = new Chess();
// Simple AI: random move
function makeAIMove() {
    var moves = game.moves();
    if (moves.length === 0) return;
    var randomMove = moves[Math.floor(Math.random() * moves.length)];
    game.move(randomMove);
    board.position(game.fen());
}
// When player makes move
function onDrop(source, target) {
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });
    if (move === null) return 'snapback';
    // AI move after player
    setTimeout(makeAIMove, 500);
}
// Initialize board
board = Chessboard('board', {
    draggable: true,
    position: 'start',
    onDrop: onDrop
});

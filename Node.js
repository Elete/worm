function Node(x, y) {
	this.x = x;
	this.y = y;
	this.equals = function(x, y) {
		return this.x == x && this.y == y;
	};
}
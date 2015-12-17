var UP = 0;
var LEFT = 1;
var BOTTOM = 2;
var RIGHT = 3;
var dir = BOTTOM;
var score = 0;

function Worm() {


	//蛇身子
	this.nodes = new Array();
	this.nodes[this.nodes.length] = new Node(10, 10);
	this.nodes[this.nodes.length] = new Node(10, 11);
	this.nodes[this.nodes.length] = new Node(10, 12);
	this.nodes[this.nodes.length] = new Node(10, 13);
	this.nodes[this.nodes.length] = new Node(11, 13);
	this.nodes[this.nodes.length] = new Node(12, 13);
	this.nodes[this.nodes.length] = new Node(13, 13);
	this.nodes[this.nodes.length] = new Node(14, 13);
	this.nodes[this.nodes.length] = new Node(14, 14);
	this.nodes[this.nodes.length] = new Node(14, 15);
	this.nodes[this.nodes.length] = new Node(14, 16);
	this.nodes[this.nodes.length] = new Node(14, 17);

	//走一步
	this.step = function() {
		//计算出头节点
		var oldHead = this.nodes[0];
		var newHead;
		switch (dir) {
			case UP:
				newHead = new Node(oldHead.x, oldHead.y - 1);
				break;
			case LEFT:
				newHead = new Node(oldHead.x - 1, oldHead.y);
				break;
			case RIGHT:
				newHead = new Node(oldHead.x + 1, oldHead.y);
				break;
			case BOTTOM:
				newHead = new Node(oldHead.x, oldHead.y + 1);
				break;
		}
		//添加头节点
		this.nodes.unshift(newHead);
		if (!newHead.equals(this.food.x, this.food.y)) {
			//删除尾节点
			this.nodes.pop();
		} else {
			//重新随机一个食物
			this.food = this.randomFood();
			//分数加1
			score++;
		}

	};



	this.containsNode = function(i, j) {
		//判断ij是否是当前蛇身子的一部分
		for (k = 0; k < this.nodes.length; k++) {
			var node = this.nodes[k];
			if (node.equals(i, j)) {
				return true;
			}
		}
		return false;
	};
	this.randomFood = function() {
		var food;
		while (true) {
			var x = Math.floor(Math.random() * 50);
			var y = Math.floor(Math.random() * 50);
			//如果随机出来的xy不是蛇身子的一部分
			if (!this.containsNode(x, y)) {
				food = new Node(x, y);
				break;
			}
		}
		return food;
	};
	//蛇的食物
	this.food = this.randomFood();
}
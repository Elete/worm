function Stage() {
	this.width = 50;
	this.height = 50;
	this.worm = new Worm();
	//在stage中声明方法 print打印舞台的内容
	this.print = function(ctx) {
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				//判断ij是否是蛇身子的一部分
				if (this.worm.containsNode(i, j)) {
					ctx.fillStyle = "#ff0000";
					ctx.fillRect(i * 10, j * 10, 10, 10);
				} else if (this.worm.food.equals(i, j)) {
					ctx.fillStyle = "#0000ff";
					ctx.fillRect(i * 10, j * 10, 10, 10);
				} else {
					ctx.fillStyle = "#eeeeee";
					ctx.fillRect(i * 10, j * 10, 10, 10);
				}

			}

		}
		ctx.fillStyle = "#000000";
		ctx.font = "normal small-caps bold 15px arial";
		ctx.fillText("得分：" +
			score, 10, 30);
	};
}
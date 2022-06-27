var app = new Vue(
	{
		el: '#root',
		data:{
			promList: [
				
				{
					text: 'Andare a correre',
					done: false
				},
				
				{
					text: 'Andare a comprare il pane',
					done: false
				}
			]
		},
		methods: {
			completeCeck(completeIndex){
				this.promList[completeIndex].done = true;
				if (done = true){
					
				}
			},
		}
	}
);
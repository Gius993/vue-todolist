//m1 1
var app = new Vue(
	{
		el: '#root',
		data:{
			newListText:'',	
			promList: [
				{
					text: 'Andare a correre',
					done: false
				},
				{
					text: 'Andare a comprare il pane',
					done: false
				},
			]
		},
		methods: {
			completeCeck(completeIndex){
				this.promList[completeIndex].done = true;
			
			},
			//m3 se scrivo un testo nell'input si aggiunge alla lista 
			addNewText(){
				this.promList.push(
					{
						text: this.newListText,
						done: false
					}
				);
			},
			// m2 visualizzare una x se viene premuta il testo viene rimosso
			removeList(index){
				this.promList.splice(index, 1);			
			},
		}
		
	}	
	
);
	


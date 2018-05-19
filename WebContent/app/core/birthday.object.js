
class Birthday {
	constructor(date, name, relationship, greeting) {
		this.date = date;
		this.name = name;
		this.relationship = relationship;
		this.greeting = greeting;
		this.id = Birthday.counter++;
	}

	get age(){
		return moment().diff(this.date,"years");
	}

	get formattedDate(){
		return moment(this.date).format("YYYY/M/D");
	}
}

Birthday.counter=0;
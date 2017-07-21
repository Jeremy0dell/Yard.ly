const request = [
	{
		_id: '596ea14dfc15ae7f50000871',
		jobname: 'first job',
		userId: '5967cae93f9ebb1cc30f37a3',
		workerId: '596cfa1c6dbacc72e88b9509',
		accepted: false,
		services: {
			Mowing: true,
			'Tree Trimming': false,
			Edging: true,
			'Weed Eating': true,
			'Hedge Trimming': false,
			Fertilizing: true,
			Aerating: false,
			Mulching: true,
			Weeding: false,
			planting: true,
			'Grass Seeding': true,
		},
		equipment: {
			'Lawn Mower': true,
			'Weed Eater': false,
			'Mulch Truck': true,
			Edger: true,
			'Hedge Trimmer': true,
			Chainsaw: false,
			'Lawn Aerator': true,
			Seeder: false,
		},
		address: {
			zipcode: '78633',
			state: 'Texas',
			city: 'Georgetown',
			address: '124 Great Frontier dr',
		},
		time: '1:21 pm',
		hours: 4,
		rate: 20,
		date: 'August 21 2017',
		image:
			'https://www.glcnow.com/v/vspfiles/assets/images/lawn-care%20worker.jpg',
	},
	{
		jobname: 'second job',
		_id: '596ea14dfc13ae7f50000873',
		userId: '5967cae93f9ebb1cc30f37a3',
		workerId: '596cfa1c6dbacc72e88b9509',
		accepted: false,
		services: {
			Mowing: true,
			'Tree Trimming': false,
			Edging: true,
			'Weed Eating': true,
			'Hedge Trimming': false,
			Fertilizing: true,
			Aerating: false,
			Mulching: true,
			Weeding: false,
			planting: true,
			'Grass Seeding': true,
		},
		equipment: {
			'Lawn Mower': true,
			'Weed Eater': false,
			'Mulch Truck': true,
			Edger: true,
			'Hedge Trimmer': true,
			Chainsaw: false,
			'Lawn Aerator': true,
			Seeder: false,
		},
		address: {
			zipcode: '78605',
			state: 'Texas',
			city: 'Georgetown',
			address: '202 5th Street',
		},
		time: '1:03pm',
		hours: 6,
		rate: 15,
		date: 'August 21 2017',
		image:
			'https://www.glcnow.com/v/vspfiles/assets/images/lawn-care%20worker.jpg',
	},
	{
		jobname: 'Polarised mission-critical product',
		_id: '596ea14dfc13ae7f50000871',
		userId: '596e8aeffc13ae05d1000258',
		workerId: '596e8aeffc13ae05d1000259',
		accepted: false,
		services: {
			Mowing: false,
			'Tree Trimming': true,
			Edging: true,
			'Weed Eating': false,
			'Hedge Trimming': true,
			Fertilizing: false,
			Aerating: false,
			Mulching: true,
			Weeding: false,
			planting: false,
			'Grass Seeding': false,
		},
		time: '4:19 PM',
		hours: 3,
		rate: 30,
		equipment: {
			'Lawn Mower': true,
			'Weed Eater': true,
			'Mulch Truck': true,
			Edger: true,
			'Hedge Trimmer': true,
			Chainsaw: false,
			'Lawn Aerator': true,
			Seeder: false,
		},
		image: 'http://dummyimage.com/208x136.bmp/dddddd/000000',
		address: {
			address: '99786 Leroy Hill',
			city: 'Fresno',
			state: 'CA',
			zipcode: '93704',
		},
	},
	{
		jobname: 'Sharable object-oriented complexity',
		_id: '596ea14dfc13ae7f50000872',
		userId: '596e8aeffc13ae05d100025a',
		workerId: '596e8aeffc13ae05d100025b',
		accepted: true,
		services: {
			Mowing: false,
			'Tree Trimming': true,
			Edging: true,
			'Weed Eating': false,
			'Hedge Trimming': true,
			Fertilizing: false,
			Aerating: false,
			Mulching: true,
			Weeding: false,
			planting: false,
			'Grass Seeding': false,
		},
		equipment: false,
		time: '11:00 PM',
		hours: 3,
		rate: 12,
		address: {
			address: '37588 Bobwhite Terrace',
			city: 'Wichita',
			state: 'KS',
			zipcode: '67210',
		},
		image: 'http://dummyimage.com/195x227.png/dddddd/000000',
	},
	{
		jobname: 'Persistent local service-desk',
		_id: '596ea14dfc13ae7f5000087d',
		userId: '596e8aeffc13ae05d100025c',
		workerId: '596e8aeffc13ae05d100025d',
		accepted: true,
		services: {
			Mowing: false,
			'Tree Trimming': true,
			Edging: false,
			'Weed Eating': true,
			'Hedge Trimming': true,
			Fertilizing: true,
			Aerating: true,
			Mulching: false,
			Weeding: false,
			planting: true,
			'Grass Seeding': false,
		},
		equipment: {
			'Lawn Mower': true,
			'Weed Eater': true,
			'Mulch Truck': true,
			Edger: true,
			'Hedge Trimmer': false,
			Chainsaw: false,
			'Lawn Aerator': false,
			Seeder: false,
		},
		address: {
			address: '5126 Moose Alley',
			city: 'Farmington',
			state: 'MI',
			zipcode: '48335',
		},
		time: '9:37 PM',
		hours: 2,
		rate: 21,
		image: 'http://dummyimage.com/195x227.png/dddddd/000000',
	},
	{
		jobname: 'Object-based encompassing focus group',
		_id: '596ea14dfc13ae7f5000087b',
		userId: '596e8aeffc13ae05d100025e',
		workerId: '596e8aeffc13ae05d100025f',
		accepted: false,
		services: {
			Mowing: false,
			'Tree Trimming': true,
			Edging: false,
			'Weed Eating': true,
			'Hedge Trimming': true,
			Fertilizing: true,
			Aerating: true,
			Mulching: false,
			Weeding: false,
			planting: true,
			'Grass Seeding': false,
		},
		equipment: {
			'Lawn Mower': true,
			'Weed Eater': true,
			'Mulch Truck': true,
			Edger: true,
			'Hedge Trimmer': false,
			Chainsaw: false,
			'Lawn Aerator': false,
			Seeder: false,
		},
		time: "2:00 pm",
		hours: 3,
		rate: 7,
		address: {
			address: '4 Sommers Trail',
			city: 'Orange',
			state: 'CA',
			zipcode: '92668',
		},
	},
	{
		jobname: 'Visionary coherent implementation',
		_id: '596ea14dfc13ae7f5000087c',
		userId: '596e8aeffc13ae05d1000260',
		workerId: '596e8aeffc13ae05d1000261',
		accepted: false,
		services: {
			Mowing: true,
			'Tree Trimming': false,
			Edging: true,
			'Weed Eating': true,
			'Hedge Trimming': true,
			Fertilizing: true,
			Aerating: false,
			Mulching: false,
			Weeding: true,
			planting: false,
			'Grass Seeding': true,
		},
		equipment: {
			'Lawn Mower': true,
			'Weed Eater': true,
			'Mulch Truck': true,
			Edger: true,
			'Hedge Trimmer': false,
			Chainsaw: false,
			'Lawn Aerator': false,
			Seeder: false,
		},
		time: '9:09 AM',
		hours: 2,
		rate: 20,
		image: 'http://dummyimage.com/104x148.bmp/dddddd/000000',
		address: {
			address: '62 Hagan Way',
			city: 'Los Angeles',
			state: 'CA',
			zipcode: '90081',
		},
	},
]
export default request

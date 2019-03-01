const express = require('express');

const app = express();

app.get('/api/sets', (req, res) => {
	const sets = [
		{ id: 1, title: 'DJ Set', artist: 'SPFDJ', location: 'Berlin', genres: 'Acid' },
		{ id: 2, title: 'DJ Set', artist: 'PALMS TRAX', location: 'Amsterdam', genres: 'Disco' },
		{ id: 3, title: 'Live', artist: 'LUBOMYR MELNYK', location: 'London', genres: 'Modern Classical' }
	];
	res.json(sets);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

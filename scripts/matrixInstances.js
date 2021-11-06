const MATRIX_INSTANCES = ['14', '16'];

let instances = process.argv[2];

if (!instances) {
	// eslint-disable-next-line no-console
	console.log('Running both instances');
	instances = MATRIX_INSTANCES;
} else {
	return [instances];
}

// eslint-disable-next-line no-console
console.log(`::set-output name=instances::${JSON.stringify(instances)}`);

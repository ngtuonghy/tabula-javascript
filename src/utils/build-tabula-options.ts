const buildTabulaOptions = (config: any): string[] => {
	const options: string[] = [];

	if (config.area) {
		options.push("-a", config.area);
	}
	// if (config.batch) {
	// 	options.push("-b", config.batch);
	// }
	if (config.columns) {
		options.push("-c", config.columns);
	}
	if (config.debug) {
		options.push("-d");
	}
	if (config.format) {
		options.push("-f", config.format);
	}
	if (config.guess) {
		options.push("-g");
	}
	if (config.slient) {
		options.push("-i");
	}
	if (config.lattice) {
		options.push("-l");
	}
	if (config.noSpreadsheet) {
		options.push("-n");
	}
	if (config.outputFile) {
		options.push("-o", config.outputFile);
	}
	if (config.pages) {
		options.push("-p", config.pages);
	}
	if (config.spreadsheet) {
		options.push("-r");
	}
	if (config.password) {
		options.push("-s", config.password);
	}
	if (config.steam) {
		options.push("-t");
	}
	if (config.useLineReturns) {
		options.push("-u");
	}

	return options;
};

export { buildTabulaOptions };

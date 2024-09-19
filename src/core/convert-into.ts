import * as fs from "fs";
import { buildTabulaOptions } from "../utils/build-tabula-options";
import { tabulaCommand } from "../lib/cli";

export type TabulaConvertConfig = {
	area?: string[] | string;
	columns?: string;
	debug?: boolean;
	format?: "CSV" | "JSON" | "TSV";
	guess?: boolean;
	silent?: boolean;
	lattice?: boolean;
	noSpreadsheet?: boolean;
	outputFile?: string;
	pages?: string | "all";
	spreadsheet?: boolean;
	password?: string;
	stream?: boolean;
	useLineReturns?: boolean;
};

const convertInto = async (
	path: string,
	config: TabulaConvertConfig = {
		pages: "1",
		format: "CSV",
		outputFile: "foo.csv",
	},
): Promise<string> => {
	const options: string[] = buildTabulaOptions(config);

	if (!fs.existsSync(path)) {
		throw new Error(`PDF file not found at: ${path}`);
	} else {
		await tabulaCommand(path, options);
		return "Success";
	}
};

export { convertInto };

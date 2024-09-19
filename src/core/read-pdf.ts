import * as fs from "fs";
import { tabulaCommand } from "../lib/cli";
import { buildTabulaOptions } from "../utils/build-tabula-options";

export type TabulaReadConfig = {
	area?: string[] | string;
	columns?: string;
	debug?: boolean;
	format?: "CSV" | "JSON" | "TSV";
	guess?: boolean;
	silent?: boolean;
	lattice?: boolean;
	noSpreadsheet?: boolean;
	// outputFile?: string;
	pages?: string | "all";
	spreadsheet?: boolean;
	password?: string;
	stream?: boolean;
	useLineReturns?: boolean;
};

const readPdf = async (
	path: string,
	config: TabulaReadConfig = { pages: "all", format: "CSV" },
): Promise<string> => {
	const options: string[] = buildTabulaOptions(config);
	if (!fs.existsSync(path)) {
		throw new Error(`PDF file not found at: ${path}`);
	} else {
		// Chạy tabulaCommand với các tùy chọn đã chuẩn bị
		const result = await tabulaCommand(path, options);
		if (!result) {
			throw new Error("Failed to process PDF with Tabula.");
		}
		return result;
	}
};

export { readPdf };

import { spawn } from "child_process";
import * as path from "path";
const jarFilePath = "./tabula-1.0.5-jar-with-dependencies.jar";

const tabulaCommand = (
	file: string,
	commandArgs: string[],
): Promise<string> => {
	return new Promise((resolve, reject) => {
		const javaProcess = spawn("java", [
			"-jar",
			path.join(__dirname, jarFilePath),
			...commandArgs,
			file,
		]);

		let output = "";
		let errorOutput = "";

		javaProcess.stdout.on("data", (data: Buffer) => {
			output += data.toString();
		});

		javaProcess.stderr.on("data", (data: Buffer) => {
			errorOutput += data.toString();
		});

		javaProcess.on("close", (code: number) => {
			if (code === 0) {
				resolve(output);
			} else {
				reject(
					new Error(`Tabula command failed with code ${code}: ${errorOutput}`),
				);
			}
		});

		javaProcess.on("error", (err) => {
			reject(new Error(`Failed to start Tabula process: ${err.message}`));
		});
	});
};

export { tabulaCommand };

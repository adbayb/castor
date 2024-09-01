import { turbo } from "../helpers";
import type { CommandFactory } from "../types";

export const createTestCommand: CommandFactory = (program) => {
	program
		.command({
			name: "test",
			description: "Test the code execution",
		})
		.task({
			async handler() {
				await turbo("test");
			},
		});
};

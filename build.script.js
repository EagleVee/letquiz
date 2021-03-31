import npm from "npm";

function buildAction(params) {}

function runScript() {
  const args = process.argv.slice(2);
  const action = args[0];
  const params = convertArgsToObject(args.slice(1));
}

function convertArgsToObject(args) {
  const result = {};
  for (const arg of args) {
    if (arg.startsWith("--") && arg.includes("=")) {
      const trimmed = arg.substring(2, arg.length);
      const pair = trimmed.split("=");
      result[pair[0]] = pair[1];
    } else {
      result[arg] = true;
    }
  }
}

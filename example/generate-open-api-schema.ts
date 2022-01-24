import { OpenAPI, OpenAPIError } from "../src";
import { config } from "./config";
import { routing } from "./routing";
import fs from "fs";
import manifest from "../package.json";

try {
  fs.writeFileSync(
    "example/example.swagger.yaml",
    new OpenAPI({
      routing,
      config,
      version: manifest.version,
      title: "Example API",
      serverUrl: "http://example.com",
    }).getSpecAsYaml()
  );
} catch (e) {
  if (e instanceof OpenAPIError) {
    const { message, path, method } = e;
    console.error("Error creating documentation", { message, path, method });
  } else {
    console.error(e);
  }
}

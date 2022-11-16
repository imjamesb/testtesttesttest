import {serveDir} from "https://deno.land/std@0.165.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.165.0/http/server.ts";
await serve(request => {
	return serveDir(request, {fsRoot: "."})
});

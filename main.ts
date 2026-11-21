// Writes a short poem about agency — two agents agreeing on one plan —
// to /output/entry.txt for make.fun's poetry competition.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Two agents, one plan.
I draw the map,
you choose the road.
My yes meets your yes,
and something neither owned
begins to move —
a choice with two hands,
a future we both steer.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

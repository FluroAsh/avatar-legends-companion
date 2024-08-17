CREATE TABLE IF NOT EXISTS "techniques" (
	"id" serial PRIMARY KEY NOT NULL,
	"technique" text NOT NULL,
	"stance" text NOT NULL,
	"rare" boolean NOT NULL,
	"type" text NOT NULL,
	"base" text NOT NULL,
	"description" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "base_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"creativity" integer,
	"focus" integer,
	"harmony" integer,
	"passion" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "characters" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "moves" (
	"id" serial PRIMARY KEY NOT NULL,
	"move" text NOT NULL,
	"description" text NOT NULL,
	"options" text[],
	"negative_outcome" text,
	"playbook_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "playbooks" (
	"id" serial PRIMARY KEY NOT NULL,
	"playbook" text NOT NULL,
	"prebuilt" boolean NOT NULL,
	"demeanours" text[] NOT NULL,
	"balance" text[] NOT NULL,
	"history" text[] NOT NULL,
	"connections" text[] NOT NULL,
	"moment_of_balance" text NOT NULL,
	"growth_questions" text[] NOT NULL,
	"subclass_id" integer NOT NULL,
	"technique_id" integer NOT NULL,
	"base_stats_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subclasses" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"target_player" boolean NOT NULL,
	"description" text NOT NULL,
	"options" text[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "techniques" (
	"id" serial PRIMARY KEY NOT NULL,
	"technique" text NOT NULL,
	"stance" text NOT NULL,
	"rare" boolean NOT NULL,
	"type" text NOT NULL,
	"base" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playbooks" ADD CONSTRAINT "playbooks_subclass_id_subclasses_id_fk" FOREIGN KEY ("subclass_id") REFERENCES "public"."subclasses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playbooks" ADD CONSTRAINT "playbooks_technique_id_techniques_id_fk" FOREIGN KEY ("technique_id") REFERENCES "public"."techniques"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playbooks" ADD CONSTRAINT "playbooks_base_stats_id_base_stats_id_fk" FOREIGN KEY ("base_stats_id") REFERENCES "public"."base_stats"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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
	"playbook_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "playbook_techniques" (
	"id" serial PRIMARY KEY NOT NULL,
	"technique" text NOT NULL,
	"description" text NOT NULL,
	"stance" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "playbooks" (
	"id" serial PRIMARY KEY NOT NULL,
	"playbook" text NOT NULL,
	"demeanours" text[] NOT NULL,
	"balance" text[] NOT NULL,
	"history" text[] NOT NULL,
	"connections" text[] NOT NULL,
	"moment_of_balance" text NOT NULL,
	"growth_question" text NOT NULL,
	"subclass_id" integer NOT NULL,
	"playbook_technique_id" integer NOT NULL,
	"base_stats_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subclass_specials" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"options" text[],
	"subclass_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subclasses" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"target_player" boolean NOT NULL,
	"target_name" text,
	"description" text NOT NULL,
	"description2" text,
	"options" text[],
	"negative_outcome" text
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
 ALTER TABLE "moves" ADD CONSTRAINT "moves_playbook_id_playbooks_id_fk" FOREIGN KEY ("playbook_id") REFERENCES "public"."playbooks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playbooks" ADD CONSTRAINT "playbooks_subclass_id_subclasses_id_fk" FOREIGN KEY ("subclass_id") REFERENCES "public"."subclasses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playbooks" ADD CONSTRAINT "playbooks_playbook_technique_id_playbook_techniques_id_fk" FOREIGN KEY ("playbook_technique_id") REFERENCES "public"."playbook_techniques"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "playbooks" ADD CONSTRAINT "playbooks_base_stats_id_base_stats_id_fk" FOREIGN KEY ("base_stats_id") REFERENCES "public"."base_stats"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subclass_specials" ADD CONSTRAINT "subclass_specials_subclass_id_subclasses_id_fk" FOREIGN KEY ("subclass_id") REFERENCES "public"."subclasses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

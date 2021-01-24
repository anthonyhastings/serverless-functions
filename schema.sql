CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS shows;

CREATE TABLE shows (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	title text NOT NULL,
	description text NOT NULL,
	logo text NOT NULL,
	votes int4 NOT NULL DEFAULT 0,
	CONSTRAINT shows_pkey PRIMARY KEY (id)
);

INSERT INTO shows (id,title,description,logo) VALUES 
('c28d4dae-d147-4568-a15f-cc4b1b791cc7','The Book of Boba Fett','The series was revealed in a post-credits sequence following The Mandalorian’s season 2 finale, which saw Boba and Fennec Shand return to Jabba the Hutt’s palace on Tatooine.','/images/the_book_of_boba_fett.jpg')
,('a3218752-3c9f-452b-87bb-213ec83e5d3e','Ahsoka','Ahsoka will star Rosario Dawson as Ahsoka Tano and will take place within the timeline of The Mandalorian as it follows this beloved character in the live-action Star Wars realm.','/images/ahsoka.jpg')
,('5e48efa9-8cce-4c3b-9d3f-d4fa5f81a523','Rangers of the New Republic','This series is set within the timeline of The Mandalorian. No concrete details have been revealed.','/images/rangers_of_the_new_republic.jpg')
,('12dfab98-1d1e-4416-9a6b-523e2bef6745','Andor','In November 2018, it was announced that Lucasfilm was developing a Rogue One prequel series that would revolve around Diego Luna’s Cassian Andor, which would be a “rousing spy thriller”.','/images/andor.jpg')
;
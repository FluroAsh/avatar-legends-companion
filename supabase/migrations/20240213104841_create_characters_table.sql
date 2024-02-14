
create table characters (
  id uuid primary key default gen_random_uuid(),
  user_id varchar(255) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
# Local Development
### Starting the local Supabase SErver
```bash
supabase start
```

### Accessing the Supabase Local DB via CLI
```bash
psql 'postgresql://postgres:postgres@localhost:54322/postgres'
```

### Starting local Ngrok server to expose local Supabase server
```bash
ngrok http http://127.0.0.1:54321 
```
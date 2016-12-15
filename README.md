## Vizslameet
```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                          owners                                          │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│name         │varchar(255)             │not null default ''                               │
│age          │integer                  │not null default 0                                │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```
```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                          dogs                                            │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│name         │varchar(255)             │not null default ''                               │
│age          │integer                  │not null default 0                                │
│is_wirehaired│boolean                  │not null default false                            │
│is_trained   │boolean                  │not null default false                            │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```
```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                         owners_dogs                                             │
├────────────────┬─────────────────────────┬──────────────────────────────────────────────────────┤
│id              │serial                   │primary key                                           │
│owner_id        │integer                  │not null references owners(id) on delete cascade index│
|dog_id          │integer                  │not null references dogs(id) on delete cascade index  │
│created_at      │timestamp with time zone │not null default now()                                │
│updated_at      │timestamp with time zone │not null default now()                                │
└────────────────┴─────────────────────────┴──────────────────────────────────────────────────────┘
```

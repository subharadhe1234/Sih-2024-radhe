CREATE TABLE main_table (
    faculty_id VARCHAR(255),
    scholar_id VARCHAR(255),
    faculty_name VARCHAR(255),
    faculty_email VARCHAR(255),
    faculty_affiliation VARCHAR(255),
    faculty_interests TEXT,  -- Referencing interest_table
    faculty_journals TEXT,   -- Referencing articals_table
    thumbnail VARCHAR(255),
    co_author TEXT,          -- Self-reference to main_table
    cited_by TEXT,           -- Referencing cited_table
    apprisal_from TEXT,      -- Referencing apprisal_from_table
    events TEXT,             -- Referencing faculty_event_table
    projects TEXT            -- Referencing facultys_projects_table
);

CREATE TABLE facultys_projects_table (
    faculty_id VARCHAR(255),
    project_id VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    state VARCHAR(255),
    start_date DATE,
    end_date DATE,
    contributors TEXT,        -- Referencing main_table
    mentors TEXT,             -- Referencing main_table
    others TEXT
);


CREATE TABLE host_events_table (
    event_id VARCHAR(255),
    host_id VARCHAR(255),
    event_topic VARCHAR(255),
    registration_date_start DATE,
    registration_date_end DATE,
    event_start_date DATE,
    event_start_time TIME,
    event_end_date DATE,
    event_end_time TIME,
    event_place VARCHAR(255),
    event_address TEXT,
    other_info TEXT,
    event_add_mark TEXT,      -- Referencing faculty_event_table
    event_registered TEXT,    -- Referencing faculty_event_table
    event_participate TEXT,   -- Referencing faculty_event_table
    event_lecture VARCHAR(255)
);

CREATE TABLE apprisal_from_table (
    faculty_id VARCHAR(255),
    apprisal_id VARCHAR(255),
    title VARCHAR(255),
    status VARCHAR(255),
    current_position VARCHAR(255),
    history TEXT,
    apprisal_from_data TEXT
);

CREATE TABLE faculty_event_table (
    faculty_id VARCHAR(255),
    event_id VARCHAR(255),
    mark INT,
    registration VARCHAR(255),
    participate VARCHAR(255),
    event_lecture VARCHAR(255),
    event_pic VARCHAR(255)
);

CREATE TABLE articals_table (
    faculty_id VARCHAR(255),
    article_id VARCHAR(255),
    title TEXT,
    authors TEXT,             -- Referencing main_table
    publication VARCHAR(255),
    year INT,
    link VARCHAR(255),
    citation_id VARCHAR(255),
    cited_by TEXT,            -- Referencing cited_table
    article_link VARCHAR(255)
);

CREATE TABLE interest_table (
    faculty_id VARCHAR(255),
    title VARCHAR(255),
    same_interest TEXT,       -- Referencing main_table
    scholar_link VARCHAR(255)
);

CREATE TABLE cited_table (
    faculty_id VARCHAR(255),
    article_id VARCHAR(255),
    year_2011 INT,
    year_2012 INT,
    year_2013 INT,
    year_2014 INT,
    year_2015 INT,
    year_2016 INT,
    year_2017 INT,
    year_2018 INT,
    year_2019 INT,
    year_2020 INT,
    year_2021 INT,
    year_2022 INT,
    year_2023 INT,
    year_2024 INT
);

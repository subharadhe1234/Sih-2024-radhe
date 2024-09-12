# Radhe Radhe
## radhe krishna
**Work flow of this project**
[Workflow Link](https://app.eraser.io/workspace/LKltSKjDRi8RSipRUqs3)

**Site map of this project**
[Octopus Link](https://octopus.do/6sdxqb7vkmm)
**Design of this project**
[Figma Link](https://www.figma.com/design/DZGsTRO2rgCUjmpnyXdBfW/Appraise?node-id=0-1&t=S6XYemVJ5z9ZOe4L-1)


Here’s the **table format** of your SQL schema, where I show the columns, their data types, and any notes (like relationships between tables).

### 1. **main_table**
| Column                | Data Type    | Notes                                |
|-----------------------|--------------|--------------------------------------|
| faculty_id            | VARCHAR(255) | Primary key                          |
| scholar_id            | VARCHAR(255) |                                      |
| faculty_name          | VARCHAR(255) |                                      |
| faculty_email         | VARCHAR(255) |                                      |
| faculty_affiliation   | VARCHAR(255) |                                      |
| faculty_interests     | TEXT         | Refers to `interest_table`           |
| faculty_journals      | TEXT         | Refers to `articals_table`           |
| thumbnail             | VARCHAR(255) |                                      |
| co_author             | TEXT         | Self-reference to `main_table`       |
| cited_by              | TEXT         | Refers to `cited_table`              |
| apprisal_from         | TEXT         | Refers to `apprisal_from_table`      |
| events                | TEXT         | Refers to `faculty_event_table`      |
| projects              | TEXT         | Refers to `facultys_projects_table`  |

---

### 2. **facultys_projects_table**
| Column           | Data Type    | Notes                                |
|------------------|--------------|--------------------------------------|
| faculty_id       | VARCHAR(255) | Foreign key from `main_table`        |
| project_id       | VARCHAR(255) | Primary key                          |
| title            | VARCHAR(255) |                                      |
| description      | TEXT         |                                      |
| state            | VARCHAR(255) |                                      |
| start_date       | DATE         |                                      |
| end_date         | DATE         |                                      |
| contributors     | TEXT         | Refers to `main_table`               |
| mentors          | TEXT         | Refers to `main_table`               |
| others           | TEXT         |                                      |

---

### 3. **host_events_table**
| Column                   | Data Type    | Notes                                |
|--------------------------|--------------|--------------------------------------|
| event_id                 | VARCHAR(255) | Primary key                          |
| host_id                  | VARCHAR(255) |                                      |
| event_topic              | VARCHAR(255) |                                      |
| registration_date_start   | DATE         |                                      |
| registration_date_end     | DATE         |                                      |
| event_start_date          | DATE         |                                      |
| event_start_time          | TIME         |                                      |
| event_end_date            | DATE         |                                      |
| event_end_time            | TIME         |                                      |
| event_place               | VARCHAR(255) |                                      |
| event_address             | TEXT         |                                      |
| other_info                | TEXT         |                                      |
| event_add_mark            | TEXT         | Refers to `faculty_event_table`      |
| event_registered          | TEXT         | Refers to `faculty_event_table`      |
| event_participate         | TEXT         | Refers to `faculty_event_table`      |
| event_lecture             | VARCHAR(255) |                                      |

---

### 4. **apprisal_from_table**
| Column               | Data Type    | Notes                                |
|----------------------|--------------|--------------------------------------|
| faculty_id           | VARCHAR(255) | Foreign key from `main_table`        |
| apprisal_id          | VARCHAR(255) | Primary key                          |
| title                | VARCHAR(255) |                                      |
| status               | VARCHAR(255) |                                      |
| current_position      | VARCHAR(255) |                                      |
| history              | TEXT         |                                      |
| apprisal_from_data   | TEXT         |                                      |

---

### 5. **faculty_event_table**
| Column          | Data Type    | Notes                                |
|-----------------|--------------|--------------------------------------|
| faculty_id      | VARCHAR(255) | Foreign key from `main_table`        |
| event_id        | VARCHAR(255) | Primary key                          |
| mark            | INT          |                                      |
| registration    | VARCHAR(255) |                                      |
| participate     | VARCHAR(255) |                                      |
| event_lecture   | VARCHAR(255) |                                      |
| event_pic       | VARCHAR(255) |                                      |

---

### 6. **articals_table**
| Column          | Data Type    | Notes                                |
|-----------------|--------------|--------------------------------------|
| faculty_id      | VARCHAR(255) | Foreign key from `main_table`        |
| article_id      | VARCHAR(255) | Primary key                          |
| title           | TEXT         |                                      |
| authors         | TEXT         | Refers to `main_table`               |
| publication     | VARCHAR(255) |                                      |
| year            | INT          |                                      |
| link            | VARCHAR(255) |                                      |
| citation_id     | VARCHAR(255) |                                      |
| cited_by        | TEXT         | Refers to `cited_table`              |
| article_link    | VARCHAR(255) |                                      |

---

### 7. **interest_table**
| Column           | Data Type    | Notes                                |
|------------------|--------------|--------------------------------------|
| faculty_id       | VARCHAR(255) | Foreign key from `main_table`        |
| title            | VARCHAR(255) |                                      |
| same_interest    | TEXT         | Refers to `main_table`               |
| scholar_link     | VARCHAR(255) |                                      |

---

### 8. **cited_table**
| Column         | Data Type    | Notes                                |
|----------------|--------------|--------------------------------------|
| faculty_id     | VARCHAR(255) | Foreign key from `main_table`        |
| article_id     | VARCHAR(255) | Foreign key from `articals_table`    |
| year_2011      | INT          | Cited count for 2011                 |
| year_2012      | INT          | Cited count for 2012                 |
| year_2013      | INT          | Cited count for 2013                 |
| year_2014      | INT          | Cited count for 2014                 |
| year_2015      | INT          | Cited count for 2015                 |
| year_2016      | INT          | Cited count for 2016                 |
| year_2017      | INT          | Cited count for 2017                 |
| year_2018      | INT          | Cited count for 2018                 |
| year_2019      | INT          | Cited count for 2019                 |
| year_2020      | INT          | Cited count for 2020                 |
| year_2021      | INT          | Cited count for 2021                 |
| year_2022      | INT          | Cited count for 2022                 |
| year_2023      | INT          | Cited count for 2023                 |
| year_2024      | INT          | Cited count for 2024                 |

This structure reflects your data in a clear, normalized format. Let me know if you need further modifications!

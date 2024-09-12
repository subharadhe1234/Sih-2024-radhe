# Radhe Radhe
## radhe krishna
**Work flow of this project**
[Workflow Link](https://app.eraser.io/workspace/LKltSKjDRi8RSipRUqs3)

**Site map of this project**
[Octopus Link](https://octopus.do/6sdxqb7vkmm)
**Design of this project**
[Figma Link](https://www.figma.com/design/DZGsTRO2rgCUjmpnyXdBfW/Appraise?node-id=0-1&t=S6XYemVJ5z9ZOe4L-1)
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

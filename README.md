# Creating basic FE app

Having configured dev environment (described on `dev-enviroment-setup` branch), we can now create a basic TimeTracker FE app using:
- MaterialUI
- ReactForms
- Zod

## Functional requirements

Our app must allow users to:
- List of all tasks with total spent time (including filtering by open/closed tasks)
- Add new task
- Add time spent on specyfic task
- Close task

## User flow / UI requirements

1. User opens app and sees list of tasks.
  On top there is search input to filter tasks by task code, title or description content.
  Beside that there is switch open/close which allows to show only open or closed tasks.
  List of tasks contains:
    - task code
    - task title 
    - task description
    - total time spent on task
    - input for time spent on task (visible only for open tasks)
    - add time button (visible only for open tasks)
    - close button (visible only for open tasks)

2. User can filter tasks by title and status (open/closed - default is open)
3. User can add new task by clicking add button which shows form that contains task code, title and description. Submitting form adds task as open and is visible on top of the list. 
4. User can add time spent on task by entering time in minutes into input which is located next to the task. Submitting form adds time to task and updates total time spent on task.
5. User 
6. User can close task

## Technical requirements

- Store tasks State using Context API
- Use MaterialUI for styling
- Use ReactForms for form handling
- Use Zod for validation

## Implementation

Start development enviroment by running:
- `./startdev.sh` - to start docker dev container
- `npm i` - to install necessary packages

### Install necessary packages

**MaterialUI**
```bash
npm install @mui/material @emotion/react @emotion/styled
```

**ReactForms**
```bash
npm install @tanstack/react-query
```

**Zod**
```bash
npm install zod
```

---
**Please verify if you have same package versions installed as in `package.json` if you want to be sure that it'll work as described in this document**
---

### 
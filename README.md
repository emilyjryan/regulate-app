# Welcome to the *Regulate* App!

## Tech stack used:
* Typescript
* React
* Express.js
* Node.js
* Mongo

I haven't learned Typescript yet but I plan to spend some time learning the very basics in the first day or two of the project time and then implementing this framework for the app development. I specifically chose Typescript because it's a very popular technology used in the industry and I want to add it as a new tool in my software engineering toolbelt.

## Description

Having and maintaining a consistent routine and daily structure is vital to making a child with special needs such as autism feel safe, supported, and regulated. This is an app designed for these children to help them practice good habits that promote independence. Habits include managing a schedule and completing important daily tasks, developing healthy coping strategies for times of frustration or overstimulation, and identifying specific emotions in order to express themselves and their needs better.

3 main elements:

1. Daily schedule and to-do list
    - Tasks for either morning or evening

2) Calming environment creator
    - Choose between a set list of background and sound options

3) Emotion identifier
    - Given a visual list of emotions that they can pick one to describe their current emotion

## Wireframes of the app

![Getting Started](./pics/wireframes.png)

## User Flow and User Stories
* As a user, I want to create my own account with a login and password
* As a user, I want to create daily tasks under my overall "schedule" and check these tasks off as I go throughout the day
* As a user, I want to create a calming environment that I can access at times of stress
* As a user, I want to be able to quickly identify emotions that I don't have words for, using pictures

## Daily Sprints

Friday: Learning Typescript, finishing readme and RESTful routing charts and ERDs

Saturday: Getting basic functionality, create main structure of app

Sunday: Set up backend, connect backend with frontend

Monday: Work on new task creation functionality

Tuesday: Hopefully reach MVP, do basic styling

Wednesday: Stretch goals

Thursday: Stretch goals, final edits, and styling

## RESTful Routing

![Routing Chart](./pics/routing-chart.png)

## ERDs

![ERDs](./pics/ERDs.png)

## MVP
* Single user app
* User can add a new task for either morning or evening (dropdown option)
* User can see a list of their 'to-do' tasks with the ability to check off a task as completed
* User can delete a task
* Emotion finder page renders a short list of emotion pictures and user can click one picture which will be shown larger in a card next to the list

## Stretch goals
* Add date, day of week, and current time to home page
* Add day of the week capability to tasks and only render 
* User auth: users can create account with username and password and log in/out
* Calming environment functionality
* Ability to create a new environment element
* Animations instead of static images for background choices for environments
* Ability of user to input a url for video to render in calming environment
* Fun, colorful, calming styling
* Chat feature so users can keep in touch with each other through the app
* Links to other resources for families with kids with special needs

## Journal:

### Setup:
* I started by running `npx create-react-app regulate-app --template typescript` to get my basic app installed. 
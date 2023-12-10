# Task Manager

Task Manager is a simple website that allows users to manage their tasks efficiently.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Linked List Implementation](#linked-list-implementation)
- [Big O Notation](#big-o-notation)


## Overview

Task Manager is designed to help users keep track of their tasks and linkedlist datastructure is used instead of array to create tasks.


## Features

- **Add Task**: Users can add new tasks by entering the task title and clicking the "Add" button.
- **Toggle Completed**: Clicking on a task toggles its completion status, displaying a line-through effect for completed tasks.

## Getting Started

To get started with Task Manager, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Web browser (Chrome, Firefox, Safari, etc.)


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git

2.    Navigate to the project directory:

    ```bash

    cd task-manager

    Open index.html in your web browser.

### Usage

    - Open index.html in your web browser.
    - Enter a task title in the "Add Task" input field.
    - Click the "Add" button to add the task to the list.
    - Click on a task to mark it as completed (line-through effect). Click again to undo.

## Linked List Implementation

>The Task Manager uses a linked list data structure to store and manage tasks. Unlike traditional arrays, a linked list allows for dynamic memory allocation, efficient insertion and deletion of elements, and improved performance in certain scenarios.
>


### Why Linked List?

*  _Dynamic Size_: Linked lists do not have a fixed size, allowing for efficient memory usage as only the required amount of memory is allocated.

* _Insertion and Deletion_: Adding or removing tasks from the list is more efficient with a linked list compared to an array, especially in the middle of the list.


* _No Pre-allocation_: Linked lists do not require pre-allocation of memory, making them suitable for situations where the size of the task list may change frequently.

### Big O Notation

The time complexity (Big O) of the linked list implementation in Task Manager is as follows:

* _Insertion_: O(1) - Constant time complexity for adding a task to the end of the list.
* _Deletion_: O(n) - Linear time complexity for deleting a task from the middle of the list.
* _Search_: O(n) - Linear time complexity for searching for a task in the list.








